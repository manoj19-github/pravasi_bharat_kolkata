import { useState, useMemo, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Search, Navigation, Locate, ExternalLink, X, Layers } from 'lucide-react'
import { MAP_LOCATIONS, MapLocation } from '../data/mapLocations'

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

// Custom Marker Icons for PBD categories
const createCustomMarker = (category: string, isSelected: boolean) => {
  let bgColor = '#B91C1C' // Crimson red
  let emoji = '📍'

  switch (category) {
    case 'convention':
      bgColor = '#0F172A'
      emoji = '🏛️'
      break
    case 'hotel':
      bgColor = '#D97706'
      emoji = '🏨'
      break
    case 'tourist':
      bgColor = '#B91C1C'
      emoji = '🕌'
      break
    case 'historical':
      bgColor = '#991B1B'
      emoji = '📜'
      break
    case 'airport':
      bgColor = '#0284c7'
      emoji = '✈️'
      break
    case 'railway':
      bgColor = '#059669'
      emoji = '🚆'
      break
    default:
      bgColor = '#B91C1C'
      emoji = '📍'
  }

  const borderClass = isSelected ? 'border-4 border-white shadow-2xl scale-125 ring-2 ring-[#B91C1C]' : 'border-2 border-white shadow-md'

  return L.divIcon({
    className: 'custom-pbd-marker',
    html: `
      <div style="background-color: ${bgColor};" class="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white ${borderClass} transition-transform">
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

  const centerKolkata: [number, number] = [22.555, 88.38]

  const categories = [
    { id: 'all', label: 'All Places' },
    { id: 'convention', label: 'Convention Venue' },
    { id: 'hotel', label: 'Hotels & Stays' },
    { id: 'tourist', label: 'Tourist Sights' },
    { id: 'historical', label: 'Historical' },
    { id: 'airport', label: 'Airport (CCU)' },
    { id: 'railway', label: 'Rail Stations' },
  ]

  const filteredLocations = useMemo(() => {
    return MAP_LOCATIONS.filter((loc) => {
      const matchesSearch =
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' || loc.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleSelectLocation = (loc: MapLocation) => {
    setSelectedLocation(loc)
    setTargetCoords([loc.latitude, loc.longitude])
    setMobileSheetOpen(true)
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
      <div className="hidden md:flex w-[380px] lg:w-[420px] bg-white border-r border-[#F3E8D8] flex-col z-20 shadow-md">
        
        {/* Search Header */}
        <div className="p-4 border-b border-[#F3E8D8] bg-[#FAF7F2]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-serif font-bold text-lg text-[#0F172A] flex items-center gap-1.5">
              <Navigation className="h-4 w-4 text-[#B91C1C]" />
              Kolkata Visitor Map
            </span>
            <span className="text-[11px] bg-[#B91C1C] text-white font-bold px-2 py-0.5 rounded-full">
              PBD 2027
            </span>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888888]" />
            <input
              type="text"
              placeholder="Search hotels, venue, monuments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full border border-[#E5D5C5] bg-white text-xs text-[#1E293B] placeholder-[#888888] focus:outline-none focus:ring-1 focus:ring-[#B91C1C]"
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

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1 mt-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition ${
                  selectedCategory === c.id
                    ? 'bg-[#B91C1C] text-white shadow-xs'
                    : 'bg-white text-[#0F172A] hover:bg-[#FEF3C7] border border-[#E5D5C5]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Location List View */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#FAF7F2] p-2">
          {filteredLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id
            return (
              <div
                key={loc.id}
                onClick={() => handleSelectLocation(loc)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#FEF3C7]/70 border border-[#FDE68A] shadow-xs'
                    : 'hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif font-bold text-sm text-[#0F172A] leading-snug">
                    {loc.name}
                  </h4>
                  <span className="text-[10px] font-bold text-[#B91C1C] bg-white px-2 py-0.5 rounded-full border border-[#F3E8D8] shrink-0">
                    {loc.distanceToVenueKm === 0 ? 'Venue' : `${loc.distanceToVenueKm} km`}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1 line-clamp-1">
                  {loc.address}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#0F172A] font-semibold capitalize bg-white px-2 py-0.5 rounded-full text-[10px] border border-[#F3E8D8]">
                    {loc.category}
                  </span>
                  <span className="text-[#B91C1C] font-bold hover:underline">
                    Zoom on Map &rarr;
                  </span>
                </div>
              </div>
            )
          })}

          {filteredLocations.length === 0 && (
            <div className="text-center py-10 text-xs text-[#888888]">
              No places found matching your search.
            </div>
          )}
        </div>

        {/* Active Selected Location Detail Footnote */}
        {selectedLocation && (
          <div className="p-4 border-t border-[#F3E8D8] bg-[#FAF7F2]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#0F172A]">Selected Destination:</span>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-[#888888] hover:text-[#333333]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="text-xs font-bold text-[#B91C1C] truncate">
              {selectedLocation.name}
            </div>
            <div className="mt-2 flex gap-2">
              <a
                href={selectedLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-full text-xs font-bold shadow hover:brightness-105 transition flex items-center justify-center gap-1"
              >
                <Navigation className="h-3 w-3" />
                <span>Get Directions</span>
              </a>
              {selectedLocation.officialWebsite && (
                <a
                  href={selectedLocation.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-[#E5D5C5] bg-white text-[#0F172A] rounded-full text-xs font-bold hover:bg-[#FEF3C7] transition flex items-center justify-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
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
            placeholder="Search venue, hotels, sights..."
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

        {/* Floating Locate Me Button */}
        <button
          onClick={handleLocateMe}
          title="Locate Me on Map"
          className="absolute bottom-6 right-6 z-[1000] bg-white p-3 rounded-full shadow-xl border-2 border-[#B91C1C] text-[#B91C1C] hover:bg-[#FEF2F2] transition flex items-center justify-center"
        >
          <Locate className={`h-5 w-5 ${isLocating ? 'animate-spin' : ''}`} />
        </button>

        {/* Leaflet Map Canvas */}
        <MapContainer
          center={centerKolkata}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController targetCoords={targetCoords} />

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
            return (
              <Marker
                key={loc.id}
                position={[loc.latitude, loc.longitude]}
                icon={createCustomMarker(loc.category, isSelected)}
                eventHandlers={{
                  click: () => handleSelectLocation(loc),
                }}
              >
                <Popup>
                  <div className="p-1 max-w-[220px]">
                    <div className="text-[10px] font-bold text-[#B91C1C] uppercase tracking-wider mb-1">
                      {loc.category}
                    </div>
                    <div className="font-serif font-bold text-sm text-[#0F172A] leading-tight">
                      {loc.name}
                    </div>
                    <div className="text-[11px] text-[#475569] mt-1 leading-snug">
                      {loc.address}
                    </div>
                    <div className="mt-2 text-[11px] font-semibold text-[#B91C1C]">
                      {loc.distanceToVenueKm === 0 ? 'PBD 2027 Main Venue' : `${loc.distanceToVenueKm} km to Venue`}
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#F3E8D8] flex items-center justify-between">
                      <a
                        href={loc.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#B91C1C] hover:underline"
                      >
                        Directions &rarr;
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>

        {/* Mobile Swipe-up Bottom Sheet */}
        {mobileSheetOpen && (
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-[1001] bg-white rounded-t-3xl shadow-2xl border-t-2 border-[#B91C1C] max-h-[65vh] flex flex-col p-4 animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between pb-3 border-b border-[#F3E8D8]">
              <span className="font-serif font-bold text-base text-[#0F172A]">
                Locations ({filteredLocations.length})
              </span>
              <button
                onClick={() => setMobileSheetOpen(false)}
                className="p-1 text-[#888888]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-[#FAF7F2] py-2">
              {filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => {
                    handleSelectLocation(loc)
                    setMobileSheetOpen(false)
                  }}
                  className="py-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#0F172A]">
                      {loc.name}
                    </span>
                    <span className="text-[10px] text-[#B91C1C] font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded-full">
                      {loc.distanceToVenueKm === 0 ? 'Venue' : `${loc.distanceToVenueKm} km`}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-0.5">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
