import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Navigation,
  Landmark,
  ChevronRight,
  Calendar,
  Clock,
  Timer,
  Hourglass,
  MapPin,
  Sparkles
} from 'lucide-react'
import heroBgImg from '../../assets/images/Gemini_Generated_Image_76tzd776tzd776tz.png'
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
    <section className="relative w-full lg:h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] overflow-hidden bg-[#FAF6F0] border-b border-[#EFE6DC]">

      {/* ============================================================== */}
      {/* 1. DESKTOP & WIDESCREEN PRESENTATION (>= 1024px)               */}
      {/* PERFECT VERTICAL SPACING & BALANCED PROPORTIONS                */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full h-full select-none">

        {/* Full 100% Width & Fitted Height Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Main Hero Background Image */}
          <img
            src={heroBgImg}
            alt="19th Pravasi Bharatiya Divas 2027 - Kolkata Cultural Tableau"
            className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none"
            loading="eager"
          />

          {/* Right-Side Content Overlay (in negative space, centered vertically) */}
          <div className="absolute inset-0 z-10 flex h-full">

            {/* Left 45%: Preserves Howrah Bridge, Durga, Dhak, Shankha, Hibiscus & Temple */}
            <div className="w-[45%] xl:w-[46%] 2xl:w-[48%] h-full shrink-0" />

            {/* Right 55%: Balanced, elegant vertical spacing for every element */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-[55%] xl:w-[54%] 2xl:w-[52%] h-full flex flex-col justify-center items-center py-4 xl:py-6 pr-5 xl:pr-10 2xl:pr-14 pl-2"
            >

              {/* 1. Top Lotus Flourish: — ◆ 🪷 ◆ — */}
              <div className="flex items-center justify-center gap-2.5 w-full max-w-[540px] mb-1.5 xl:mb-2">
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

              {/* 2. Script Heading: "Kolkata" (Red) + "Welcomes You" (Navy Blue) */}
              <div className="font-script text-[28px] xl:text-[34px] leading-none text-center max-w-[540px] select-none">
                <span className="text-[#BD1113] font-normal tracking-wide">Kolkata </span>
                <span className="text-[#0A265D] font-normal tracking-wide">Welcomes You</span>
              </div>

              {/* 3. MAIN HEADING */}
              <div className="text-center max-w-[560px] mt-1.5 xl:mt-2">
                <h1 className="font-serif text-[22px] xl:text-[32px] font-bold text-[#0A265D] tracking-tight leading-tight">
                  19th Pravasi Bharatiya
                </h1>

                <div className="flex items-center justify-center gap-2.5 mt-1">
                  <span className="h-[1.5px] w-8 xl:w-12 bg-[#BD1113] rounded-full" />
                  <span className="font-serif text-[26px] xl:text-[34px] font-bold text-[#BD1113] tracking-normal leading-none">
                    Divas
                  </span>
                  <span className="h-[1.5px] w-8 xl:w-12 bg-[#BD1113] rounded-full" />
                </div>
              </div>

              {/* 4. DATE & VENUE CARD (WITH NATURAL BREATHING ROOM) */}
              <div className="mt-2.5 xl:mt-3 flex justify-center w-auto max-w-none">
                <div className="bg-[#C2410C] text-white px-3.5 py-1 rounded-lg shadow-2xs border border-white/20 flex flex-row items-center justify-center gap-2.5 whitespace-nowrap shrink-0">
                  <div className="flex items-center gap-1.5 font-semibold text-[11px] xl:text-xs tracking-wide">
                    <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>January 7–9, 2027</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                  <div className="flex items-center gap-1.5 font-semibold text-[11px] xl:text-xs tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Biswa Bangla Mela Prangan • Kolkata</span>
                  </div>
                </div>
              </div>

              {/* 5. OFFICIAL THEME (WITH NATURAL VERTICAL SPACE) */}
              <div className="w-full max-w-[540px] mt-2.5 xl:mt-3 flex flex-col items-center">
                <div className="w-full bg-[#FAF0E1]/90 border border-[#D97706]/35 rounded-xl px-3 py-1.5 shadow-2xs text-center backdrop-blur-2xs">
                  <div className="inline-flex items-center gap-1 bg-[#B31010] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs mb-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#FDE68A]" />
                    <span>OFFICIAL THEME</span>
                  </div>
                  <p className="font-serif text-[11.5px] xl:text-[13px] font-bold text-[#0A265D] tracking-tight leading-snug">
                    “Return to Roots: Reigniting the Diaspora Connect with Bharat”
                  </p>
                </div>
              </div>

              {/* 6. SUPPORTING SUB-TEXT PARAGRAPH */}
              <p className="mt-2 xl:mt-2.5 text-[14.5px] xl:text-[11.5px] text-[#0A265D] leading-relaxed text-center max-w-[500px] font-medium mx-auto">
                Pravasi Bharatiya Divas strengthens engagement of the overseas Indian community with Bharat, celebrating diaspora leadership and cultural roots.
              </p>

              {/* 7. EVENT COUNTDOWN HEADER (WITH BREATHING SPACE) */}
              <div className="flex items-center justify-center gap-2 max-w-[520px] mt-3 xl:mt-3.5 mb-2">
                <span className="h-[1px] w-8 xl:w-12 bg-[#BD1113]/60 relative flex items-center justify-start">
                  <span className="w-1 h-1 rotate-45 bg-[#BD1113] absolute -left-0.5" />
                </span>

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD1113] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD1113]"></span>
                </span>

                <span className="text-[10px] xl:text-[10.5px] font-black uppercase tracking-wider text-[#0A265D]">
                  COUNTDOWN TO INAUGURATION
                </span>

                <span className="h-[1px] w-8 xl:w-12 bg-[#BD1113]/60 relative flex items-center justify-end">
                  <span className="w-1 h-1 rotate-45 bg-[#BD1113] absolute -right-0.5" />
                </span>
              </div>

              {/* 8. COUNTDOWN CARDS: BIGGER HEIGHT & EYE-CATCHY ANIMATIONS */}
              <div className="grid grid-cols-4 gap-2.5 xl:gap-3 max-w-[520px] mx-auto w-full">

                {/* DAYS */}
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-xl border border-[#EBD6BE] hover:border-[#BD1113] py-2 px-2 flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
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
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-xl border border-[#EBD6BE] hover:border-[#BD1113] py-2 px-2 flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
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
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-xl border border-[#EBD6BE] hover:border-[#BD1113] py-2 px-2 flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
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
                <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FAF0E1] rounded-xl border border-[#EBD6BE] hover:border-[#BD1113] py-2 px-2 flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 group transform hover:-translate-y-0.5 cursor-default">
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

              {/* 9. TWIN CTA BUTTONS (WITH COMFORTABLE TOP MARGIN) */}
              <div className="flex items-center justify-center gap-3.5 max-w-[540px] mt-3.5 xl:mt-4">

                {/* Primary CTA: Explore Kolkata */}
                <Link
                  to="/explore-kolkata"
                  className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#BD1113] via-[#D11316] to-[#990D0F] hover:from-[#A80E10] hover:to-[#BD1113] px-6 xl:px-7 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white shadow-md hover:shadow-xl hover:shadow-[#BD1113]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white/80">
                    <Navigation className="w-2.5 h-2.5 text-white fill-white group-hover/btn:rotate-12 transition-transform duration-300" />
                  </span>
                  <span>Explore Kolkata</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Secondary CTA: Find Accommodation */}
                <Link
                  to="/hotels"
                  className="group/btn2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#BD1113] bg-[#FAF3E7] hover:bg-white px-6 xl:px-7 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-[#0A265D] hover:text-[#BD1113] shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Landmark className="w-3.5 h-3.5 text-[#0A265D] group-hover/btn2:text-[#BD1113] group-hover/btn2:scale-110 transition-transform duration-300" />
                  <span>Find Accommodation</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0A265D] group-hover/btn2:text-[#BD1113] group-hover/btn2:translate-x-1 transition-transform duration-300" />
                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. TABLET & MOBILE RESPONSIVE PRESENTATION (< 1024px)          */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col w-full bg-[#FAF6F0]">

          {/* Visual Artwork Showcase with Gradient Fade */}
          <div className="relative w-full overflow-hidden bg-white shadow-xs border-b border-[#EFE6DC]">
            <img
              src={heroBgImg}
              alt="19th Pravasi Bharatiya Divas Kolkata Artwork"
              className="w-full h-auto max-h-[260px] sm:max-h-[380px] object-cover object-left"
            />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAF6F0] to-transparent pointer-events-none" />
          </div>

          {/* Responsive Content Container */}
            <div className="px-4 py-5 sm:px-6 sm:py-8 flex flex-col items-center text-center max-w-xl sm:max-w-2xl mx-auto w-full">

              {/* Top Lotus Flourish */}
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="h-[1px] w-8 sm:w-12 bg-[#BD1113]" />
                    <svg viewBox="0 0 24 18" className="w-4 h-3.5 text-[#BD1113]" fill="currentColor">
                      <path d="M12 2 C13 5 14 7 12 12 C10 7 11 5 12 2 Z" />
                      <path d="M12 5 C14.5 7 16.5 9 18 12 C15 13.5 13 11 12 9 Z" opacity="0.9" />
                      <path d="M12 5 C9.5 7 7.5 9 6 12 C9 13.5 11 11 12 9 Z" opacity="0.9" />
                    </svg>
                    <span className="h-[1px] w-8 sm:w-12 bg-[#BD1113]" />
                  </div>

                  {/* Script Heading */}
                    <div className="font-script text-2xl sm:text-4xl leading-tight">
                      <span className="text-[#BD1113]">Kolkata </span>
                      <span className="text-[#0A265D]">Welcomes You</span>
                    </div>

                    {/* Main Heading */}
                    <div className="mt-1">
                        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A265D] tracking-tight leading-tight">
                          19th Pravasi Bharatiya
                        </h1>
                        <div className="flex items-center justify-center gap-2 mt-0.5">
                            <span className="h-[1.5px] w-8 sm:w-12 bg-[#BD1113] rounded-full" />
                            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#BD1113] leading-none">
                              Divas
                            </span>
                            <span className="h-[1.5px] w-8 sm:w-12 bg-[#BD1113] rounded-full" />
                        </div>
                    </div>

                    {/* Compact Date & Venue */}
                        <div className="mt-2.5 sm:mt-3">
                          <div className="bg-[#C2410C] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-2xs">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                            <span>Jan 7–9, 2027 • Biswa Bangla Mela Prangan, Kolkata</span>
                          </div>
                        </div>

                        {/* Theme Card */}
                            <div className="w-full mt-2.5 sm:mt-3 bg-[#FAF0E1] border border-[#D97706]/40 rounded-xl p-2.5 sm:p-3.5 text-center shadow-2xs">
                              <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#BD1113] block mb-0.5 sm:mb-1">
                                OFFICIAL CONVENTION THEME
                              </span>
                              <p className="font-serif text-xs sm:text-base font-bold text-[#0A265D] leading-snug">
                                “Return to Roots: Reigniting the Diaspora Connect with Bharat”
                              </p>
                            </div>

                            {/* Subtext */}
                              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#0A265D] leading-relaxed font-medium max-w-lg">
                                Pravasi Bharatiya Divas strengthens engagement of the overseas Indian community with Bharat, celebrating diaspora leadership and cultural roots.
                              </p>

                              {/* Countdown Header */}
                              <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 mb-2">
                                <span className="h-[1px] w-6 sm:w-10 bg-[#BD1113]/60" />
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD1113] opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD1113]"></span>
                                </span>
                                <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider text-[#0A265D]">
                                  COUNTDOWN TO INAUGURATION
                                </span>
                                <span className="h-[1px] w-6 sm:w-10 bg-[#BD1113]/60" />
                              </div>

                              {/* Countdown Cards with Modern Eye-Catchy Styling */}
                                  <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md sm:max-w-lg">
                                    <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-2 sm:py-3 px-1 sm:px-2 shadow-2xs">
                                      <span className="block font-mono font-black text-lg sm:text-2xl text-[#BD1113] leading-tight">{String(timeLeft.days).padStart(2, '0')}</span>
                                      <span className="block text-[8px] sm:text-[10px] font-bold text-[#0A265D] uppercase mt-0.5">DAYS</span>
                                    </div>
                                      <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-2 sm:py-3 px-1 sm:px-2 shadow-2xs">
                                        <span className="block font-mono font-black text-lg sm:text-2xl text-[#BD1113] leading-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
                                        <span className="block text-[8px] sm:text-[10px] font-bold text-[#0A265D] uppercase mt-0.5">HOURS</span>
                                      </div>
                                        <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-2 sm:py-3 px-1 sm:px-2 shadow-2xs">
                                          <span className="block font-mono font-black text-lg sm:text-2xl text-[#BD1113] leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                          <span className="block text-[8px] sm:text-[10px] font-bold text-[#0A265D] uppercase mt-0.5">MIN</span>
                                        </div>
                                          <div className="bg-gradient-to-b from-white to-[#FAF0E1] rounded-xl border border-[#EBD6BE] py-2 sm:py-3 px-1 sm:px-2 shadow-2xs">
                                            <span className="block font-mono font-black text-lg sm:text-2xl text-[#BD1113] leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                            <span className="block text-[8px] sm:text-[10px] font-bold text-[#0A265D] uppercase mt-0.5">SEC</span>
                                          </div>
                                        </div>

                                        {/* CTA Buttons */}
                                          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full mt-4 sm:mt-5 max-w-md sm:max-w-lg">
                                            <Link
                                              to="/explore-kolkata"
                                              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#BD1113] hover:bg-[#A80E10] py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-95 transition-all"
                                            >
                                              <span>Explore Kolkata</span>
                                              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </Link>
                                            <Link
                                              to="/hotels"
                                              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#BD1113] bg-[#FAF3E7] hover:bg-white py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0A265D] hover:text-[#BD1113] shadow-xs active:scale-95 transition-all"
                                            >
                                              <span>Find Accommodation</span>
                                              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </Link>
                                          </div>

                                        </div>

                                      </div>

                                    </section>
                                    )
}
