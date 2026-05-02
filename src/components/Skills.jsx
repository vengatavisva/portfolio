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
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((cat, i) => (
                        <button
                            key={cat.name}
                            onClick={() => setActive(i)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${active === i
                                ? 'text-white shadow-md'
                                : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
                                }`}
                            style={active === i ? { background: cat.color } : {}}
                        >
                            {cat.name}
                        </button>
                    ))}
                </motion.div>

                {/* Skill cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    >
                        {categories[active].skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.07 }}
                                className="card p-6 text-center group cursor-default"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${categories[active].bg} flex items-center justify-center text-3xl ${skill.iconClass} group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                </div>

                                <h3 className="font-semibold text-slate-800 mb-4 text-[15px]">{skill.name}</h3>

                                {/* Progress */}
                                <div className="progress-track mb-1.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1.3, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
                                        className="progress-fill"
                                        style={{ background: `linear-gradient(90deg, ${categories[active].color}cc, ${categories[active].color})` }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 font-mono">{skill.level}%</p>
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
