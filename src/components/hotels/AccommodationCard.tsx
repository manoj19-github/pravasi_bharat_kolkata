import React, { useState, useEffect } from 'react'
import { 
  MapPin, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Navigation, 
  ShieldCheck, 
  Home, 
  Coffee, 
  Building2,
  Phone,
  Info
} from 'lucide-react'
import { Hotel } from '../../data/hotels'

interface AccommodationCardProps {
  hotel: Hotel
  initiallyExpanded?: boolean
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({ 
  hotel, 
  initiallyExpanded = false 
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded)
  const [isHovered, setIsHovered] = useState(false)

  const images = hotel.images && hotel.images.length > 0 ? hotel.images : [hotel.image]

  // Auto-cycle through images with fade effect when card is hovered or periodically
  useEffect(() => {
    if (!isHovered || images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Determine booking target: Official website if exists, otherwise fallback to targeted Google Search
  const bookingUrl = hotel.officialWebsite || hotel.bookingSearchUrl
  const hasOfficialWebsite = Boolean(hotel.officialWebsite)

  // Property type icon
  const getPropertyTypeBadge = () => {
    switch (hotel.propertyType) {
      case 'homestay':
        return {
          icon: <Home className="h-3 w-3 text-emerald-600" />,
          label: 'Homestay',
          color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        }
      case 'bnb':
        return {
          icon: <Coffee className="h-3 w-3 text-amber-600" />,
          label: 'Bed & Breakfast',
          color: 'bg-amber-50 text-amber-800 border-amber-200'
        }
      default:
        return {
          icon: <Building2 className="h-3 w-3 text-[#BD1113]" />,
          label: 'Hotel',
          color: 'bg-red-50 text-[#BD1113] border-red-200'
        }
    }
  }

  const typeBadge = getPropertyTypeBadge()

  return (
    <div 
      className="rounded-2xl border border-[#F3E8D8] bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#BD1113]/12 hover:border-[#BD1113]/40 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Top Image Gallery Container with Cross-Fade */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 select-none">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${hotel.name} view ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === currentImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              loading="lazy"
            />
          ))}

          {/* Dark gradient overlay for badge readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Top Left Badges: NIDHI & Star Tier */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {hotel.nidhiId && (
              <span className="inline-flex items-center gap-1 bg-[#BD1113]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm tracking-wide">
                <ShieldCheck className="h-3 w-3 text-amber-300" />
                NIDHI {hotel.nidhiId}
              </span>
            )}
            <span className="inline-flex items-center gap-1 bg-[#0F172A]/85 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              {hotel.category}
            </span>
          </div>

          {/* Top Right: Image counter & Type */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
            {images.length > 1 && (
              <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                {currentImgIndex + 1}/{images.length}
              </span>
            )}
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-sm ${typeBadge.color}`}>
              {typeBadge.icon}
              {typeBadge.label}
            </span>
          </div>

          {/* Left / Right Image Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Bottom Dot Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImgIndex(dotIdx)
                  }}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentImgIndex ? 'w-5 bg-white shadow' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Bottom Right: Proximity to Biswa Bangla Mela Prangan */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#BD1113] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#F3E8D8] shadow-md">
              <MapPin className="h-3 w-3 text-[#BD1113] fill-[#BD1113]/20" />
              {hotel.proximityToVenue}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 pb-3">
          {/* Header Title & Pricing */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0F172A] leading-tight group-hover:text-[#BD1113] transition-colors">
                {hotel.name}
              </h3>
              <p className="text-xs text-[#64748B] mt-1 flex items-center gap-1">
                <span>{hotel.location}</span>
                <span className="text-slate-300">•</span>
                <span className="font-medium text-slate-500">{hotel.zone}</span>
              </p>
            </div>
          </div>

          {/* Address Line */}
          <p className="text-[11px] text-[#64748B] mt-2 line-clamp-1 italic">
            {hotel.address}
          </p>

          {/* Collapsible Trigger for Editorial Description & Facility Tags */}
          <div className="mt-3.5 pt-3 border-t border-[#F3E8D8]">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-1.5 px-3 rounded-lg bg-[#FAF7F2] hover:bg-[#FEF3C7] text-xs font-semibold text-[#8B1D1D] transition-colors border border-[#E5D5C5]/60"
            >
              <span className="flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 text-[#BD1113]" />
                <span>{isExpanded ? 'Hide Details & Amenities' : `View Overview & Amenities (${hotel.facilities.length})`}</span>
              </span>
              <ChevronDown 
                className={`h-4 w-4 text-[#8B1D1D] transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Collapsible Content Area (Matches shared user screenshot) */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
              }`}
            >
              {/* Editorial Description */}
              <p className="text-xs text-[#475569] leading-relaxed">
                {hotel.description}
              </p>

              {/* Facility Tags (Matches user screenshot: [Wi-Fi] [Swimming Pool] [Spa & Wellness] [Fine Dining] [Helipad] [Business Center]) */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {hotel.facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-[#FEF3C7] text-[#0F172A] px-2.5 py-0.5 rounded-full border border-[#FDE68A] font-medium"
                  >
                    {fac}
                  </span>
                ))}
              </div>

              {/* Contact Phone & Approx Price Info if available */}
              {(hotel.contactPhone || hotel.approxPriceRange) && (
                <div className="mt-3 pt-2.5 border-t border-dashed border-[#F3E8D8] flex items-center justify-between text-[11px] text-[#64748B]">
                  {hotel.contactPhone && (
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-slate-400" />
                      {hotel.contactPhone}
                    </span>
                  )}
                  {hotel.approxPriceRange && (
                    <span className="font-semibold text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {hotel.approxPriceRange}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-[#F3E8D8] flex items-center gap-2 text-xs">
          {/* "Book Now" Button -> Redirects to official website if exists, else Google search booking */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#BD1113] to-[#8B1D1D] hover:from-[#A00E10] hover:to-[#701515] text-white font-bold transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
            title={hasOfficialWebsite ? 'Visit Official Property Website' : 'Search Booking Rates on Google'}
          >
            <span>{hasOfficialWebsite ? 'Book Now' : 'Book / Rates'}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          {/* Directions / Route Button -> Opens Google Maps navigation */}
          <a
            href={hotel.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#E5D5C5] bg-[#FAF7F2] text-[#0F172A] font-semibold hover:bg-[#FEF3C7] hover:border-[#BD1113]/30 transition-all shadow-xs"
          >
            <Navigation className="h-3.5 w-3.5 text-[#BD1113]" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </div>
  )
}
