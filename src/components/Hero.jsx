import React, { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const HeroScene = lazy(() => import('./canvas/StarField'))

const roles = ['Full Stack Developer', 'AI/ML Enthusiast', 'IoT Engineer', 'Problem Solver']

const statItems = [
    { value: '8.61', label: 'SGPA', suffix: '/10' },
    { value: '5+', label: 'Projects' },
    { value: '4+', label: 'Certifications' },
    { value: '3+', label: 'Hackathons' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

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

            {/* 3D Background */}
            <Suspense fallback={<div className="absolute inset-0 bg-white" />}>
                <HeroScene />
            </Suspense>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60 pointer-events-none" />

            <div className="relative z-10 container-xl section-padding w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Text content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Status badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-slate-200/50 shadow-sm mb-10">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse" />
                            <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] font-bold">OPEN FOR OPPORTUNITIES</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 leading-[0.95] tracking-tight mb-6"
                        >
                            Vengata
                            <br />
                            <span className="gradient-text">Visva</span>
                        </motion.h1>

                        {/* Animated role */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2.5 text-xl sm:text-2xl font-semibold text-slate-500 mb-8 h-8"
                        >
                            <span className="text-indigo-600 font-mono">▸</span>
                            <span className="text-slate-800 tracking-tight">{typedText}</span>
                            <span className={`w-0.5 h-6 bg-indigo-600 inline-block rounded transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-500 leading-relaxed mb-12 max-w-lg font-medium"
                        >
                            B.E Computer Science student passionate about building <strong className="text-slate-900 font-bold">AI-powered systems</strong> and <strong className="text-indigo-600 font-bold">IoT solutions</strong> that solve real-world problems.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                            <button onClick={() => scrollTo('#projects')} className="btn-primary">
                                Explore Work
                                <HiArrowRight className="text-sm" />
                            </button>
                            <button onClick={() => scrollTo('#contact')} className="btn-outline">
                                <HiEnvelope className="text-base" />
                                Let's Talk
                            </button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={itemVariants} className="flex items-center gap-6">
                            <a
                                href="https://github.com/vengatavisva"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-900 font-bold transition-all hover:-translate-y-0.5"
                            >
                                <FaGithub className="text-xl" />
                                GitHub
                            </a>
                            <div className="w-px h-5 bg-slate-200" />
                            <a
                                href="https://www.linkedin.com/in/vengata-visva-a6930b299/"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-600 font-bold transition-all hover:-translate-y-0.5"
                            >
                                <FaLinkedin className="text-xl" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Visual identity card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative group">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Main card */}
                            <div className="glass-card p-10 relative overflow-hidden rounded-[32px]">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />

                                <div className="flex items-center gap-5 mb-10">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 rounded-2xl shadow-xl shadow-indigo-500/20 overflow-hidden border-2 border-white bg-white shrink-0">
                                        <img src="/profile.png" alt="Vengata Visva" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-display font-extrabold text-slate-900 text-2xl tracking-tight">Vengata Visva</p>
                                        <p className="text-slate-500 font-medium">Software Engineer</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider">Active Status</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    {statItems.map((s, i) => (
                                        <div
                                            key={s.label}
                                            className="bg-white/50 border border-slate-100 p-5 rounded-2xl text-center hover:bg-white transition-colors"
                                        >
                                            <p className="text-3xl font-display font-black text-slate-900 leading-none">
                                                {s.value}
                                                {s.suffix && <span className="text-sm text-slate-400 font-normal ml-0.5">{s.suffix}</span>}
                                            </p>
                                            <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech stack row */}
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] mb-4 uppercase">Specialized In</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['React', 'Three.js', 'Python', 'ML', 'IoT'].map(tech => (
                                            <span key={tech} className="tech-tag font-bold">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent cards */}
                            <motion.div
                                animate={{ y: [-8, 8, -8], rotate: [0, 1, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-8 -right-8 glass p-5 flex items-center gap-3.5 shadow-2xl rounded-2xl border-white/50"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl shadow-inner">🏆</div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">Award Winner</p>
                                    <p className="text-[10px] text-slate-500 font-bold">3+ Hackathons</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [8, -8, 8], rotate: [0, -1, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-6 -left-10 glass p-5 flex items-center gap-3.5 shadow-2xl rounded-2xl border-white/50"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl shadow-inner">⚡</div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">High Impact</p>
                                    <p className="text-[10px] text-slate-500 font-bold">Shipped 5+ Apps</p>
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
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.3em] uppercase">Discovery</span>
                <div className="scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
