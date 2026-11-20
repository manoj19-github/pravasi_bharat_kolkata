import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ExternalLink, 
  MapPin, 
  Navigation, 
  Home, 
  Bed, 
  Globe 
} from 'lucide-react'
import siteLogo from '../../assets/images/logo-black-removebg-preview.png'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position with hysteresis for smooth sticky styling transitions
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          // Activates sticky frosted shadow styling after scrolling past the announcement bar
          if (currentY > 25) {
            setIsScrolled(true)
          } else if (currentY < 10) {
            setIsScrolled(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* ============================================================== */}
      {/* PART 1: TOP-MOST ANNOUNCEMENT BAR                             */}
      {/* Scrolls smoothly out of view with document (Zero Layout Shift) */}
      {/* ============================================================== */}
      <div className="w-full bg-gradient-to-r from-[#F4E4CD] via-[#F8EBDA] to-[#F4E4CD] border-b border-[#E3CCA9] py-1 px-4 sm:px-6 lg:px-10 select-none">
        <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10.5px] sm:text-[11px]">
          
          {/* Left: Authority & Host State Notice */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full border border-[#BD1113] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1 w-1 bg-[#BD1113]" />
            </span>
            <span className="font-bold tracking-tight text-[#0A265D]">
              Government of India &amp; Government of West Bengal • 19th PBD Convention 2027
            </span>
            <span className="text-[#C5A880] hidden md:inline font-light ml-1">|</span>
          </div>

          {/* Right: Venue & Official Parent Portal Pill */}
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#0A265D] hidden md:inline">
              Host Venue: <strong className="font-bold text-[#BD1113]">Biswa Bangla Mela Prangan</strong>
            </span>
            <span className="text-[#C5A880] hidden md:inline font-light">|</span>
            
            <a
              href="https://pbdindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#BD1113]/70 bg-white px-2.5 py-0.5 text-[10px] font-bold text-[#0A265D] shadow-2xs hover:bg-[#FFF7ED] hover:text-[#BD1113] transition-all"
            >
              <Globe className="h-3 w-3 text-[#BD1113]" />
              <span>Parent Portal: pbdindia.gov.in</span>
              <ExternalLink className="h-2.5 w-2.5 text-[#BD1113]" />
            </a>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* PART 2: STICKY MAIN NAVIGATION BAR                             */}
      {/* Always sticks to top:0 when scrolled, with frosted glass blur  */}
      {/* ============================================================== */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-10 select-none ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#BD1113]/30 py-1.5 sm:py-2'
            : 'bg-gradient-to-r from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] border-b-2 border-[#BD1113] py-2 sm:py-2.5 shadow-xs'
        }`}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          
          {/* Left: Branding Logo Block (Compact Height) */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center group py-0.5">
              <img 
                src={siteLogo} 
                alt="19th Pravasi Bharatiya Divas Convention 2027 • Kolkata" 
                className="h-8 sm:h-9 lg:h-[38px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            <span className="text-[#D9C4A6] hidden lg:inline font-light text-lg ml-1">|</span>
          </div>

          {/* Center: Navigation Links (Compact) */}
          <nav className="hidden lg:flex items-center gap-3">
            
            {/* Home Link */}
            <Link
              to="/"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all shadow-2xs ${
                isActive('/')
                  ? 'bg-[#BD1113] text-white hover:bg-[#A80E10]'
                  : 'bg-[#BD1113] text-white hover:bg-[#A80E10]'
              }`}
            >
              <Home className="h-3.5 w-3.5 text-white" />
              <span>Home</span>
            </Link>

            <span className="text-[#D9C4A6] font-light text-base">|</span>

            {/* Hotels & Stays Link */}
            <Link
              to="/hotels"
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                isActive('/hotels')
                  ? 'text-[#BD1113]'
                  : 'text-[#0A265D] hover:text-[#BD1113]'
              }`}
            >
              <Bed className="h-3.5 w-3.5 text-[#0A265D]" />
              <span>Hotels &amp; Stays</span>
            </Link>

            <span className="text-[#D9C4A6] font-light text-base">|</span>

          </nav>

          {/* Right: Action CTA Buttons (Compact) */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* Button 1: Venue Map */}
            <Link
              to="/map"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#BD1113] bg-white px-4 py-1.5 text-xs font-bold text-[#0A265D] shadow-2xs hover:bg-[#FAF3E7] hover:shadow-xs transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="h-3.5 w-3.5 text-[#BD1113] fill-[#BD1113]" />
              <span>Venue Map</span>
            </Link>

            {/* Button 2: Explore Kolkata */}
            <Link
              to="/explore-kolkata"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-4 py-1.5 text-xs font-bold text-white shadow-2xs hover:shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Navigation className="h-3 w-3 text-white fill-white" />
              <span>Explore Kolkata</span>
            </Link>

          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#0A265D] hover:bg-[#FAF7F2] lg:hidden transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#BD1113]" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E3CCA9] bg-[#FAF6F0] px-4 pt-2.5 pb-5 space-y-2 shadow-lg mt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#BD1113] text-white text-xs font-bold shadow-xs"
            >
              <Home className="h-3.5 w-3.5 text-white" />
              <span>Home</span>
            </Link>

            <Link
              to="/hotels"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-[#0A265D] border border-[#E3CCA9] text-xs font-bold"
            >
              <Bed className="h-3.5 w-3.5 text-[#0A265D]" />
              <span>Hotels &amp; Stays</span>
            </Link>

            <Link
              to="/map"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#BD1113] bg-white text-[#0A265D] text-xs font-bold"
            >
              <MapPin className="h-3.5 w-3.5 text-[#BD1113] fill-[#BD1113]" />
              <span>Venue Map</span>
            </Link>

            <Link
              to="/explore-kolkata"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#BD1113] text-white text-xs font-bold shadow-xs"
            >
              <Navigation className="h-3.5 w-3.5 text-white fill-white" />
              <span>Explore Kolkata</span>
            </Link>
          </div>
        )}

      </header>
    </>
  )
}
