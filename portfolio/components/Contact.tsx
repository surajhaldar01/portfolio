import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const contactInfo = [
  { Icon: FiMail, label: 'Email', value: 'haldarsuraj769@gmail.com', href: 'mailto:yourmail@gmail.com', color: 'var(--neon-blue)' },
  { Icon: FiPhone, label: 'Phone', value: '+91 70789 56123', href: 'tel:+91XXXXXXXXXX', color: 'var(--neon-purple)' },
  { Icon: FiMapPin, label: 'Location', value: 'India', href: '#', color: 'var(--neon-cyan)' },
]

const socials = [
  { Icon: FiGithub, href: 'https://github.com/surajhaldar01', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/suraj-haldar-1110462b4/', label: 'LinkedIn' },
  { Icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-white text-sm bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
    focus:outline-none focus:border-[rgba(0,240,255,0.4)] focus:bg-[rgba(0,240,255,0.04)]
    transition-all duration-300 placeholder-slate-600`

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(0,240,255,0.03)] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(178,75,255,0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Orbitron', letterSpacing: '-0.01em' }}
          >
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent mb-4" />
          <p className="text-slate-500 max-w-md mx-auto" style={{ fontFamily: 'Rajdhani', fontSize: '1rem' }}>
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Availability badge */}
            <div className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(0,255,204,0.15)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-[var(--neon-cyan)] animate-pulse shadow-neon-cyan" />
                <span className="text-[var(--neon-cyan)] font-semibold text-sm" style={{ fontFamily: 'Fira Code' }}>
                  Available for work
                </span>
              </div>
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani' }}>
                Currently accepting new projects and freelance opportunities. Typical response time: within 24 hours.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 glass rounded-xl p-4 group"
                  style={{ border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}
                  whileHover={{ y: -2, borderColor: `${color}30` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5" style={{ fontFamily: 'Fira Code' }}>{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[var(--neon-blue)] transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-slate-600 text-xs mb-3 tracking-widest" style={{ fontFamily: 'Fira Code' }}>FIND ME ON</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-[var(--neon-blue)] transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
              style={{ border: '1px solid rgba(0,240,255,0.08)' }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-2 tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClass}
                    style={{ fontFamily: 'Rajdhani' }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className={inputClass}
                    style={{ fontFamily: 'Rajdhani' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2 tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry..."
                  required
                  className={inputClass}
                  style={{ fontFamily: 'Rajdhani' }}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2 tracking-widest uppercase" style={{ fontFamily: 'Fira Code' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={inputClass}
                  style={{ fontFamily: 'Rajdhani', resize: 'none' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-base relative overflow-hidden"
                style={{
                  fontFamily: 'Rajdhani',
                  letterSpacing: '0.08em',
                  background: sent
                    ? 'linear-gradient(135deg, rgba(0,255,204,0.2), rgba(0,255,204,0.1))'
                    : 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(178,75,255,0.15))',
                  border: sent
                    ? '1px solid rgba(0,255,204,0.4)'
                    : '1px solid rgba(0,240,255,0.4)',
                  color: sent ? 'var(--neon-cyan)' : 'var(--neon-blue)',
                }}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
