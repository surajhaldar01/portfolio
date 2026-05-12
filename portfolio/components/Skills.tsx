import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPhp, SiMysql, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiDocker,
  SiPostman, SiLinux, SiVuedotjs, SiRedis, SiTypescript, SiWordpress,
} from 'react-icons/si'
import { FiDatabase, FiCode, FiServer, FiLayout } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Backend',
    Icon: FiServer,
    accent: 'var(--neon-blue)',
    skills: [
      { name: 'PHP', Icon: SiPhp, color: '#7b7fb5', level: 95 },
      { name: 'MySQL', Icon: SiMysql, color: '#00aff0', level: 90 },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063', level: 82 },
      { name: 'Redis', Icon: SiRedis, color: '#dc382c', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    Icon: FiLayout,
    accent: 'var(--neon-purple)',
    skills: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e', level: 90 },
      { name: 'React', Icon: SiReact, color: '#61dafb', level: 85 },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', level: 80 },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6', level: 75 },
    ],
  },
  {
    title: 'Styling',
    Icon: FiCode,
    accent: 'var(--neon-cyan)',
    skills: [
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8', level: 92 },
      { name: 'CSS3', Icon: SiCss3, color: '#1572b6', level: 90 },
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26', level: 95 },
      { name: 'Vue.js', Icon: SiVuedotjs, color: '#42b883', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    Icon: FiDatabase,
    accent: 'var(--neon-blue)',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#f05032', level: 88 },
      { name: 'Docker', Icon: SiDocker, color: '#2496ed', level: 72 },
      { name: 'Linux', Icon: SiLinux, color: '#fcc624', level: 80 },
      { name: 'WordPress', Icon: SiWordpress, color: '#21759b', level: 85 },
    ],
  },
]

function SkillBar({ level, accent }: { level: number, accent: string }) {
  return (
    <div className="relative h-1 rounded-full bg-white/[0.05] overflow-hidden mt-1.5">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
      />
    </div>
  )
}

function SkillCard({ skill, accent }: { skill: typeof skillCategories[0]['skills'][0], accent: string }) {
  return (
    <motion.div
      className="skill-icon p-4 rounded-xl glass flex flex-col gap-2 group cursor-default"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      whileHover={{
        y: -4,
        borderColor: `${accent}40`,
        boxShadow: `0 0 20px ${accent}20`,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <skill.Icon size={22} style={{ color: skill.color }} />
          <span
            className="text-sm font-semibold text-white"
            style={{ fontFamily: 'Rajdhani', letterSpacing: '0.02em' }}
          >
            {skill.name}
          </span>
        </div>
        <span
          className="text-xs font-medium"
          style={{ fontFamily: 'Fira Code', color: accent, opacity: 0.8 }}
        >
          {skill.level}%
        </span>
      </div>
      <SkillBar level={skill.level} accent={accent} />
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgba(178,75,255,0.03)] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">What I Know</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Orbitron', letterSpacing: '-0.01em' }}
          >
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[var(--neon-purple)] to-transparent mb-4" />
          <p className="text-slate-500 max-w-lg mx-auto" style={{ fontFamily: 'Rajdhani', fontSize: '1rem' }}>
            Technologies I use to bring ideas to life — from server to screen
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass rounded-2xl p-6"
              style={{ border: `1px solid ${category.accent}15` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.05]">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${category.accent}15`, border: `1px solid ${category.accent}30` }}
                >
                  <category.Icon size={16} style={{ color: category.accent }} />
                </div>
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: 'Orbitron', letterSpacing: '0.02em' }}
                >
                  {category.title}
                </h3>
                <div className="ml-auto flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: category.accent, opacity: 1 - i * 0.3 }} />
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} accent={category.accent} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 glass rounded-2xl p-6"
          style={{ border: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-center text-slate-500 text-xs mb-5 tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>
            Also comfortable with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { Icon: SiPostman, name: 'Postman', color: '#ff6c37' },
              { Icon: SiGithub, name: 'GitHub', color: '#ffffff' },
              { Icon: SiWordpress, name: 'WordPress', color: '#21759b' },
            ].map(({ Icon, name, color }) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Icon size={16} style={{ color }} />
                <span className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani' }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
