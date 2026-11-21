import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ExternalLink,
  MapPin,
  Navigation,
  Home,
  Bed,
  Sparkles,
  Calendar
} from 'lucide-react'
import siteLogo from '../../assets/images/logo-black-removebg-preview.png'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        const toggleBtn = document.getElementById('mobile-menu-toggle')
        if (!toggleBtn || !toggleBtn.contains(e.target as Node)) {
          setMobileMenuOpen(false)
        }
      }
    }

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

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
      {/* STICKY MAIN NAVIGATION BAR                                     */}
      {/* Fixed height & padding - zero vertical shift or bounce on scroll*/}
      {/* ============================================================== */}
      <header
        className={`sticky top-0 z-40 px-3 sm:px-6 lg:px-10 py-2 sm:py-2.5 border-b border-[#BD1113]/30 transition-colors duration-150 select-none ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-r from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] shadow-xs'
          }`}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">

          {/* Left: Branding Logo Block (Compact Height) */}
          <div className="flex items-center gap-2 sm:gap-3">
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
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${isActive('/')
                ? 'bg-[#BD1113] text-white shadow-2xs hover:bg-[#A80E10]'
                : 'text-[#0A265D] hover:text-[#BD1113] hover:bg-[#FAF0E1]/80'
                }`}
            >
              <Home className={`h-3.5 w-3.5 ${isActive('/') ? 'text-white' : 'text-[#0A265D]'}`} />
              <span>Home</span>
            </Link>

            <span className="text-[#D9C4A6] font-light text-base">|</span>

            {/* Hotels & Stays Link */}
            <Link
              to="/hotels"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${isActive('/hotels')
                ? 'bg-[#BD1113] text-white shadow-2xs hover:bg-[#A80E10]'
                : 'text-[#0A265D] hover:text-[#BD1113] hover:bg-[#FAF0E1]/80'
                }`}
            >
              <Bed className={`h-3.5 w-3.5 ${isActive('/hotels') ? 'text-white' : 'text-[#0A265D]'}`} />
              <span>Hotels &amp; Stays</span>
            </Link>

            {/* <span className="text-[#D9C4A6] font-light text-base">|</span> */}

            {/* Iconic Destinations Link */}
            {/* <Link
              to="/explore-kolkata"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${isActive('/explore-kolkata')
                  ? 'bg-[#BD1113] text-white shadow-2xs hover:bg-[#A80E10]'
                  : 'text-[#0A265D] hover:text-[#BD1113] hover:bg-[#FAF0E1]/80'
                }`}
            >
              <Navigation className={`h-3.5 w-3.5 ${isActive('/explore-kolkata') ? 'text-white' : 'text-[#0A265D]'}`} />
              <span>Explore Kolkata</span>
            </Link> */}

            {/* <span className="text-[#D9C4A6] font-light text-base">|</span> */}

            {/* Geoportal Map Link */}
            {/* <Link
              to="/map"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${isActive('/map')
                  ? 'bg-[#BD1113] text-white shadow-2xs hover:bg-[#A80E10]'
                  : 'text-[#0A265D] hover:text-[#BD1113] hover:bg-[#FAF0E1]/80'
                }`}
            >
              <MapPin className={`h-3.5 w-3.5 ${isActive('/map') ? 'text-white' : 'text-[#0A265D]'}`} />
              <span>Geoportal Map</span>
            </Link> */}

          </nav>

          {/* Right: Action CTA Buttons (Compact Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5">

            {/* Button 1: Venue Map */}
            <Link
              to="/map"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-2xs transition-all transform hover:-translate-y-0.5 ${isActive('/map')
                ? 'bg-[#BD1113] text-white hover:bg-[#A80E10] border border-[#BD1113]'
                : 'border border-[#EBD6BE] bg-white text-[#0A265D] hover:border-[#BD1113] hover:text-[#BD1113] hover:bg-[#FAF3E7]'
                }`}
            >
              <MapPin className={`h-3.5 w-3.5 ${isActive('/map') ? 'text-white fill-white' : 'text-[#BD1113] fill-[#BD1113]'}`} />
              <span>Venue Map</span>
            </Link>

            {/* Button 2: Explore Kolkata */}
            <Link
              to="/explore-kolkata"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-2xs transition-all transform hover:-translate-y-0.5 ${isActive('/explore-kolkata')
                ? 'bg-[#BD1113] text-white hover:bg-[#A80E10] border border-[#BD1113]'
                : 'border border-[#EBD6BE] bg-white text-[#0A265D] hover:border-[#BD1113] hover:text-[#BD1113] hover:bg-[#FAF3E7]'
                }`}
            >
              <Navigation className={`h-3 w-3 ${isActive('/explore-kolkata') ? 'text-white fill-white' : 'text-[#BD1113] fill-[#BD1113]'}`} />
              <span>Explore Kolkata</span>
            </Link>

          </div>

          {/* Mobile & Tablet Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#0A265D] hover:bg-[#FAF0E1] active:scale-95 lg:hidden transition-all cursor-pointer border border-[#EBD6BE] bg-white shadow-2xs"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#BD1113]" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

        {/* Mobile & Tablet Slide-Down Navigation Drawer with Frosted Blur & Backdrop */}
        {mobileMenuOpen && (
          <div
            ref={drawerRef}
            className="lg:hidden border-t border-[#E3CCA9] bg-[#FFFDF9]/98 backdrop-blur-md px-3 sm:px-6 pt-3 pb-5 shadow-2xl mt-2 rounded-b-2xl animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#E3CCA9]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BD1113] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D97706]" />
                <span>PBD 2027 Navigation</span>
              </span>
              <span className="text-[10.5px] font-semibold text-[#0A265D] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#BD1113]" />
                <span>Jan 7–9, 2027</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${isActive('/')
                  ? 'bg-[#BD1113] text-white shadow-xs'
                  : 'bg-white text-[#0A265D] border border-[#E3CCA9] hover:bg-[#FAF0E1]'
                  }`}
              >
                <Home className={`h-4 w-4 shrink-0 ${isActive('/') ? 'text-white' : 'text-[#BD1113]'}`} />
                <div>
                  <span className="block leading-none">Convention Home</span>
                  <span className={`text-[10px] font-normal leading-none mt-1 block ${isActive('/') ? 'text-white/80' : 'text-slate-500'}`}>Official Welcome &amp; Schedule</span>
                </div>
              </Link>

              <Link
                to="/hotels"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${isActive('/hotels')
                  ? 'bg-[#BD1113] text-white shadow-xs'
                  : 'bg-white text-[#0A265D] border border-[#E3CCA9] hover:bg-[#FAF0E1]'
                  }`}
              >
                <Bed className={`h-4 w-4 shrink-0 ${isActive('/hotels') ? 'text-white' : 'text-[#BD1113]'}`} />
                <div>
                  <span className="block leading-none">Hotels &amp; Stays</span>
                  <span className={`text-[10px] font-normal leading-none mt-1 block ${isActive('/hotels') ? 'text-white/80' : 'text-slate-500'}`}>69 NIDHI Classified Properties</span>
                </div>
              </Link>

              <Link
                to="/explore-kolkata"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${isActive('/explore-kolkata')
                  ? 'bg-[#BD1113] text-white shadow-xs'
                  : 'bg-white text-[#0A265D] border border-[#E3CCA9] hover:bg-[#FAF0E1]'
                  }`}
              >
                <Navigation className={`h-4 w-4 shrink-0 ${isActive('/explore-kolkata') ? 'text-white fill-white' : 'text-[#BD1113] fill-[#BD1113]'}`} />
                <div>
                  <span className="block leading-none">Explore Kolkata</span>
                  <span className={`text-[10px] font-normal leading-none mt-1 block ${isActive('/explore-kolkata') ? 'text-white/80' : 'text-slate-500'}`}>20 Iconic Heritage Sights</span>
                </div>
              </Link>

              <Link
                to="/map"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${isActive('/map')
                  ? 'bg-[#BD1113] text-white shadow-xs'
                  : 'bg-white text-[#0A265D] border border-[#E3CCA9] hover:bg-[#FAF0E1]'
                  }`}
              >
                <MapPin className={`h-4 w-4 shrink-0 ${isActive('/map') ? 'text-white fill-white' : 'text-[#BD1113] fill-[#BD1113]'}`} />
                <div>
                  <span className="block leading-none">Geoportal Map</span>
                  <span className={`text-[10px] font-normal leading-none mt-1 block ${isActive('/map') ? 'text-white/80' : 'text-slate-500'}`}>104 Interactive Mapped POIs</span>
                </div>
              </Link>
            </div>

            {/* Parent Portal External Link */}
            <div className="pt-2.5 mt-2.5 border-t border-[#E3CCA9]/60 flex items-center justify-between text-[11px]">
              <span className="text-[#64748B]">Official Parent Portal</span>
              <a
                href="https://pbdindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#BD1113] hover:underline"
              >
                <span>pbdindia.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

      </header>
    </>
  )
}
