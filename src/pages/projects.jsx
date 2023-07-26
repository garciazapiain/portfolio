import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import recurringGif from '../gifs/recurring.gif'
import czechCasesGif from '../gifs/czech-cases.gif'
import panoramapGif from '../gifs/panoramap.gif'
import nectarioGif from '../gifs/nectario.gif'
import todoGif from '../gifs/todo.gif'

const projects = [
    {
        name: 'Recurring Manager',
        description:
            'Simplifies the process of managing your recurring purchases.',
        link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
        repoLink: "https://github.com/garciazapiain/recurring-manager-fullstack-app",
        websiteLink: "https://recurring-manager-app.herokuapp.com/",
        gif: recurringGif
    },
    {
        name: 'Nectario',
        description:
            'Website for a local family owned restaurant.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/nectario",
        websiteLink: "https://www.nectario.mx/",
        gif: nectarioGif
    },
    {
        name: 'Czech Cases Practice',
        description:
            'Helps Czech language learners practice noun declension.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/czech-cases-practice",
        demoLink: "https://garciazapiain.github.io/czech-cases-practice/",
        gif: czechCasesGif,
    },
    {
        name: 'Panoramap',
        description:
            'Take a glance at a panoramic view and get more info of what you see.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/panoramap",
        demoLink: "https://panoramap-pn0bg9ng9-garciazapiain.vercel.app/",
        gif: panoramapGif
    },
    {
        name: 'To-do app',
        description:
            'The classic :)',
        link: { href: '#', label: 'github.com' },
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
        Below is a list of projects that I have worked on over the past year, showcasing my skills and expertise in various areas."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-0 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
                >
                    {projects.map((project) => (
                        <Card className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" as="li" key={project.name}>
                            <h2 className="my-6 text-2xl sm:text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                                {project.name}
                            </h2>
                            <div>
                                <Image src={project.gif} alt="My Gif" />
                            </div>
                            <Card.Description>{project.description}</Card.Description>
                            {project.demoLink &&
                                <div className='flex h-full items-end mt-2 w-full'>
                                    <Button href={project.demoLink} target="a_blank" className='mr-2 w-1/2'>Demo</Button>
                                    <Button href={project.repoLink} target="a_blank" className='w-1/2'>Repo</Button>
                                </div>
                            }
                            {project.websiteLink &&
                                <div className='flex h-full items-end mt-2 w-full'>
                                    {<Button href={project.websiteLink} target="a_blank" className='mr-2 w-1/2'>Website</Button>}
                                    <Button href={project.repoLink} target="a_blank" className='w-1/2'>Repo</Button>
                                </div>
                            }
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
