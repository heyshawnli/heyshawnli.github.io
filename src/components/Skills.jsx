const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend & Frameworks',
    icon: '⚙',
    skills: ['Spring Boot', 'FastAPI', 'Django', 'React.js'],
  },
  {
    category: 'AI & ML',
    icon: '🧠',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Pinecone', 'Cohere'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Messaging & Streaming',
    icon: '📨',
    skills: ['Apache Kafka', 'RabbitMQ', 'Distributed Systems', 'Event-Driven'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-3">WHAT I WORK WITH</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="card p-6 hover:border-zinc-600 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-mono text-cyan-400 text-base">{group.icon}</span>
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
