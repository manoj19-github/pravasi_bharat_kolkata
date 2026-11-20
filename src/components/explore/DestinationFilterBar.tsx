import React from 'react'
import { Search, X, RotateCcw, MapPin, Compass, ArrowUpDown } from 'lucide-react'

export interface DestinationFilterState {
  searchQuery: string
  category: string
  maxDistance: number | null
  sortBy: 'distance' | 'name'
}

interface DestinationFilterBarProps {
  filters: DestinationFilterState
  setFilters: React.Dispatch<React.SetStateAction<DestinationFilterState>>
  categories: string[]
  totalFilteredCount: number
  totalCount: number
  onReset: () => void
}

export const DestinationFilterBar: React.FC<DestinationFilterBarProps> = ({
  filters,
  setFilters,
  categories,
  totalFilteredCount,
  totalCount,
  onReset
}) => {
  const hasActiveFilters = 
    Boolean(filters.searchQuery) ||
    filters.category !== 'All' ||
    filters.maxDistance !== null ||
    filters.sortBy !== 'distance'

  return (
    <div className="sticky top-[48px] sm:top-[54px] lg:top-[56px] z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#BD1113]/20 py-2 transition-all duration-200">
      <div className="w-[98vw] max-w-[1920px] mx-auto px-2 sm:px-4 space-y-2">
        
        {/* Main Row: Prominent Search + Distance & Sort Options */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5">
          
          {/* Prominent High-Visibility Search Input */}
          <div className="relative flex-1 max-w-2xl group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-[#BD1113]">
              <Search className="h-4 w-4 font-bold" />
            </div>

            <input
              type="text"
              placeholder="Search destination, area, history, landmark (e.g. Victoria, Coffee House, Kumartuli, River Cruise)..."
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border-2 border-[#BD1113]/35 bg-[#FAF7F2] text-[#0F172A] placeholder-slate-400 font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD1113]/20 focus:border-[#BD1113] focus:bg-white transition-all"
            />

            {filters.searchQuery && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
                title="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Right Controls: Proximity Radius & Sorting */}
          <div className="flex items-center gap-2 justify-between lg:justify-end flex-wrap sm:flex-nowrap shrink-0">
            
            {/* Proximity Radius Segmented */}
            <div className="flex items-center gap-1 bg-[#FAF7F2] p-0.5 rounded-xl border border-[#E5D5C5] text-xs">
              <span className="hidden sm:inline-flex items-center gap-1 pl-2 text-[10.5px] font-bold text-slate-500 uppercase">
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
                  className={`py-1 px-2.5 rounded-lg font-semibold text-xs transition-all ${
                    filters.maxDistance === item.value
                      ? 'bg-[#BD1113] text-white shadow-xs'
                      : 'text-[#0F172A] hover:bg-[#FEF3C7]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-xl border border-[#E5D5C5] text-xs font-semibold text-[#0F172A]">
              <ArrowUpDown className="h-3 w-3 text-[#BD1113] shrink-0" />
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-transparent text-xs font-semibold text-[#0F172A] focus:outline-none cursor-pointer"
              >
                <option value="distance">Nearest to Venue</option>
                <option value="name">Alphabetical (A–Z)</option>
              </select>
            </div>

            {/* Count Badge */}
            <div className="hidden xl:flex items-center gap-1 text-xs text-[#64748B] px-2.5 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#E5D5C5]">
              <span>Showing</span>
              <strong className="text-[#0F172A] font-bold">{totalFilteredCount}</strong>
              <span>of {totalCount}</span>
            </div>

            {/* Quick Reset */}
            {hasActiveFilters && (
              <button
                onClick={onReset}
                className="inline-flex items-center gap-1 py-1.5 px-2.5 rounded-xl border border-[#E5D5C5] bg-white text-[#BD1113] hover:bg-red-50 text-xs font-bold transition shrink-0 shadow-xs"
                title="Reset all filters"
              >
                <RotateCcw className="h-3 w-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}

          </div>

        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 text-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
            <Compass className="h-3.5 w-3.5 text-[#BD1113]" />
            <span>Categories:</span>
          </span>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
              className={`py-1 px-3 rounded-full text-xs font-bold shrink-0 transition-all border ${
                filters.category === cat
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                  : 'bg-white text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
