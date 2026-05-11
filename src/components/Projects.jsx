// To add your own demo GIF:
// 1. Place the GIF file in the /public/demos/ folder (e.g. /public/demos/taskup-demo.gif)
// 2. Set the `gif` field below to the path (e.g. '/demos/taskup-demo.gif')

const projects = [
  {
    name: 'TaskUp',
    tagline: 'AI-Powered Task Management Platform',
    description:
      'A containerized async backend on GCP with a multi-agent LLM orchestration layer. Engineered a dynamic RAG pipeline that ingests completed tasks and generates personalized schedules based on user velocity.',
    highlights: [
      { icon: '⚡', label: 'Async FastAPI backend with JWT auth, eliminating multi-request concurrency race conditions' },
      { icon: '🤖', label: 'LangGraph agent with Pydantic-structured tool-calling for reliable LLM orchestration' },
      { icon: '🔍', label: 'RAG pipeline using Cohere embeddings + Pinecone vector DB for personalized scheduling' },
      { icon: '☁️', label: 'Containerized and deployed on GCP with PostgreSQL for persistent data storage' },
    ],
    tags: ['FastAPI', 'LangGraph', 'RAG', 'GCP', 'Pinecone', 'PostgreSQL', 'Docker', 'JWT'],
    liveUrl: 'https://www.gettaskup.com',
    githubUrl: null,
    gif: null, // e.g. '/demos/taskup-demo.gif'
    accentFrom: 'from-indigo-500',
    accentTo: 'to-violet-500',
    status: 'live',
  },
  {
    name: 'Real-Time Data Aggregator',
    tagline: 'Live Dashboard with Distributed Data Pipeline',
    description:
      'A production-grade ingestion and aggregation system tracking real-time signals — served to a live-updating dashboard via a WebSocket stream backed by Redis-cached views.',
    highlights: [
      { icon: '⚙️', label: 'Background workers & cron jobs continuously polling 3rd-party APIs for live data ingestion' },
      { icon: '📨', label: 'Kafka/RabbitMQ message queues decoupling ingestion workers from processing workers' },
      { icon: '🚀', label: 'Redis caching layer serving fast cached views — no DB hit on every page load' },
      { icon: '📊', label: 'React + Recharts frontend fed entirely from backend API endpoints' },
    ],
    tags: ['Python', 'Kafka', 'RabbitMQ', 'Redis', 'WebSocket', 'Docker', 'React', 'Recharts'],
    liveUrl: null,
    githubUrl: null,
    gif: null, // e.g. '/demos/dashboard-demo.gif'
    accentFrom: 'from-sky-500',
    accentTo: 'to-cyan-400',
    status: 'in-progress',
  },
]

function BrowserMockup({ gif, accentFrom, accentTo, name, liveUrl }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 mb-6 shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 flex-1 bg-white rounded border border-gray-200 h-5 text-xs text-gray-400 flex items-center px-2.5 font-mono overflow-hidden">
          {liveUrl ? liveUrl.replace('https://', '') : 'localhost:3000'}
        </div>
      </div>

      {/* Preview area */}
      {gif ? (
        <img src={gif} alt={`${name} demo`} className="w-full block" />
      ) : (
        <div className={`aspect-video flex flex-col items-center justify-center bg-gradient-to-br ${accentFrom} ${accentTo} bg-opacity-5 relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #EFF6FF 100%)' }}
        >
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <svg className="w-8 h-8 text-indigo-300 mb-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="text-xs text-indigo-300 font-mono relative z-10">Demo GIF coming soon</p>
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      In Development
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-indigo-500 text-xs tracking-[0.3em] mb-3 font-medium">WHAT I'VE BUILT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div key={project.name} className="card card-hover p-7 flex flex-col">

              <BrowserMockup
                gif={project.gif}
                accentFrom={project.accentFrom}
                accentTo={project.accentTo}
                name={project.name}
                liveUrl={project.liveUrl}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{project.tagline}</p>
                </div>
                <StatusBadge status={project.status} />
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.description}</p>

              {/* Architecture highlights */}
              <div className="space-y-2 mb-5 flex-1 bg-gray-50 rounded-xl p-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="shrink-0">{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2 border-t border-gray-50">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl transition-all duration-200 shadow-md shadow-indigo-100"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 bg-gray-100 text-gray-400 rounded-xl cursor-not-allowed">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Coming Soon
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
