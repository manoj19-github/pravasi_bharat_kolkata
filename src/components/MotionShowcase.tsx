import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react'
import { Move, Sliders, Box, Flame, Zap } from 'lucide-react'

export const MotionShowcase = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'drag' | 'stagger'>('3d')
  
  // 3D Card Interactive Tilt Math
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Drag physics states
  const [dragCount, setDragCount] = useState(0)

  return (
    <section id="motion" className="py-20 relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <Zap className="h-3.5 w-3.5 text-purple-400" />
            Motion React (v12)
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Physics, Gestures & 3D Interactive Layers
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hardware-accelerated animations using springs, inertia, gesture bindings, and declarative 3D transformation matrices.
          </p>

          {/* Interactive Switcher */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === '3d'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3D Hologram Tilt
            </button>
            <button
              onClick={() => setActiveTab('drag')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'drag'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Elastic Drag Physics
            </button>
            <button
              onClick={() => setActiveTab('stagger')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'stagger'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Stagger Sequence
            </button>
          </div>
        </div>

        {/* Tab Displays */}
        <div className="mt-12">
          {activeTab === '3d' && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                <Box className="h-4 w-4 text-indigo-400" />
                Hover & move cursor over the card to experience live 3D perspective rotation
              </p>
              <div
                style={{ perspective: '1000px' }}
                className="w-full max-w-md cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90 p-8 shadow-2xl backdrop-blur-xl"
                >
                  <div
                    style={{ transform: 'translateZ(60px)' }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                        Interactive 3D Mesh
                      </span>
                      <Flame className="h-5 w-5 text-amber-400 animate-pulse" />
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                      Spring-Coupled Hover
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Powered by Motion React <code className="text-indigo-300 bg-indigo-950/60 px-1 py-0.5 rounded">useMotionValue</code> and{' '}
                      <code className="text-purple-300 bg-purple-950/60 px-1 py-0.5 rounded">useTransform</code> calculations with damped harmonic oscillation.
                    </p>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-950/50 p-4 border border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">Response Latency</div>
                        <div className="text-lg font-bold text-emerald-400">0.0 ms (GPU)</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Refresh Rate</div>
                        <div className="text-lg font-bold text-indigo-400">120 Hz</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'drag' && (
            <div className="flex flex-col items-center">
              <p className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                <Move className="h-4 w-4 text-purple-400" />
                Grab, fling or drag the orb inside the bounds — it snaps back with spring momentum
              </p>
              <div className="relative h-80 w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/50 p-6 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <motion.div
                  drag
                  dragConstraints={{ left: -180, right: 180, top: -100, bottom: 100 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
                  whileHover={{ scale: 1.1, cursor: 'grab' }}
                  whileTap={{ scale: 0.95, cursor: 'grabbing' }}
                  onDragEnd={() => setDragCount((prev) => prev + 1)}
                  className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-4 text-center text-white shadow-2xl shadow-indigo-500/40 select-none"
                >
                  <Move className="h-8 w-8 mb-1" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Drag Me</span>
                  <span className="text-[10px] text-white/80">Flings: {dragCount}</span>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'stagger' && (
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: 'Layout Morphing',
                    desc: 'Seamlessly transitions elements between DOM positions with zero jank.',
                    icon: Box,
                    color: 'text-indigo-400',
                  },
                  {
                    title: 'Spring Mechanics',
                    desc: 'Real physical mass, stiffness and damping dynamics for intuitive interaction.',
                    icon: Zap,
                    color: 'text-purple-400',
                  },
                  {
                    title: 'Keyframe Sequences',
                    desc: 'Multi-stage choreographed transformations with ease curves.',
                    icon: Sliders,
                    color: 'text-pink-400',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 mb-4">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
