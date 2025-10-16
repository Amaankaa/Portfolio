import { ThemeToggle } from './features/theme/ThemeToggle'

export function Navbar() {
  return (
    <nav className="tw-fixed tw-top-0 tw-w-full tw-bg-bg/80 tw-backdrop-blur tw-border-b tw-border-muted tw-z-50">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <a className="tw-font-semibold tw-text-primary" href="#hero">Amanuel</a>
        <div className="d-flex gap-2 align-items-center">
          <a className="btn btn-link" href="#about">About</a>
          <a className="btn btn-link" href="#skills">Skills</a>
          <a className="btn btn-link" href="#experience">Experience</a>
          <a className="btn btn-link" href="#projects">Projects</a>
          <a className="btn btn-link" href="#blog">Blog</a>
          <a className="btn btn-link" href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

function Section({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="tw-min-h-[60vh] tw-py-24 tw-container tw-mx-auto">
      <h2 className="tw-text-3xl tw-font-bold tw-mb-4">{title}</h2>
      <div className="tw-text-muted">{children}</div>
    </section>
  )
}

export function Sections() {
  return (
    <div className="tw-pt-16">
      <Section id="hero" title="Hero">
        Quick intro and a strong CTA.
      </Section>
      <Section id="about" title="About">
        Who I am and what I care about.
      </Section>
      <Section id="skills" title="Skills">
        Technologies and proficiency levels.
      </Section>
      <Section id="experience" title="Experience">
        Work history, roles, and impact.
      </Section>
      <Section id="projects" title="Projects">
        Highlighted projects with links.
      </Section>
      <Section id="blog" title="Blog">
        Posts list (soon wired to backend).
      </Section>
      <Section id="testimonials" title="Testimonials">
        Optional: quotes from people you worked with.
      </Section>
      <Section id="contact" title="Contact">
        Contact form and social links.
      </Section>
      <Section id="resume" title="Resume">
        Download/view resume.
      </Section>
    </div>
  )
}
