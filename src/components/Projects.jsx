import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'

const projects = [
    {
        number: '01',
        title: 'PneumoScan AI',
        subtitle: 'Chest X-Ray Pneumonia Diagnostic System',
        description: 'Full-stack AI diagnostic application using Augmented Ensemble Transfer Learning (ResNet50 + EfficientNetB0) with Squeeze-and-Excitation attention blocks achieving high-accuracy automated pneumonia detection from chest X-rays.',
        features: [
            'Ensemble deep learning (ResNet50 + EfficientNetB0)',
            'Grad-CAM heatmap explainability overlays',
            'Real-time AI confidence & severity scoring',
            'Treatment recommendation dashboard',
        ],
        tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Vite', 'Grad-CAM'],
        icon: '🫁',
        accent: '#0891b2',
        accentBg: '#ecfeff',
        accentText: '#0e7490',
        github: 'https://github.com/vengatavisva/PneumoScan_AI',
    },
    {
        number: '02',
        title: 'OrbitXOS',
        subtitle: 'AI Satellite Collision Avoidance System',
        description: 'AI-driven collision risk prediction system using real-time orbital data to generate safe alternate satellite trajectories. Features a React + Three.js dashboard with live orbital visualizations and real-time debris tracking.',
        features: [
            'AI-driven collision risk prediction',
            'Real-time orbital data processing',
            'Three.js live orbital visualization',
            'Maneuver strategy simulations',
        ],
        tech: ['React', 'Three.js', 'Satellite.js', 'Python', 'Tailwind CSS'],
        icon: '🛰️',
        accent: '#4f46e5',
        accentBg: '#eef2ff',
        accentText: '#4338ca',
        github: 'https://github.com/vengatavisva/OrbitXos-3.0',
    },
    {
        number: '03',
        title: 'GreenHouse Gas – FuseNet',
        subtitle: 'AI-Powered Emission Monitoring Platform',
        description: 'Comprehensive CO₂ and NO₂ emission monitoring system with ML-powered advisory and ESG compliance support for industries and governments, with real-time dashboards and predictive analytics.',
        features: [
            'Real-time CO₂ & NO₂ monitoring',
            'ML-powered emission advisory',
            'ESG compliance reporting',
            'Predictive emission analytics',
        ],
        tech: ['React', 'Node.js', 'Python', 'TensorFlow', 'REST APIs'],
        icon: '🌿',
        accent: '#059669',
        accentBg: '#ecfdf5',
        accentText: '#047857',
        github: 'https://github.com/vengatavisva/GHG_Fusenet',
    },
    {
        number: '04',
        title: 'FroSense',
        subtitle: 'AI + IoT Solar Cold Storage System',
        description: 'React web application for a solar-driven cold storage system integrating real-time IoT sensor monitoring, AI-driven spoilage prediction, and energy optimization to minimize food waste and support sustainable agriculture.',
        features: [
            'Real-time IoT sensor monitoring',
            'AI-driven spoilage prediction',
            'Solar energy optimization',
            'Sustainable agriculture support',
        ],
        tech: ['React', 'JavaScript', 'AI/ML', 'IoT', 'Arduino'],
        icon: '❄️',
        accent: '#7c3aed',
        accentBg: '#f5f3ff',
        accentText: '#6d28d9',
        github: 'https://github.com/vengatavisva/FroSense',
    },
]

const Projects = () => {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

    return (
        <section id="projects" className="section-padding section-gray relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="mb-14"
                >
                    <span className="section-label mb-4">What I've Built</span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.08 + i * 0.1 }}
                            className="card group overflow-hidden"
                        >
                            {/* Color strip */}
                            <div className="h-1 w-full" style={{ background: project.accent }} />

                            <div className="p-7 sm:p-8">
                                <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
                                    {/* Left */}
                                    <div>
                                        <div className="flex items-start gap-5 mb-5">
                                            <div>
                                                <p className="text-xs font-mono text-slate-300 mb-1">{project.number}</p>
                                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: project.accentBg }}>
                                                    {project.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-5">
                                                <h3 className="text-xl font-display font-bold text-slate-900">{project.title}</h3>
                                                <p className="text-sm font-semibold mt-0.5" style={{ color: project.accentText }}>{project.subtitle}</p>
                                            </div>
                                            {/* GitHub link */}
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 font-medium transition-colors mt-5 shrink-0"
                                            >
                                                <FaGithub className="text-base" />
                                                <span className="hidden sm:inline">GitHub</span>
                                                <HiArrowTopRightOnSquare className="text-xs" />
                                            </a>
                                        </div>

                                        <p className="text-slate-500 text-[15px] leading-relaxed mb-5">{project.description}</p>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 rounded-md text-xs font-mono font-medium"
                                                    style={{ background: project.accentBg, color: project.accentText }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Feature list */}
                                    <div className="card-accent p-5 rounded-xl">
                                        <p className="text-[10px] font-mono text-slate-400 tracking-widest mb-3">KEY FEATURES</p>
                                        <ul className="space-y-2.5">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                                                    <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] shrink-0 font-bold text-white" style={{ background: project.accent }}>
                                                        ✓
                                                    </span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
