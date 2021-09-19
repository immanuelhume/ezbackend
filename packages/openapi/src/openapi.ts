import { App, PluginScope } from "@ezbackend/core"
import { fastifySwagger } from 'fastify-swagger'
import chalk from 'chalk'
import { getPrimaryColName } from "@ezbackend/common"
import { RouteOptions } from "fastify"

//TODO: Allow configuration editing
async function addSwaggerPlugin(instance, opts) {
    instance.server.register(fastifySwagger, {
        prefix: "/docs",
        routePrefix: "/docs",
        exposeRoute: true,
        //TODO: Figure out why its logging so much
        logLevel: 'warn',
        openapi: {
            info: {
                title: "EzBackend API",
                description: "Automatically generated documentation for EzBackend",
                version: "1.0.0",
            },
            externalDocs: {
                url: "https://github.com/kapydev/ezbackend",
                description: "Find more info here",
            }
        },

    })
}

export class EzOpenAPI extends App {
    constructor() {
        super()

        this.setPostInit('Add Swagger Plugin', addSwaggerPlugin)

        this.setPostRun('Display OpenAPI URL', async (instance, opts) => {
            if (opts.port) {
                console.log(chalk.greenBright(`View your auto-generated Documentation at `) + chalk.yellow.underline(`http://localhost:${opts.port}/docs`))
            }
        })

        this.scope = PluginScope.PARENT
    }
}