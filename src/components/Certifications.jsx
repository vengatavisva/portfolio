import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckBadge, HiClock, HiArrowTopRightOnSquare } from 'react-icons/hi2'

const DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1BlmvJVrgjLLky8kn7m-zKemmeaObDsuj?usp=share_link'

const certifications = [
    {
        icon: '☕',
        title: 'Java Programming',
        issuer: 'NPTEL — IIT',
        detail: '12 Weeks · Elite Certificate',
        status: 'Completed',
        accent: '#ea580c',
        bg: '#fff7ed',
    },
    {
        icon: '🐍',
        title: 'Data Structures & Algorithms using Python',
        issuer: 'NPTEL — IIT',
        detail: '12 Weeks',
        status: 'Completed',
        accent: '#3776ab',
        bg: '#eff6ff',
    },
    {
        icon: '🤖',
        title: 'Generative AI Fundamentals',
        issuer: 'Microsoft',
        detail: 'Professional Certificate',
        status: 'Completed',
        accent: '#4f46e5',
        bg: '#eef2ff',
    },
    {
        icon: '🚀',
        title: 'Full Stack Web Development',
        issuer: 'Udemy',
        detail: 'Java Backend + React',
        status: 'Completed',
        accent: '#a435f0',
        bg: '#f5f3ff',
    },
    {
        icon: '🍃',
        title: 'MongoDB Developer Path',
        issuer: 'MongoDB',
        detail: 'Database Certification',
        status: 'Completed',
        accent: '#00684a',
        bg: '#f0fdf4',
    },
    {
        icon: '☁️',
        title: 'AWS Cloud Foundations',
        issuer: 'Amazon Web Services',
        detail: 'Cloud Practitioner',
        status: 'Completed',
        accent: '#f59e0b',
        bg: '#fffbeb',
    },
    {
        icon: '🔗',
        title: 'Networking Essentials',
        issuer: 'Cisco',
        detail: 'Networking Fundamentals',
        status: 'Completed',
        accent: '#0056b3',
        bg: '#eff6ff',
    },
    {
        icon: '🤝',
        title: 'Cognitive Class Courses',
        issuer: 'IBM Cognitive',
        detail: 'AI & Data Science',
        status: 'Completed',
        accent: '#1e3a5f',
        bg: '#f0f4ff',
    },
]

const Certifications = () => {
    const [ref, inView] = useInView({ threshold: 0.06, triggerOnce: true })

    return (
        <section id="certifications" className="section-padding section-gray relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14"
                >
                    <div>
                        <span className="section-label mb-4">Credentials</span>
                        <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                            Certifications & <span className="gradient-text">Learning</span>
                        </h2>
                    </div>
                    {/* View all link */}
                    <motion.a
                        href={DRIVE_FOLDER}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all shrink-0 shadow-sm"
                    >
                        <span>View All Certificates</span>
                        <HiArrowTopRightOnSquare className="text-base" />
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
                            className="card group overflow-hidden cursor-default"
                        >
                            {/* Animated left accent line on hover */}
                            <div className="flex items-stretch">
                                <div
                                    className="w-0 group-hover:w-1 transition-all duration-300 shrink-0 rounded-l-xl"
                                    style={{ background: cert.accent }}
                                />

                                <div className="flex items-center gap-4 p-5 flex-1 min-w-0">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: cert.bg }}
                                    >
                                        {cert.icon}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-display font-bold text-slate-900 text-[15px] mb-0.5 leading-snug truncate">{cert.title}</h3>
                                        <p className="text-sm text-slate-400 mb-2.5">{cert.issuer} · <span className="text-slate-300">{cert.detail}</span></p>

                                        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                                            cert.status === 'Completed'
                                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                                : 'bg-amber-50 text-amber-600 border border-amber-100'
                                        }`}>
                                            {cert.status === 'Completed'
                                                ? <HiCheckBadge className="text-sm" />
                                                : <HiClock className="text-sm" />
                                            }
                                            {cert.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Drive folder CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="mt-10 text-center"
                >
                    <p className="text-sm text-slate-400 mb-4 font-mono">
                        Also certified by: UiPath, HP, Celonis, IIT Spoken Tutorial, Bentley Education & more
                    </p>
                    <a
                        href={DRIVE_FOLDER}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex"
                    >
                        View All Certificates on Google Drive
                        <HiArrowTopRightOnSquare />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications
