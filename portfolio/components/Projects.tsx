import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'JSI Career Portal',
    description:
      'Comprehensive recruitment and employee verification portal built for internship registration, OTP verification and role-based access.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: '#',
    live: 'https://career.jsisoftwaresolutions.in/',
    image: '/projects/jsi.png',
    accent: 'var(--neon-blue)',
    category: 'Full Stack',
    icon: '💼',
  },

  {
  id: 2,
  title: 'Employee E-Verification Portal',
  description:
    'Secure employee verification system with Employee ID/mobile search, validator details, OTP email verification, transaction tracking, audit logs and Cloudflare Turnstile protection.',
  tags: ['PHP', 'MySQL', 'SMTP', 'Bootstrap', 'Turnstile'],
  github: '#',
  live: 'https://career.jsisoftwaresolutions.in/employee_verification.php',
  image: '/projects/employee-verification.png',
  accent: 'var(--neon-purple)',
  category: 'Web App',
  icon: '🛡️',
},
  {
  id: 3,
  title: 'Abhyas Portal',
  description:
    'Multi-school ERP and examination management system with Admin, Teacher and Student roles, dashboard analytics, CSV import, secure authentication and school-wise data isolation.',
  tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  github: '#',
  live: 'ndbox-abhyas.jsisoftwaresolutions.in',
  image: '/projects/abhyas-portal.png',
  accent: 'var(--neon-cyan)',
  category: 'Real-Time',
  icon: '🏫',
},

  {
  id: 4,
  title: 'Digital Banking Dashboard',
  description:
    'Modern banking web application with secure login, live transaction history, printable statements, transfer flow, admin monitoring dashboard and account management system.',
  tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  github: '#',
  live: '#',
  image: '/projects/banking-dashboard.png',
  accent: 'var(--neon-blue)',
  category: 'Web App',
  icon: '🏦',
},

  {
  id: 5,
  title: 'Rock Paper Scissors Game',
  description:
    'Interactive browser game with score tracking, dynamic game logic and responsive UI using vanilla JavaScript.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  github: '#',
  live: '#',
  image: '/projects/rps-game.png',
  accent: 'var(--neon-blue)',
  category: 'Frontend',
  icon: '🎮',
},

{
  id: 6,
  title: 'JSI Career Portal Backend',
  description:
    'Backend system for career and internship portal with dynamic registration forms, applicant data handling, role-based workflows, validation logic and secure database management.',
  tags: ['PHP', 'MySQL', 'Backend', 'Form Validation', 'Database'],
  github: '#',
  live: 'https://career.jsisoftwaresolutions.in/',
  image: '/projects/jsi-career-backend.png',
  accent: 'var(--neon-cyan)',
  category: 'Backend',
  icon: '⚡',
},
]

const categories = [
  'All',
  'Full Stack',
  'Web App',
  'Real-Time',
  'Backend',
  'Frontend',
]

type Project = typeof projects[number]

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card group relative glass rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-2xl hover:scale-110 transition duration-500"
        />
      </div>

      {/* Icon */}
      <div className="absolute top-3 right-3 text-3xl">
        {project.icon}
      </div>

      {/* Category Badge */}
      <div
        className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold"
        style={{
          fontFamily: 'Fira Code',
          background: `${project.accent}20`,
          border: `1px solid ${project.accent}40`,
          color: project.accent,
        }}
      >
        {project.category}
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'rgba(3,7,18,0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <motion.a
          href={project.github}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <FiGithub size={14} />
          Code
        </motion.a>

        <motion.a
          href={project.live}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            background: `${project.accent}20`,
            border: `1px solid ${project.accent}50`,
            color: project.accent,
          }}
        >
          <FiEye size={14} />
          Live Demo
        </motion.a>
      </motion.div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium border border-white/10 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">What I&apos;ve Built</p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-sm border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/surajhaldar01"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
          >
            <FiGithub size={16} />
            View all projects on GitHub
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}