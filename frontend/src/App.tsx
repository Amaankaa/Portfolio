import './App.css'
import { ThemeToggle } from './features/theme/ThemeToggle'

function App() {
  return (
    <main className="tw-min-h-screen tw-bg-bg tw-text-fg tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-p-8">
      <header className="tw-flex tw-gap-4 tw-items-center">
        <h1 className="tw-text-3xl tw-font-semibold">Portfolio Starter</h1>
        <ThemeToggle />
      </header>
      <p className="tw-text-muted tw-max-w-prose tw-text-center">
        Frontend is set up with Tailwind (prefixed classes) and Bootstrap. Toggle the theme and we’ll flesh out sections next.
      </p>
      <div className="tw-flex tw-gap-3">
        <a className="btn btn-primary" href="/" onClick={(e) => e.preventDefault()}>Primary CTA</a>
        <a className="btn btn-outline-primary" href="/" onClick={(e) => e.preventDefault()}>Secondary</a>
      </div>
    </main>
  )
}

export default App
