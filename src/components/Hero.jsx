import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const roles = ['Full Stack Developer', 'AI/ML Enthusiast', 'IoT Engineer', 'Problem Solver']

const statItems = [
    { value: '8.51', label: 'SGPA', suffix: '/10' },
    { value: '5+', label: 'Projects' },
    { value: '4+', label: 'Certifications' },
    { value: '3+', label: 'Hackathons' },
]

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const [roleIndex, setRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timeout

        if (!isDeleting && typedText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200)
        } else if (isDeleting && typedText === '') {
            setIsDeleting(false)
            setRoleIndex((i) => (i + 1) % roles.length)
        } else {
            const speed = isDeleting ? 40 : 70
            timeout = setTimeout(() => {
                setTypedText(isDeleting
                    ? currentRole.slice(0, typedText.length - 1)
                    : currentRole.slice(0, typedText.length + 1)
                )
            }, speed)
        }

        return () => clearTimeout(timeout)
    }, [typedText, isDeleting, roleIndex])

    useEffect(() => {
        const timer = setInterval(() => setShowCursor(p => !p), 530)
        return () => clearInterval(timer)
    }, [])

    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-bg">

            {/* Grid background */}
            <div className="absolute inset-0 hero-grid opacity-60" />

            {/* Subtle gradient blobs — pure CSS, no canvas */}
            <div className="absolute -top-40 -left-40 blob-indigo" />
            <div className="absolute top-1/3 -right-60 blob-blue" />

            {/* Thin top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

            <div className="relative z-10 container-xl section-padding w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Text content */}
                    <div>
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
                            <span className="text-xs font-mono text-slate-500 tracking-widest font-medium">AVAILABLE FOR OPPORTUNITIES</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.25 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.08] tracking-tight mb-4"
                        >
                            Vengata
                            <br />
                            <span className="gradient-text">Visva</span>
                        </motion.h1>

                        {/* Animated role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-500 mb-6 h-8"
                        >
                            <span className="text-indigo-500">▸</span>
                            <span className="text-slate-700">{typedText}</span>
                            <span className={`w-0.5 h-5 bg-indigo-500 inline-block rounded transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="text-base text-slate-500 leading-relaxed mb-10 max-w-lg"
                        >
                            B.E Computer Science student passionate about building <strong className="text-slate-700 font-semibold">AI-powered systems</strong> and <strong className="text-slate-700 font-semibold">IoT solutions</strong> that solve real-world problems. Turning complex ideas into elegant products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            <button onClick={() => scrollTo('#projects')} className="btn-primary">
                                View Projects
                                <HiArrowRight className="text-sm" />
                            </button>
                            <button onClick={() => scrollTo('#contact')} className="btn-outline">
                                <HiEnvelope className="text-base" />
                                Contact Me
                            </button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-5"
                        >
                            <a
                                href="https://github.com/vengatavisva"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                            >
                                <FaGithub className="text-lg" />
                                GitHub
                            </a>
                            <div className="w-px h-4 bg-slate-200" />
                            <a
                                href="https://www.linkedin.com/in/vengata-visva-a6930b299/"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                            >
                                <FaLinkedin className="text-lg" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT: Visual identity card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main card */}
                            <div className="card p-8 relative overflow-hidden">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />

                                <div className="flex items-center gap-4 mb-8">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 rounded-2xl shadow-lg shadow-indigo-500/25 overflow-hidden border border-slate-100 bg-white shrink-0">
                                        <img src="/profile.png" alt="Vengata Visva" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-display font-bold text-slate-900 text-lg">Vengata Visva</p>
                                        <p className="text-sm text-slate-500">Full Stack Developer</p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                            <span className="text-xs text-emerald-600 font-medium">Open to work</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {statItems.map((s, i) => (
                                        <motion.div
                                            key={s.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + i * 0.1 }}
                                            className="card-accent p-4 rounded-xl text-center"
                                        >
                                            <p className="text-2xl font-display font-bold text-slate-900">
                                                {s.value}
                                                {s.suffix && <span className="text-sm text-slate-400 font-normal">{s.suffix}</span>}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5 font-medium">{s.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech stack row */}
                                <div>
                                    <p className="text-xs text-slate-400 font-mono tracking-wider mb-3">CORE STACK</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Node.js', 'Python', 'Django', 'AI/ML', 'IoT'].map(tech => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent cards */}
                            <motion.div
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-5 -right-5 card p-3.5 flex items-center gap-2.5 shadow-lg"
                            >
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-base">🏆</div>
                                <div>
                                    <p className="text-xs font-bold text-slate-800">Hackathon Winner</p>
                                    <p className="text-[10px] text-slate-400">3+ Awards</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [6, -6, 6] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-4 -left-5 card p-3.5 flex items-center gap-2.5 shadow-lg"
                            >
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 text-base">💡</div>
                                <div>
                                    <p className="text-xs font-bold text-slate-800">5+ Projects</p>
                                    <p className="text-[10px] text-slate-400">Shipped to production</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-mono text-slate-400 tracking-[0.2em]">SCROLL</span>
                <div className="scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
