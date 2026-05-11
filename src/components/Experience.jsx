const experiences = [
  {
    company: 'Auraya Limited',
    role: 'Full Stack Engineer',
    period: 'June 2024 – March 2026',
    location: 'Remote — Switzerland',
    color: 'from-indigo-500 to-violet-500',
    bullets: [
      'Led full-stack development of a highly concurrent e-commerce platform on GCP, architecting responsive frontends with React, Redux, and TailwindCSS to serve 60,000 monthly active users.',
      'Spearheaded backend architecture using Python and FastAPI microservices, engineering an advanced Redis caching layer that reduced database read-load by 60%.',
      'Designed a polyglot data model enforcing ACID compliance in PostgreSQL for secure checkout transactions while leveraging MongoDB for flexible, schema-less product catalogs.',
      'Architected data synchronization pipelines between primary databases and an Elasticsearch cluster, improving product discoverability by 40%.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'Redis', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'GCP'],
  },
  {
    company: 'Amazon',
    role: 'Software Engineer Intern',
    period: 'Sep 2023 – March 2024',
    location: 'Luxembourg City, Luxembourg',
    color: 'from-orange-400 to-amber-500',
    bullets: [
      'Developed and maintained backend APIs using Java and Amazon Smithy to support shipment tracking and status update workflows in a large-scale transportation system.',
      'Contributed to an event-driven architecture using Kafka to process shipment status events, improving system decoupling and reliability.',
      'Optimized data access using Redis caching and PostgreSQL query tuning, reducing API latency for frequently accessed shipment data.',
      'Built CI/CD pipelines using Amazon Brazil to automate build, test, and deployment workflows.',
    ],
    tags: ['Java', 'Kafka', 'Redis', 'PostgreSQL', 'Amazon Smithy', 'CI/CD'],
  },
  {
    company: 'Benteng Tech',
    role: 'Backend Engineer',
    period: 'May 2021 – Sep 2022',
    location: 'Shanghai, China',
    color: 'from-sky-400 to-cyan-500',
    bullets: [
      'Developed core backend services for an e-commerce platform using Java and Spring Boot, implementing a scalable MVC architecture for user authentication, inventory, and billing.',
      'Implemented normalized PostgreSQL schemas via Hibernate, enforcing strict relational constraints to guarantee data integrity and zero-loss order processing.',
      'Integrated Redis for distributed session management and deployed to load-balanced AWS, enabling seamless horizontal scaling.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'Redis', 'AWS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-indigo-500 text-xs tracking-[0.3em] mb-3 font-medium">WHERE I'VE WORKED</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="card card-hover p-7 md:p-9">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  {/* Gradient dot / company initial */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-sm font-mono text-gray-600 font-medium">{exp.period}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5 ml-14">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="text-indigo-400 mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 ml-14">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
