/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                secondary: '#f8fafc',
                tertiary: '#f1f5f9',
                dark: '#0f172a',
                'dark-secondary': '#1e293b',
                'text-primary': '#0f172a',
                'text-secondary': '#475569',
                'text-muted': '#94a3b8',
                accent: {
                    blue: '#6366f1',
                    indigo: '#4f46e5',
                    violet: '#7c3aed',
                    purple: '#a855f7',
                    cyan: '#06b6d4',
                    sky: '#38bdf8',
                    teal: '#14b8a6',
                    rose: '#f43f5e',
                    orange: '#f97316',
                    emerald: '#10b981',
                    amber: '#f59e0b',
                },
                glass: 'rgba(255, 255, 255, 0.8)',
                'glass-border': 'rgba(226, 232, 240, 0.8)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-slower': 'float 10s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'shimmer': 'shimmer 3s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s ease infinite',
                'spin-slow': 'spin 20s linear infinite',
                'morph': 'morph 8s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.08)' },
                    '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.15)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                slideUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.03)',
                'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.05)',
                'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 4px 25px rgba(0, 0, 0, 0.06)',
                'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.12)',
                'glow-blue': '0 0 30px rgba(59, 130, 246, 0.12)',
                'card': '0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 20px rgba(0, 0, 0, 0.03)',
                'card-hover': '0 8px 40px rgba(99, 102, 241, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                'elevated': '0 10px 40px rgba(0, 0, 0, 0.06)',
                'button': '0 4px 16px rgba(99, 102, 241, 0.3)',
                'button-hover': '0 8px 32px rgba(99, 102, 241, 0.4)',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
