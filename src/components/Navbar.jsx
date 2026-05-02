import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('Home')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (name, href) => {
        setActive(name)
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 md:h-[70px]">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={() => handleClick('Home', '#home')}
                        className="flex items-center gap-2.5"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-200 bg-white shrink-0 shadow-sm">
                            <img src="/profile.png" alt="VV" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-display font-semibold text-slate-800 hidden sm:block text-[15px]">
                            Vengata Visva
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleClick(link.name, link.href)}
                                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${active === link.name
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                    }`}
                            >
                                {link.name}
                                {active === link.name && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute inset-0 bg-indigo-50 rounded-lg -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 shadow-lg"
                    >
                        <div className="px-5 py-3 space-y-0.5">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleClick(link.name, link.href)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === link.name
                                        ? 'text-indigo-600 bg-indigo-50 font-semibold'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
