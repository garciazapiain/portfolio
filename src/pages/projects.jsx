import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import recurringGif from '../gifs/recurring.gif'
import czechCasesGif from '../gifs/czech-cases.gif'
import panoramapGif from '../gifs/panoramap.gif'
import nectarioGif from '../gifs/nectario.gif'
import todoGif from '../gifs/todo.gif'
import css from '@/images/photos/tech/css.png';
import cssModules from '@/images/photos/tech/css-modules.png';
import tailwind from '@/images/photos/tech/tailwind.png';
import react from '@/images/photos/tech/react.png';
import next from '@/images/photos/tech/next.png';
import django from '@/images/photos/tech/django.png';
import heroku from '@/images/photos/tech/heroku.png';

const projects = [
    {
        name: 'Recurring Manager',
        description:
            'Simplifies the process of managing your recurring purchases.',
        link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
        repoLink: "https://github.com/garciazapiain/recurring-manager-fullstack-app",
        websiteLink: "https://recurring-manager-app.herokuapp.com/",
        gif: recurringGif,
        techStack: [
            { name: 'React', logo: react },
            { name: 'CSS modules', logo: cssModules },
            { name: 'Django', logo: django },
            { name: 'Heroku', logo: heroku },
        ]
    },
    {
        name: 'Nectario',
        description:
            'Website for a local family owned restaurant.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/nectario",
        websiteLink: "https://nectario.mx/",
        gif: nectarioGif,
        techStack: [
            { name: 'Next', logo: next },
            { name: 'Tailwind', logo: tailwind },
        ]
    },
    {
        name: 'Czech Cases Practice',
        description:
            'Helps Czech language learners practice noun declension.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/czech-cases-practice",
        demoLink: "https://garciazapiain.github.io/czech-cases-practice/",
        gif: czechCasesGif,
        techStack: [
            { name: 'React', logo: react },
            { name: 'CSS', logo: css },
        ]
    },
    {
        name: 'Panoramap',
        description:
            'Take a glance at a panoramic view and get more info of what you see.',
        link: { href: '#', label: 'github.com' },
        repoLink: "https://github.com/garciazapiain/panoramap",
        demoLink: "https://panoramap-pn0bg9ng9-garciazapiain.vercel.app/",
        gif: panoramapGif,
        techStack: [
            { name: 'React', logo: react },
            { name: 'CSS', logo: css },
        ]
    }
    // {
    //     name: 'To-do app',
    //     description:
    //         'The classic :)',
    //     link: { href: '#', label: 'github.com' },
    //     repoLink: "https://github.com/garciazapiain/todo-app",
    //     demoLink: "https://garciazapiain.github.io/todo-app/",
    //     gif: todoGif,
    //     techStack: [
    //         { name: 'React', logo: react },
    //         { name: 'CSS', logo: css },
    //     ]
    // },
]

export default function Projects() {
    function TechStack({ techStack }) {
        return (
            <div className="flex gap-2 mt-2 ml-1 w-full">
                {techStack.map((item, index) => (
                    <div key={index} className="flex flex-col align-center items-center mx-1">
                        <Image className='w-10 sm:w-7' src={item.logo} alt={`Logo ${item.name}`} />
                        <div className="text-center h-full flex items-end">
                            <p className="text-l sm:text-base text-zinc-500 dark:text-zinc-400">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <>
            <SimpleLayout
                title="Projectss"
                intro="
        Below is a list of projects that I have worked on over the past year, showcasing my skills and expertise in various areas."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-0 sm:gap-y-16 lg:grid-cols-2"
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
                            <div className='md:flex justify-between'>
                                <Card.Description>Tech Stack: </Card.Description>
                                <TechStack techStack={project.techStack} />
                            </div>
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
