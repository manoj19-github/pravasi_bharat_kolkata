import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AlpanaBackground } from './components/decorations/AlpanaBackground'
import { FloatingFlowers } from './components/decorations/FloatingFlowers'
import { ScrollToTop } from './components/common/ScrollToTop'
import { NavigationProgressBar } from './components/common/NavigationProgressBar'
import { HomePage } from './pages/HomePage'
import { HotelsPage } from './pages/HotelsPage'
import { ExploreKolkataPage } from './pages/ExploreKolkataPage'
import { MapPage } from './pages/MapPage'

import type { Variants } from 'motion/react'

// Snappy, silky-smooth 200ms page transition animation
const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
    scale: 0.997,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.997,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col will-change-[opacity,transform]"
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/hotels"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col will-change-[opacity,transform]"
            >
              <HotelsPage />
            </motion.div>
          }
        />
        <Route
          path="/explore-kolkata"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col will-change-[opacity,transform]"
            >
              <ExploreKolkataPage />
            </motion.div>
          }
        />
        <Route
          path="/map"
          element={
            <motion.div
              variants={pageTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col will-change-[opacity,transform]"
            >
              <MapPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <Router>
      {/* Visual Navigation Progress Indicator */}
      <NavigationProgressBar />

      {/* Automatically scroll to top or hash anchor on route changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FAF5EF] text-[#333333] flex flex-col relative selection:bg-[#D94B12] selection:text-white">
        {/* Cultural Background Layer */}
        <AlpanaBackground />
        <FloatingFlowers />

        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Route Content with Fast Fluid Animations */}
        <main className="flex-1 relative z-10 flex flex-col">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
