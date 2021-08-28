import { BaseProvider } from './base'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import fastifyPassport from 'fastify-passport'
import { AnyStrategy } from 'fastify-passport/dist/strategies'
import { EzBackend } from '@ezbackend/common'
import { RouteOptions } from 'fastify'
import { DeserializeFunction, SerializeFunction } from 'fastify-passport/dist/Authenticator'

interface IGoogleProviderOptions {
    googleClientId: string
    googleClientSecret: string
    backendURL: string
    successRedirectURL: string
    failureRedirectURL: string
    //TODO: Strict typechecking for allowed google scopes
    scope: Array<string>
}

export class GoogleProvider extends BaseProvider {

    constructor(model) {
        const ezb = EzBackend.app()
        //TODO: Expand the namespace to avoid having to use ts-ignore`
        //@ts-ignore
        const providerOptions: IGoogleProviderOptions = ezb.config.auth['google']
        super('google', model, providerOptions)
    }

    addStrategy(): [name: string, Strategy: AnyStrategy] {

        const that = this

        return [this.providerName, new GoogleStrategy({
            clientID: this.providerOptions.googleClientId,
            clientSecret: this.providerOptions.googleClientSecret,
            //URGENT TODO: Single source of truth for making model names kebab case for website URL
            callbackURL: `${this.providerOptions.backendURL}/${this.getCallbackURLNoPreSlash()}`
        }, function (accessToken, refreshToken, profile, cb) {
            const model = new that.model()
            //@ts-ignore
            model[`${that.providerName}Id`] = profile.id
            //@ts-ignore
            model[`${that.providerName}Data`] = profile
            const ezb = EzBackend.app()
            ezb.orm.manager.save(model).then(
                () => {
                    cb(undefined, profile.id)
                }
            )
            //URGENT TODO: Make it such that I don't need to make my fields allow null, and so that it doesnt throw an error
        })]
    }

    getLoginRoute(): RouteOptions {
        const ezb = EzBackend.app()
        return {
            method: 'GET',
            url: `/${this.getRoutePrefixNoPrePostSlash()}/login`,
            preValidation: fastifyPassport.authenticate('google', { scope: this.providerOptions.scope }),
            handler: async function (req, res) {
                return { loggedIn: true }
            }
        }
    }

    getLogoutRoute(): RouteOptions {
        return {
            method: 'GET',
            url: `/${this.getRoutePrefixNoPrePostSlash()}/logout`,
            handler: async function (req, res) {
                req.logout()
                return { loggedIn: false }
            }
        }
    }

    getCallbackRoute(): RouteOptions {
        return {
            method: 'GET',
            url: `/${this.getCallbackURLNoPreSlash()}`,
            preValidation: fastifyPassport.authenticate('google', {
                scope: this.providerOptions.scope,
                successRedirect: this.providerOptions.successRedirectURL,
                failureRedirect: this.providerOptions.failureRedirectURL
            }),
            handler: async function (req, res) {
                //URGENT TODO: Figure about the security implications of this
                return { user: req.user }
            }
        }
    }

    registerUserSerializer(): SerializeFunction<unknown, unknown> {
        const that = this
        return async function serializer(id, req) {
            //@ts-ignore
            return `${that.providerName}-${id}`
        }
    }

    //URGENT TODO: When failed to deserialize user because of database reset, think about logging the user out
    registerUserDeserializer(): DeserializeFunction<any, any> {
        const that = this
        return async function deserializer(providerAndId: string, req) {
            if (providerAndId.startsWith(`${that.providerName}-`)) {
                //TODO: Consider the security implications of not checking that the replacement starts at 'google-'
                const id = providerAndId.replace(`${that.providerName}-`, '')
                const ezb = EzBackend.app()
                const userRepo = ezb.orm.getRepository(that.model)
                const fullUser = await userRepo.findOne({ [`${that.providerName}Id`]: id })
                return fullUser
            } else {
                throw 'pass'
            }

        }
    }
}