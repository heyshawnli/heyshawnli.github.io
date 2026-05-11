const experiences = [
  {
    company: 'Auraya Limited',
    role: 'Full Stack Engineer',
    period: 'June 2024 – March 2026',
    location: 'Remote — Switzerland',
    bullets: [
      'Led full-stack development of a highly concurrent e-commerce platform on GCP, architecting responsive frontends with React, Redux, and TailwindCSS to serve 60,000 monthly active users.',
      'Spearheaded backend architecture using Python and FastAPI microservices, engineering an advanced Redis caching layer that reduced database read-load by 60%.',
      'Designed a polyglot data model enforcing ACID compliance in PostgreSQL for secure checkout transactions while leveraging MongoDB to manage flexible, schema-less product catalogs.',
      'Architected data synchronization pipelines between primary databases and an Elasticsearch cluster, delivering low-latency full-text search that improved product discoverability by 40%.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'Redis', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'GCP'],
  },
  {
    company: 'Amazon',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 – March 2024',
    location: 'Luxembourg City, Luxembourg',
    bullets: [
      'Developed and maintained backend APIs using Java and Amazon Smithy to support shipment tracking and status update workflows in a large-scale transportation system.',
      'Contributed to an event-driven architecture using Kafka to process shipment status events, improving system decoupling and reliability.',
      'Optimized data access performance using Redis caching and PostgreSQL query tuning, reducing API latency for frequently accessed shipment data.',
      'Built CI/CD pipelines using Amazon Brazil to automate build, test, and deployment workflows.',
    ],
    tags: ['Java', 'Kafka', 'Redis', 'PostgreSQL', 'Amazon Smithy', 'CI/CD'],
  },
  {
    company: 'Benteng Tech',
    role: 'Backend Engineer',
    period: 'May 2021 – Sep 2022',
    location: 'Shanghai, China',
    bullets: [
      'Developed core backend services for an e-commerce platform using Java and Spring Boot, implementing a scalable MVC architecture for user authentication, inventory, and billing.',
      'Implemented normalized PostgreSQL schemas via Hibernate, enforcing strict relational constraints across the checkout flow to guarantee data integrity and zero-loss order processing.',
      'Integrated Redis for distributed session management and deployed applications to load-balanced AWS, enabling seamless horizontal scaling.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'Redis', 'AWS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-3">WHERE I'VE WORKED</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-zinc-700 to-transparent hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="md:pl-10 relative group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-cyan-500 bg-zinc-950 hidden md:flex items-center justify-center -translate-x-[5px] group-hover:bg-cyan-500/20 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="card p-6 md:p-8 hover:border-zinc-600 transition-all duration-300 glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-zinc-400 font-mono">{exp.period}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                      <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
