import Hero from "./Hero"
import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Footer from "./Footer"
import Education from "./Education"
import Experience from "./Experience"
import Certifications from "./Certifications"



export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1117]">
      <main>
      <Navbar />
        <Hero/>
        <Skills />
        <Projects />
        <Experience />
        <Certifications/>
        <Education />
        <About />
      <Footer />
      </main>
    </div>
  )
}
