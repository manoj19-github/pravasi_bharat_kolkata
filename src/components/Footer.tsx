import { Layers, Sparkles, Code2 } from 'lucide-react'
import { triggerSparkles } from '../utils/confetti'

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Pravasi Bharat Kolkata</div>
              <div className="text-xs text-slate-400">Next-Gen React & Animation Showcase</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Code2 className="h-4 w-4 text-indigo-400" />
              TypeScript + Motion React + Tailwind CSS v4
            </span>
          </div>

          <button
            onClick={triggerSparkles}
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Launch Finale</span>
          </button>
        </div>

        <div className="mt-8 border-t border-slate-800/60 pt-6 text-center text-xs text-slate-400">
          Built with React 19, Motion React, AutoAnimate, Canvas Confetti & Vite.
        </div>
      </div>
    </footer>
  )
}
