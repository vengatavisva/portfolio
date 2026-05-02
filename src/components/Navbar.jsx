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
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-2xl ${scrolled
                ? 'glass py-3 shadow-2xl'
                : 'glass py-4 shadow-lg'
                }`}
            style={{ x: '-50%' }}
        >
            <div className="w-full px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 md:h-[70px]">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={() => handleClick('Home', '#home')}
                        className="flex items-center gap-2.5"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white/20 bg-white/10 shrink-0 shadow-lg">
                            <img src="/profile.png" alt="VV" className="w-full h-full object-cover" />
                        </div>
                        <span className={`font-display font-black text-lg tracking-tight hidden sm:block ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
                            Vengata <span className={scrolled ? 'text-indigo-600' : 'text-indigo-600'}>Visva</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleClick(link.name, link.href)}
                                className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 uppercase tracking-widest ${active === link.name
                                    ? 'text-indigo-600'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                                {active === link.name && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className={`absolute inset-0 rounded-xl -z-10 ${scrolled ? 'bg-indigo-600/20' : 'bg-indigo-50'}`}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100`}
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
                        className={`md:hidden border-t ${scrolled ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100'} shadow-lg overflow-hidden`}
                    >
                        <div className="px-5 py-3 space-y-0.5">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleClick(link.name, link.href)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === link.name
                                        ? 'text-indigo-600 bg-indigo-50 font-semibold'
                                        : (scrolled ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50')
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
