import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Developer | Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in PHP, MySQL, JavaScript, React and Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ParticlesBackground />
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
