import Image from 'next/image'
import html from '@/images/photos/tech/html.png'
import css from '@/images/photos/tech/css.png'
import tailwind from '@/images/photos/tech/tailwind.png'
import javascript from '@/images/photos/tech/javascript.png'
import typescript from '@/images/photos/tech/typescript.png'
import react from '@/images/photos/tech/react.png'
import next from '@/images/photos/tech/next.png'
import cypress from '@/images/photos/tech/cypress.png'
import graphql from '@/images/photos/tech/graphql.png'

const skills = [
    {
        name: 'HTML',
        logo: html,
    },
    {
        name: 'CSS',
        logo: css,
    },
    {
        name: 'Tailwind',
        logo: tailwind,
    },
    {
        name: 'Javascript',
        logo: javascript,
    },
    {
        name: 'React JS',
        logo: react,
    },
    {
        name: 'Typescript',
        logo: typescript,
    },
    {
        name: 'Next JS',
        logo: next,
    },
    {
        name: 'GraphQL',
        logo: graphql,
    },
    {
        name: 'Cypress',
        logo: cypress,
    },
]

function SkillsIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M17.7 6.3a1.5 1.5 0 0 1 0 2.121l-4.242 4.243 2.121 2.122 4.243-4.243a1.5 1.5 0 0 1 0-2.121l-2.121-2.122ZM6.3 17.7a1.5 1.5 0 0 1 0-2.121l4.242-4.243-2.121-2.122L4.08 13.357a1.5 1.5 0 0 1 0 2.121l2.122 2.122ZM12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM12 17.25v2.25M12 4.5v2.25"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
            <path
                d="M20.25 12a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0ZM20.25 12v2.25M3.75 12v2.25"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>

    )
}

export default function Skills() {
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-2xl sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SkillsIcon className="h-10 w-10 sm:h-6 sm:w-6 flex-none" />
                <span className="ml-3">Skills</span>
            </h2>
            <p className="mt-3 mb-3 text-xl sm:text-base text-zinc-500 dark:text-zinc-400">These are the technologies I have the most experience with:</p>
            <ol className="mt-6 grid grid-cols-3 space-y-4">
                {skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex flex-col gap-4 justify-end">
                        <div className='flex flex-col align-center items-center'>
                            <Image src={skill.logo} alt="" className="h-12 w-12 sm:h-7 sm:w-7" unoptimized />
                            <p className="text-l sm:text-base text-zinc-500 dark:text-zinc-400">{skill.name}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
