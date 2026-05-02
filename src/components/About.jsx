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
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

    return (
        <section id="about" className="section-padding section-gray relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
                    <span className="section-label mb-4">Who I Am</span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
                    {/* Left */}
                    <div>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={0.15}
                            className="text-slate-600 text-lg leading-relaxed mb-5"
                        >
                            I'm a passionate <strong className="text-slate-800 font-semibold">Computer Science student</strong> with a drive to build technology that makes a difference. From{' '}
                            <strong className="text-indigo-600 font-semibold">AI-powered satellite systems</strong> to{' '}
                            <strong className="text-cyan-600 font-semibold">IoT-enabled climate solutions</strong>, I turn complex ideas into elegant, working products.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={0.25}
                            className="text-slate-500 text-base leading-relaxed mb-12"
                        >
                            My journey spans full-stack development, machine learning, and embedded systems. I believe in building things that are not just functional, but impactful — solving real problems for real people.
                        </motion.p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={0.3 + i * 0.08}
                                    className="card p-5 text-center group cursor-default"
                                >
                                    <div
                                        className="text-3xl font-display font-bold mb-1.5"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                        {stat.suffix && <span className="text-base text-slate-300">{stat.suffix}</span>}
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono tracking-wider uppercase">{stat.label}</div>
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
                        className="space-y-3"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                custom={0.3 + i * 0.1}
                                className="card p-5 flex items-start gap-4 group cursor-default"
                            >
                                <div className={`p-3 rounded-xl ${item.iconBg} ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
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
