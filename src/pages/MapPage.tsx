import { useState, useMemo, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { 
  Search, 
  Navigation, 
  Locate, 
  ExternalLink, 
  X, 
  Layers, 
  Phone, 
  ShieldCheck,
  Compass
} from 'lucide-react'
import { MAP_LOCATIONS, MapLocation } from '../data/mapLocations'
import { ModernMapControls } from '../components/map/ModernMapControls'

// Helper component to pan/zoom map programmatically
const MapController: React.FC<{ targetCoords: [number, number] | null; zoomLevel?: number }> = ({
  targetCoords,
  zoomLevel = 15,
}) => {
  const map = useMap()
  useEffect(() => {
    if (targetCoords) {
      map.flyTo(targetCoords, zoomLevel, { duration: 1.2 })
    }
  }, [targetCoords, zoomLevel, map])
  return null
}

// Custom Marker Icons for PBD categories + Grand Epicenter Beacon for Biswa Bangla Mela Prangan
const createCustomMarker = (category: string, isSelected: boolean, isPrimaryVenue: boolean = false) => {
  // 1. VIP Specific Animated Marker for Biswa Bangla Mela Prangan (Convention Epicenter)
  if (isPrimaryVenue) {
    return L.divIcon({
      className: 'custom-venue-epicenter-marker',
      html: `
        <div class="relative flex items-center justify-center">
          <!-- Multi-tier animated radar pulse rings radiating outward from pin anchor -->
          <span class="absolute w-14 h-14 rounded-full bg-[#BD1113]/40 animate-ping pointer-events-none"></span>
          <span class="absolute w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-400/25 animate-pulse pointer-events-none"></span>

          <!-- Central Grand Landmark Pin with Star Badge & Eye-Catchy Attention Glow -->
          <div class="relative flex flex-col items-center transition-transform duration-200 ${isSelected ? 'scale-125' : 'hover:scale-115'}">
            <div class="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#BD1113] via-[#DC2626] to-[#881337] border-2 border-amber-300 shadow-[0_6px_22px_rgba(189,17,19,0.7)] flex items-center justify-center text-white ring-4 ring-[#BD1113]/30">
              <span class="text-xl">🏛️</span>
              <!-- VIP Gold Star Badge -->
              <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 border border-white text-[9px] font-black text-amber-950 flex items-center justify-center shadow-xs">★</span>
            </div>
            <!-- Pin downward pointer arrow -->
            <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-300 -mt-0.5 shadow-xs"></div>
          </div>
        </div>
      `,
      iconSize: [44, 48],
      iconAnchor: [22, 44],
      popupAnchor: [0, -44],
    })
  }

  // 2. Standard Category Markers
  let bgColor = '#BD1113' // Crimson red
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

  const borderClass = isSelected 
    ? 'border-3 border-white shadow-2xl scale-125 ring-3 ring-[#BD1113]' 
    : 'border-2 border-white shadow-md hover:scale-110'

  return L.divIcon({
    className: 'custom-pbd-marker',
    html: `
      <div style="background-color: ${bgColor};" class="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white ${borderClass} transition-all">
        <span>${emoji}</span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  })
}

export const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [targetCoords, setTargetCoords] = useState<[number, number] | null>(null)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false)
  const [isLocating, setIsLocating] = useState(false)

  const centerKolkata: [number, number] = [22.5448, 88.3995]

  const categories = useMemo(() => [
    { id: 'all', label: 'All Places', count: MAP_LOCATIONS.length },
    { id: 'convention', label: 'Venues', emoji: '🏛️', count: MAP_LOCATIONS.filter(l => l.category === 'convention').length },
    { id: 'hotel', label: 'Hotels (48)', emoji: '🏨', count: MAP_LOCATIONS.filter(l => l.category === 'hotel').length },
    { id: 'homestay', label: 'Homestays (11)', emoji: '🏡', count: MAP_LOCATIONS.filter(l => l.category === 'homestay').length },
    { id: 'bnb', label: 'B&Bs (10)', emoji: '☕', count: MAP_LOCATIONS.filter(l => l.category === 'bnb').length },
    { id: 'transport', label: 'Getting to Kolkata', emoji: '✈️', count: MAP_LOCATIONS.filter(l => l.category === 'transport' || l.category === 'airport' || l.category === 'railway').length },
    { id: 'destination', label: 'Iconic Destinations (20)', emoji: '🕌', count: MAP_LOCATIONS.filter(l => l.category === 'destination' || l.category === 'tourist' || l.category === 'historical').length },
  ], [])

  const filteredLocations = useMemo(() => {
    return MAP_LOCATIONS.filter((loc) => {
      const q = searchQuery.toLowerCase()
      const matchesSearch =
        !searchQuery ||
        loc.name.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q) ||
        loc.description.toLowerCase().includes(q) ||
        (loc.nidhiId && loc.nidhiId.toLowerCase().includes(q)) ||
        (loc.badgeText && loc.badgeText.toLowerCase().includes(q))

      let matchesCategory = true
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'transport') {
          matchesCategory = loc.category === 'transport' || loc.category === 'airport' || loc.category === 'railway'
        } else if (selectedCategory === 'destination') {
          matchesCategory = loc.category === 'destination' || loc.category === 'tourist' || loc.category === 'historical'
        } else {
          matchesCategory = loc.category === selectedCategory
        }
      }

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleSelectLocation = (loc: MapLocation) => {
    setSelectedLocation(loc)
    setTargetCoords([loc.latitude, loc.longitude])
  }

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }
    setIsLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude]
        setUserLocation(coords)
        setTargetCoords(coords)
        setIsLocating(false)
      },
      () => {
        alert('Unable to retrieve your location. Please check browser permissions.')
        setIsLocating(false)
      },
    )
  }

  return (
    <div className="relative h-[calc(100vh-80px)] w-full flex flex-col md:flex-row overflow-hidden bg-[#FAF7F2]">
      
      {/* Left Sidebar Discovery Panel (Desktop) */}
      <div className="hidden md:flex w-[400px] lg:w-[440px] bg-white border-r border-[#F3E8D8] flex-col z-20 shadow-md">
        
        {/* Search Header */}
        <div className="p-4 border-b border-[#F3E8D8] bg-[#FAF7F2]">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-serif font-bold text-lg text-[#0F172A] flex items-center gap-1.5">
              <Compass className="h-5 w-5 text-[#BD1113]" />
              PBD 2027 Master Geoportal
            </span>
            <span className="text-[11px] bg-[#BD1113] text-white font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
              {filteredLocations.length} Mapped
            </span>
          </div>

          <div className="relative mb-2.5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888888]" />
            <input
              type="text"
              placeholder="Search 48 hotels, 11 homestays, 10 B&Bs, 20 sights, airport..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full border border-[#E5D5C5] bg-white text-xs text-[#1E293B] placeholder-[#888888] focus:outline-none focus:ring-1 focus:ring-[#BD1113]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#333333]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Category Chips Bar */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => {
              const isActive = selectedCategory === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#BD1113] text-white shadow-xs'
                      : 'bg-white text-[#0F172A] hover:bg-[#FAF0E1] border border-[#E5D5C5]'
                  }`}
                >
                  {c.emoji && <span>{c.emoji}</span>}
                  <span>{c.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Location List View */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#F3E8D8] p-2 space-y-1">
          {filteredLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id
            const isVenue = loc.id === 'venue-biswa-bangla'
            return (
              <div
                key={loc.id}
                onClick={() => handleSelectLocation(loc)}
                className={`p-3 rounded-xl cursor-pointer transition-all flex gap-3 relative ${
                  isVenue
                    ? isSelected
                      ? 'bg-gradient-to-r from-red-50 to-amber-50 border-2 border-[#BD1113] shadow-md ring-2 ring-amber-300'
                      : 'bg-gradient-to-r from-red-50/60 to-amber-50/60 border-2 border-amber-300/80 hover:border-[#BD1113] shadow-xs'
                    : isSelected
                    ? 'bg-[#FAF0E1] border-2 border-[#BD1113]/40 shadow-sm'
                    : 'hover:bg-[#FAF7F2] border border-transparent'
                }`}
              >
                {/* VIP Venue Marker Tag */}
                {isVenue && (
                  <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-[#BD1113] to-[#881337] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-300 shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping"></span>
                    <span>★ Primary Convention Venue ★</span>
                  </div>
                )}

                {/* Thumbnail Image */}
                {loc.image ? (
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className={`w-16 h-16 rounded-lg object-cover shrink-0 border ${
                      isVenue ? 'border-amber-400 ring-2 ring-amber-300/60' : 'border-[#E5D5C5]'
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 text-xl border ${
                    isVenue ? 'bg-amber-100 border-amber-400' : 'bg-[#FAF0E1] border-[#E5D5C5]'
                  }`}>
                    {loc.category === 'convention' ? '🏛️' : loc.category === 'hotel' ? '🏨' : loc.category === 'homestay' ? '🏡' : loc.category === 'bnb' ? '☕' : loc.category === 'transport' ? '✈️' : '🕌'}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1.5">
                    <h4 className={`font-serif font-bold text-xs leading-snug line-clamp-1 ${
                      isVenue ? 'text-[#BD1113]' : 'text-[#0F172A]'
                    }`}>
                      {loc.name}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                      isVenue
                        ? 'bg-[#BD1113] text-white border-amber-300 shadow-xs'
                        : 'text-[#BD1113] bg-white border-[#E5D5C5]'
                    }`}>
                      {loc.distanceToVenueKm === 0 ? '★ Venue Epicenter' : `${loc.distanceToVenueKm} km`}
                    </span>
                  </div>

                  <p className="text-[10.5px] text-[#64748B] mt-0.5 line-clamp-1">
                    {loc.address}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className={`font-semibold capitalize px-2 py-0.5 rounded-full border ${
                      isVenue
                        ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                        : 'bg-white border-[#E5D5C5] text-[#0A265D]'
                    }`}>
                      {isVenue ? 'Convention Grounds' : loc.category}
                    </span>
                    {loc.nidhiId && (
                      <span className="font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 inline-flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5 text-amber-600" />
                        {loc.nidhiId}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {filteredLocations.length === 0 && (
            <div className="text-center py-12 text-xs text-[#888888]">
              No locations found matching your search. Try adjusting filters.
            </div>
          )}
        </div>

        {/* Active Selected Location Detail Footnote */}
        {selectedLocation && (
          <div className="p-3.5 border-t border-[#F3E8D8] bg-[#FAF7F2]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
                Selected Point of Interest
              </span>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-[#888888] hover:text-[#333333]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="text-sm font-bold text-[#BD1113] font-serif truncate">
              {selectedLocation.name}
            </div>
            <p className="text-[11px] text-[#475569] mt-0.5 line-clamp-1">
              {selectedLocation.address}
            </p>
            <div className="mt-2.5 flex gap-2">
              <a
                href={selectedLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 text-center bg-[#BD1113] hover:bg-[#A80E10] text-white rounded-full text-xs font-bold shadow-xs transition flex items-center justify-center gap-1.5"
              >
                <Navigation className="h-3 w-3" />
                <span>Get Directions</span>
              </a>
              {selectedLocation.officialWebsite && (
                <a
                  href={selectedLocation.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-[#E5D5C5] bg-white text-[#0A265D] rounded-full text-xs font-bold hover:bg-[#FAF0E1] transition flex items-center justify-center gap-1"
                  title="Official Website"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {selectedLocation.phone && (
                <a
                  href={`tel:${selectedLocation.phone}`}
                  className="px-3 py-1.5 border border-[#E5D5C5] bg-white text-[#0A265D] rounded-full text-xs font-bold hover:bg-[#FAF0E1] transition flex items-center justify-center gap-1"
                  title="Call Property"
                >
                  <Phone className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Map Container */}
      <div className="relative flex-1 h-full w-full">
        
        {/* Floating Top Control on Mobile */}
        <div className="md:hidden absolute top-3 left-3 right-3 z-[1000] bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-md border border-[#F3E8D8] flex items-center gap-2">
          <Search className="h-4 w-4 text-[#888888] ml-2 shrink-0" />
          <input
            type="text"
            placeholder="Search all 104 Kolkata locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-transparent focus:outline-none"
          />
          <button
            onClick={() => setMobileSheetOpen(!mobileSheetOpen)}
            className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#0F172A] shrink-0 border border-[#F3E8D8]"
          >
            <Layers className="h-4 w-4" />
          </button>
        </div>

        {/* Floating Quick Focus Venue Button (Top Center / Left) */}
        <div className="absolute top-16 md:top-4 left-4 z-[1000] flex items-center gap-2">
          <button
            onClick={() => {
              const venue = MAP_LOCATIONS.find(l => l.id === 'venue-biswa-bangla') || MAP_LOCATIONS[0]
              handleSelectLocation(venue)
            }}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#BD1113] via-[#DC2626] to-[#881337] text-white font-serif font-bold text-xs shadow-lg hover:shadow-xl border-2 border-amber-300 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-[#BD1113]/30"
            title="Focus Biswa Bangla Mela Prangan (Convention Venue)"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span className="tracking-wide">★ Focus PBD 2027 Venue</span>
            <span className="hidden sm:inline text-[10px] font-sans font-normal opacity-90 border-l border-white/30 pl-2">Biswa Bangla Mela Prangan</span>
          </button>
        </div>

        {/* Floating Locate Me Button */}
        <button
          onClick={handleLocateMe}
          title="Locate Me on Map"
          className={`absolute ${selectedLocation ? 'bottom-28 md:bottom-6' : 'bottom-6'} right-4 md:right-6 z-[1000] bg-white p-3 rounded-full shadow-xl border-2 border-[#BD1113] text-[#BD1113] hover:bg-[#FEF2F2] transition-all flex items-center justify-center cursor-pointer`}
        >
          <Locate className={`h-5 w-5 ${isLocating ? 'animate-spin' : ''}`} />
        </button>

        {/* Leaflet Map Canvas */}
        <MapContainer
          center={centerKolkata}
          zoom={12}
          zoomControl={false}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController targetCoords={targetCoords} />

          {/* Modern Advanced Glassmorphic Zoom Control with Scroll-to-Zoom */}
          <ModernMapControls
            initialCenter={centerKolkata}
            initialZoom={12}
            positionClassName="bottom-20 right-6"
            showScrollHint={true}
          />

          {/* User Geolocation Marker */}
          {userLocation && (
            <Marker
              position={userLocation}
              icon={L.divIcon({
                className: 'user-pin',
                html: '<div class="w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-ping"></div>',
              })}
            >
              <Popup>
                <div className="text-xs font-bold text-blue-700">Your Current Location</div>
              </Popup>
            </Marker>
          )}

          {/* Location Markers */}
          {filteredLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id
            const isVenue = loc.id === 'venue-biswa-bangla'
            return (
              <Marker
                key={loc.id}
                position={[loc.latitude, loc.longitude]}
                icon={createCustomMarker(loc.category, isSelected, isVenue)}
                zIndexOffset={isVenue ? 10000 : undefined}
                eventHandlers={{
                  click: () => handleSelectLocation(loc),
                }}
              >
                <Popup>
                  <div className="p-1 max-w-[240px]">
                    {loc.image && (
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-24 object-cover rounded-md mb-2 border border-[#E5D5C5]"
                        loading="lazy"
                      />
                    )}
                    <div className="text-[10px] font-bold text-[#BD1113] uppercase tracking-wider mb-0.5">
                      {loc.badgeText || loc.category}
                    </div>
                    <div className="font-serif font-bold text-sm text-[#0F172A] leading-tight">
                      {loc.name}
                    </div>
                    <div className="text-[11px] text-[#475569] mt-1 leading-snug">
                      {loc.address}
                    </div>
                    {loc.distanceToVenueKm !== undefined && (
                      <div className="mt-1.5 text-[11px] font-semibold text-[#BD1113]">
                        {loc.distanceToVenueKm === 0 ? 'PBD 2027 Main Venue' : `${loc.distanceToVenueKm} km to Venue`}
                      </div>
                    )}
                    {loc.phone && (
                      <div className="mt-1 text-[10.5px] text-[#0A265D] font-medium flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#BD1113]" />
                        <span>{loc.phone}</span>
                      </div>
                    )}
                    <div className="mt-2.5 pt-2 border-t border-[#F3E8D8] flex items-center justify-between gap-2">
                      <a
                        href={loc.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#BD1113] hover:underline flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Directions</span>
                      </a>
                      {loc.officialWebsite && (
                        <a
                          href={loc.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#0A265D] hover:underline flex items-center gap-0.5"
                        >
                          <span>Website</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>

        {/* Mobile Floating Card for Selected Location */}
        {selectedLocation && (
          <div className="md:hidden absolute bottom-3 left-3 right-3 z-[1002] bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[#BD1113] p-3 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                {selectedLocation.image ? (
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-13 h-13 rounded-xl object-cover shrink-0 border border-[#E5D5C5]"
                  />
                ) : (
                  <div className="w-13 h-13 rounded-xl bg-[#FAF0E1] flex items-center justify-center shrink-0 text-xl border border-[#E5D5C5]">
                    {selectedLocation.category === 'convention' ? '🏛️' : selectedLocation.category === 'hotel' ? '🏨' : selectedLocation.category === 'homestay' ? '🏡' : selectedLocation.category === 'bnb' ? '☕' : selectedLocation.category === 'transport' ? '✈️' : '🕌'}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9.5px] font-bold text-[#BD1113] uppercase tracking-wider truncate">
                      {selectedLocation.badgeText || selectedLocation.category}
                    </span>
                    <span className="text-[10px] font-extrabold text-[#BD1113] bg-red-50 px-1.5 py-0.2 rounded-full border border-red-200 shrink-0">
                      {selectedLocation.distanceToVenueKm === 0 ? 'Venue' : `${selectedLocation.distanceToVenueKm} km`}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#0F172A] truncate mt-0.5">
                    {selectedLocation.name}
                  </h4>
                  <p className="text-[10.5px] text-[#64748B] truncate mt-0.5">
                    {selectedLocation.address}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedLocation(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close location detail"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-2.5 flex items-center gap-2 pt-2 border-t border-[#F3E8D8]">
              <a
                href={selectedLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 px-3 text-center bg-[#BD1113] hover:bg-[#A80E10] text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-1.5"
              >
                <Navigation className="h-3 w-3" />
                <span>Get Directions</span>
              </a>

              {selectedLocation.phone && (
                <a
                  href={`tel:${selectedLocation.phone}`}
                  className="p-1.5 px-2.5 border border-[#E5D5C5] bg-[#FAF7F2] text-[#0A265D] rounded-xl text-xs font-bold hover:bg-[#FEF3C7] transition flex items-center justify-center gap-1"
                  title="Call"
                >
                  <Phone className="h-3 w-3 text-[#BD1113]" />
                  <span>Call</span>
                </a>
              )}

              {selectedLocation.officialWebsite && (
                <a
                  href={selectedLocation.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 px-2.5 border border-[#E5D5C5] bg-[#FAF7F2] text-[#0A265D] rounded-xl text-xs font-bold hover:bg-[#FEF3C7] transition flex items-center justify-center"
                  title="Website"
                >
                  <ExternalLink className="h-3 w-3 text-[#0A265D]" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Mobile Swipe-up Bottom Sheet */}
        {mobileSheetOpen && (
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-[1001] bg-white rounded-t-3xl shadow-2xl border-t-2 border-[#BD1113] max-h-[70vh] flex flex-col p-4 animate-in slide-in-from-bottom">
            {/* Sheet Handle */}
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-2" />

            <div className="flex items-center justify-between pb-2.5 border-b border-[#F3E8D8]">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-sm text-[#0F172A]">
                  Kolkata Geoportal
                </span>
                <span className="text-[10px] bg-[#BD1113] text-white font-bold px-2 py-0.5 rounded-full">
                  {filteredLocations.length} Places
                </span>
              </div>
              <button
                onClick={() => setMobileSheetOpen(false)}
                className="p-1 text-[#888888] hover:text-[#333333]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Sheet Category Chips */}
            <div className="py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none [touch-action:pan-x] border-b border-[#F3E8D8]">
              {categories.map((c) => {
                const isActive = selectedCategory === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-2.5 py-1 rounded-full text-[10.5px] font-semibold transition shrink-0 flex items-center gap-1 ${
                      isActive
                        ? 'bg-[#BD1113] text-white shadow-xs'
                        : 'bg-[#FAF7F2] text-[#0F172A] border border-[#E5D5C5]'
                    }`}
                  >
                    {c.emoji && <span>{c.emoji}</span>}
                    <span>{c.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-[#FAF7F2] py-2">
              {filteredLocations.map((loc) => {
                const isVenue = loc.id === 'venue-biswa-bangla'
                return (
                  <div
                    key={loc.id}
                    onClick={() => {
                      handleSelectLocation(loc)
                      setMobileSheetOpen(false)
                    }}
                    className={`py-2.5 px-2 rounded-xl flex items-center gap-2.5 cursor-pointer active:bg-[#FAF7F2] ${
                      isVenue ? 'bg-gradient-to-r from-red-50 to-amber-50 border border-amber-300 my-1' : ''
                    }`}
                  >
                    {loc.image ? (
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className={`w-12 h-12 rounded-lg object-cover shrink-0 border ${
                          isVenue ? 'border-amber-400 ring-2 ring-amber-300' : 'border-[#E5D5C5]'
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-xl border ${
                        isVenue ? 'bg-amber-100 border-amber-400' : 'bg-[#FAF0E1] border-[#E5D5C5]'
                      }`}>
                        {loc.category === 'convention' ? '🏛️' : loc.category === 'hotel' ? '🏨' : loc.category === 'homestay' ? '🏡' : loc.category === 'bnb' ? '☕' : loc.category === 'transport' ? '✈️' : '🕌'}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-serif font-bold text-xs truncate ${
                          isVenue ? 'text-[#BD1113]' : 'text-[#0F172A]'
                        }`}>
                          {loc.name}
                        </span>
                        <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded-full shrink-0 border ${
                          isVenue
                            ? 'bg-[#BD1113] text-white border-amber-300'
                            : 'text-[#BD1113] bg-[#FAF7F2] border-[#E5D5C5]'
                        }`}>
                          {loc.distanceToVenueKm === 0 ? '★ Venue' : `${loc.distanceToVenueKm} km`}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-[#64748B] mt-0.5 truncate">{loc.address}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className={`text-[9.5px] font-semibold px-1.5 py-0.2 rounded capitalize ${
                          isVenue ? 'bg-amber-100 text-amber-900 font-bold' : 'text-[#0A265D] bg-slate-100'
                        }`}>
                          {isVenue ? 'Convention Grounds' : loc.category}
                        </span>
                        {loc.nidhiId && (
                          <span className="text-[9.5px] text-amber-800 font-bold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                            NIDHI
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
