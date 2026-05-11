const projects = [
  {
    name: 'TaskUp',
    tagline: 'AI-Powered Task Management Platform',
    description:
      'A containerized, asynchronous backend on GCP featuring a multi-agent LLM orchestration layer. Built a dynamic RAG pipeline that ingests completed tasks to generate personalized schedules based on user velocity.',
    highlights: [
      { icon: '⚡', label: 'Async FastAPI backend with JWT auth, eliminating multi-request concurrency race conditions' },
      { icon: '🤖', label: 'LangGraph agent with Pydantic-structured tool-calling for reliable LLM orchestration' },
      { icon: '🔍', label: 'RAG pipeline using Cohere embeddings + Pinecone vector DB for personalized scheduling' },
      { icon: '☁️', label: 'Containerized & deployed on GCP with PostgreSQL for persistent data storage' },
    ],
    tags: ['FastAPI', 'LangGraph', 'RAG', 'GCP', 'Pinecone', 'PostgreSQL', 'Docker', 'JWT'],
    liveUrl: 'https://www.gettaskup.com',
    githubUrl: null,
    status: 'live',
  },
  {
    name: 'Real-Time Data Aggregator',
    tagline: 'Live Dashboard with Backend Data Pipeline',
    description:
      'A production-grade data ingestion and aggregation system tracking real-time signals — cryptocurrency anomalies, Reddit sentiment, or seismic activity — served to a live-updating dashboard.',
    highlights: [
      { icon: '⚙️', label: 'Background workers & cron jobs continuously polling 3rd-party APIs for live data ingestion' },
      { icon: '📨', label: 'Kafka/RabbitMQ message queues decoupling ingestion workers from processing workers' },
      { icon: '🚀', label: 'Redis caching layer serving fast cached views — no DB hit on every page load' },
      { icon: '📊', label: 'React + Recharts frontend fed entirely from backend API endpoints' },
    ],
    tags: ['Python', 'Kafka', 'RabbitMQ', 'Redis', 'WebSocket', 'Docker', 'React', 'Recharts'],
    liveUrl: null,
    githubUrl: null,
    status: 'in-progress',
  },
]

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      In Development
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-3">WHAT I'VE BUILT</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card p-7 flex flex-col hover:border-zinc-600 transition-all duration-300 glow group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-0.5">{project.tagline}</p>
              </div>
              <StatusBadge status={project.status} />
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-5">{project.description}</p>

            {/* Architecture highlights */}
            <div className="space-y-2.5 mb-6 flex-1">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex gap-3 text-sm text-zinc-400">
                  <span className="shrink-0">{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-zinc-800 text-zinc-500 rounded-lg cursor-not-allowed border border-zinc-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
