import React from 'react';
import ReactPlayer from 'react-player/youtube'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import toast, { Toaster } from 'react-hot-toast';
import TechStackImage from '../assets/tech-stack.svg'
import IconTreeDiagram from '../assets/icon-tree-diagram.svg'
import { CtaButton } from '../helper-components/cta-button';
import { MovingCode } from '../helper-components/moving-code'
import { Feature, MainFeature } from '../helper-components/feature';
import IconApiDocs from '../assets/icon-api-docs.svg'
import IconDatabase from '../assets/icon-database.svg'
import IconSecurity from '../assets/icon-security.svg'
import IconWorld from '../assets/icon-world.svg'
import IconTick from '../assets/icon-tick.svg'
import IconGithub from '../assets/icon-github.svg'
import IconYoutube from '../assets/icon-youtube.svg'
import IconProductHunt from '../assets/icon-producthunt.svg'
import IconDiscord from '../assets/icon-discord.svg'
import Delayed from '../helper-components/delayed';
import "tailwindcss/tailwind.css"

const YT_URL = 'https://youtu.be/kQRRckdEFr8'

const codeText1 = "const app = new EzBackend()"
const codeText2 = `const pets = new EzModel('Pets', {
  name: Type.VARCHAR,
  species: Type.VARCHAR,
  age: Type.INT
})`
const codeText3 = `app.addApp("pets", pets, { prefix: "pets" })`
const codeText4 = `app.start()`


const notify = () => toast('Copied!', { duration: 800, icon: '✔️' });

function Texty(props) {
  return (
    <span className='font-semibold' style={{ color: '#BD93F9' }}>{props.children}</span>
  )
}

function StepFeature(props) {
  return (
    <Delayed waitBeforeShow={props.delay}>
      <div className='fade-in-text'>
        <div className='flex justify-start gap-3 my-2'>
          <IconTick className='self-start w-6 h-6' />
          <div className='font-monts'>
            {props.children}
          </div>
        </div>
      </div>
    </Delayed>
  )
}

export default function Home() {

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Simplified Backend Setup">

      <div id="tailwind">
        <div className='grid place-items-center'>
          <div className='
            grid
            grid-flow-row

            w-9/12
            grid-cols-1
            my-8
            gap-16

            md:w-8/12
            md:grid-cols-2
            md:m-32
            md:my-14
            md:gap-20

            '>

            <div className='col-span-full'>
              <div className='grid grid-flow-row gap-7'>
                <div className='text-5xl font-bold font-mono sm:text-center'>
                  Build Your MVP Faster
                </div>
                <div className='text-xl font-mono sm:text-center'>
                  Simple to Setup. Fully Customizable
                </div>
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                  <div>
                    <CtaButton link="/docs/getting-started">
                      Get Started
                    </CtaButton>
                  </div>
                  <a href='https://codesandbox.io/s/ezb-demo-1-de5d3?file=/src/index.ts' target='_blank'>
                    <CtaButton>
                      Live Demo
                    </CtaButton>
                  </a>
                </div>
              </div>
            </div>


            {/* <div className='col-span-full'>
              <div className='fade-in-text'>
                <MainFeature
                  icon={<IconTreeDiagram className='w-14 h-14 mr-2' />}
                  title='Simplified Backend Development'
                >
                  A Node framework focused on <Texty>speed</Texty> and <Texty>ease of use</Texty> while keeping the ability to extend and customize
                </MainFeature>
              </div>
            </div> */}


            <div className='grid place-items-center lg:place-items-end self-center col-span-full lg:col-span-1'>
              <div className='bg-dracula rounded-lg w-full lg:h-320px' style={{ maxWidth: '500px' }}>
                <div className='rounded-lg text-sm pointer-events-none font-mono' style={{ padding: 32 }}>

                  <Delayed waitBeforeShow={0}>
                    <MovingCode text={codeText1} />
                  </Delayed>
                  <Delayed waitBeforeShow={3000}>
                    <MovingCode text={codeText2} />
                  </Delayed>
                  <Delayed waitBeforeShow={10000}>
                    <MovingCode text={codeText3} />
                  </Delayed>
                  <Delayed waitBeforeShow={14000}>
                    <MovingCode text={codeText4} />
                  </Delayed>

                </div>
              </div>
            </div>

            <div className='col-span-full lg:col-span-1 self-center lg:self-start w-full mt-5' >

              <StepFeature delay={1700}>
                Backend Created
              </StepFeature>
              <StepFeature delay={4000}>
                Database Connection Made
              </StepFeature>
              <StepFeature delay={4500}>
                <span className='text-purple'>Pets</span> Table Created in Database
              </StepFeature>
              <StepFeature delay={9000}>
                <span className='text-purple'>Name</span>, <span className='text-purple'>Species</span>, <span className='text-purple'>Age</span>, Columns Added in Table
              </StepFeature>
              <StepFeature delay={12900}>
                CRUD Endpoints Generated
              </StepFeature>
              <StepFeature delay={15000}>
                API Documentation Generated
              </StepFeature>
              <StepFeature delay={15300}>
                Running on PORT 8000
              </StepFeature>

            </div>

            <div className='overflow-x-auto col-span-full '>
              <div className='gap-6 grid grid-flow-col'>

                <Feature
                  icon={<IconWorld className='w-12 h-12' />}
                  title='Instant CRUD Generation'
                  info='Instant CRUD endpoints generation with full customization capabilities'
                />

                <Feature
                  icon={<IconApiDocs className='w-12 h-12' />}
                  title='Automated Documentation'
                  info='Automatically generate documentation for your APIs from the models you plan'
                />
                <Feature
                  icon={<IconSecurity className='w-12 h-12' />}
                  title='One-Line Authentication'
                  info='Add user sign ups and logins and permission layering with Google.'
                />

                <Feature
                  icon={<IconDatabase className='w-12 h-12' />}
                  title='Choice of Database'
                  info='Pick from multiple industry standards: Postgres, MySQL, MongoDB, & more'
                />

              </div>
            </div>

            <div className='col-span-full' >
              <div className='text-2xl md:text-2xl font-mono mb-12 font-bold text-center'>
                Under the Hood:
              </div>
              <div className='grid place-items-center' >
                <TechStackImage className='lg:w-700px lg:h-400px' />
              </div>
            </div>

            <div className='col-span-full'>
              <div className='text-2xl md:text-2xl font-mono mb-12 font-bold text-center'>
                Tutorial Demo
              </div>
              <div className='grid place-items-center md:hidden'>
                <ReactPlayer
                  width='100%'
                  height='240px'
                  url={YT_URL}
                />
              </div>
              <div className='place-items-center hidden md:grid'>
                <ReactPlayer
                  url={YT_URL}
                />
              </div>
            </div>

            <div className='col-span-full grid place-items-center'>
              <div className='font-monts font-bold text-xl mb-12'>
                Support Us
              </div>
              <div className='grid grid-flow-col gap-8 justify-center'>
                <a href='https://discord.gg/RwgdruFJHc' target='_blank'>
                  <IconDiscord className='transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href='https://github.com/kapydev/ezbackend' target='_blank'>
                  <IconGithub className='transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href='https://www.producthunt.com/upcoming/ezbackend-2' target='_blank'>
                  <IconProductHunt className='transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href='https://www.youtube.com/channel/UCXFyio7c5EWBGLknUJZjIzQ' target='_blank'>
                  <IconYoutube className='transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'/>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Toaster />


    </Layout >
  );
}

