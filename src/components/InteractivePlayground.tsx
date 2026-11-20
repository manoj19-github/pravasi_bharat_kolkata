import { useState } from 'react'
import { motion } from 'motion/react'
import { Sliders, Volume2, Heart, Zap } from 'lucide-react'
import { triggerStarCannon, triggerSparkles } from '../utils/confetti'

export const InteractivePlayground = () => {
  const [bounceRate, setBounceRate] = useState(1.2)
  const [likes, setLikes] = useState(42)
  const [isLiked, setIsLiked] = useState(false)
  const [activeColor, setActiveColor] = useState<'indigo' | 'emerald' | 'pink'>('indigo')

  const handleLike = (e: React.MouseEvent) => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
    if (!isLiked) {
      triggerStarCannon(e)
    }
  }

  const colorStyles = {
    indigo: {
      bg: 'from-indigo-600 to-purple-600',
      border: 'border-indigo-500/40',
      text: 'text-indigo-400',
      badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    },
    emerald: {
      bg: 'from-emerald-600 to-teal-600',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
    pink: {
      bg: 'from-pink-600 to-rose-600',
      border: 'border-pink-500/40',
      text: 'text-pink-400',
      badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
    },
  }

  return (
    <section id="playground" className="py-20 relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-300">
            <Zap className="h-3.5 w-3.5 text-pink-400" />
            Live Reactive Lab
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Fine-Tune Reactive Physics & State Transitions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Adjust spring velocity multipliers, toggle micro-interactions, and watch real-time state synchronization.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Interactive Equalizer & Spring Orb */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-indigo-400" />
                  Harmonic Sound Wave
                </h3>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${colorStyles[activeColor].badge}`}>
                  Live Spring
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Visual wave bars synchronized with CSS keyframes and Motion spring curves.
              </p>

              {/* Sound Wave Bars */}
              <div className="mt-8 flex items-center justify-center gap-2.5 h-28 bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                {[0.4, 0.8, 0.5, 1.0, 0.6, 0.9, 0.3, 0.7].map((heightScale, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      scaleY: [heightScale, 1.2 * bounceRate, heightScale * 0.4, heightScale],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2 / bounceRate,
                      delay: idx * 0.1,
                      ease: 'easeInOut',
                    }}
                    className={`w-3 rounded-full bg-gradient-to-t ${colorStyles[activeColor].bg}`}
                    style={{ height: '70px', originY: 1 }}
                  />
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Frequency Multiplier</span>
                <span className="font-semibold text-slate-200">{bounceRate.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={bounceRate}
                onChange={(e) => setBounceRate(parseFloat(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Card 2: Micro-Interaction & Theme Accent Picker */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-purple-400" />
                  Dynamic Micro-Interactions
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  State Morph
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Experience spring scale toggles, particle bursts, and seamless palette switches.
              </p>

              {/* Like / Heart Micro-interaction */}
              <div className="mt-6 flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition shadow-lg ${
                    isLiked
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50 shadow-rose-500/20'
                      : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <motion.div
                    animate={isLiked ? { scale: [1, 1.4, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
                  </motion.div>
                  <span>{likes} Reactions</span>
                </motion.button>
                <span className="text-xs text-slate-500 mt-2">Click to trigger physics feedback</span>
              </div>
            </div>

            {/* Color Accent Switcher */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Accent Atmosphere</span>
              <div className="flex gap-2">
                {(['indigo', 'emerald', 'pink'] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setActiveColor(color)
                      triggerSparkles()
                    }}
                    className={`h-7 w-7 rounded-full border-2 transition-all ${
                      activeColor === color ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-60'
                    } ${
                      color === 'indigo'
                        ? 'bg-indigo-500'
                        : color === 'emerald'
                        ? 'bg-emerald-500'
                        : 'bg-pink-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
