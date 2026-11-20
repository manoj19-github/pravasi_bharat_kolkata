import React from 'react'
import { Search, X, RotateCcw, MapPin, ArrowUpDown, PanelLeftOpen, SlidersHorizontal } from 'lucide-react'

export interface DestinationFilterState {
  searchQuery: string
  category: string
  maxDistance: number | null
  sortBy: 'distance' | 'name'
}

interface DestinationFilterBarProps {
  filters: DestinationFilterState
  setFilters: React.Dispatch<React.SetStateAction<DestinationFilterState>>
  categories?: string[]
  totalFilteredCount: number
  totalCount: number
  onReset: () => void
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DestinationFilterBar: React.FC<DestinationFilterBarProps> = ({
  filters,
  setFilters,
  categories: _categories,
  totalFilteredCount,
  totalCount,
  onReset,
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const activeFiltersCount = [
    Boolean(filters.searchQuery),
    filters.category !== 'All',
    filters.maxDistance !== null,
    filters.sortBy !== 'distance'
  ].filter(Boolean).length

  return (
    <div className="sticky top-[48px] sm:top-[54px] lg:top-[56px] z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5D5C5]/80 transition-all duration-200">
      <div className="w-[98vw] max-w-[1920px] mx-auto px-2 sm:px-4 py-2">
        {/* Strictly ONE Single Horizontal Row (Minimal Height, Zero Second Line) */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-nowrap overflow-x-auto scrollbar-none">

          {/* Left Group: Collapsible Sidebar Toggle & High-Importance Search */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Collapsible Left Sidebar Button */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className={`inline-flex items-center gap-2 py-1.5 px-3 rounded-xl text-xs font-bold transition-all border shrink-0 shadow-xs ${isSidebarOpen
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-sm ring-2 ring-[#BD1113]/20'
                  : 'bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#BD1113] hover:border-[#BD1113]'
                }`}
              title={isSidebarOpen ? 'Collapse Filter Sidebar' : 'Open Filter & Categories Sidebar'}
            >
              {isSidebarOpen ? (
                <SlidersHorizontal className="h-3.5 w-3.5" />
              ) : (
                <PanelLeftOpen className="h-3.5 w-3.5" />
              )}
              <span className="text-xs font-bold">{isSidebarOpen ? 'Close' : 'Filters'}</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-[#BD1113] text-[10px] flex items-center justify-center font-extrabold shadow-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* High-Importance Search Bar */}
              <div className="relative w-44 xs:w-56 sm:w-72 md:w-80 lg:w-[380px] group shrink-0">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <div className="p-0.5 rounded-full text-[#BD1113]">
                    <Search className="h-3.5 w-3.5 font-bold" />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Search destination, area, history, landmark..."
                  value={filters.searchQuery}
                  onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
                  className="w-full pl-8 pr-7 py-1.5 text-xs sm:text-[13px] rounded-xl border-2 border-[#BD1113]/35 bg-[#FAF7F2] text-[#0F172A] placeholder-slate-400 font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD1113]/20 focus:border-[#BD1113] focus:bg-white transition-all"
                />

                {filters.searchQuery && (
                  <button
                    onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
                    title="Clear search"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Group: Proximity Radius, Sort & Quick Reset */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Proximity Radius Segmented Control */}
              <div className="flex items-center gap-1 bg-[#FAF7F2] p-0.5 rounded-xl border border-[#E5D5C5] text-xs">
                <span className="hidden md:inline-flex items-center gap-1 pl-2 text-[10.5px] font-bold text-slate-500 uppercase">
                  <MapPin className="h-3 w-3 text-[#BD1113]" />
                  <span>Radius:</span>
                </span>
                {[
                  { label: 'All', value: null },
                  { label: '< 5 km', value: 5 },
                  { label: '< 10 km', value: 10 },
                  { label: '< 15 km', value: 15 },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFilters((prev) => ({ ...prev, maxDistance: item.value }))}
                    className={`py-1 px-2.5 rounded-lg font-bold text-xs transition-all ${filters.maxDistance === item.value
                        ? 'bg-[#BD1113] text-white shadow-xs'
                        : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-xl border border-[#E5D5C5] text-xs font-semibold text-[#0F172A] shadow-xs">
                <ArrowUpDown className="h-3 w-3 text-[#BD1113] shrink-0" />
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                  className="bg-transparent border-none text-xs font-semibold text-[#0F172A] focus:outline-none cursor-pointer pr-1"
                >
                  <option value="distance">Nearest to Venue</option>
                  <option value="name">Alphabetical (A–Z)</option>
                </select>
              </div>

              {/* Filtered Count Indicator */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#E5D5C5] text-xs text-[#0F172A] shrink-0 shadow-xs">
                <span className="font-medium text-slate-500">Showing</span>
                <span className="font-bold text-[#BD1113]">{totalFilteredCount}</span>
                <span className="text-slate-400">of</span>
                <span className="font-semibold">{totalCount}</span>
              </div>

              {/* Quick Reset Button if any filter is active */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={onReset}
                  className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-xl border border-[#BD1113]/30 bg-red-50 text-[#BD1113] hover:bg-[#BD1113] hover:text-white text-xs font-bold transition shrink-0 shadow-xs"
                  title="Reset all filters"
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
