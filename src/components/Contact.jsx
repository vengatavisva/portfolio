import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiEnvelope, HiPhone, HiPaperAirplane, HiUser, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const contactInfo = [
    {
        icon: <HiEnvelope className="text-xl" />,
        label: 'Email',
        value: 'vengatavisva7@gmail.com',
        href: 'mailto:vengatavisva7@gmail.com',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        icon: <HiPhone className="text-xl" />,
        label: 'Phone',
        value: '+91 7904229875',
        href: 'tel:+917904229875',
        iconBg: 'bg-violet-50',
        iconColor: 'text-violet-600',
    },
]

const socialLinks = [
    {
        icon: <FaLinkedin className="text-lg" />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vengata-visva-a6930b299/',
        hoverClass: 'hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50',
    },
    {
        icon: <FaGithub className="text-lg" />,
        label: 'GitHub',
        href: 'https://github.com/vengatavisva',
        hoverClass: 'hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50',
    },
]

const Contact = () => {
    const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [focused, setFocused] = useState('')
    const [status, setStatus] = useState({ loading: false, error: null, success: false })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ loading: true, error: null, success: false })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus({ loading: false, error: null, success: true })
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000)
            } else {
                setStatus({ loading: false, error: data.error || 'Something went wrong', success: false })
            }
        } catch (err) {
            setStatus({ loading: false, error: 'Failed to connect to server', success: false })
        }
    }

    return (
        <section id="contact" className="section-padding section-white relative overflow-hidden" ref={ref}>
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-xl relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="mb-14"
                >
                    <span className="section-label mb-4">Get In Touch</span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mt-3">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-slate-500 text-base mt-4 max-w-lg">
                        I'm always open to new opportunities, collaborations, and interesting conversations.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="space-y-4"
                    >
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="card p-5 flex items-center gap-4 group"
                            >
                                <div className={`p-3 rounded-xl ${info.iconBg} ${info.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-mono tracking-wider mb-0.5">{info.label.toUpperCase()}</p>
                                    <p className="text-slate-800 font-semibold text-sm">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="pt-2"
                        >
                            <p className="text-xs text-slate-400 font-mono tracking-widest mb-4">FIND ME ON</p>
                            <div className="flex gap-3">
                                {socialLinks.map(s => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-3 bg-white rounded-xl text-slate-500 border border-slate-200 transition-all duration-200 font-medium text-sm ${s.hoverClass}`}
                                        aria-label={s.label}
                                    >
                                        {s.icon}
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Code snippet */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.55 }}
                            className="bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-400 border border-slate-800"
                        >
                            <div className="flex gap-1.5 mb-4">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            </div>
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                            <p className="pl-4">name: <span className="text-green-400">"Vengata Visva"</span>,</p>
                            <p className="pl-4">status: <span className="text-emerald-400">"Available"</span>,</p>
                            <p className="pl-4">passion: <span className="text-amber-400">"Build impactful tech"</span></p>
                            <p>{'}'}</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="card p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="text-xs font-mono text-slate-400 tracking-widest mb-2 block">YOUR NAME</label>
                                <div className={`relative transition-all duration-200 ${focused === 'name' ? 'ring-2 ring-indigo-200' : ''} rounded-xl overflow-hidden`}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><HiUser /></div>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused('')}
                                        placeholder="John Doe"
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs font-mono text-slate-400 tracking-widest mb-2 block">YOUR EMAIL</label>
                                <div className={`relative transition-all duration-200 ${focused === 'email' ? 'ring-2 ring-indigo-200' : ''} rounded-xl overflow-hidden`}>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><HiEnvelope /></div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        placeholder="john@example.com"
                                        required
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-xs font-mono text-slate-400 tracking-widest mb-2 block">YOUR MESSAGE</label>
                                <div className={`relative transition-all duration-200 ${focused === 'message' ? 'ring-2 ring-indigo-200' : ''} rounded-xl overflow-hidden`}>
                                    <div className="absolute left-4 top-4 text-slate-400"><HiChatBubbleLeftRight /></div>
                                    <textarea
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused('')}
                                        placeholder="Tell me about your project or idea..."
                                        required
                                        rows={5}
                                        className="input-field resize-none"
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status.loading || status.success}
                                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${status.success
                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                    : status.error
                                        ? 'bg-red-50 text-red-600 border border-red-200'
                                        : 'btn-primary'
                                    }`}
                            >
                                {status.loading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : status.success ? (
                                    '✓ Message Sent Successfully!'
                                ) : status.error ? (
                                    status.error
                                ) : (
                                    <><span>Send Message</span><HiPaperAirplane /></>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
