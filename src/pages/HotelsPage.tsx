import React, { useState, useMemo } from 'react'
import { 
  Building2, 
  Sparkles, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react'
import { HOTELS_DATA, Hotel, ZoneType } from '../data/hotels'
import { AccommodationCard } from '../components/hotels/AccommodationCard'
import { StickyHotelFilterBar, FilterState } from '../components/hotels/StickyHotelFilterBar'
import { CollapsibleHotelSidebar } from '../components/hotels/CollapsibleHotelSidebar'
import alponaThemeSvg from '../assets/alpana/alpona_theme.svg'
import chakra from '../assets/alpana/chakra.svg'
import staticCornerMotif from '../assets/images/cultural/corner_motif_crimson_right.png'

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  propertyType: 'all',
  maxDistance: null,
  selectedZone: 'All',
  nidhiOnly: false,
  selectedFacilities: [],
  sortBy: 'distance'
}

export const HotelsPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Extract all unique facilities & zones from dataset
  const availableFacilities = useMemo(() => {
    const set = new Set<string>()
    HOTELS_DATA.forEach((h) => h.facilities.forEach((f) => set.add(f)))
    return Array.from(set).sort()
  }, [])

  const availableZones = useMemo(() => {
    const set = new Set<ZoneType>()
    HOTELS_DATA.forEach((h) => set.add(h.zone))
    return Array.from(set).sort()
  }, [])

  // Aggregate counts for directory statistics
  const counts = useMemo(() => {
    return {
      total: HOTELS_DATA.length,
      hotels: HOTELS_DATA.filter((h) => h.propertyType === 'hotel').length,
      homestays: HOTELS_DATA.filter((h) => h.propertyType === 'homestay').length,
      bnbs: HOTELS_DATA.filter((h) => h.propertyType === 'bnb').length,
      nidhiCertified: HOTELS_DATA.filter((h) => h.nidhiCertified).length
    }
  }, [])

  // Filter & sort logic
  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel: Hotel) => {
      // 1. Text Search (name, address, location, category, facilities)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim()
        const matchName = hotel.name.toLowerCase().includes(query)
        const matchLocation = hotel.location.toLowerCase().includes(query)
        const matchAddress = hotel.address.toLowerCase().includes(query)
        const matchCategory = hotel.category.toLowerCase().includes(query)
        const matchFacility = hotel.facilities.some((f) => f.toLowerCase().includes(query))
        if (!matchName && !matchLocation && !matchAddress && !matchCategory && !matchFacility) {
          return false
        }
      }

      // 2. Property Type
      if (filters.propertyType !== 'all' && hotel.propertyType !== filters.propertyType) {
        return false
      }

      // 3. Proximity Radius
      if (filters.maxDistance !== null && hotel.distanceKm > filters.maxDistance) {
        return false
      }

      // 4. Zone / Corridor
      if (filters.selectedZone !== 'All' && hotel.zone !== filters.selectedZone) {
        return false
      }

      // 5. NIDHI Verified Only
      if (filters.nidhiOnly && !hotel.nidhiCertified) {
        return false
      }

      // 6. Facilities (must contain ALL selected facilities)
      if (filters.selectedFacilities.length > 0) {
        const hasAllFacilities = filters.selectedFacilities.every((fac) =>
          hotel.facilities.includes(fac)
        )
        if (!hasAllFacilities) return false
      }

      return true
    }).sort((a, b) => {
      if (filters.sortBy === 'distance') {
        return a.distanceKm - b.distanceKm
      }
      if (filters.sortBy === 'rating') {
        const ratingA = a.starRating || (a.category.includes('5-Star') ? 5 : a.category.includes('4-Star') ? 4 : 3)
        const ratingB = b.starRating || (b.category.includes('5-Star') ? 5 : b.category.includes('4-Star') ? 4 : 3)
        return ratingB - ratingA || a.distanceKm - b.distanceKm
      }
      if (filters.sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
  }, [filters])

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] text-[#0F172A] selection:bg-[#BD1113]/20 selection:text-[#BD1113] overflow-x-clip">
      
      {/* Background Bengali Alpana Motifs (Matches Homepage Aesthetic) */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-24 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-20 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.12)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute -right-28 sm:-right-36 lg:-right-44 top-[500px] w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] pointer-events-none z-0 opacity-15 select-none">
        <img
          src={chakra}
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-2 right-0 w-32 sm:w-48 lg:w-64 opacity-15 pointer-events-none select-none z-0">
        <img
          src={staticCornerMotif}
          alt=""
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 pt-6 pb-16">
        
        {/* Full-Text Headline Header (No 'PBD' Abbreviation, Eye-Catchy Bengali Heritage Styling) */}
        <div className="w-[98vw] max-w-[1920px] mx-auto px-2 sm:px-4 text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs font-bold text-[#B91C1C] uppercase tracking-wider shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ministry of Tourism NIDHI Portal Classified Directory</span>
          </div>

          <h1 className="mt-3.5 font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            19th Pravasi Bharatiya Divas Convention 2027 <br className="hidden sm:inline" />
            <span className="text-[#BD1113]">Kolkata Delegate Accommodations</span>
          </h1>

          <p className="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed max-w-4xl mx-auto">
            Discover Government-classified luxury hotels, certified boutique homestays, and bed &amp; breakfast accommodations curated for overseas Indian delegates, situated near Biswa Bangla Mela Prangan and along Kolkata’s arterial corridors.
          </p>

          <div className="mt-3.5 flex items-center justify-center gap-2">
            <div className="h-0.5 w-16 bg-[#BD1113]/30 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#BD1113] shadow-xs" />
            <div className="h-0.5 w-16 bg-[#BD1113]/30 rounded-full" />
          </div>
        </div>

        {/* Modern Sticky Top Filter cum Search Bar: Exactly ONE Single Line, Minimal Height, High Importance */}
        <StickyHotelFilterBar
          filters={filters}
          setFilters={setFilters}
          counts={counts}
          availableFacilities={availableFacilities}
          availableZones={availableZones}
          onReset={handleResetFilters}
          totalFilteredCount={filteredHotels.length}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Hotels Section: Preserves comfortable side margins ('little space in left and right only for hotels section') */}
        <div className="w-[92vw] sm:w-[93vw] lg:w-[94vw] max-w-[1760px] mx-auto px-3 sm:px-6 lg:px-8 mt-5">
          
          {/* Sub-Header Bar: Showing Count & Active Indicator */}
          <div className="flex items-center justify-between text-xs text-[#64748B] mb-4 pb-2 border-b border-[#E5D5C5]/60">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                Showing <strong className="text-[#0F172A] font-bold text-sm">{filteredHotels.length}</strong> of {counts.total} stays in Kolkata
              </span>
              {filters.searchQuery && (
                <span className="inline-flex items-center gap-1 bg-red-50 text-[#BD1113] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-red-200">
                  &ldquo;{filters.searchQuery}&rdquo;
                </span>
              )}
              {filters.propertyType !== 'all' && (
                <span className="bg-slate-100 text-[#0F172A] px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  {filters.propertyType.toUpperCase()}
                </span>
              )}
            </div>

            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BD1113] hover:underline"
              >
                <SlidersHorizontal className="h-3 w-3" />
                <span>Advanced Faceted Filters</span>
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-5">
            
            {/* Collapsible Left Filter & Advanced Search Sidebar */}
            <CollapsibleHotelSidebar
              filters={filters}
              setFilters={setFilters}
              counts={counts}
              availableFacilities={availableFacilities}
              availableZones={availableZones}
              onReset={handleResetFilters}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Cards Grid: 3 Columns Full Width */}
            <div className="flex-1 w-full min-w-0">
              {filteredHotels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredHotels.map((hotel) => (
                    <AccommodationCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-20 px-4 bg-white/90 rounded-2xl border border-dashed border-[#E5D5C5] shadow-xs">
                  <div className="inline-flex p-3 rounded-full bg-red-50 text-[#BD1113] mb-3">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0F172A]">
                    No Accommodations Match Your Filters
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 max-w-md mx-auto">
                    Try adjusting your distance radius, removing selected amenities, or clearing the search query to view all classified stays.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-[#BD1113] text-white text-xs font-bold hover:bg-[#A00E10] transition shadow"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
