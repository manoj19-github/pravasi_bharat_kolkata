import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight
} from 'lucide-react'
import siteLogo from '../../assets/images/logo-black-removebg-preview.png'
import footerBg from '../../assets/images/footer-bg.png'

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white select-none bg-[#0c0603] border-t-2 border-[#BD1113]">

      {/* ============================================================== */}
      {/* 1. PANORAMIC ARTWORK BACKGROUND (KOLKATA SUNSET & RIVERFRONT)  */}
      {/* Using footer-bg.png (Lanterns, Maa Durga, Howrah Bridge)       */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Kolkata Hooghly Riverfront Sunset - Lanterns, Maa Durga & Howrah Bridge"
          className="h-full w-full object-cover object-bottom filter brightness-95 contrast-110"
        />
        {/* Atmospheric Darkening Gradient Overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-[#160b05]/35 mix-blend-multiply" />
      </div>

      {/* Top Royal Rim Accent */}
      <div className="relative z-10 h-1.5 w-full bg-gradient-to-r from-[#BD1113] via-[#F59E0B] to-[#BD1113]" />

      {/* ============================================================== */}
      {/* 2. FOREGROUND CONTENT (RESPONSIVE CONTAINER)                   */}
      {/* ============================================================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Top 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">

              {/* COLUMN 1: Logo & Convention Identity (lg:col-span-4) */}
              <div className="lg:col-span-4 space-y-3.5">

                {/* White/Ivory frosted container ensuring black logo is crystal clear */}
                <div className="inline-block bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#FDE68A]/60">
                  <img
                    src={siteLogo}
                    alt="19th Pravasi Bharatiya Divas Convention 2027"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>

                <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
                  Official Welcome &amp; Visitor Experience portal for international Indian diaspora delegates attending the landmark 19th PBD Convention in Kolkata.
                </p>

                {/* Official Convention Date & Venue Badge */}
                <div className="space-y-2 pt-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-500/30">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>January 7–9, 2027 • Kolkata, West Bengal</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Theme: “Return to Roots: Reigniting Diaspora Connect”</span>
                  </div>
                </div>

              </div>

              {/* COLUMN 2: Portal Navigation (lg:col-span-2) */}
              <div className="lg:col-span-2 space-y-3">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#ffcc00] tracking-wide flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#ffcc00]" />
                  <span>Navigation</span>
                </h4>

                <ul className="space-y-2 text-xs font-medium text-stone-200">
                  <li>
                    <Link to="/" className="hover:text-[#ffcc00] transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Convention Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hotels" className="hover:text-[#ffcc00] transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Hotels &amp; Stays</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore-kolkata" className="hover:text-[#ffcc00] transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Iconic Destinations</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/map" className="hover:text-[#ffcc00] transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Geoportal Map</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COLUMN 3: Official References & Government Portals (lg:col-span-3) */}
              <div className="lg:col-span-3 space-y-3">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#ffcc00] tracking-wide flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#ffcc00]" />
                  <span>Official Portals</span>
                </h4>

                <ul className="space-y-2 text-xs font-medium text-stone-200">
                  <li>
                    <a
                      href="https://pbdindia.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffcc00] transition-colors flex items-center justify-between gap-1 text-stone-200 group"
                    >
                      <span className="font-bold text-amber-200">Official Pravasi Bharat Divas Portal</span>
                      <ExternalLink className="w-3 h-3 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mea.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffcc00] transition-colors flex items-center justify-between gap-1 text-stone-300 group"
                    >
                      <span>Ministry of External Affairs (MEA)</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </li>
                  {/* <li>
                <a
                  href="https://cmo.wb.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffcc00] transition-colors flex items-center justify-between gap-1 text-stone-300 group"
                >
                  <span>Chief Minister's Office, West Bengal</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li> */}
                  {/* <li>
                <a
                  href="https://wbtourism.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffcc00] transition-colors flex items-center justify-between gap-1 text-stone-300 group"
                >
                  <span>Department of Tourism, West Bengal</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li> */}
                </ul>
              </div>

              {/* COLUMN 4: Convention Venue & 24x7 Helplines (lg:col-span-3) */}
              <div className="lg:col-span-3 space-y-3">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#ffcc00] tracking-wide flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ffcc00]" />
                  <span>Venue &amp; Helplines</span>
                </h4>

                <div className="space-y-2.5 text-xs text-stone-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#ffcc00] shrink-0 mt-0.5" />
                    <span>Biswa Bangla Mela Prangan, Tangra, Kolkata 700046</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#ffcc00] shrink-0" />
                    <span>Traffic Helpline: <strong className="text-white font-mono">1073</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Indian Railways 24x7: <strong className="text-white font-mono">139</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#ffcc00] shrink-0" />
                    <a href="mailto:support@pbdindia.gov.in" className="hover:text-amber-300 underline font-mono text-xs">
                      support@pbdindia.gov.in
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* ============================================================== */}
            {/* 3. DELEGATE NOTICE & COPYRIGHT ADVISORY                        */}
            {/* ============================================================== */}
            <div className="mt-8 pt-5 border-t border-white/15 text-center text-[11px] text-stone-400 space-y-2">
              <p className="max-w-4xl mx-auto leading-relaxed">
                <strong className="text-amber-300">Delegate Advisory:</strong> This portal is designed to provide visitor welcome guidance, cultural heritage discovery, and independently curated accommodation options for delegates attending the 19th Pravasi Bharatiya Divas Convention 2027 in Kolkata. For official registrations and certified MEA protocols, visit <a href="https://pbdindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#ffcc00] font-bold underline hover:text-white">pbdindia.gov.in</a>.
              </p>

              <p className="text-stone-300 font-medium pt-0.5">
                &copy; 2027 19th Pravasi Bharatiya Divas Kolkata Welcome Portal. Hosted in West Bengal, India.
              </p>
            </div>

          </div>

        </footer>
        )
}
