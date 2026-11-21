import React from 'react'
import { 
  Search, 
  X, 
  RotateCcw, 
  Building2, 
  Home, 
  Coffee, 
  ShieldCheck, 
  PanelLeftOpen,
  SlidersHorizontal
} from 'lucide-react'
import { PropertyType, ZoneType } from '../../data/hotels'

export interface FilterState {
  searchQuery: string
  propertyType: 'all' | PropertyType
  maxDistance: number | null
  selectedZone: string
  nidhiOnly: boolean
  selectedFacilities: string[]
  sortBy: 'distance' | 'rating' | 'name'
}

interface StickyHotelFilterBarProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
  counts: {
    total: number
    hotels: number
    homestays: number
    bnbs: number
    nidhiCertified: number
  }
  availableFacilities?: string[]
  availableZones?: ZoneType[]
  onReset: () => void
  totalFilteredCount: number
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const StickyHotelFilterBar: React.FC<StickyHotelFilterBarProps> = ({
  filters,
  setFilters,
  counts,
  onReset,
  totalFilteredCount: _totalFilteredCount,
  isSidebarOpen,
  setIsSidebarOpen
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

  return (
    <div className="sticky top-[48px] sm:top-[54px] lg:top-[56px] z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-[#BD1113]/20 transition-all duration-200">
      <div className="w-[98vw] max-w-[1920px] mx-auto px-2 sm:px-4 py-1.5 sm:py-2">
        
        {/* Strictly ONE Single Horizontal Row with Responsive Mobile Overflow */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-3 flex-nowrap overflow-x-auto scrollbar-none [touch-action:pan-x]">
          
          {/* Left Group: Collapsible Sidebar Toggle & High-Importance Search */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Collapsible Left Sidebar Button */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-xl text-xs font-bold transition-all border shrink-0 shadow-xs cursor-pointer ${
                isSidebarOpen
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-sm ring-2 ring-[#BD1113]/20'
                  : 'bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#BD1113] hover:border-[#BD1113]'
              }`}
              title={isSidebarOpen ? 'Collapse Filter Sidebar' : 'Open Filter & Search Sidebar'}
              aria-label="Toggle Filter Sidebar"
            >
              {isSidebarOpen ? (
                <SlidersHorizontal className="h-3.5 w-3.5" />
              ) : (
                <PanelLeftOpen className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">{isSidebarOpen ? 'Close' : 'Filters'}</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-[#BD1113] text-[10px] flex items-center justify-center font-extrabold shadow-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* High-Importance Adaptive Search Bar */}
            <div className="relative w-36 xs:w-48 sm:w-64 md:w-80 lg:w-96 group shrink-0">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <div className="p-0.5 rounded-full text-[#BD1113]">
                  <Search className="h-3.5 w-3.5 font-bold" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Search stay name, road, area..."
                value={filters.searchQuery}
                onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full pl-8 pr-7 py-1.5 text-xs sm:text-[13px] rounded-xl border-2 border-[#BD1113]/35 bg-[#FAF7F2] text-[#0F172A] placeholder-slate-400 font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD1113]/20 focus:border-[#BD1113] focus:bg-white transition-all"
              />

              {filters.searchQuery && (
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Right Group: Property Type Tabs, NIDHI Toggle & Quick Reset */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Property Classification Segmented Control */}
            <div className="flex items-center gap-1 bg-[#FAF7F2] p-0.5 rounded-xl border border-[#E5D5C5]">
              <button
                onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'all' }))}
                className={`py-1 px-2 sm:px-2.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                  filters.propertyType === 'all'
                    ? 'bg-[#BD1113] text-white shadow-xs'
                    : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                }`}
              >
                <span>All</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  filters.propertyType === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {counts.total}
                </span>
              </button>

              <button
                onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'hotel' }))}
                className={`py-1 px-2 sm:px-2.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                  filters.propertyType === 'hotel'
                    ? 'bg-[#BD1113] text-white shadow-xs'
                    : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                }`}
              >
                <Building2 className="h-3 w-3" />
                <span className="hidden sm:inline">Hotels</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  filters.propertyType === 'hotel' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {counts.hotels}
                </span>
              </button>

              <button
                onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'homestay' }))}
                className={`py-1 px-2 sm:px-2.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                  filters.propertyType === 'homestay'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                }`}
              >
                <Home className="h-3 w-3" />
                <span className="hidden sm:inline">Homestays</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  filters.propertyType === 'homestay' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {counts.homestays}
                </span>
              </button>

              <button
                onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'bnb' }))}
                className={`py-1 px-2 sm:px-2.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                  filters.propertyType === 'bnb'
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                }`}
              >
                <Coffee className="h-3 w-3" />
                <span className="hidden sm:inline">B&amp;B</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  filters.propertyType === 'bnb' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {counts.bnbs}
                </span>
              </button>
            </div>

            {/* NIDHI Approved Toggle */}
            <label className={`inline-flex items-center gap-1.5 py-1 px-2 sm:px-2.5 rounded-xl text-xs font-bold cursor-pointer transition border shrink-0 ${
              filters.nidhiOnly
                ? 'bg-[#FEF3C7] text-[#B91C1C] border-[#FDE68A] shadow-xs'
                : 'bg-white text-[#475569] border-[#E5D5C5] hover:bg-[#FAF7F2]'
            }`}>
              <ShieldCheck className={`h-3.5 w-3.5 ${filters.nidhiOnly ? 'text-[#B91C1C]' : 'text-slate-400'}`} />
              <span className="hidden md:inline">NIDHI Certified</span>
              <span className="md:hidden">NIDHI</span>
              <input
                type="checkbox"
                checked={filters.nidhiOnly}
                onChange={(e) => setFilters((prev) => ({ ...prev, nidhiOnly: e.target.checked }))}
                className="sr-only"
              />
              <span className={`w-2 h-2 rounded-full ${filters.nidhiOnly ? 'bg-[#BD1113]' : 'bg-slate-300'}`} />
            </label>

            {/* Quick Reset Button if any filter active */}
            {activeFiltersCount > 0 && (
              <button
                onClick={onReset}
                className="inline-flex items-center gap-1 py-1 px-2.5 rounded-xl border border-[#BD1113]/30 bg-red-50 text-[#BD1113] hover:bg-[#BD1113] hover:text-white text-xs font-bold transition shrink-0 shadow-xs cursor-pointer"
                title="Reset all filters"
                aria-label="Reset all filters"
              >
                <RotateCcw className="h-3 w-3" />
                <span className="hidden lg:inline text-[11px]">Reset</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
