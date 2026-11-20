import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  MapPin, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Star, 
  Navigation, 
  Pause, 
  Play, 
  ArrowRight 
} from 'lucide-react'
import { HOTELS_DATA } from '../../data/hotels'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import chakra from '../../assets/alpana/chakra.svg'
import staticCornerMotif from '../../assets/images/cultural/corner_motif_crimson_right.png'

export const FeaturedHotels: React.FC = () => {
  // Curated list of premier convention hotels
  const baseHotels = HOTELS_DATA.slice(0, 8)
  
  // Triplicate array for mathematically seamless, infinite smooth auto-scrolling
  const displayHotels = [...baseHotels, ...baseHotels, ...baseHotels]
  
  const [isPaused, setIsPaused] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'normal' | 'reverse'>('normal')

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev)
  }

  const handleScrollLeft = () => {
    setScrollDirection('reverse')
    setIsPaused(false)
  }

  const handleScrollRight = () => {
    setScrollDirection('normal')
    setIsPaused(false)
  }

  return (
    <section 
      id="featured-hotels" 
      className="relative py-7 sm:py-10 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-y border-[#EFE6DC] overflow-hidden select-none"
    >
      
      {/* Background Bengali Alpana Motif */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-10 opacity-25 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.12)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-[360px] pointer-events-none z-10 opacity-30 select-none">
        <img
          src={staticCornerMotif}
          alt=""
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-4 left-1/4 w-24 h-24 pointer-events-none z-0 opacity-10 hidden lg:block">
        <img
          src={chakra}
          alt=""
          className="w-full h-full object-contain animate-float"
          aria-hidden="true"
        />
      </div>

      <div className="w-[90vw] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER (REDUCED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">
          
          {/* Top Tag & Live Status Indicator */}
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-0.5 shadow-2xs">
              <Building2 className="w-3 h-3 text-[#BD1113]" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#BD1113]">
                DELEGATE STAYS
              </span>
            </div>

            <span className="w-1 h-1 rounded-full bg-[#BD1113]/50" />

            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 border border-[#EBD6BE] shadow-2xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isPaused ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
              </span>
              <span className="text-[10.5px] font-medium text-[#475569]">
                {isPaused ? 'Paused' : 'Continuous Scroll'}
              </span>
            </div>
          </div>

          {/* Center-Aligned Title + Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 max-w-5xl">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
              <span className="text-[#0A265D]">Featured Convention</span>{' '}
              <span className="text-[#BD1113]">Accommodation &amp; Stays</span>
            </h2>

            {/* Compact Header Buttons */}
            <div className="inline-flex items-center gap-2 shrink-0">
              <button
                onClick={handleTogglePause}
                aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
                className="inline-flex items-center gap-1 rounded-full border border-[#D9C4A6] bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#0A265D] shadow-2xs hover:border-[#BD1113] hover:text-[#BD1113] transition-all cursor-pointer"
              >
                {isPaused ? <Play className="w-3 h-3 fill-current text-emerald-600" /> : <Pause className="w-3 h-3 fill-current text-[#BD1113]" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <Link
                to="/hotels"
                className="inline-flex items-center gap-1 rounded-full border border-[#BD1113] bg-white px-3.5 py-1 text-[11px] font-semibold text-[#BD1113] shadow-2xs hover:bg-[#BD1113] hover:text-white transition-all"
              >
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <p className="mt-1 text-xs text-[#475569] font-medium max-w-xl leading-relaxed">
            Curated luxury properties situated in direct proximity to Biswa Bangla Mela Prangan and along the Maa Flyover corridor.
          </p>

        </div>

        {/* ============================================================== */}
        {/* INFINITE SMOOTH SCROLLING CAROUSEL WITH COMPACT CARDS          */}
        {/* ============================================================== */}
        <div className="relative w-full">

          {/* Edge Masks */}
          <div 
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 z-20 bg-gradient-to-r from-[#FAF5EC] via-[#FAF5EC]/90 to-transparent" 
            aria-hidden="true" 
          />
          <div 
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 z-20 bg-gradient-to-l from-[#FAF5EC] via-[#FAF5EC]/90 to-transparent" 
            aria-hidden="true" 
          />

          {/* Direction Arrows */}
          <button
            onClick={handleScrollLeft}
            aria-label="Scroll Carousel Left"
            title="Scroll Left"
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#EBD6BE] flex items-center justify-center text-[#BD1113] hover:bg-[#BD1113] hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2]" />
          </button>

          <button
            onClick={handleScrollRight}
            aria-label="Scroll Carousel Right"
            title="Scroll Right"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#EBD6BE] flex items-center justify-center text-[#BD1113] hover:bg-[#BD1113] hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>

          {/* Carousel Viewport */}
          <div
            className="w-full overflow-hidden py-2 sm:py-3 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="animate-infinite-scroll flex gap-4 sm:gap-6"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
                animationDirection: scrollDirection === 'reverse' ? 'reverse' : 'normal',
              }}
            >
              {displayHotels.map((hotel, index) => (

                /* COMPACT, REDUCED HEIGHT HOTEL CARD */
                <div
                  key={`${hotel.id}-${index}`}
                  className="w-[270px] sm:w-[310px] lg:w-[330px] shrink-0 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] hover:border-[#BD1113]/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >

                  {/* Card Content Top */}
                  <div>
                    {/* Hotel Image Container - Balanced Medium-Large Height */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                      {/* Category Badge */}
                      <div className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#BD1113] to-[#8E0D0E] text-white text-[9.5px] font-bold uppercase px-2.5 py-0.5 shadow-xs">
                        {hotel.category === 'Luxury' ? (
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        ) : (
                          <Star className="w-2.5 h-2.5 text-white fill-white" />
                        )}
                        <span>{hotel.category}</span>
                      </div>

                      {/* Star Rating Badge */}
                      <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md px-2 py-0.5 text-white text-[10px] font-semibold border border-white/15">
                        <Star className="w-2.5 h-2.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span>{hotel.category === 'Luxury' ? '5-Star Luxury' : '4-Star Premium'}</span>
                      </div>
                    </div>

                    {/* Card Body Information - Reduced Padding */}
                    <div className="p-3 sm:p-3.5">

                      {/* Proximity Distance */}
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#BD1113] mb-1">
                        <MapPin className="h-3 w-3 shrink-0 text-[#BD1113]" />
                        <span>{hotel.proximityToVenue}</span>
                      </div>

                      {/* Hotel Name */}
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#0A265D] tracking-tight leading-snug group-hover:text-[#BD1113] transition-colors line-clamp-1">
                        {hotel.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-1 text-[11px] text-[#475569] leading-snug line-clamp-2 font-normal">
                        {hotel.description}
                      </p>

                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-3 sm:p-3.5 pt-0">
                    <div className="pt-2 border-t border-[#F0E4D5] flex items-center justify-between">

                      <a
                        href={hotel.officialWebsite || hotel.bookingSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-3.5 py-1 text-[11px] font-semibold text-white shadow-2xs transition-all"
                      >
                        <span>Book</span>
                        <ExternalLink className="h-2.5 w-2.5 text-white" />
                      </a>

                      <a
                        href={hotel.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A265D] hover:text-[#BD1113] transition-colors"
                      >
                        <Navigation className="h-2.5 w-2.5 text-[#BD1113]" />
                        <span>Directions</span>
                      </a>

                    </div>
                  </div>

                </div>

              ))}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* COMPACT "VIEW ALL HOTELS" BUTTON                               */}
        {/* ============================================================== */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center relative z-20">
          <Link
            to="/hotels"
            className="inline-flex items-center gap-2 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-4 sm:px-5 py-1.5 text-xs font-semibold text-white shadow-xs hover:shadow transition-all"
          >
            <Building2 className="w-3.5 h-3.5 text-white" />
            <span>View All Hotels &amp; Stays</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </Link>
        </div>

      </div>

    </section>
  )
}
