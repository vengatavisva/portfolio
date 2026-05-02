import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCode, HiLightBulb, HiChip } from 'react-icons/hi'

const stats = [
    { label: 'SGPA', value: '8.51', suffix: '/10', color: '#4f46e5', bg: '#eef2ff' },
    { label: 'Projects', value: '5+', color: '#0891b2', bg: '#ecfeff' },
    { label: 'Certifications', value: '4+', color: '#7c3aed', bg: '#f5f3ff' },
    { label: 'Hackathons', value: '3+', color: '#e11d48', bg: '#fff1f2' },
]

const highlights = [
    {
        icon: <HiAcademicCap className="text-xl" />,
        title: 'Education',
        desc: 'B.E Computer Science — PSNA College of Engineering & Technology (2023–2027)',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        icon: <HiCode className="text-xl" />,
        title: 'Full-Stack Developer',
        desc: 'React, Node.js, Django — building end-to-end web applications and RESTful APIs',
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    },
    {
        icon: <HiLightBulb className="text-xl" />,
        title: 'Problem Solver',
        desc: 'Strong in OOP, DSA, Java & Python — competitive programming mindset',
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        icon: <HiChip className="text-xl" />,
        title: 'AI & IoT Enthusiast',
        desc: 'Passionate about satellite systems, climate tech & real-world impact',
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } }),
}

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="about" className="section-padding section-white relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-20 text-center max-w-3xl mx-auto"
                >
                    <span className="section-label mb-5 justify-center">Identity</span>
                    <h2 className="text-5xl sm:text-6xl font-display font-black text-slate-900 mt-4 tracking-tight">
                        Transforming Ideas Into <span className="gradient-text">Impact</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-start">
                    {/* Left */}
                    <div>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={0.15}
                            className="text-slate-600 text-xl leading-relaxed mb-8 font-medium"
                        >
                            I'm a <strong className="text-slate-900">Computer Science engineer</strong> dedicated to bridging the gap between complex algorithms and human-centric solutions. My focus lies at the intersection of <strong className="text-indigo-600">AI intelligence</strong> and <strong className="text-cyan-500">Embedded IoT</strong>.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={0.25}
                            className="text-slate-500 text-lg leading-relaxed mb-16"
                        >
                            Currently a B.E student at PSNA College of Engineering, I spend my time engineering satellite-based climate tech and full-stack ecosystems. I don't just write code; I architect experiences.
                        </motion.p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={0.3 + i * 0.1}
                                    className="card p-6 border-none shadow-premium-soft bg-slate-50/50 group cursor-default"
                                >
                                    <div
                                        className="text-4xl font-display font-black mb-2"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                        {stat.suffix && <span className="text-lg text-slate-300 font-bold">{stat.suffix}</span>}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Highlights */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={0.2}
                        className="space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                custom={0.3 + i * 0.1}
                                className="glass-card p-6 flex items-start gap-5 group cursor-default hover:bg-white transition-all duration-500 rounded-2xl"
                            >
                                <div className={`p-4 rounded-2xl ${item.iconBg} ${item.iconColor} shrink-0 group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1.5 text-lg">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
