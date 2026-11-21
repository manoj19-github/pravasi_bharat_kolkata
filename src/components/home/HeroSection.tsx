import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ChevronRight,
  Calendar,
  Clock,
  Timer,
  Hourglass,
  MapPin,
  Sparkles
} from 'lucide-react'
import heroPanoramaImg from '../../assets/images/kolkata_riverside_heritage_panorama.png'
import { PBD_EVENT_DATA } from '../../data/event'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const HeroSection: React.FC = () => {
  // Live ticking countdown targeting January 7, 2027
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 47,
    hours: 17,
    minutes: 16,
    seconds: 57,
  })

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(PBD_EVENT_DATA.startDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] overflow-hidden bg-[#FAF5EE] border-b border-[#EFE6DC]">

      {/* ============================================================== */}
      {/* 1. DESKTOP & WIDESCREEN PRESENTATION (>= 1024px)               */}
      {/* PERFECT VERTICAL SPACING & BALANCED PROPORTIONS                */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full h-full select-none">

        {/* Full 100% Width & Fitted Height Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Main Hero Background Image - Kolkata Riverside Heritage Panorama */}
          <img
            src={heroPanoramaImg}
            alt="19th Pravasi Bharatiya Divas 2027 - Kolkata Riverside Heritage Panorama"
            className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
            loading="eager"
          />

          {/* Soft atmospheric gradient feathering for the right content area on ultra-wide screens */}
          <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-r from-transparent via-[#FAF5EE]/30 to-[#FAF5EE]/75 pointer-events-none" />

          {/* Right-Side Content Overlay (in negative space, centered vertically) */}
          <div className="absolute inset-0 z-10 flex h-full">

            {/* Left 45%: Preserves Howrah Bridge, Durga Idol, Yellow Taxi, Temple & Ghat */}
            <div className="w-[45%] xl:w-[46%] 2xl:w-[48%] h-full shrink-0" />

            {/* Right 55%: Balanced, elegant vertical spacing for every element */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-[55%] xl:w-[54%] 2xl:w-[52%] h-full flex flex-col justify-center items-center py-8 xl:py-14 pr-6 xl:pr-12 2xl:pr-16 pl-2"
            >

              {/* 1. Top Lotus Flourish: — ◆ 🪷 ◆ — */}
              <div className="flex items-center justify-center gap-3 w-full max-w-[540px] mb-3.5 xl:mb-5">
                <span className="h-[1.5px] w-12 xl:w-16 bg-[#BD1113] relative flex items-center justify-start">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#BD1113] absolute -left-0.5" />
                </span>

                {/* Stylized Red Lotus */}
                <svg viewBox="0 0 32 24" className="w-4 h-3.5 text-[#BD1113]" fill="currentColor">
                  <path d="M16 2 C17.5 7 19.5 10 16 17 C12.5 10 14.5 7 16 2 Z" />
                  <path d="M16 7 C19.5 9 22.5 12 24 16 C20 18 17.5 15 16 13 Z" opacity="0.95" />
                  <path d="M16 7 C12.5 9 9.5 12 8 16 C12 18 14.5 15 16 13 Z" opacity="0.95" />
                  <path d="M16 13 C21 15 25 18 29 17 C26 21 21 21 16 18 Z" opacity="0.85" />
                  <path d="M16 13 C11 15 7 18 3 17 C6 21 11 21 16 18 Z" opacity="0.85" />
                </svg>
                <span className="h-[1.5px] w-12 xl:w-16 bg-[#BD1113] relative flex items-center justify-start">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#BD1113] absolute -right-0.5" />
                </span>
              </div>

              {/* 2. Script Heading: "Kolkata" with writing effect animation + "Welcomes You" */}
              <div className="text-center max-w-[540px] select-none mb-3 xl:mb-4.5 flex items-center justify-center gap-2 xl:gap-3 flex-wrap">
                <motion.span
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                  className="font-script text-[44px] xl:text-[54px] leading-none text-[#C2410C] inline-block font-normal tracking-wide drop-shadow-xs"
                >
                  Kolkata
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 1.5 }}
                  className="font-script text-[36px] xl:text-[42px] leading-none text-[#0A265D] inline-block font-normal tracking-wide"
                >
                  Welcomes You
                </motion.span>
              </div>

              {/* 3. MAIN HEADING */}
              <div className="text-center max-w-[560px] mb-5 xl:mb-7">
                <h1 className="font-serif text-[24px] xl:text-[34px] font-bold text-[#0A265D] tracking-tight leading-tight">
                  19th Pravasi Bharatiya
                </h1>

                <div className="flex items-center justify-center gap-3 mt-2 xl:mt-2.5">
                  <span className="h-[1.5px] w-8 xl:w-12 bg-[#BD1113] rounded-full" />
                  <span className="font-serif text-[28px] xl:text-[36px] font-bold text-[#BD1113] tracking-normal leading-none">
                    Divas
                  </span>
                  <span className="h-[1.5px] w-8 xl:w-12 bg-[#BD1113] rounded-full" />
                </div>
              </div>

              {/* 4. DATE & VENUE CARD (WITH NATURAL BREATHING ROOM) */}
              <div className="flex justify-center w-auto max-w-none mb-5 xl:mb-7">
                <div className="bg-gradient-to-r from-[#BD1113] via-[#C2410C] to-[#8E0D0E] text-white px-5 py-2 rounded-xl shadow-xs border border-amber-300/35 flex flex-row items-center justify-center gap-3 whitespace-nowrap shrink-0">
                  <div className="flex items-center gap-1.5 font-semibold text-[11.5px] xl:text-[13px] tracking-wide">
                    <Calendar className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>January 7–9, 2027</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                  <div className="flex items-center gap-1.5 font-semibold text-[11.5px] xl:text-[13px] tracking-wide">
                    <MapPin className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>Biswa Bangla Mela Prangan • Kolkata</span>
                  </div>
                </div>
              </div>

              {/* 5. OFFICIAL THEME (WITH GENEROUS VERTICAL SPACE) */}
              <div className="w-full max-w-[540px] flex flex-col items-center mb-6 xl:mb-8">
                <div className="w-full bg-[#FFFDF9]/92 border border-[#EBD6BE] rounded-xl px-5 py-2.5 xl:py-3.5 shadow-xs text-center backdrop-blur-xs ring-1 ring-[#BD1113]/10">
                  <div className="inline-flex items-center gap-1 bg-[#BD1113] text-white text-[9.5px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-2xs mb-1.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#FDE68A]" />
                    <span>OFFICIAL THEME</span>
                  </div>
                  <p className="font-serif text-[12.5px] xl:text-[14px] font-bold text-[#0A265D] tracking-tight leading-snug">
                    “Return to Roots: Reigniting the Diaspora Connect with Bharat”
                  </p>
                </div>
              </div>

              {/* 6. EVENT COUNTDOWN HEADER (WITH BREATHING SPACE) */}
              <div className="flex items-center justify-center gap-2.5 max-w-[520px] mb-3.5 xl:mb-5">
                <span className="h-[1px] w-8 xl:w-12 bg-[#BD1113]/60 relative flex items-center justify-start">
                  <span className="w-1 h-1 rotate-45 bg-[#BD1113] absolute -left-0.5" />
                </span>

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD1113] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD1113]"></span>
                </span>

                <span className="text-[10px] xl:text-[11px] font-black uppercase tracking-wider text-[#0A265D]">
                  COUNTDOWN TO INAUGURATION
                </span>

                <span className="h-[1px] w-8 xl:w-12 bg-[#BD1113]/60 relative flex items-center justify-end">
                  <span className="w-1 h-1 rotate-45 bg-[#BD1113] absolute -right-0.5" />
                </span>
              </div>

              {/* 7. COUNTDOWN CARDS: ELEGANT HEIGHT & EYE-CATCHY ANIMATIONS */}
              <div className="grid grid-cols-4 gap-3 xl:gap-4 max-w-[520px] mx-auto w-full">

                {/* DAYS */}
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-2xl border border-[#EBD6BE] hover:border-[#BD1113] py-3.5 xl:py-4 px-2.5 flex items-center justify-center gap-2.5 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
                  <Calendar className="w-4 h-4 xl:w-5 xl:h-5 text-[#BD1113] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <span className="block font-mono font-black text-lg xl:text-xl text-[#BD1113] leading-none drop-shadow-2xs">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="block text-[8px] xl:text-[8.5px] font-black tracking-wider text-[#0A265D] uppercase mt-0.5">
                      DAYS
                    </span>
                  </div>
                </div>

                {/* HOURS */}
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-2xl border border-[#EBD6BE] hover:border-[#BD1113] py-3.5 xl:py-4 px-2.5 flex items-center justify-center gap-2.5 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
                  <Clock className="w-4 h-4 xl:w-5 xl:h-5 text-[#BD1113] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <span className="block font-mono font-black text-lg xl:text-xl text-[#BD1113] leading-none drop-shadow-2xs">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="block text-[8px] xl:text-[8.5px] font-black tracking-wider text-[#0A265D] uppercase mt-0.5">
                      HOURS
                    </span>
                  </div>
                </div>

                {/* MINUTES */}
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-2xl border border-[#EBD6BE] hover:border-[#BD1113] py-3.5 xl:py-4 px-2.5 flex items-center justify-center gap-2.5 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
                  <Timer className="w-4 h-4 xl:w-5 xl:h-5 text-[#BD1113] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <span className="block font-mono font-black text-lg xl:text-xl text-[#BD1113] leading-none drop-shadow-2xs">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="block text-[8px] xl:text-[8.5px] font-black tracking-wider text-[#0A265D] uppercase mt-0.5">
                      MINUTES
                    </span>
                  </div>
                </div>

                {/* SECONDS */}
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-2xl border border-[#EBD6BE] hover:border-[#BD1113] py-3.5 xl:py-4 px-2.5 flex items-center justify-center gap-2.5 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
                  <Hourglass className="w-4 h-4 xl:w-5 xl:h-5 text-[#BD1113] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <span className="block font-mono font-black text-lg xl:text-xl text-[#BD1113] leading-none drop-shadow-2xs">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="block text-[8px] xl:text-[8.5px] font-black tracking-wider text-[#0A265D] uppercase mt-0.5">
                      SECONDS
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. TABLET & MOBILE RESPONSIVE PRESENTATION (< 1024px)          */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col w-full bg-[#FAF5EE]">

        {/* Visual Artwork Showcase */}
        <div className="relative w-full overflow-hidden bg-white shadow-sm border-b border-[#EFE6DC]">
          <img
            src={heroPanoramaImg}
            alt="19th Pravasi Bharatiya Divas Kolkata Riverside Heritage Panorama"
            className="w-full h-auto object-cover object-left"
          />
        </div>

        {/* Responsive Content Container */}
        <div className="px-4 py-10 sm:px-6 sm:py-14 flex flex-col items-center text-center max-w-xl mx-auto">

          {/* Top Lotus Flourish */}
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="h-[1px] w-10 bg-[#BD1113]" />
            <svg viewBox="0 0 24 18" className="w-4 h-3 text-[#BD1113]" fill="currentColor">
              <path d="M12 2 C13 5 14 7 12 12 C10 7 11 5 12 2 Z" />
              <path d="M12 5 C14.5 7 16.5 9 18 12 C15 13.5 13 11 12 9 Z" opacity="0.9" />
              <path d="M12 5 C9.5 7 7.5 9 6 12 C9 13.5 11 11 12 9 Z" opacity="0.9" />
            </svg>
            <span className="h-[1px] w-10 bg-[#BD1113]" />
          </div>

          {/* Script Heading with Writing Animation */}
          <div className="flex items-center justify-center gap-2 mb-3 flex-wrap select-none">
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="font-script text-4xl sm:text-5xl leading-none text-[#C2410C] inline-block font-normal tracking-wide drop-shadow-xs"
            >
              Kolkata
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 1.3 }}
              className="font-script text-3xl sm:text-4xl leading-none text-[#0A265D] inline-block font-normal tracking-wide"
            >
              Welcomes You
            </motion.span>
          </div>

          {/* Main Heading */}
          <div className="mb-4.5">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A265D] tracking-tight leading-tight">
              19th Pravasi Bharatiya
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span className="h-[1.5px] w-8 bg-[#BD1113] rounded-full" />
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#BD1113] leading-none">
                Divas
              </span>
              <span className="h-[1.5px] w-8 bg-[#BD1113] rounded-full" />
            </div>
          </div>

          {/* Compact Date & Venue */}
          <div className="mb-5">
            <div className="bg-gradient-to-r from-[#BD1113] via-[#C2410C] to-[#8E0D0E] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 shadow-xs border border-amber-300/30">
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Jan 7–9, 2027 • Biswa Bangla Mela Prangan</span>
            </div>
          </div>

          {/* Theme Card */}
          <div className="w-full mb-5 bg-[#FFFDF9] border border-[#EBD6BE] rounded-xl p-3.5 text-center shadow-xs ring-1 ring-[#BD1113]/10">
            <span className="text-[9.5px] font-bold uppercase text-[#BD1113] block mb-1">OFFICIAL CONVENTION THEME</span>
            <p className="font-serif text-xs sm:text-sm font-bold text-[#0A265D] leading-snug">
              “Return to Roots: Reigniting the Diaspora Connect with Bharat”
            </p>
          </div>

          {/* Subtext */}
          <p className="mb-5 text-xs sm:text-sm text-[#0A265D] leading-relaxed font-medium">
            Pravasi Bharatiya Divas strengthens engagement of the overseas Indian community with Bharat.
          </p>

          {/* Countdown Cards with Modern Eye-Catchy Styling */}
          <div className="grid grid-cols-4 gap-2.5 w-full mb-6">
            <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-1.5 px-1 shadow-2xs">
              <span className="block font-mono font-black text-base text-[#BD1113]">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="block text-[8px] font-bold text-[#0A265D]">DAYS</span>
            </div>
            <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-1.5 px-1 shadow-2xs">
              <span className="block font-mono font-black text-base text-[#BD1113]">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="block text-[8px] font-bold text-[#0A265D]">HOURS</span>
            </div>
            <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-1.5 px-1 shadow-2xs">
              <span className="block font-mono font-black text-base text-[#BD1113]">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="block text-[8px] font-bold text-[#0A265D]">MIN</span>
            </div>
            <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-1.5 px-1 shadow-2xs">
              <span className="block font-mono font-black text-base text-[#BD1113]">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="block text-[8px] font-bold text-[#0A265D]">SEC</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-3.5">
            <Link
              to="/explore-kolkata"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#BD1113] py-2.5 text-xs font-bold text-white shadow-xs"
            >
              <span>Explore Kolkata</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/hotels"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#BD1113] bg-[#FAF3E7] py-2.5 text-xs font-bold text-[#0A265D]"
            >
              <span>Find Accommodation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  )
}
