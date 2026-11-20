import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  Navigation, 
  Compass, 
  ArrowRight, 
  Clock, 
  Info, 
  X,
  Train,
  Camera
} from 'lucide-react'
import { ATTRACTIONS_DATA, Attraction } from '../../data/attractions'
import { DESTINATION_REAL_IMAGES } from '../../data/destinationImages'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import staticCornerMotif from '../../assets/images/cultural/corner_motif_crimson_right.png'
import chakra from '../../assets/alpana/chakra.svg'

// Enriched destination metadata for convention delegates
interface EnrichedAttraction extends Attraction {
  distanceFromVenue: string
  nearestMetro: string
  timings: string
  allImages: string[]
}

const ENRICHED_DATA: Record<string, { distance: string; metro: string; timings: string }> = {
  'victoria-memorial': {
    distance: '6.8 km (18 min via Maa Flyover)',
    metro: 'Rabindra Sadan / Maidan Metro (Blue Line)',
    timings: '10:00 AM – 5:00 PM (Gardens from 5:30 AM)'
  },
  'howrah-bridge': {
    distance: '8.5 km (22 min via Central Corridor)',
    metro: 'Howrah Metro (Green Line Under-River)',
    timings: 'Open 24 Hours (Best at Sunset & Illuminated Night)'
  },
  'dakshineswar-temple': {
    distance: '16.5 km (35 min via Belgharia Expressway)',
    metro: 'Dakshineswar Metro (Blue Line Terminal)',
    timings: '6:00 AM – 12:30 PM & 3:30 PM – 8:30 PM'
  },
  'belur-math': {
    distance: '15.0 km (30 min via GT Road)',
    metro: 'Dakshineswar Metro + Hooghly Ferry',
    timings: '6:30 AM – 11:30 AM & 4:00 PM – 8:30 PM (Aarti 5:30 PM)'
  },
  'prinsep-ghat': {
    distance: '8.0 km (18 min via Red Road)',
    metro: 'Prinsep Ghat Circular Railway / Esplanade Metro',
    timings: 'Open 24 Hours (Boating: 3:00 PM – 7:30 PM)'
  },
  'jorasanko-thakur-bari': {
    distance: '7.5 km (20 min via CR Avenue)',
    metro: 'Girish Park Metro (Blue Line)',
    timings: '10:30 AM – 5:00 PM (Closed Mondays)'
  }
}

// MULTI-IMAGE FADING CAROUSEL COMPONENT (COMPACT HEIGHT)
interface CardImageGalleryProps {
  images: string[]
  alt: string
  category: string
  bestTime?: string
  intervalMs?: number
}

const CardImageGallery: React.FC<CardImageGalleryProps> = ({ 
  images, 
  alt, 
  category, 
  bestTime, 
  intervalMs = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [images.length, intervalMs, isHovered])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div 
      className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden bg-slate-900 group/gallery select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stacked Images with Smooth Cross-Fade */}
      {images.map((imgUrl, idx) => (
        <div
          key={`${imgUrl}-${idx}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={imgUrl}
            alt={`${alt} - View ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}

      {/* Bottom Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-20 pointer-events-none" />

      {/* Category Pill */}
      <div className="absolute top-2.5 right-2.5 z-20 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#BD1113] to-[#8E0D0E] text-white text-[9.5px] font-bold uppercase px-2.5 py-0.5 shadow-xs border border-[#FDE68A]/30">
        <Sparkles className="w-2.5 h-2.5 text-white" />
        <span>{category}</span>
      </div>

      {/* Multi-Photo Indicator Badge */}
      {images.length > 1 && (
        <div className="absolute top-2.5 left-2.5 z-20 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9.5px] font-semibold text-white/95 border border-white/15">
          <Camera className="w-2.5 h-2.5 text-amber-300" />
          <span>{currentIndex + 1}/{images.length}</span>
        </div>
      )}

      {/* Manual Chevron Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-30 w-6 h-6 rounded-full bg-black/50 hover:bg-[#BD1113] text-white flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-30 w-6 h-6 rounded-full bg-black/50 hover:bg-[#BD1113] text-white flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </>
      )}

      {/* Best Time Pill */}
      {bestTime && (
        <div className="absolute bottom-2 left-2.5 z-20 inline-flex items-center gap-1 text-[10px] text-amber-300 font-semibold drop-shadow-sm">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>{bestTime}</span>
        </div>
      )}

      {/* Gallery Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2.5 z-20 flex items-center gap-1">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(dotIdx)
              }}
              aria-label={`Jump to slide ${dotIdx + 1}`}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                dotIdx === currentIndex ? 'w-3 bg-amber-400' : 'w-1 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const KolkataHighlights: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<EnrichedAttraction | null>(null)

  const featuredAttractions: EnrichedAttraction[] = ATTRACTIONS_DATA.slice(0, 6).map((attraction) => {
    const meta = ENRICHED_DATA[attraction.id] || {
      distance: 'Within Kolkata Metro Core',
      metro: 'Central Corridor Line',
      timings: 'Regular Operating Hours'
    }

    const realGallery = DESTINATION_REAL_IMAGES[attraction.id] || [attraction.image]

    return {
      ...attraction,
      distanceFromVenue: meta.distance,
      nearestMetro: meta.metro,
      timings: meta.timings,
      allImages: realGallery
    }
  })

  return (
    <section 
      id="kolkata-highlights" 
      className="relative py-7 sm:py-10 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#EFE6DC] overflow-hidden select-none"
    >
      
      {/* Background Decorative Motifs */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-20 select-none">
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

      <div className="absolute top-4 right-1/4 w-24 h-24 pointer-events-none z-0 opacity-10 hidden lg:block">
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
          
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-0.5 shadow-2xs">
              <MapPin className="w-3 h-3 text-[#BD1113]" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#BD1113]">
                ICONIC DESTINATIONS
              </span>
            </div>

            <span className="w-1 h-1 rounded-full bg-[#BD1113]/50" />

            <div className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 border border-[#EBD6BE] shadow-2xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10.5px] font-medium text-[#475569]">
                PBD 2027 Sightseeing
              </span>
            </div>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight max-w-4xl">
            <span className="text-[#0A265D]">Iconic Kolkata</span>{' '}
            <span className="text-[#BD1113]">Destinations &amp; Cultural Heritage</span>
          </h2>

          <p className="mt-1 text-xs text-[#475569] font-medium max-w-xl leading-relaxed">
            Curated historic monuments, sacred riverfront shrines, and architectural wonders situated within easy reach of Biswa Bangla Mela Prangan.
          </p>

          {/* Compact View All Button directly below header */}
          <div className="mt-2.5 flex items-center justify-center">
            <Link
              to="/explore-kolkata"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#BD1113] bg-white px-4 py-1 text-xs font-semibold text-[#BD1113] shadow-2xs hover:bg-[#BD1113] hover:text-white transition-all"
            >
              <span>View All Destinations</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 6-CARD GRID: COMPACT HEIGHT (FITS COMFORTABLY IN VIEWPORT)     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full mx-auto">
          {featuredAttractions.map((sight, idx) => (
            <div
              key={sight.id}
              className="rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] hover:border-[#BD1113]/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Card Top: Multi-Image Fading Gallery */}
              <div>
                <CardImageGallery
                  images={sight.allImages}
                  alt={sight.name}
                  category={sight.category}
                  bestTime={sight.bestTime || sight.visitingHours}
                  intervalMs={3500 + (idx % 3) * 600}
                />

                {/* Card Body Information - Reduced Padding & Font Size */}
                <div className="p-3.5 sm:p-4">
                  
                  {/* Distance from Venue */}
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#BD1113] mb-1">
                    <MapPin className="h-3 w-3 shrink-0 text-[#BD1113]" />
                    <span>{sight.distanceFromVenue}</span>
                  </div>

                  {/* Landmark Name */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A265D] tracking-tight leading-snug group-hover:text-[#BD1113] transition-colors line-clamp-1">
                    {sight.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-xs text-[#475569] leading-snug line-clamp-2 font-normal">
                    {sight.description}
                  </p>

                  {/* Highlights Capsules */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {(Array.isArray(sight.highlights) ? sight.highlights : String(sight.highlights).split(',')).slice(0, 2).map((hl: string, hlIdx: number) => (
                      <span
                        key={hlIdx}
                        className="inline-flex items-center text-[10px] font-medium text-[#0A265D] bg-[#FAF0E1] border border-[#EBD6BE] px-2 py-0.5 rounded-md"
                      >
                        {hl.trim()}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3.5 sm:p-4 pt-0">
                <div className="pt-2 border-t border-[#F0E4D5] flex items-center justify-between gap-2">
                  
                  <Link
                    to={`/explore-kolkata#${sight.id}`}
                    className="inline-flex items-center gap-1 rounded-full bg-[#BD1113] hover:bg-[#A80E10] text-white px-3.5 py-1 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                    title={`Explore ${sight.name} on Explore Kolkata page`}
                  >
                    <Info className="h-3 w-3" />
                    <span>Learn More</span>
                  </Link>

                  <a
                    href={sight.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A265D] hover:text-[#BD1113] transition-colors"
                  >
                    <span>Route</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Compact View All Button below cards */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center relative z-20">
          <Link
            to="/explore-kolkata"
            className="inline-flex items-center gap-2 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-4 sm:px-5 py-1.5 text-xs font-semibold text-white shadow-xs hover:shadow transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>View All Destinations</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </Link>
        </div>

      </div>

      {/* POPUP MODAL */}
      {selectedAttraction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedAttraction(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-[#FFFDF9] border border-[#EFE1CD] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedAttraction.allImages[0] || selectedAttraction.image}
                alt={selectedAttraction.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <button
                onClick={() => setSelectedAttraction(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 text-white hover:bg-[#BD1113] transition-all flex items-center justify-center backdrop-blur-md border border-white/20 cursor-pointer z-30"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 rounded-full bg-[#BD1113] text-white text-[10px] font-bold uppercase px-2.5 py-0.5">
                <Sparkles className="w-2.5 h-2.5 text-[#FDE68A]" />
                <span>{selectedAttraction.category}</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 z-20">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{selectedAttraction.distanceFromVenue}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedAttraction.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#BD1113] mb-1.5 flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  <span>Gallery Views</span>
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {selectedAttraction.allImages.map((img, i) => (
                    <div key={i} className="relative h-16 rounded-lg overflow-hidden border border-[#EBD6BE]">
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF0E1]/70 p-3 rounded-xl border border-[#EBD6BE]">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#BD1113] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-[#BD1113]">Visiting Hours</span>
                    <span className="text-xs text-[#0A265D] font-medium">{selectedAttraction.timings}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Train className="w-3.5 h-3.5 text-[#BD1113] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-[#BD1113]">Nearest Metro</span>
                    <span className="text-xs text-[#0A265D] font-medium">{selectedAttraction.nearestMetro}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0E4D5] flex items-center justify-between gap-3">
                <a
                  href={selectedAttraction.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-4 py-1.5 text-xs font-semibold text-white transition-all"
                >
                  <Navigation className="h-3 w-3" />
                  <span>Google Maps</span>
                  <ExternalLink className="h-3 w-3 text-white/80" />
                </a>

                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="px-4 py-1.5 rounded-full border border-[#D9C4A6] text-xs font-medium text-[#475569] hover:bg-slate-100 transition cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  )
}
