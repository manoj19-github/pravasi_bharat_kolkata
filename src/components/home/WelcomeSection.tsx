import React from 'react'
import { motion } from 'motion/react'
import {
  Quote,
  Sparkles,
  HeartHandshake
} from 'lucide-react'
import { PBD_EVENT_DATA } from '../../data/event'
import cmHeroImg from '../../assets/images/cm_welcome_hero.png'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import chakraSvg from '../../assets/alpana/chakra.svg'

export const WelcomeSection: React.FC = () => {
  const cm = PBD_EVENT_DATA.chiefMinister

  return (
    <section
      id="cm-welcome"
      className="relative py-7 sm:py-10 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#EFE6DC] overflow-hidden select-none"
    >
      {/* Background Cultural Mandalas */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-15 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute -right-24 sm:-right-32 lg:-right-40 bottom-10 w-48 sm:w-60 h-48 sm:h-60 pointer-events-none z-0 opacity-10 select-none">
        <img
          src={chakraSvg}
          alt=""
          className="w-full h-full object-contain filter drop-shadow-sm"
          aria-hidden="true"
        />
      </div>

      <div className="w-[90vw] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">

        {/* ============================================================== */}
        {/* SECTION HEADER (REDUCED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">


          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Chief Minister's</span>{' '}
            <span className="text-[#BD1113]">Warm Welcome</span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            Extending the timeless warmth of Bengal's hospitality to overseas Indian delegates gathering for the 19th Pravasi Bharatiya Divas 2027 in Kolkata.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* MASTER COMPACT CHIEF MINISTER CARD (FITS COMFORTABLY ON SCREEN)*/}
        {/* ============================================================== */}
        <div className="rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

          {/* Top Royal Rim */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#BD1113] via-[#D97706] to-[#BD1113]" />

          <div className="p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">

              {/* LEFT COLUMN: HERO IMAGE (COMPACT HEIGHT) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full relative rounded-xl bg-gradient-to-b from-[#FAF2E4] via-[#FFFDF9] to-[#FAF0E1] border border-[#EBD6BE] p-3 shadow-2xs overflow-hidden group">

                  <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-b from-white/90 to-[#FAF5EC]/90 border border-[#EFE1CD] p-1.5 flex items-center justify-center">
                    <img
                      src={cmHeroImg}
                      alt={`${cm.name} - ${cm.title}`}
                      className="w-full h-auto max-h-[220px] sm:max-h-[250px] object-contain drop-shadow-md group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Identity Strip */}
                  <div className="mt-2.5 pt-2 border-t border-[#EBD6BE] text-center">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] text-[9.5px] font-bold uppercase tracking-wider text-[#BD1113] mb-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#D97706]" />
                      <span>OFFICIAL HOST STATE LEADERSHIP</span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A265D]">
                      {cm.name}
                    </h3>

                    <p className="text-xs font-semibold text-[#BD1113]">
                      {cm.title}
                    </p>

                    <p className="text-[11px] text-[#64748B] font-medium">
                      {cm.state}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: WELCOME MESSAGE (COMPACT) */}
              <div className="lg:col-span-7 flex flex-col justify-between">

                {/* Greeting with Script Font & Writing Animation */}
                <div className="flex items-center gap-2 mb-2 select-none">
                  <HeartHandshake className="w-5 h-5 text-[#BD1113] shrink-0" />
                  <motion.span
                    initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                    whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.4, ease: [0.25, 1, 0.5, 1] }}
                    className="font-script text-3xl sm:text-4xl lg:text-[42px] leading-none text-[#C2410C] inline-block tracking-wide select-none drop-shadow-xs"
                  >
                    A Warm Welcome to Kolkata
                  </motion.span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A265D] tracking-normal [word-spacing:0.06em] leading-snug mb-3">
                  Warmest Greetings to Overseas Indian Delegates &amp; Luminaries
                </h3>

                {/* Message Body */}
                <div className="relative pl-4 sm:pl-5 border-l-3 border-[#BD1113] bg-[#FAF5EC]/70 rounded-r-xl p-3.5 sm:p-4.5 mb-3">
                  <Quote className="absolute -top-2.5 -left-2.5 w-5 h-5 text-[#BD1113] fill-[#BD1113] bg-[#FAF5EC] p-0.5 rounded-full" />

                  <div className="space-y-3 text-[13px] sm:text-[14px] text-[#334155] leading-[1.75] tracking-[0.018em] [word-spacing:0.06em]">
                    <p className="font-bold text-xs sm:text-sm text-[#0A265D] tracking-wide">
                      Dear Members of the Global Indian Diaspora,
                    </p>

                    <p className="font-medium">
                      It gives us immense pleasure to welcome you to Kolkata, the cultural and intellectual heart of India, for the landmark <span className="font-bold text-[#BD1113]">19th Pravasi Bharatiya Divas Convention 2027</span>.
                    </p>

                    <p className="font-medium">
                      Bengal has historically served as a cradle of renaissance, literature, enterprise, and timeless cultural harmony. Biswa Bangla Mela Prangan and the entire people of West Bengal await your presence with warmth and reverence (অতিথি দেবো ভব). May your visit foster lasting partnerships and treasured memories with Bengal and Bharat.
                    </p>

                    <p className="font-bold text-[#0A265D] pt-0.5 tracking-wide">
                      With warm regards &amp; best wishes,
                    </p>
                  </div>
                </div>

                {/* Signature Block */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2.5 border-t border-[#F0E4D5]">
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#0A265D]">
                      {cm.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#BD1113]">
                      {cm.title}, {cm.state}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-1 rounded-lg text-[11px] font-bold text-[#0A265D]">
                    <Sparkles className="w-3 h-3 text-[#BD1113]" />
                    <span>Host State Secretariat • 19th PBD Kolkata</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
