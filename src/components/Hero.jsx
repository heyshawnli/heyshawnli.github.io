export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="font-mono text-cyan-400 text-sm tracking-[0.3em] mb-6 animate-fade-in">
          HELLO, WORLD
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
          Shawn Li
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
          <h2 className="text-lg md:text-xl font-medium gradient-text">
            Backend &amp; Full Stack Engineer
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in">
          I build high-performance distributed systems, microservice architectures, and
          AI-powered backends — engineered to scale.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
            <svg className="w-3.5 h-3.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Toronto, Canada
          </span>
          <span className="text-zinc-700">·</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </span>
          <span className="text-zinc-700">·</span>
          <span className="text-sm text-zinc-500">No sponsorship required</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-xl transition-all duration-200 text-sm"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl transition-all duration-200 text-sm"
          >
            My Experience
          </a>
          <a
            href="mailto:shawnli.sde@gmail.com"
            className="px-6 py-3 border border-zinc-700 hover:border-cyan-500/50 text-zinc-300 hover:text-cyan-400 rounded-xl transition-all duration-200 text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mt-10 animate-fade-in">
          <a
            href="https://github.com/heyshawnli"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/shawnli-sde"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href="mailto:shawnli.sde@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
