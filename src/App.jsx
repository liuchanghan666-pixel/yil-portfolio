import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Skills from './components/Skills'
import Equipment from './components/Equipment'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Grainient from './components/Grainient'

export default function App() {
  // 平滑滚动（Lenis）。想退回原生滚动：把这段整个删掉即可。
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    window.__lenis = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.__lenis = null
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Grainient
        color1="#e1e1e1"
        color2="#000000"
        color3="#37a9d5"
        timeSpeed={0.25}
        colorBalance={0.0}
        warpStrength={1.15}
        warpFrequency={4.8}
        warpSpeed={2.0}
        warpAmplitude={49}
        blendAngle={1}
        blendSoftness={0.01}
        rotationAmount={500.0}
        noiseScale={2.0}
        grainAmount={0.03}
        grainScale={2.0}
        grainAnimated={false}
        contrast={1.5}
        gamma={1.0}
        saturation={1.0}
        centerX={0.03}
        centerY={0.0}
        zoom={0.9}
      />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Works />
        <About />
        <Skills />
        <Equipment />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
