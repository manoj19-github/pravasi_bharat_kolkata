import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from 'lucide-react'

/**
 * Modern, advanced animated scroll-to-top sticky button with circular scroll progress ring.
 * Visible on Home page (/), Hotels page (/hotels), and Explore Kolkata page (/explore-kolkata).
 */
export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  // Only show on Home page (/), Hotels page (/hotels), and Explore Kolkata page (/explore-kolkata)
  const allowedPaths = ['/', '/hotels', '/explore-kolkata']
  const isAllowedPage = allowedPaths.includes(location.pathname)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
        setScrollProgress(progress)
      }

      // Show when scrolled down past 280px
      if (scrollTop > 280) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Circular progress calculations (radius 20, circumference ~125.66)
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  if (!isAllowedPage) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="hidden sm:block fixed bottom-6 right-6 z-50 select-none"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#BD1113] via-[#DC2626] to-[#8E0D0E] text-white shadow-[0_6px_25px_rgba(189,17,19,0.4)] hover:shadow-[0_8px_30px_rgba(189,17,19,0.55)] border-2 border-amber-300/60 focus:outline-none focus:ring-4 focus:ring-amber-400/40 cursor-pointer group transition-all"
            aria-label="Scroll to top of page"
            title="Scroll to top"
          >
            {/* Ambient Pulse Glow */}
            <span className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping pointer-events-none opacity-30" />

            {/* Circular Progress SVG Ring */}
            <svg
              className="absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] -rotate-90 pointer-events-none"
              viewBox="0 0 48 48"
            >
              {/* Background Track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-black/20"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Active Animated Progress Stroke */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-amber-300 transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Upward Chevron / Arrow Icon with Floating Hover Animation */}
            <ArrowUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-1 drop-shadow-sm" />

            {/* Tooltip on Hover */}
            <span className="absolute -top-9 right-1/2 translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0A265D] text-white text-[10.5px] font-semibold tracking-wide whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-white/20">
              Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
