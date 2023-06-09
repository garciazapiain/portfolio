import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-32">
      <header className="max-w-2xl">
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-2xl sm:text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-6">{children}</div>
    </Container>
  )
}
