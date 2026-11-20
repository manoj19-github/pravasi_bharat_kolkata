import React from 'react'
import { 
  Search, 
  X, 
  RotateCcw, 
  MapPin, 
  Building2, 
  Home, 
  Coffee, 
  ShieldCheck, 
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react'
import { PropertyType, ZoneType } from '../../data/hotels'

export interface FilterState {
  searchQuery: string
  propertyType: 'all' | PropertyType
  maxDistance: number | null // null for all distances, 2, 5, 10
  selectedZone: string
  nidhiOnly: boolean
  selectedFacilities: string[]
  sortBy: 'distance' | 'rating' | 'name'
}

interface HotelFilterSidebarProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
  counts: {
    total: number
    hotels: number
    homestays: number
    bnbs: number
    nidhiCertified: number
  }
  availableFacilities: string[]
  availableZones: ZoneType[]
  onReset: () => void
  isMobileOpen?: boolean
  setIsMobileOpen?: (open: boolean) => void
}

export const HotelFilterSidebar: React.FC<HotelFilterSidebarProps> = ({
  filters,
  setFilters,
  counts,
  availableFacilities,
  availableZones,
  onReset,
  isMobileOpen = false,
  setIsMobileOpen
}) => {
  const activeFiltersCount = [
    Boolean(filters.searchQuery),
    filters.propertyType !== 'all',
    filters.maxDistance !== null,
    filters.selectedZone !== 'All',
    filters.nidhiOnly,
    filters.selectedFacilities.length > 0,
    filters.sortBy !== 'distance'
  ].filter(Boolean).length

  const handleFacilityToggle = (fac: string) => {
    setFilters((prev) => {
      const exists = prev.selectedFacilities.includes(fac)
      return {
        ...prev,
        selectedFacilities: exists
          ? prev.selectedFacilities.filter((f) => f !== fac)
          : [...prev.selectedFacilities, fac]
      }
    })
  }

  const content = (
    <div className="space-y-6">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F3E8D8]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#FEF3C7] text-[#B91C1C]">
            <SlidersHorizontal className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-base text-[#0F172A]">
              Filter & Search
            </h2>
            <p className="text-[11px] text-[#64748B]">
              Refine {counts.total} stays in Kolkata
            </p>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#BD1113] hover:underline"
            title="Reset all filters"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset ({activeFiltersCount})</span>
          </button>
        )}
      </div>

      {/* 1. Keyword Search */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-2 uppercase tracking-wider">
          Search Directory
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search stay name, road, area..."
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-[#E5D5C5] bg-[#FFFDF9] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#BD1113]/30 focus:border-[#BD1113]"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Sort Options */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-2 uppercase tracking-wider flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ArrowUpDown className="h-3.5 w-3.5 text-[#BD1113]" />
            Sort By
          </span>
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
          className="w-full py-2 px-3 text-xs rounded-xl border border-[#E5D5C5] bg-[#FFFDF9] text-[#0F172A] font-medium focus:outline-none focus:ring-2 focus:ring-[#BD1113]/30 focus:border-[#BD1113]"
        >
          <option value="distance">Nearest to Biswa Bangla Mela Prangan</option>
          <option value="rating">Star Rating & Luxury Tier</option>
          <option value="name">Name (Alphabetical A–Z)</option>
        </select>
      </div>

      {/* 3. Property Classification Type Tabs */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-2 uppercase tracking-wider">
          Accommodation Type
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'all' }))}
            className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
              filters.propertyType === 'all'
                ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-sm'
                : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
            }`}
          >
            <span>All Stays</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              filters.propertyType === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.total}
            </span>
          </button>

          <button
            onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'hotel' }))}
            className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
              filters.propertyType === 'hotel'
                ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-sm'
                : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
            }`}
          >
            <span className="flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              Hotels
            </span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              filters.propertyType === 'hotel' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.hotels}
            </span>
          </button>

          <button
            onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'homestay' }))}
            className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
              filters.propertyType === 'homestay'
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
            }`}
          >
            <span className="flex items-center gap-1">
              <Home className="h-3 w-3" />
              Homestays
            </span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              filters.propertyType === 'homestay' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.homestays}
            </span>
          </button>

          <button
            onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'bnb' }))}
            className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
              filters.propertyType === 'bnb'
                ? 'bg-amber-700 text-white border-amber-700 shadow-sm'
                : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
            }`}
          >
            <span className="flex items-center gap-1">
              <Coffee className="h-3 w-3" />
              B&B
            </span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              filters.propertyType === 'bnb' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.bnbs}
            </span>
          </button>
        </div>
      </div>

      {/* 4. NIDHI Govt. Certification Toggle */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-[#FEF3C7]/80 to-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between">
        <div className="flex items-start gap-2">
          <ShieldCheck className="h-4 w-4 text-[#B91C1C] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-bold text-[#0F172A] block leading-tight">
              NIDHI Govt. Verified
            </span>
            <span className="text-[10px] text-[#64748B]">
              Ministry of Tourism classified
            </span>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.nidhiOnly}
            onChange={(e) => setFilters((prev) => ({ ...prev, nidhiOnly: e.target.checked }))}
            className="sr-only peer"
          />
          <div className="w-8 h-4.5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-[#BD1113]"></div>
        </label>
      </div>

      {/* 5. Proximity to Biswa Bangla Mela Prangan */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-2 uppercase tracking-wider flex items-center justify-between">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-[#BD1113]" />
            Proximity to Venue
          </span>
          {filters.maxDistance && (
            <span className="text-[10px] font-bold text-[#BD1113]">
              &le; {filters.maxDistance} km
            </span>
          )}
        </label>
        <div className="space-y-1.5">
          {[
            { label: 'All Distances', value: null },
            { label: 'Walking & Adjacent (< 2 km)', value: 2 },
            { label: 'Close Drive (< 5 km)', value: 5 },
            { label: 'City Corridor (< 10 km)', value: 10 }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => setFilters((prev) => ({ ...prev, maxDistance: item.value }))}
              className={`w-full py-1.5 px-3 rounded-lg text-xs font-medium text-left flex items-center justify-between transition-colors ${
                filters.maxDistance === item.value
                  ? 'bg-[#FEF3C7] text-[#0F172A] font-bold border border-[#FDE68A]'
                  : 'hover:bg-[#FAF7F2] text-[#475569]'
              }`}
            >
              <span>{item.label}</span>
              {filters.maxDistance === item.value && (
                <span className="w-2 h-2 rounded-full bg-[#BD1113]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 6. Geographic Corridor / Zone */}
      <div>
        <label className="block text-xs font-bold text-[#0F172A] mb-2 uppercase tracking-wider">
          Kolkata Zone / Corridor
        </label>
        <select
          value={filters.selectedZone}
          onChange={(e) => setFilters((prev) => ({ ...prev, selectedZone: e.target.value }))}
          className="w-full py-2 px-3 text-xs rounded-xl border border-[#E5D5C5] bg-[#FFFDF9] text-[#0F172A] font-medium focus:outline-none focus:ring-2 focus:ring-[#BD1113]/30 focus:border-[#BD1113]"
        >
          <option value="All">All Locations & Corridors</option>
          {availableZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>

      {/* 7. Facilities / Amenities Multi-select */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
            Amenities
          </label>
          {filters.selectedFacilities.length > 0 && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, selectedFacilities: [] }))}
              className="text-[10px] text-[#BD1113] hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
          {availableFacilities.map((fac) => {
            const isSelected = filters.selectedFacilities.includes(fac)
            return (
              <button
                key={fac}
                onClick={() => handleFacilityToggle(fac)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold shadow-sm'
                    : 'bg-[#FFFDF9] text-[#475569] border-[#E5D5C5] hover:bg-[#FEF3C7]'
                }`}
              >
                {fac}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto p-5 rounded-2xl border border-[#F3E8D8] bg-white shadow-sm scrollbar-thin">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileOpen?.(false)}
          />
          <div className="relative ml-auto w-full max-w-xs h-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b">
                <span className="font-serif font-bold text-lg text-[#0F172A]">Filter Options</span>
                <button 
                  onClick={() => setIsMobileOpen?.(false)}
                  className="p-1 rounded-full text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-4 mt-6 border-t">
              <button
                onClick={() => setIsMobileOpen?.(false)}
                className="w-full py-2.5 rounded-xl bg-[#BD1113] text-white font-bold text-xs shadow"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
