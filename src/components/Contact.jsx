const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/heyshawnli',
    href: 'https://github.com/heyshawnli',
    gradient: 'from-gray-700 to-gray-900',
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
    gradient: 'from-blue-600 to-blue-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-indigo-500 text-xs tracking-[0.3em] mb-3 font-medium">REACH OUT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Contact</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              I'm always happy to connect — whether it's about an interesting engineering challenge,
              a collaboration, or just to talk systems and architecture.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Based in Toronto, Canada. Permanent Resident — no sponsorship required.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 card card-hover group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors truncate">
                    {link.value}
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p className="font-mono">&copy; {new Date().getFullYear()} Shawn Li</p>
          <p className="font-mono text-xs">Built with React + Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
