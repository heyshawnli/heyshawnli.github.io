const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    gradient: 'from-indigo-500 to-violet-500',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend & Frameworks',
    icon: '⚙',
    gradient: 'from-sky-500 to-cyan-500',
    skills: ['Spring Boot', 'FastAPI', 'Django', 'React.js'],
  },
  {
    category: 'AI & ML',
    icon: '◆',
    gradient: 'from-violet-500 to-fuchsia-500',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Pinecone', 'Cohere'],
  },
  {
    category: 'Databases',
    icon: '▦',
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Messaging & Streaming',
    icon: '⇌',
    gradient: 'from-orange-500 to-amber-500',
    skills: ['Apache Kafka', 'RabbitMQ', 'Distributed Systems', 'Event-Driven'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    gradient: 'from-blue-500 to-indigo-500',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-indigo-500 text-xs tracking-[0.3em] mb-3 font-medium">WHAT I WORK WITH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="card card-hover p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-colors cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
