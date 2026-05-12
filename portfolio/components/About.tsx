import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiCode, FiDatabase, FiServer } from 'react-icons/fi'

const stats = [
  { value: '1+', label: 'Years Experience', color: 'var(--neon-blue)' },
  { value: '10+', label: 'Projects Completed', color: 'var(--neon-purple)' },
  { value: '5+', label: 'Real Projects', color: 'var(--neon-cyan)' },
  { value: '100%', label: 'Dedication', color: 'var(--neon-blue)' },
]

const floatingBadges = [
  { Icon: FiCode, label: 'Full Stack', top: '5%', right: '-10%', color: 'var(--neon-blue)', delay: 0 },
  { Icon: FiDatabase, label: 'Database', bottom: '10%', left: '-12%', color: 'var(--neon-purple)', delay: 1 },
  { Icon: FiServer, label: 'API Dev', top: '50%', right: '-14%', color: 'var(--neon-cyan)', delay: 2 },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(178,75,255,0.04)] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Who I Am</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Orbitron', letterSpacing: '-0.01em' }}
          >
            About <span className="gradient-text-blue-purple">Me</span>
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0deg, var(--neon-blue) 60deg, transparent 120deg, var(--neon-purple) 180deg, transparent 240deg, var(--neon-cyan) 300deg, transparent 360deg)',
                  filter: 'blur(1px)',
                  margin: '-4px',
                  borderRadius: '50%',
                }}
              />

              {/* Photo container */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(0,240,255,0.2)',
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(178,75,255,0.1))',
                }}
              >
                <img
                  src="/images/myphoto.png"
                  alt="Profile photo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              {floatingBadges.map(({ Icon, label, top, bottom, left, right, color, delay }) => (
                <motion.div
                  key={label}
                  className="absolute glass rounded-xl px-3 py-2 flex items-center gap-2"
                  style={{ top, bottom, left, right, border: `1px solid ${color}30` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon size={14} style={{ color }} />
                  <span className="text-xs font-semibold text-white" style={{ fontFamily: 'Fira Code' }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-5"
              style={{ fontFamily: 'Orbitron', letterSpacing: '-0.01em' }}
            >
              Hi, I&apos;m <span style={{ color: 'var(--neon-blue)' }}>Suraj</span>
            </h3>

            <div
              className="text-slate-400 text-base leading-relaxed mb-6 space-y-3"
              style={{ fontFamily: 'Rajdhani', fontSize: '1.05rem' }}
            >
              <p>
                I am a Full Stack Developer specializing in <span style={{ color: 'var(--neon-blue)' }}>PHP</span>, <span style={{ color: 'var(--neon-cyan)' }}>MySQL</span>, <span style={{ color: 'var(--neon-purple)' }}>React</span> and <span style={{ color: 'var(--neon-blue)' }}>Next.js</span>, <span style={{ color: 'var(--neon-cyan)' }}> JavaScript</span> .
                 I build fast, secure and scalable web applications with clean UI/UX.
              </p>
              <p>
                I have worked on real-world projects like authentication systems,
                employee verification portals, admin dashboards and database-driven web applications.
              </p>
              <p>
                My focus is simple user experience, clean code, performance, security and reliable backend logic.
              </p>
            </div>

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 btn-primary px-6 py-3 rounded-xl font-semibold mb-10"
              style={{ fontFamily: 'Rajdhani', letterSpacing: '0.06em' }}
            >
              <FiDownload size={16} />
              Download CV
            </motion.a>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4"
                  style={{ borderColor: `${color}20` }}
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{ fontFamily: 'Orbitron', color }}
                  >
                    {value}
                  </div>
                  <div className="text-slate-500 text-sm" style={{ fontFamily: 'Rajdhani' }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
