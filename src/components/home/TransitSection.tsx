import React, { useState } from 'react'
import {
  Plane,
  Train,
  Navigation,
  Phone,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react'
import { TRANSIT_DATA } from '../../data/transport'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import staticCornerMotif from '../../assets/images/cultural/corner_motif_crimson_right.png'
import chakra from '../../assets/alpana/chakra.svg'

// Real high-resolution images for each transit hub
import transitAirportImg from '../../assets/images/istockphoto-1369339229-612x612.jpg'
import transitRailwayImg from '../../assets/images/transit/transit_railway_hires.jpg'
import transitFlyoverImg from '../../assets/images/transit/transit_flyover_hires.jpg'

const TRANSIT_PHOTOS: Record<string, { image: string; tag: string; distanceBadge: string }> = {
  'air-connectivity': {
    image: transitAirportImg,
    tag: 'AIRPORT',
    distanceBadge: '15 km • ~25 mins'
  },
  'rail-connectivity': {
    image: transitRailwayImg,
    tag: 'RAILWAY',
    distanceBadge: '4.8–8.5 km'
  },
  'road-metro': {
    image: transitFlyoverImg,
    tag: 'TRANSIT',
    distanceBadge: 'Direct EM Bypass'
  }
}

export const TransitSection: React.FC = () => {
  // State for collapsible delegate services in each transit card (expanded by default for instant readability, or collapsible on click)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'air-connectivity': false,
    'rail-connectivity': false,
    'road-metro': false,
  })

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Air':
        return <Plane className="h-3 w-3 text-[#BD1113]" />
      case 'Rail':
        return <Train className="h-3 w-3 text-[#BD1113]" />
      default:
        return <Navigation className="h-3 w-3 text-[#BD1113]" />
    }
  }

  return (
    <section
      id="transit-section"
      className="relative py-8 sm:py-12 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#EFE6DC] overflow-hidden select-none"
    >

      {/* Decorative Alpana & Chakra Motifs */}
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
        {/* SECTION HEADER (UNIFIED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">

          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Getting to</span>{' '}
            <span className="text-[#BD1113]">Kolkata &amp; Venue</span>
          </h2>

          <p className="hidden sm:block mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            Essential transit options across airport corridors, railway hubs, and city expressway lines.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>

        </div>

        {/* ============================================================== */}
        {/* 3 TRANSIT CARDS: BIGGER IMAGE HEIGHT & COLLAPSIBLE CONTENT     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 w-full mx-auto items-start">
          {TRANSIT_DATA.map((t) => {
            const meta = TRANSIT_PHOTOS[t.id] || {
              image: transitAirportImg,
              tag: 'TRANSIT',
              distanceBadge: 'Kolkata Venue'
            }

            const isExpanded = expandedCards[t.id] !== false

            return (
              <div
                key={t.id}
                className="rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] hover:border-[#BD1113]/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Crown Rim */}
                <div className="h-1 w-full bg-gradient-to-r from-[#BD1113] via-[#D11316] to-[#8E0D0E]" />

                {/* Card Top: Photo & Badges (Bigger Height) */}
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={meta.image}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                    {/* Category Pill */}
                    <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-[#FAF0E1]/95 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase text-[#BD1113] border border-[#EBD6BE] shadow-xs">
                      {getCategoryIcon(t.category)}
                      <span>{meta.tag}</span>
                    </div>

                    {/* Distance Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#BD1113] to-[#8E0D0E] text-white px-2.5 py-0.5 text-[10.5px] font-semibold shadow-xs">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{meta.distanceBadge}</span>
                    </div>
                  </div>

                  {/* Card Body Information */}
                  <div className="p-4 sm:p-4.5">

                    {/* Hub Title */}
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A265D] tracking-normal [word-spacing:0.06em] leading-snug group-hover:text-[#BD1113] transition-colors line-clamp-2 h-[2.85rem] flex items-start">
                      {t.title}
                    </h3>

                    {/* Summary - Shorter 2-line text without clamp truncation */}
                    <p className="mt-2 text-xs sm:text-[13px] text-[#475569] leading-[1.65] font-normal line-clamp-2 tracking-[0.018em] [word-spacing:0.05em] min-h-[2.65rem] h-[2.65rem]">
                      {t.summary}
                    </p>

                    {/* Collapsible Delegate Services Box */}
                    <div className="mt-3 rounded-xl bg-[#FAF0E1]/60 border border-[#EBD6BE] overflow-hidden">

                      {/* Collapsible Toggle Header Button */}
                      <button
                        onClick={() => toggleExpand(t.id)}
                        className="w-full flex items-center justify-between p-2.5 text-left hover:bg-[#FAF0E1]/90 transition-colors cursor-pointer select-none"
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#BD1113] uppercase tracking-wider [word-spacing:0.05em]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BD1113] shrink-0" />
                          <span>DELEGATE SERVICES</span>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0A265D] tracking-wide">
                          <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#BD1113]' : 'text-[#0A265D]'}`} />
                        </div>
                      </button>

                      {/* Expandable Content Drawer */}
                      {isExpanded && (
                        <div className="px-2.5 pb-2.5 pt-0.5 border-t border-[#EBD6BE]/60 animate-in fade-in duration-200">
                          <ul className="space-y-1.5 mt-1.5">
                            {t.keyHubs.map((hub, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-xs text-[#0A265D] font-medium leading-[1.6] tracking-[0.015em] [word-spacing:0.04em]">
                                <span className="text-[#BD1113] font-bold leading-none mt-0.5">•</span>
                                <span>{hub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>

                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 sm:p-4.5 pt-0">
                  <div className="pt-2 border-t border-[#F0E4D5] flex items-center justify-between gap-2">

                    {/* Helpline */}
                    <div className="flex items-center gap-1 text-[11px] text-[#64748B] font-medium">
                      <Phone className="w-3 h-3 text-[#BD1113] shrink-0" />
                      <span>Helpline: <strong className="text-[#0A265D] font-bold">{t.contactHelpline}</strong></span>
                    </div>

                    {/* Map Route Button */}
                    <a
                      href={t.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-[#0A265D] hover:bg-[#BD1113] text-white px-3 py-1 text-xs font-semibold shadow-2xs transition-all shrink-0"
                    >
                      <span>Map Route</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>

    </section>
  )
}
