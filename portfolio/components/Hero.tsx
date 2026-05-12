import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiPhp, SiMysql, SiJavascript, SiReact, SiNodedotjs, SiNextdotjs } from 'react-icons/si'
import { useState, useEffect } from 'react'


const roles = [
  'Scalable Web Applications',
  'Secure Backend Systems',
  'Modern UI Interfaces',
  'PHP & MySQL Projects',
  'React & Next.js Apps',
]

const floatingIcons = [
  { Icon: SiPhp, color: '#7b7fb5', top: '18%', left: '8%', delay: 0 },
  { Icon: SiMysql, color: '#00aff0', top: '70%', left: '6%', delay: 1.2 },
  { Icon: SiJavascript, color: '#f7df1e', top: '25%', right: '10%', delay: 0.6 },
  { Icon: SiReact, color: '#61dafb', top: '65%', right: '8%', delay: 1.8 },
  { Icon: SiNodedotjs, color: '#68a063', top: '45%', left: '5%', delay: 2.4 },
  { Icon: SiNextdotjs, color: '#ffffff', top: '40%', right: '6%', delay: 3 },
]

function TypeWriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
        }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span className="neon-text-blue">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const socialLinks = [
  { Icon: FiGithub, href: 'https://github.com/surajhaldar01', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/suraj-haldar-1110462b4/', label: 'LinkedIn' },
  { Icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
]

export default function Hero() {

useEffect(() => {
  const audio = new Audio('/music/intro.mp3')
  audio.volume = 0.5

  let hasPlayed = false
  let timer: ReturnType<typeof setTimeout>

  const startMusic = async () => {
    if (hasPlayed) return
    hasPlayed = true

    try {
      audio.currentTime = 0
      await audio.play()

      timer = setTimeout(() => {
        audio.pause()
        audio.currentTime = 0
      }, 40000)
    } catch (err) {
      console.log('Audio blocked:', err)
      hasPlayed = false
    }
  }

  const playOnHeroBottom = () => {
    const heroSection = document.getElementById('home')
    if (!heroSection) return

    const heroBottom = heroSection.getBoundingClientRect().bottom

    if (heroBottom <= window.innerHeight + 20) {
      startMusic()
    }
  }

  window.addEventListener('click', startMusic)
  window.addEventListener('touchstart', startMusic)
  window.addEventListener('keydown', startMusic)
  window.addEventListener('scroll', playOnHeroBottom)

  return () => {
    clearTimeout(timer)
    audio.pause()
    audio.currentTime = 0

    window.removeEventListener('click', startMusic)
    window.removeEventListener('touchstart', startMusic)
    window.removeEventListener('keydown', startMusic)
    window.removeEventListener('scroll', playOnHeroBottom)
  }
}, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(0,240,255,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(178,75,255,0.05)] blur-[100px] pointer-events-none" />

      {floatingIcons.map(({ Icon, color, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          className="absolute z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-xl glass border border-[rgba(255,255,255,0.06)]"
          style={{ top, left, right } as React.CSSProperties}
          animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={24} style={{ color }} />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-[rgba(0,240,255,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          <span className="section-label text-xs">Available for Freelance</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black mb-4 leading-none"
          style={{ fontFamily: 'Orbitron', fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
        >
          <span className="text-white">Full Stack</span>
          <br />
          <span className="gradient-text">Developer</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10"
          style={{ fontFamily: 'Rajdhani', fontWeight: 500, minHeight: '2rem' }}
        >
          <span className="text-slate-400">I build </span>
          <TypeWriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base"
            style={{
              fontFamily: 'Rajdhani', letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(178,75,255,0.1))',
              border: '1px solid rgba(0,240,255,0.4)', color: 'var(--neon-blue)',
            }}
          >
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base"
            style={{
              fontFamily: 'Rajdhani', letterSpacing: '0.08em',
              background: 'transparent', border: '1px solid rgba(178,75,255,0.4)', color: 'var(--neon-purple)',
            }}
          >
            <FiMail /> Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-[var(--neon-blue)] transition-colors"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[var(--neon-blue)] to-transparent"
        />
      </motion.div>
    </section>
  )
}
