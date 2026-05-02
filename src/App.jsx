import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="relative bg-white min-h-screen overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
