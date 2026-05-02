import React from 'react'
import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5"
                    >
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white shadow-sm">
                            VV
                        </div>
                        <span className="text-sm text-slate-500">
                            Designed & Built by{' '}
                            <span className="font-semibold text-slate-800">Vengata Visva</span>
                        </span>
                    </motion.div>

                    {/* Social + credit */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <a
                            href="https://github.com/vengatavisva"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-slate-700 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vengata-visva-a6930b299/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                        <div className="w-px h-4 bg-slate-200" />
                    </motion.div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="text-xs text-slate-400 font-mono hover:text-indigo-600 transition-colors px-4 py-2.5 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/60"
                    >
                        ↑ Back to top
                    </motion.button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                    <p className="text-xs text-slate-300 font-mono">
                        © {new Date().getFullYear()} Vengata Visva. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
