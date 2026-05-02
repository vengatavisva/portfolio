import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    SiPython, SiJavascript, SiMysql,
    SiHtml5, SiCss3, SiReact, SiTailwindcss,
    SiNodedotjs, SiDjango, SiMongodb, SiFirebase
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { HiServer } from 'react-icons/hi'

const categories = [
    {
        name: 'Languages',
        skills: [
            { name: 'Java', icon: <FaJava />, level: 90, iconClass: 'icon-java' },
            { name: 'Python', icon: <SiPython />, level: 85, iconClass: 'icon-python' },
            { name: 'JavaScript', icon: <SiJavascript />, level: 88, iconClass: 'icon-javascript' },
            { name: 'SQL', icon: <SiMysql />, level: 80, iconClass: 'icon-sql' },
        ],
        color: '#4f46e5',
        bg: 'bg-indigo-50',
    },
    {
        name: 'Frontend',
        skills: [
            { name: 'HTML5', icon: <SiHtml5 />, level: 95, iconClass: 'icon-html' },
            { name: 'CSS3', icon: <SiCss3 />, level: 90, iconClass: 'icon-css' },
            { name: 'React.js', icon: <SiReact />, level: 88, iconClass: 'icon-react' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, iconClass: 'icon-tailwind' },
        ],
        color: '#7c3aed',
        bg: 'bg-violet-50',
    },
    {
        name: 'Backend',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs />, level: 82, iconClass: 'icon-node' },
            { name: 'Django', icon: <SiDjango />, level: 78, iconClass: 'icon-django' },
            { name: 'REST APIs', icon: <HiServer />, level: 85, iconClass: 'icon-api' },
        ],
        color: '#059669',
        bg: 'bg-emerald-50',
    },
    {
        name: 'Database & Cloud',
        skills: [
            { name: 'MySQL', icon: <SiMysql />, level: 85, iconClass: 'icon-mysql' },
            { name: 'MongoDB', icon: <SiMongodb />, level: 80, iconClass: 'icon-mongodb' },
            { name: 'Firebase', icon: <SiFirebase />, level: 78, iconClass: 'icon-firebase' },
        ],
        color: '#d97706',
        bg: 'bg-amber-50',
    },
]

const Skills = () => {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
    const [active, setActive] = useState(0)

    return (
        <section id="skills" className="section-padding section-white relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="mb-14"
                >
                    <span className="section-label mb-4">What I Know</span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                </motion.div>

                {/* Tab row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 }}
                    className="flex flex-wrap gap-3 mb-16 justify-center"
                >
                    {categories.map((cat, i) => (
                        <button
                            key={cat.name}
                            onClick={() => setActive(i)}
                            className={`px-8 py-3 rounded-2xl text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${active === i
                                ? 'text-white shadow-xl scale-105'
                                : 'bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300'
                                }`}
                            style={active === i ? { background: cat.color, boxShadow: `0 10px 20px -5px ${cat.color}66` } : {}}
                        >
                            {cat.name}
                        </button>
                    ))}
                </motion.div>

                {/* Skill cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {categories[active].skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-8 text-center group cursor-default hover:bg-white transition-all duration-500"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${categories[active].bg} flex items-center justify-center text-4xl ${skill.iconClass} group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                                    {skill.icon}
                                </div>

                                <h3 className="font-bold text-slate-900 mb-6 text-base tracking-tight">{skill.name}</h3>

                                {/* Progress */}
                                <div className="progress-track mb-2 h-[8px] bg-slate-50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="progress-fill"
                                        style={{ background: `linear-gradient(90deg, ${categories[active].color}aa, ${categories[active].color})` }}
                                    />
                                </div>
                                <p className="text-[10px] text-slate-400 font-bold font-mono tracking-widest">{skill.level}% MASTERY</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* All tech tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    className="mt-16 pt-12 border-t border-slate-100"
                >
                    <p className="text-xs text-slate-400 font-mono tracking-widest mb-5 text-center">ALL TECHNOLOGIES</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.flatMap(cat => cat.skills).map(skill => (
                            <span key={skill.name} className={`tech-tag ${skill.iconClass}`}>
                                <span className="text-sm">{skill.icon}</span>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
