import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
    {
        badge: '🥇',
        rank: '1st Place',
        title: 'Paper Presentation — Think • Present • Inspire',
        venue: 'IEEE Student Branch, PSNACET · 2025',
        description: 'Best paper recognized for research communication excellence at the IEEE Think • Present • Inspire competition, showcasing AI-driven research to a panel of expert judges at PSNA College of Engineering & Technology.',
        accent: '#d97706',
        accentBg: '#fffbeb',
        year: '2025',
    },
    {
        badge: '🥈',
        rank: '2nd Prize',
        title: 'SDG 9 Category — HackFest 2K26',
        venue: 'M. Kumarasamy College of Engineering, Karur · Feb 2026',
        description: 'Secured 2nd prize in the SDG 9 (Industry, Innovation & Infrastructure) category at the prestigious 36-Hour HackFest 2K26 hackathon, competing against teams across Tamil Nadu.',
        accent: '#6366f1',
        accentBg: '#eef2ff',
        year: 'Feb 2026',
    },
    {
        badge: '🥈',
        rank: '2nd Prize',
        title: 'Wibeflowthon 24-Hour Hackathon',
        venue: 'Rathiram Group of Institutions Technical Campus · Mar 2026',
        description: 'Won 2nd prize at the Wibeflowthon 24-Hour Hackathon organized by Rathiram Group of Institutions Technical Campus, delivering a functional AI/IoT solution within the 24-hour constraint.',
        accent: '#059669',
        accentBg: '#ecfdf5',
        year: 'Mar 2026',
    },
]

const Achievements = () => {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

    return (
        <section id="achievements" className="section-padding section-white relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="mb-14"
                >
                    <span className="section-label mb-4">Recognition</span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                        Achievements & <span className="gradient-text-warm">Awards</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.12 + i * 0.12 }}
                            className="card group overflow-hidden cursor-default flex flex-col"
                        >
                            {/* Accent top bar */}
                            <div className="h-1 w-full" style={{ background: item.accent }} />

                            <div className="p-7 flex flex-col flex-1">
                                {/* Badge + rank */}
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: item.accentBg }}
                                    >
                                        {item.badge}
                                    </div>
                                    <span
                                        className="text-xs font-mono font-bold px-2.5 py-1.5 rounded-lg"
                                        style={{ background: item.accentBg, color: item.accent }}
                                    >
                                        {item.year}
                                    </span>
                                </div>

                                {/* Rank label */}
                                <span
                                    className="inline-flex text-xs font-mono font-bold px-2.5 py-1 rounded-md mb-2 self-start"
                                    style={{ background: item.accentBg, color: item.accent }}
                                >
                                    {item.rank}
                                </span>

                                <h3 className="font-display font-bold text-slate-900 text-lg mb-1.5 leading-snug">{item.title}</h3>
                                <p className="text-xs text-slate-400 font-mono mb-4 leading-relaxed">{item.venue}</p>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
