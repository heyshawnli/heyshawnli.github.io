const contactLinks = [
  {
    label: 'Email',
    value: 'shawnli.sde@gmail.com',
    href: 'mailto:shawnli.sde@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/heyshawnli',
    href: 'https://github.com/heyshawnli',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shawnli-sde',
    href: 'https://linkedin.com/in/shawnli-sde',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 437 435 9969',
    href: 'tel:+14374359969',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-3">LET'S WORK TOGETHER</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-zinc-300 text-lg leading-relaxed mb-4">
            I'm currently open to new backend or full stack engineering opportunities.
            Whether it's a full-time role, contract work, or just a conversation — my
            inbox is always open.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Based in Toronto, Canada. Permanent Resident — no sponsorship required.
            Available for remote or hybrid roles.
          </p>
        </div>

        <div className="space-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-4 p-4 card hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-200 group"
            >
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0">
                {link.icon}
              </span>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm text-zinc-200 group-hover:text-white transition-colors">
                  {link.value}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 ml-auto transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Shawn Li
        </p>
        <p className="font-mono text-xs">
          Built with React + Tailwind CSS
        </p>
      </div>
    </section>
  )
}
