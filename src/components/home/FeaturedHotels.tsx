import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  Pause,
  Play,
  ArrowRight,
  Home,
  Coffee
} from 'lucide-react'
import { HOTELS_DATA, Hotel } from '../../data/hotels'
import { AccommodationCard } from '../hotels/AccommodationCard'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import chakra from '../../assets/alpana/chakra.svg'
import staticCornerMotif from '../../assets/images/cultural/corner_motif_crimson_right.png'

export const FeaturedHotels: React.FC = () => {
  // Curate exactly 20 Hotels, 8 Homestays, and 8 Bed & Breakfasts (36 total curated stays)
  const curatedStays: Hotel[] = useMemo(() => {
    const hotels = HOTELS_DATA
      .filter((h) => h.propertyType === 'hotel')
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 20)

    const homestays = HOTELS_DATA
      .filter((h) => h.propertyType === 'homestay')
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 8)

    const bnbs = HOTELS_DATA
      .filter((h) => h.propertyType === 'bnb')
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 8)

    return [...hotels, ...homestays, ...bnbs]
  }, [])

  // Triplicate the array for seamless, mathematically continuous 360-degree infinite auto-scrolling
  const displayStays = useMemo(() => {
    return [...curatedStays, ...curatedStays, ...curatedStays]
  }, [curatedStays])

  const [isPaused, setIsPaused] = useState(false)

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev)
  }

  return (
    <section
      id="featured-hotels"
      className="relative py-8 sm:py-12 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-y border-[#EFE6DC] overflow-hidden select-none"
    >
      {/* Background Bengali Cultural Motifs */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-20 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-[340px] pointer-events-none z-0 opacity-25 select-none">
        <img
          src={staticCornerMotif}
          alt=""
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(189,17,19,0.08)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-4 left-1/4 w-20 h-20 pointer-events-none z-0 opacity-10 hidden lg:block">
        <img
          src={chakra}
          alt=""
          className="w-full h-full object-contain animate-float"
          aria-hidden="true"
        />
      </div>

      <div className="w-[96vw] max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">

        {/* ============================================================== */}
        {/* SECTION HEADER (Snapshot presentation, NO filter bars)         */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">

          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-1 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#BD1113]" />
              <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#BD1113]">
                DELEGATE ACCOMMODATION SNAPSHOT
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#0A265D] bg-white/90 border border-[#EBD6BE] rounded-full px-3 py-1 shadow-2xs">
              <span className="inline-flex items-center gap-1 text-[#BD1113]">
                <Building2 className="w-3 h-3" /> 48 Hotels
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-700">
                <Home className="w-3 h-3" /> 11 Homestays
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-amber-700">
                <Coffee className="w-3 h-3" /> 10 B&amp;Bs
              </span>
            </div>
          </div>

          {/* Heading & Live Status Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-5xl">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Featured Convention <span className="text-[#BD1113]">Accommodations &amp; Stays</span>
            </h2>

            {/* Quick Header Controls */}
            <div className="inline-flex items-center gap-2 shrink-0">
              {/* Play/Pause Auto-Scroll */}
              <button
                onClick={handleTogglePause}
                aria-label={isPaused ? 'Resume continuous scroll' : 'Pause continuous scroll'}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9C4A6] bg-white px-3 py-1 text-xs font-semibold text-[#0A265D] shadow-2xs hover:border-[#BD1113] hover:text-[#BD1113] transition-all cursor-pointer"
                title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 fill-current text-emerald-600" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 fill-current text-[#BD1113]" />
                    <span>Pause</span>
                  </>
                )}
              </button>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 border border-[#EBD6BE] shadow-2xs text-[11px] font-medium text-[#475569]">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500'} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                </span>
                <span>{isPaused ? 'Paused' : 'Continuous Scroll'}</span>
              </div>
            </div>
          </div>

          <p className="mt-1.5 text-xs sm:text-sm text-[#475569] font-medium max-w-2xl leading-relaxed">
            A curated snapshot of premier luxury hotels, certified homestays, and boutique B&amp;Bs near Biswa Bangla Mela Prangan and key Kolkata corridors.
          </p>

        </div>

        {/* ============================================================== */}
        {/* CONTINUOUS SMOOTH AUTO-SCROLLING CAROUSEL                      */}
        {/* ============================================================== */}
        <div className="relative w-full">

          {/* Left Edge Mask Gradient Overlay */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 z-20 bg-gradient-to-r from-[#FAF5EC] via-[#FAF5EC]/85 to-transparent"
            aria-hidden="true"
          />

          {/* Right Edge Mask Gradient Overlay */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 z-20 bg-gradient-to-l from-[#FAF5EC] via-[#FAF5EC]/85 to-transparent"
            aria-hidden="true"
          />

          {/* Continuous Infinite Scrolling Track */}
          <div
            className="w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="animate-infinite-scroll flex gap-5 sm:gap-6"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
                animationDuration: '140s'
              }}
            >
              {displayStays.map((stay, idx) => (
                <div
                  key={`${stay.id}-${idx}`}
                  className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0"
                >
                  <AccommodationCard
                    hotel={stay}
                    initiallyExpanded={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center-Aligned Action Button Below Carousel */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#BD1113] hover:bg-[#A80E10] text-white px-8 py-3.5 text-sm sm:text-base font-bold shadow-md hover:shadow-xl hover:shadow-[#BD1113]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
            >
              <span>View All Hotels, Homestays &amp; B&amp;Bs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
