import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight
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
        {/* SECTION HEADER (UNIFIED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">

          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Featured Convention</span>{' '}
            <span className="text-[#BD1113]">Accommodations &amp; Stays</span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            A curated snapshot of premier luxury hotels, certified homestays, and boutique B&amp;Bs near Biswa Bangla Mela Prangan and key Kolkata corridors.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>

        </div>

        {/* ============================================================== */}
        {/* CONTINUOUS SMOOTH AUTO-SCROLLING CAROUSEL                      */}
        {/* ============================================================== */}
        <div className="relative w-full">

          {/* Left Edge Mask Gradient Overlay (Hidden on Mobile) */}
          <div
            className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 sm:w-28 lg:w-44 z-20 bg-gradient-to-r from-[#FAF5EC] via-[#FAF5EC]/85 to-transparent"
            aria-hidden="true"
          />

          {/* Right Edge Mask Gradient Overlay (Hidden on Mobile) */}
          <div
            className="hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 sm:w-28 lg:w-44 z-20 bg-gradient-to-l from-[#FAF5EC] via-[#FAF5EC]/85 to-transparent"
            aria-hidden="true"
          />

          {/* Continuous Infinite Scrolling Track */}
          <div
            className="w-full overflow-hidden py-3 sm:py-4 sm:[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="animate-infinite-scroll flex gap-5 sm:gap-6 items-stretch"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
                animationDuration: '140s'
              }}
            >
              {displayStays.map((stay, idx) => (
                <div
                  key={`${stay.id}-${idx}`}
                  className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 h-full flex flex-col"
                >
                  <AccommodationCard
                    hotel={stay}
                    initiallyExpanded={false}
                    compact={true}
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
