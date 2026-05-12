import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'rgba(0,240,255,0.08)',
                border: '1px solid rgba(0,240,255,0.25)',
              }}
            >
              <span style={{ fontFamily: 'Orbitron', color: 'var(--neon-blue)', fontSize: '0.6rem', fontWeight: 800 }}>DEV</span>
            </div>
            <span className="text-slate-500 text-sm" style={{ fontFamily: 'Rajdhani' }}>
              Portfolio
            </span>
          </div>

          {/* Copyright */}
          <motion.p
            className="text-slate-600 text-sm flex items-center gap-1.5"
            style={{ fontFamily: 'Rajdhani' }}
          >
            Built with
            <FiHeart size={12} style={{ color: 'var(--neon-purple)' }} className="animate-pulse" />
            by <span style={{ color: 'var(--neon-blue)' }}>Suraj</span> · {year}
          </motion.p>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { Icon: FiGithub, href: 'https://github.com/surajhaldar01' },
              { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/suraj-haldar-1110462b4/' },
              { Icon: FiTwitter, href: 'https://github.com/yourusername' },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-slate-600 hover:text-[var(--neon-blue)] transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
