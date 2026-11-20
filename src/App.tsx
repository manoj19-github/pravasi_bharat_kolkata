import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AlpanaBackground } from './components/decorations/AlpanaBackground'
import { FloatingFlowers } from './components/decorations/FloatingFlowers'
import { ScrollToTop } from './components/common/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { HotelsPage } from './pages/HotelsPage'
import { ExploreKolkataPage } from './pages/ExploreKolkataPage'
import { MapPage } from './pages/MapPage'

export function App() {
  return (
    <Router>
      {/* Automatically scroll to top whenever URL route changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FAF5EF] text-[#333333] flex flex-col relative selection:bg-[#D94B12] selection:text-white">
        {/* Cultural Background Layer */}
        <AlpanaBackground />
        <FloatingFlowers />

        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Route Content */}
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/explore-kolkata" element={<ExploreKolkataPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
