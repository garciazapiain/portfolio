import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { Button } from '@/components/Button'
import recurringGif from '../gifs/recurring.gif'
import czechCasesGif from '../gifs/czech-cases.gif'
import panoramapGif from '../gifs/panoramap.gif'
import todoGif from '../gifs/todo.gif'

const projects = [
    {
        name: 'Recurring Manager',
        description:
            'Simplifies the process of managing your recurring purchases.',
        link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
        logo: logoPlanetaria,
        repoLink: "https://github.com/garciazapiain/recurring-manager-fullstack-app",
        demoLink: "https://recurring-manager-app.herokuapp.com/",
        gif: recurringGif
    },
    {
        name: 'Czech Cases Practice',
        description:
            'Helps Czech language learners practice noun declension.',
        link: { href: '#', label: 'github.com' },
        logo: logoAnimaginary,
        repoLink: "https://github.com/garciazapiain/czech-cases-practice",
        demoLink: "https://garciazapiain.github.io/czech-cases-practice/",
        gif: czechCasesGif,
    },
    {
        name: 'Panoramap',
        description:
            'Take a glance at a panoramic view and get more info of what you see.',
        link: { href: '#', label: 'github.com' },
        logo: logoHelioStream,
        repoLink: "https://github.com/garciazapiain/panoramap",
        demoLink: "https://panoramap-pn0bg9ng9-garciazapiain.vercel.app/",
        gif: panoramapGif
    },
    {
        name: 'To-do app',
        description:
            'The classic :)',
        link: { href: '#', label: 'github.com' },
        logo: logoCosmos,
        repoLink: "https://github.com/garciazapiain/todo-app",
        demoLink: "https://garciazapiain.github.io/todo-app/",
        gif: todoGif
    },
]

export default function Projects() {
    return (
        <>
            <SimpleLayout
                title="Projects"
                intro="
        Below is a list of projects that I have worked on over the past few years, showcasing my skills and expertise in various areas."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-0 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
                >
                    {projects.map((project) => (
                        <Card className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" as="li" key={project.name}>
                            <h2 className="mt-6 text-4xl sm:text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                                {project.name}
                            </h2>
                            <div>
                                <Image src={project.gif} alt="My Gif" />
                            </div>
                            <Card.Description>{project.description}</Card.Description>
                            <div className='flex mt-2 w-full'>
                                {project.demoLink && <Button href={project.demoLink} target="a_blank" className='mr-2'>Demo</Button>}
                                <Button href={project.repoLink} target="a_blank">Repo</Button>
                            </div>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
