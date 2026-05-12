import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[rgba(0,240,255,0.08)] py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-9 h-9 rounded-lg border border-[rgba(0,240,255,0.4)] flex items-center justify-center bg-[rgba(0,240,255,0.05)] group-hover:glow-blue transition-all">
            <span className="font-display font-bold text-neon-blue text-sm" style={{ color: 'var(--neon-blue)', fontFamily: 'Orbitron' }}>
              DEV
            </span>
          </div>
          <span className="font-display font-bold text-white text-base hidden sm:block" style={{ fontFamily: 'Orbitron', letterSpacing: '0.1em' }}>
            PORT<span style={{ color: 'var(--neon-blue)' }}>FOLIO</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              onClick={() => setActive(link.label)}
              className={`relative font-body font-medium text-sm tracking-widest uppercase transition-all duration-300 group ${
                active === link.label ? 'text-[var(--neon-blue)]' : 'text-slate-400 hover:text-white'
              }`}
              style={{ fontFamily: 'Rajdhani' }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] transition-all duration-300 ${
                  active === link.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden md:flex items-center gap-2 btn-primary px-5 py-2 rounded-lg text-sm font-semibold"
          style={{ fontFamily: 'Rajdhani', letterSpacing: '0.05em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          Hire Me
        </motion.a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--neon-blue)] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[var(--neon-blue)] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[var(--neon-blue)] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[rgba(0,240,255,0.08)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setMobileOpen(false) }}
                  className="text-slate-300 hover:text-[var(--neon-blue)] font-medium tracking-widest uppercase text-sm transition-colors"
                  style={{ fontFamily: 'Rajdhani' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
