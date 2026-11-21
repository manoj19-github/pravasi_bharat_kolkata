import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import {
  Navigation,
  Compass,
  MapPin,
  ExternalLink,
  Maximize2,
  Building,
  Hotel,
  Landmark,
  Plane,
  ArrowUpRight,
  ArrowRight,
  X,
  Home,
  Coffee,
  ShieldCheck,
  Phone
} from 'lucide-react'
import { MAP_LOCATIONS, MapLocation } from '../../data/mapLocations'
import { ModernMapControls } from '../map/ModernMapControls'
import alponaThemeSvg from '../../assets/alpana/alpona_theme.svg'
import chakraSvg from '../../assets/alpana/chakra.svg'

// Helper component to pan/zoom map programmatically
const MapController: React.FC<{ targetCoords: [number, number] | null; zoomLevel?: number }> = ({
  targetCoords,
  zoomLevel = 13,
}) => {
  const map = useMap()
  useEffect(() => {
    if (targetCoords) {
      map.flyTo(targetCoords, zoomLevel, { duration: 1.2 })
    }
  }, [targetCoords, zoomLevel, map])
  return null
}

// Invalidate Leaflet size after container mounts
const MapResizer: React.FC = () => {
  const map = useMap()
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 300)
    return () => clearTimeout(timer)
  }, [map])
  return null
}

// Custom Marker Generator
const createMarkerIcon = (category: string, isSelected: boolean, isPrimaryVenue: boolean = false) => {
  // 1. VIP Specific Animated Marker for Biswa Bangla Mela Prangan (Convention Epicenter)
  if (isPrimaryVenue) {
    return L.divIcon({
      className: 'custom-venue-epicenter-marker',
      html: `
        <div class="relative flex items-center justify-center">
          <!-- Multi-tier animated radar pulse rings radiating outward from pin anchor -->
          <span class="absolute w-12 h-12 rounded-full bg-[#BD1113]/40 animate-ping pointer-events-none"></span>
          <span class="absolute w-9 h-9 rounded-full border-2 border-amber-400 bg-amber-400/25 animate-pulse pointer-events-none"></span>

          <!-- Central Grand Landmark Pin with Star Badge & Eye-Catchy Attention Glow -->
          <div class="relative flex flex-col items-center transition-transform duration-200 ${isSelected ? 'scale-125' : 'hover:scale-115'}">
            <div class="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#BD1113] via-[#DC2626] to-[#881337] border-2 border-amber-300 shadow-[0_5px_20px_rgba(189,17,19,0.7)] flex items-center justify-center text-white ring-4 ring-[#BD1113]/30">
              <span class="text-lg">🏛️</span>
              <!-- VIP Gold Star Badge -->
              <span class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 border border-white text-[8px] font-black text-amber-950 flex items-center justify-center shadow-xs">★</span>
            </div>
            <!-- Pin downward pointer arrow -->
            <div class="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-amber-300 -mt-0.5 shadow-xs"></div>
          </div>
        </div>
      `,
      iconSize: [40, 44],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })
  }

  let bgColor = '#BD1113'
  let emoji = '📍'

  switch (category) {
    case 'convention':
      bgColor = '#BD1113'
      emoji = '🏛️'
      break
    case 'hotel':
      bgColor = '#D97706'
      emoji = '🏨'
      break
    case 'homestay':
      bgColor = '#059669'
      emoji = '🏡'
      break
    case 'bnb':
      bgColor = '#B45309'
      emoji = '☕'
      break
    case 'transport':
    case 'airport':
    case 'railway':
      bgColor = '#0284c7'
      emoji = '✈️'
      break
    case 'destination':
    case 'tourist':
    case 'historical':
      bgColor = '#0A265D'
      emoji = '🕌'
      break
    default:
      bgColor = '#BD1113'
      emoji = '📍'
  }

  const border = isSelected
    ? 'border-2 border-white ring-3 ring-[#BD1113] shadow-xl scale-125 z-50'
    : 'border-2 border-white shadow-sm hover:scale-110'

  return L.divIcon({
    className: 'custom-preview-marker',
    html: `
      <div style="background-color: ${bgColor};" class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs ${border} transition-all duration-200 cursor-pointer">
        <span style="font-size: 11px;">${emoji}</span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28]
  })
}

export const MapPreviewSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [targetCoords, setTargetCoords] = useState<[number, number] | null>([
    MAP_LOCATIONS[0].latitude,
    MAP_LOCATIONS[0].longitude,
  ])
  const [zoomLevel, setZoomLevel] = useState<number>(13)
  const autoHideTimerRef = useRef<NodeJS.Timeout | null>(null)

  const filterButtons = useMemo(() => [
    { id: 'all', label: 'All (104)', icon: Compass },
    { id: 'venues', label: 'Venues (5)', icon: Building },
    { id: 'hotels', label: 'Hotels (48)', icon: Hotel },
    { id: 'homestays', label: 'Homestays (11)', icon: Home },
    { id: 'bnbs', label: 'B&Bs (10)', icon: Coffee },
    { id: 'transit', label: 'Getting to Kolkata (10)', icon: Plane },
    { id: 'destinations', label: '20 Iconic Sights', icon: Landmark },
  ], [])

  const filteredLocations = useMemo(() => {
    if (selectedCategory === 'all') return MAP_LOCATIONS
    return MAP_LOCATIONS.filter((loc) => {
      if (selectedCategory === 'venues') return loc.category === 'convention'
      if (selectedCategory === 'hotels') return loc.category === 'hotel'
      if (selectedCategory === 'homestays') return loc.category === 'homestay'
      if (selectedCategory === 'bnbs') return loc.category === 'bnb'
      if (selectedCategory === 'transit') return loc.category === 'transport' || loc.category === 'airport' || loc.category === 'railway'
      if (selectedCategory === 'destinations') return loc.category === 'destination' || loc.category === 'tourist' || loc.category === 'historical'
      return true
    })
  }, [selectedCategory])

  const handleSelectLocation = (loc: MapLocation, zoom = 14) => {
    setSelectedLocation(loc)
    setTargetCoords([loc.latitude, loc.longitude])
    setZoomLevel(zoom)

    // Clear existing timer
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current)
    }

    // Auto-hide details card after 6 seconds
    autoHideTimerRef.current = setTimeout(() => {
      setSelectedLocation(null)
    }, 6000)
  }

  useEffect(() => {
    return () => {
      if (autoHideTimerRef.current) {
        clearTimeout(autoHideTimerRef.current)
      }
    }
  }, [])

  return (
    <section
      id="interactive-map-preview"
      className="relative py-7 sm:py-10 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#EFE6DC] overflow-hidden select-none"
    >
      {/* Background Cultural Motifs */}
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

      {/* Main 92vw Container */}
      <div className="w-[92vw] max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">

        {/* ============================================================== */}
        {/* SECTION HEADER (UNIFIED FONT SIZE & HEIGHT)                    */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-5">

          <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Explore All Accommodations, Venues, Transit &amp;</span>{' '}
            <span className="text-[#BD1113]">Iconic Destinations</span>
          </h2>

          <p className="hidden sm:block mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            Interactive map plotting all 48 certified hotels, 11 homestays, 10 B&amp;Bs, Biswa Bangla convention venues, airport &amp; rail gateways, and 20 iconic Kolkata heritage sights.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>
        </div>

        {/* Master Interactive Map Card */}
        <div className="rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

          {/* Top Control Header Bar */}
          <div className="bg-[#FAF5EC]/90 border-b border-[#EFE1CD] px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5">

            {/* Live Geoportal Status Badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD1113] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD1113]"></span>
              </span>
              <span className="text-[11px] font-bold text-[#0A265D]">
                104 MAPPED LOCATIONS
              </span>
              <span className="hidden sm:inline-block text-[11px] text-[#64748B] font-mono">
                • 22.5448° N, 88.3995° E
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 flex-wrap">
              {filterButtons.map((cat) => {
                const Icon = cat.icon
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${isActive
                      ? 'bg-[#BD1113] text-white shadow-2xs'
                      : 'bg-white text-[#475569] hover:text-[#0A265D] border border-[#EBD6BE]'
                      }`}
                  >
                    {Icon && <Icon className="w-2.5 h-2.5" />}
                    <span>{cat.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Full Screen Shortcut Button in Header */}
            <Link
              to="/map"
              className="inline-flex items-center gap-1 bg-[#BD1113] hover:bg-[#A80E10] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs transition-all"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Full Screen Map</span>
            </Link>

          </div>

          {/* Leaflet Map Canvas */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px]">
            <MapContainer
              center={[targetCoords ? targetCoords[0] : 22.5448, targetCoords ? targetCoords[1] : 88.3995]}
              zoom={zoomLevel}
              zoomControl={false}
              scrollWheelZoom={true}
              className="w-full h-full z-0"
            >
              <MapResizer />
              <MapController targetCoords={targetCoords} zoomLevel={zoomLevel} />

              {/* Modern Advanced Glassmorphic Zoom Control */}
              <ModernMapControls
                initialCenter={[22.5448, 88.3995]}
                initialZoom={13}
                positionClassName="bottom-3 right-3"
                showScrollHint={false}
              />

              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={19}
              />

              {filteredLocations.map((loc) => {
                const isSelected = selectedLocation?.id === loc.id
                const isVenue = loc.id === 'venue-biswa-bangla'
                return (
                  <Marker
                    key={loc.id}
                    position={[loc.latitude, loc.longitude]}
                    icon={createMarkerIcon(loc.category, isSelected, isVenue)}
                    zIndexOffset={isVenue ? 10000 : undefined}
                    eventHandlers={{
                      click: () => handleSelectLocation(loc, 15),
                    }}
                  >
                    <Popup className="custom-pbd-popup">
                      <div className="p-1 min-w-[200px] max-w-[240px]">
                        {loc.image && (
                          <img
                            src={loc.image}
                            alt={loc.name}
                            className="w-full h-20 object-cover rounded mb-1.5 border border-[#EBD6BE]"
                            loading="lazy"
                          />
                        )}
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#BD1113] block mb-0.5">
                          {loc.badgeText || loc.category}
                        </span>
                        <strong className="block text-xs font-serif text-[#0A265D] leading-tight">
                          {loc.name}
                        </strong>
                        <p className="text-[10px] text-[#475569] mt-0.5 leading-snug">
                          {loc.address}
                        </p>
                        {loc.distanceToVenueKm !== undefined && (
                          <div className="text-[10.5px] text-[#BD1113] font-semibold mt-1">
                            {loc.distanceToVenueKm === 0 ? 'PBD 2027 Main Venue' : `${loc.distanceToVenueKm} km to Venue`}
                          </div>
                        )}
                        <div className="mt-2 pt-1.5 border-t border-[#F0E4D5] flex items-center justify-between">
                          <a
                            href={loc.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold text-[#BD1113] hover:underline flex items-center gap-0.5"
                          >
                            <span>Directions</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                )
              })}
            </MapContainer>

            {/* Floating Quick Fly-to HUD (Top Right) - Hidden on Mobile Screens */}
            <div className="hidden sm:flex absolute top-3 right-3 z-400 flex-col gap-1.5 max-w-[210px]">
              <button
                onClick={() => handleSelectLocation(MAP_LOCATIONS[0], 16)}
                className="bg-gradient-to-r from-[#BD1113] via-[#DC2626] to-[#881337] text-white border-2 border-amber-300 px-2.5 py-1.5 rounded-lg text-[10px] font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer ring-2 ring-[#BD1113]/30 truncate"
                title="Convention Epicenter: Biswa Bangla Mela Prangan"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span className="truncate">★ Biswa Bangla Mela Prangan</span>
              </button>

              <button
                onClick={() => {
                  const itc = MAP_LOCATIONS.find((l) => l.name.includes('ITC Royal Bengal')) || MAP_LOCATIONS[1]
                  handleSelectLocation(itc, 16)
                }}
                className="bg-white/95 backdrop-blur-md hover:bg-[#D97706] hover:text-white text-[#0A265D] border border-[#EBD6BE] px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer truncate"
              >
                <span>🏨</span>
                <span className="truncate">ITC Royal Bengal</span>
              </button>

              <button
                onClick={() => {
                  const bbcc = MAP_LOCATIONS.find((l) => l.id.includes('bbcc')) || MAP_LOCATIONS[1]
                  handleSelectLocation(bbcc, 15)
                }}
                className="bg-white/95 backdrop-blur-md hover:bg-[#BD1113] hover:text-white text-[#0A265D] border border-[#EBD6BE] px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer truncate"
              >
                <span>🏛️</span>
                <span className="truncate">BBCC New Town</span>
              </button>

              <button
                onClick={() => {
                  const landmark = MAP_LOCATIONS.find((l) => l.id.includes('victoria')) || MAP_LOCATIONS[2]
                  handleSelectLocation(landmark, 15)
                }}
                className="bg-white/95 backdrop-blur-md hover:bg-[#0A265D] hover:text-white text-[#0A265D] border border-[#EBD6BE] px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer truncate"
              >
                <span>🕌</span>
                <span className="truncate">Victoria Memorial</span>
              </button>

              <button
                onClick={() => {
                  const airport = MAP_LOCATIONS.find((l) => l.id.includes('airport')) || MAP_LOCATIONS[0]
                  handleSelectLocation(airport, 14)
                }}
                className="bg-white/95 backdrop-blur-md hover:bg-[#0284c7] hover:text-white text-[#0A265D] border border-[#EBD6BE] px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer truncate"
              >
                <span>✈️</span>
                <span className="truncate">CCU Airport</span>
              </button>
            </div>

            {/* Compact Floating Location Detail Overlay */}
            {selectedLocation && (
              <div className="absolute bottom-3 left-3 z-400 max-w-xs sm:max-w-sm w-[calc(100%-1.5rem)] animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EBD6BE] rounded-xl p-3 shadow-lg text-[#1E293B] relative">

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-[#BD1113] transition-colors cursor-pointer"
                    title="Dismiss card"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-start gap-2.5 pr-5">
                    {selectedLocation.image ? (
                      <img
                        src={selectedLocation.image}
                        alt={selectedLocation.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 border border-[#EBD6BE]"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-lg bg-[#BD1113] flex items-center justify-center text-white shrink-0 shadow-2xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.2 rounded-full bg-[#FAF0E1] text-[#BD1113] border border-[#EBD6BE]">
                          {selectedLocation.badgeText || selectedLocation.category.toUpperCase()}
                        </span>
                        <span className="text-[10px] text-[#0A265D] font-bold font-mono">
                          {selectedLocation.distanceToVenueKm === 0 ? 'Epicenter' : `${selectedLocation.distanceToVenueKm} km`}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-[#0A265D] font-serif truncate">
                        {selectedLocation.name}
                      </h4>

                      <p className="text-[10.5px] text-[#475569] line-clamp-1 font-normal mt-0.5">
                        {selectedLocation.address}
                      </p>

                      {selectedLocation.nidhiId && (
                        <div className="mt-1 flex items-center gap-1 text-[9.5px] font-bold text-amber-800">
                          <ShieldCheck className="w-3 h-3 text-amber-600" />
                          <span>NIDHI {selectedLocation.nidhiId}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="mt-2.5 pt-2 border-t border-[#F0E4D5] flex items-center justify-end gap-2">
                    {selectedLocation.phone && (
                      <a
                        href={`tel:${selectedLocation.phone}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-[#EBD6BE] bg-[#FAF5EC] hover:bg-white text-[#0A265D] text-[11px] font-semibold px-2 py-1 transition-all"
                        title="Call"
                      >
                        <Phone className="w-3 h-3 text-[#BD1113]" />
                        <span>Call</span>
                      </a>
                    )}

                    <a
                      href={selectedLocation.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-[#EBD6BE] bg-[#FAF5EC] hover:bg-white text-[#0A265D] text-[11px] font-semibold px-2.5 py-1 transition-all"
                    >
                      <span>Route</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#BD1113]" />
                    </a>

                    <Link
                      to="/map"
                      className="inline-flex items-center gap-1 rounded-lg bg-[#BD1113] hover:bg-[#A80E10] px-3 py-1 text-[11px] font-semibold text-white transition-all"
                    >
                      <span>Full Map</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Bottom 4 Quick Corridors Deck */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E4D5] bg-[#FAF5EC]/80 border-t border-[#EFE6DC]">

            <div
              onClick={() => handleSelectLocation(MAP_LOCATIONS[0], 16)}
              className="p-3 bg-gradient-to-br from-red-50/80 to-amber-50/80 hover:bg-white transition-colors cursor-pointer group border-b-2 sm:border-b-0 sm:border-r-2 border-[#BD1113]/30 relative"
            >
              <div className="flex items-center gap-1.5 text-[#BD1113] text-[10.5px] font-black uppercase tracking-wider mb-0.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD1113] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD1113]"></span>
                </span>
                <Building className="w-3 h-3 text-[#BD1113]" />
                <span>PBD 2027 Main Venue</span>
              </div>
              <h5 className="font-serif font-black text-xs sm:text-sm text-[#BD1113] group-hover:text-[#A80E10] transition-colors truncate">
                ★ Biswa Bangla Mela Prangan
              </h5>
              <p className="text-[10.5px] text-[#475569] truncate font-medium">
                Official Convention Grounds &amp; Expo
              </p>
            </div>

            <div
              onClick={() => {
                const hotel = MAP_LOCATIONS.find((l) => l.category === 'hotel') || MAP_LOCATIONS[0]
                handleSelectLocation(hotel, 15)
              }}
              className="p-3 hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-[#D97706] text-[10.5px] font-bold uppercase tracking-wider mb-0.5">
                <Hotel className="w-3 h-3 text-[#D97706]" />
                <span>Certified Accommodations</span>
              </div>
              <h5 className="font-serif font-bold text-xs sm:text-sm text-[#0A265D] group-hover:text-[#BD1113] transition-colors truncate">
                69 Certified Stays
              </h5>
              <p className="text-[10.5px] text-[#475569] truncate font-normal">
                48 Hotels • 11 Homestays • 10 B&amp;Bs
              </p>
            </div>

            <div
              onClick={() => {
                const landmark = MAP_LOCATIONS.find((l) => l.id.includes('victoria')) || MAP_LOCATIONS[0]
                handleSelectLocation(landmark, 15)
              }}
              className="p-3 hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-[#0A265D] text-[10.5px] font-bold uppercase tracking-wider mb-0.5">
                <Landmark className="w-3 h-3 text-[#0A265D]" />
                <span>20 Iconic Destinations</span>
              </div>
              <h5 className="font-serif font-bold text-xs sm:text-sm text-[#0A265D] group-hover:text-[#BD1113] transition-colors truncate">
                Victoria, Howrah Bridge &amp; Dakshineswar
              </h5>
              <p className="text-[10.5px] text-[#475569] truncate font-normal">
                Heritage circuits &amp; river promenade
              </p>
            </div>

            <div
              onClick={() => {
                const airport = MAP_LOCATIONS.find((l) => l.id.includes('airport')) || MAP_LOCATIONS[0]
                handleSelectLocation(airport, 14)
              }}
              className="p-3 hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-[#0284c7] text-[10.5px] font-bold uppercase tracking-wider mb-0.5">
                <Plane className="w-3 h-3 text-[#0284c7]" />
                <span>Getting to Kolkata</span>
              </div>
              <h5 className="font-serif font-bold text-xs sm:text-sm text-[#0A265D] group-hover:text-[#BD1113] transition-colors truncate">
                CCU Airport &amp; Rail Terminals
              </h5>
              <p className="text-[10.5px] text-[#475569] truncate font-normal">
                Howrah, Sealdah &amp; Express Coach Hubs
              </p>
            </div>

          </div>

        </div>

        {/* Compact "Launch Full Screen Map" Button */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center relative z-20">
          <Link
            to="/map"
            className="inline-flex items-center gap-2 rounded-full bg-[#BD1113] hover:bg-[#A80E10] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-xl hover:shadow-[#BD1113]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-white" />
            <span>Launch Full Screen Interactive Geoportal (104 Locations)</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>
        </div>

      </div>
    </section>
  )
}
