import React from 'react'
import {
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Award,
  Users,
  Flame
} from 'lucide-react'
import { PBD_EVENT_DATA } from '../../data/event'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import conventionBottomRightMotif from '../../assets/images/Gemini_Generated_Image_a5dadoa5dadoa5da2.png'

export const ConventionOverview: React.FC = () => {
  return (
    <section
      id="convention-overview"
      className="relative py-7 sm:py-10 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#EFE6DC] overflow-hidden select-none"
    >

      {/* Cultural Corner Motifs */}
      <div className="absolute bottom-0 right-0 w-44 sm:w-56 lg:w-[320px] pointer-events-none z-10 opacity-60 select-none">
        <img
          src={conventionBottomRightMotif}
          alt=""
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-20 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="w-[90vw] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">

        {/* ============================================================== */}
        {/* SECTION HEADER (UNIFIED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">

          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Three Days.</span>{' '}
            <span className="text-[#BD1113]">One Global Synergy.</span>
          </h2>

          <p className="hidden sm:block mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            Commemorating Mahatma Gandhi's return to India, PBD 2027 unites 30+ million global Indians across three plenary days at Biswa Bangla Mela Prangan.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3-DAY CONVENTION CARDS (COMPACT HEIGHT - FITS ON SCREEN)       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch w-full mx-auto">
          {PBD_EVENT_DATA.timeline.map((item) => {
            const isFeatured = item.day === 2 // Day 2: Official Inauguration by Hon'ble PM

            return (
              <div
                key={item.day}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${isFeatured
                  ? 'bg-gradient-to-b from-[#FFF7F4] via-white to-[#FFF7F4] border-2 border-[#BD1113] shadow-md'
                  : 'bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] hover:border-[#BD1113]/60 shadow-xs hover:shadow-sm'
                  }`}
              >
                {/* Crown Ribbon for Day 2 */}
                {isFeatured && (
                  <div className="bg-gradient-to-r from-[#BD1113] via-[#D11316] to-[#8E0D0E] text-white py-1 px-3 text-center text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FDE68A]" />
                    <span>FLAGSHIP INAUGURAL CONVENTION</span>
                    <Sparkles className="w-3 h-3 text-[#FDE68A]" />
                  </div>
                )}

                {/* Card Top / Body */}
                <div className="p-4 sm:p-4.5">

                  {/* Top Day Badge & Date Pill */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="inline-flex items-center gap-2">
                      <span className={`h-7 w-7 rounded-full flex items-center justify-center font-bold text-xs ${isFeatured
                        ? 'bg-[#BD1113] text-white shadow-xs'
                        : 'bg-[#FAF0E1] text-[#BD1113] border border-[#EBD6BE]'
                        }`}>
                        {item.day < 10 ? `0${item.day}` : item.day}
                      </span>
                      <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#0A265D]">
                        DAY {item.day}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A265D] bg-white/95 px-2.5 py-0.5 rounded-full border border-[#EBD6BE]">
                      <Clock className="w-3 h-3 text-[#BD1113]" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Day Category Pill */}
                  <div className="mb-1.5">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.day === 1
                      ? 'bg-amber-100 text-amber-950 border border-amber-300'
                      : item.day === 2
                        ? 'bg-red-100 text-[#BD1113] border border-red-300'
                        : 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                      }`}>
                      {item.day === 1 && 'YOUTH & INNOVATION'}
                      {item.day === 2 && 'PRIME MINISTER INAUGURATION'}
                      {item.day === 3 && 'PRESIDENTIAL VALEDICTORY & PBSA'}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#0A265D] leading-snug tracking-normal group-hover:text-[#BD1113] transition-colors line-clamp-2 h-[2.6rem] flex items-start">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal line-clamp-3 tracking-normal min-h-[3.85rem] h-[3.85rem]">
                    {item.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-2.5 pt-2 border-t border-[#F0E4D5]">
                    <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-[#BD1113] mb-1.5 flex items-center gap-1">
                      {item.day === 1 && <Users className="w-3 h-3" />}
                      {item.day === 2 && <Flame className="w-3 h-3" />}
                      {item.day === 3 && <Award className="w-3 h-3" />}
                      <span>Plenary Highlights:</span>
                    </h4>

                    <ul className="space-y-1.5">
                      {item.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs sm:text-[12.5px] text-[#334155] font-medium leading-relaxed tracking-normal">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#BD1113] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer: Venue & Badge */}
                <div className="p-4 sm:p-4.5 pt-0">
                  <div className="pt-2 border-t border-[#F0E4D5] flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-semibold text-[#0A265D] text-[11px]">
                      <MapPin className="w-3 h-3 text-[#BD1113]" />
                      <span>Biswa Bangla Mela Prangan</span>
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD1113] bg-[#FAF0E1] px-2 py-0.5 rounded-full border border-[#EBD6BE]">
                      {item.day === 1 ? 'Hall A' : item.day === 2 ? 'Plenary Hall' : 'Auditorium'}
                    </span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Compact Bottom Action CTA */}


      </div>

    </section>
  )
}
