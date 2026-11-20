import React, { useState, useEffect } from 'react'
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Camera,
  Navigation,
  ExternalLink,
  Clock,
  Train,
  Ticket,
  Sparkles,
  BookOpen,
  Info
} from 'lucide-react'
import { Attraction } from '../../data/attractions'
import { getDestinationImages } from '../../data/destinationImages'

interface DestinationCardProps {
  attraction: Attraction
  onOpenGallery: (attraction: Attraction, images: string[]) => void
  isTargeted?: boolean
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  attraction,
  onOpenGallery,
  isTargeted = false
}) => {
  const images = getDestinationImages(attraction.id, attraction.images)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Auto-fading slideshow
  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      id={attraction.id}
      className={`group relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${isTargeted
          ? 'border-[#BD1113] ring-4 ring-[#BD1113]/30 shadow-2xl scale-[1.01] bg-[#FFFDF9]'
          : 'border-[#F3E8D8] shadow-sm hover:shadow-xl hover:shadow-[#BD1113]/10 hover:-translate-y-1.5 hover:border-[#BD1113]/30'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Media Area: Fading Cross-Fade Photo Carousel */}
      <div>
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 select-none">
          {images.map((imgUrl, idx) => (
            <img
              key={`${imgUrl}-${idx}`}
              src={imgUrl}
              alt={`${attraction.name} - View ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentImgIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
            />
          ))}

          {/* Readability Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35 pointer-events-none z-10" />

          {/* Top Left: Category Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 bg-[#BD1113]/90 backdrop-blur-md text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-sm tracking-wide">
              <Sparkles className="h-2.5 w-2.5 text-amber-300" />
              {attraction.category}
            </span>
          </div>

          {/* Top Right: Photo Counter & Gallery Trigger */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
            <button
              onClick={() => onOpenGallery(attraction, images)}
              className="inline-flex items-center gap-1 bg-black/60 hover:bg-[#BD1113] backdrop-blur-md text-white text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 transition-all shadow-sm"
              title="View full-screen gallery"
            >
              <Camera className="h-3 w-3" />
              <span>{currentImgIndex + 1}/{images.length}</span>
            </button>
          </div>

          {/* Previous / Next Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md transition opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md transition opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Distance Pin from Venue Pill */}
          <div className="absolute bottom-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#BD1113] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm border border-[#BD1113]/20">
              <MapPin className="h-3 w-3 text-[#BD1113]" />
              {attraction.distanceFromVenue}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {/* Nearest Metro Line */}
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mb-1">
            <Train className="h-3 w-3 text-[#BD1113]" />
            <span className="line-clamp-1">{attraction.nearestMetro}</span>
          </div>

          {/* Destination Title */}
          <h3 className="font-serif font-bold text-lg text-[#0F172A] leading-snug group-hover:text-[#BD1113] transition-colors">
            {attraction.name}
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs font-semibold text-amber-900/80 leading-snug">
            {attraction.tagline}
          </p>

          {/* Editorial Narrative */}
          <p className="mt-2 text-xs text-[#475569] leading-relaxed line-clamp-3">
            {attraction.description}
          </p>

          {/* Highlights Capsules */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {attraction.highlights.slice(0, 3).map((hl, idx) => (
              <span
                key={idx}
                className="text-[10.5px] bg-[#FAF7F2] text-[#0F172A] px-2 py-0.5 rounded-md border border-[#E5D5C5] font-medium"
              >
                {hl}
              </span>
            ))}
          </div>

          {/* Collapsible Trigger for Deep Dive & Delegate Tips */}
          <div className="mt-3.5 pt-3 border-t border-[#F3E8D8]">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-1.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#FEF3C7] text-xs font-semibold text-[#8B1D1D] transition-colors border border-[#E5D5C5]/60"
            >
              <span className="flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 text-[#BD1113]" />
                <span>{isExpanded ? 'Hide Historical Context & Tips' : 'Historical Significance & Delegate Tips'}</span>
              </span>
              <ChevronDown
                className={`h-4 w-4 text-[#8B1D1D] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 pt-3' : 'max-h-0 opacity-0'
                }`}
            >
              {/* Historical Significance */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#BD1113] flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  <span>Historical &amp; Cultural Significance</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  {attraction.historicalSignificance}
                </p>
              </div>

              {/* Delegate Practical Advice */}
              <div className="mt-3 p-2.5 rounded-xl bg-[#FEF3C7]/60 border border-[#FDE68A] text-xs text-[#92400E]">
                <strong className="block text-[10.5px] uppercase font-bold text-[#B91C1C] mb-0.5">
                  Convention Delegate Advice:
                </strong>
                <p className="text-[11.5px] leading-relaxed">
                  {attraction.delegateTips}
                </p>
              </div>

              {/* Practical Badges */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-[#F3E8D8] space-y-1.5 text-[11px] text-[#475569]">
                <div className="flex items-start gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#BD1113] shrink-0 mt-0.5" />
                  <span><strong>Timings:</strong> {attraction.visitingHours}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Ticket className="h-3.5 w-3.5 text-[#BD1113] shrink-0 mt-0.5" />
                  <span><strong>Entry:</strong> {attraction.entryFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer: 2 Clean Balanced Buttons: Gallery & Directions */}
      <div className="p-4 sm:p-5 pt-0">
        <div className="pt-3 border-t border-[#F3E8D8] flex items-center gap-2.5 text-xs">
          {/* 1. View Gallery Button */}
          <button
            onClick={() => onOpenGallery(attraction, images)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0F172A] hover:bg-[#BD1113] text-white font-bold transition-all shadow-xs active:scale-[0.99]"
            title="Open photo gallery lightbox"
          >
            <Camera className="h-4 w-4" />
            <span>View Gallery</span>
            <span className="text-[11px] opacity-80">({images.length})</span>
          </button>

          {/* 2. Google Maps Directions Button */}
          <a
            href={attraction.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#BD1113] to-[#8B1D1D] hover:from-[#A00E10] hover:to-[#701515] text-white font-bold transition-all shadow-xs hover:shadow active:scale-[0.99]"
            title="Navigate via Google Maps"
          >
            <Navigation className="h-4 w-4" />
            <span>Directions</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  )
}
