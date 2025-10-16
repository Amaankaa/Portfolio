import { ThemeToggle } from './features/theme/ThemeToggle'

function App() {
  return (
    <div className="tw-min-h-screen tw-bg-bg tw-text-fg">
      <header className="tw-sticky tw-top-0 tw-bg-bg tw-border-b tw-border-muted tw-z-10">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <h1 className="tw-text-xl tw-font-semibold m-0">Amanuel — Portfolio</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container tw-py-10">
        <section className="tw-mb-10">
          <h2 className="tw-text-3xl tw-font-bold">Welcome</h2>
          <p className="tw-text-muted tw-mt-2">Scaffolding ready. Let’s build the sections next.</p>
          <div className="tw-mt-6">
            <a className="btn btn-primary" href="#">Primary CTA</a>
          </div>
        </section>
      </main>
      <footer className="tw-border-t tw-border-muted tw-py-6">
        <div className="container">© {new Date().getFullYear()} Amanuel</div>
      </footer>
    </div>
  )
}

export default App
