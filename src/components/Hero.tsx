import { motion } from 'motion/react'
import { ArrowRight, Zap, Sparkles } from 'lucide-react'
import { triggerSparkles, triggerStarCannon } from '../utils/confetti'

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-300 backdrop-blur-md shadow-inner"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Vite + React 19 + TypeScript + Tailwind CSS v4 + Motion</span>
            <Zap className="h-3.5 w-3.5 text-amber-400" />
          </motion.div>

          {/* Main Headline with Staggered Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Crafting Fluid & Next-Gen{' '}
            <span className="relative inline-block bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Motion Experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-light"
          >
            Powered by the new official <strong className="text-white font-medium">Motion for React</strong>,{' '}
            <strong className="text-white font-medium">AutoAnimate</strong> layout engine, and full TypeScript precision.
            Production ready with instant HMR and sleek glassmorphic UI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                triggerStarCannon(e)
                const target = document.getElementById('motion')
                target?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
            >
              <span>Explore Motion Demos</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerSparkles}
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-base font-medium text-slate-200 backdrop-blur-md transition-colors"
            >
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span>Fire Confetti</span>
            </motion.button>
          </motion.div>

          {/* Feature Highlights Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 max-w-4xl w-full"
          >
            {[
              { label: 'Motion React', detail: 'Latest v12+ API', color: 'border-indigo-500/30 bg-indigo-500/5' },
              { label: 'AutoAnimate', detail: 'Zero-config FLIP', color: 'border-purple-500/30 bg-purple-500/5' },
              { label: 'Tailwind v4', detail: 'Blazing Fast CSS', color: 'border-pink-500/30 bg-pink-500/5' },
              { label: 'Canvas Confetti', detail: 'Particle Physics', color: 'border-emerald-500/30 bg-emerald-500/5' },
            ].map((f) => (
              <motion.div
                key={f.label}
                whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.6)' }}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${f.color} backdrop-blur-sm transition-all`}
              >
                <span className="font-semibold text-white text-sm sm:text-base">{f.label}</span>
                <span className="text-xs text-slate-400 mt-1">{f.detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
