import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { 
  RotateCcw, 
  MapPin, 
  SlidersHorizontal,
  ArrowUpDown,
  Landmark,
  Sparkles,
  Compass,
  BookOpen,
  UtensilsCrossed,
  Trees,
  Lightbulb,
  PanelLeftClose,
  Anchor,
  Search,
  X
} from 'lucide-react'
import { DestinationFilterState } from './DestinationFilterBar'

interface CollapsibleDestinationSidebarProps {
  filters: DestinationFilterState
  setFilters: React.Dispatch<React.SetStateAction<DestinationFilterState>>
  categories: string[]
  categoryCounts: Record<string, number>
  totalCount: number
  totalFilteredCount: number
  onReset: () => void
  isOpen: boolean
  onClose: () => void
}

export const CollapsibleDestinationSidebar: React.FC<CollapsibleDestinationSidebarProps> = ({
  filters,
  setFilters,
  categories,
  categoryCounts,
  totalCount,
  totalFilteredCount,
  onReset,
  isOpen,
  onClose
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling on mobile when bottom modal is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  const activeFiltersCount = [
    Boolean(filters.searchQuery),
    filters.category !== 'All',
    filters.maxDistance !== null,
    filters.sortBy !== 'distance'
  ].filter(Boolean).length

  // Category Icon & Color Mapping
  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'Heritage & Architecture':
        return { icon: Landmark, color: 'text-amber-800 bg-amber-50 border-amber-200' }
      case 'Spiritual & Sacred':
        return { icon: Sparkles, color: 'text-orange-800 bg-orange-50 border-orange-200' }
      case 'Riverside & Cruises':
        return { icon: Anchor, color: 'text-cyan-800 bg-cyan-50 border-cyan-200' }
      case 'Art & Literature':
        return { icon: BookOpen, color: 'text-purple-800 bg-purple-50 border-purple-200' }
      case 'Culinary & Bazaars':
        return { icon: UtensilsCrossed, color: 'text-rose-800 bg-rose-50 border-rose-200' }
      case 'Sports & Nature':
        return { icon: Trees, color: 'text-emerald-800 bg-emerald-50 border-emerald-200' }
      case 'Science & Innovation':
        return { icon: Lightbulb, color: 'text-blue-800 bg-blue-50 border-blue-200' }
      default:
        return { icon: Compass, color: 'text-slate-800 bg-slate-50 border-slate-200' }
    }
  }

  if (!isOpen) return null

  // Shared Filter Form Elements
  const renderFilterContent = () => (
    <div className="space-y-6">
      {/* Search Directory */}
      <div>
        <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
          Search Destinations
        </label>
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BD1113]" />
          <input
            type="text"
            placeholder="Search destination, area, history..."
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl border-2 border-[#E5D5C5] bg-[#FAF7F2] text-[#0F172A] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#BD1113]/15 focus:border-[#BD1113] focus:bg-white transition-all shadow-inner"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Section 1: Categories Facet */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-[#BD1113]" />
            <span>Category Facets</span>
          </span>
          <span className="text-[10px] font-medium text-slate-400">
            {categories.length - 1} Themes
          </span>
        </label>

        <div className="space-y-1.5">
          {categories.map((cat) => {
            const isSelected = filters.category === cat
            const count = cat === 'All' ? totalCount : categoryCounts[cat] || 0
            const meta = getCategoryMeta(cat)
            const IconComp = meta.icon

            return (
              <button
                key={cat}
                onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#0F172A] border-[#E5D5C5]/70 hover:bg-[#FEF3C7] hover:border-[#FDE68A]'
                }`}
              >
                <div className="flex items-center gap-2 truncate pr-1">
                  <IconComp className={`h-3.5 w-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#BD1113]'}`} />
                  <span className="truncate">{cat === 'All' ? 'All Iconic Spaces' : cat}</span>
                </div>

                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold shrink-0 ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Section 2: Proximity Radius from Convention Center */}
      <div className="pt-4 border-t border-[#F3E8D8]">
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#BD1113]" />
            <span>Proximity Radius</span>
          </label>
          {filters.maxDistance !== null && (
            <span className="text-[11px] font-bold text-[#BD1113]">
              &le; {filters.maxDistance} km
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: 'All Distances', value: null, desc: 'Across Kolkata' },
            { label: 'Within 5 km', value: 5, desc: 'Near Milan Mela' },
            { label: 'Within 10 km', value: 10, desc: 'Central Kolkata' },
            { label: 'Within 15 km', value: 15, desc: 'Greater Kolkata' },
          ].map((dist) => (
            <button
              key={dist.label}
              onClick={() => setFilters((prev) => ({ ...prev, maxDistance: dist.value }))}
              className={`py-2 px-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                filters.maxDistance === dist.value
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#0F172A] border-[#E5D5C5]/70 hover:bg-[#FEF3C7]'
              }`}
            >
              <div className="font-bold text-xs leading-tight">{dist.label}</div>
              <div className={`text-[10px] mt-0.5 ${filters.maxDistance === dist.value ? 'text-white/80' : 'text-[#64748B]'}`}>
                {dist.desc}
              </div>
            </button>
          ))}
        </div>

        <p className="mt-2 text-[10px] text-[#64748B] flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BD1113] shrink-0" />
          Measured from Biswa Bangla Mela Prangan (Venue)
        </p>
      </div>

      {/* Section 3: Sorting Order */}
      <div className="pt-4 border-t border-[#F3E8D8]">
        <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
          <ArrowUpDown className="h-3.5 w-3.5 text-[#BD1113]" />
          <span>Sort Destinations</span>
        </label>

        <div className="space-y-1.5">
          {[
            { id: 'distance', label: 'Nearest to PBD Venue First', hint: 'Ascending distance' },
            { id: 'name', label: 'Alphabetical Order (A – Z)', hint: 'By landmark name' }
          ].map((sortOption) => (
            <button
              key={sortOption.id}
              onClick={() => setFilters((prev) => ({ ...prev, sortBy: sortOption.id as any }))}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition border text-left cursor-pointer ${
                filters.sortBy === sortOption.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-[#FAF7F2] text-[#0F172A] border-[#E5D5C5]/70 hover:bg-[#FEF3C7]'
              }`}
            >
              <span>{sortOption.label}</span>
              <span className={`text-[9px] uppercase font-bold ${
                filters.sortBy === sortOption.id ? 'text-[#FEF3C7]' : 'text-slate-400'
              }`}>
                {sortOption.hint}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (>= 1024px): Standard Left Sticky Sidebar      */}
      {/* ============================================================== */}
      <aside className="hidden lg:block w-80 shrink-0 bg-white rounded-2xl border border-[#F3E8D8] p-5 shadow-lg lg:sticky lg:top-[125px] max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 animate-in fade-in slide-in-from-left-4 duration-300">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F3E8D8] mb-5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#FEF3C7] text-[#B91C1C]">
              <SlidersHorizontal className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-sm text-[#0F172A]">
                Destination Filters
              </h2>
              <p className="text-[10px] text-[#64748B]">
                Faceted Kolkata exploration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {activeFiltersCount > 0 && (
              <button
                onClick={onReset}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#BD1113] hover:underline mr-1 cursor-pointer"
                title="Reset all filters"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              title="Close sidebar"
              aria-label="Close sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          </div>
        </div>

        {renderFilterContent()}
      </aside>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET VIEW (< 1024px): Swipe-up Bottom Modal      */}
      {/* Matches user shared screenshot with backdrop blur & drag pill */}
      {/* ============================================================== */}
      {mounted && createPortal(
        <div className="lg:hidden">
          {/* Dimmed Blurred Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sliding Bottom Modal Sheet */}
          <div 
            className="fixed inset-x-0 bottom-0 z-[9999] bg-white rounded-t-3xl shadow-2xl border-t-2 border-[#BD1113] max-h-[85vh] sm:max-h-[88vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 select-none"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Destination Filters"
          >
            {/* Top Drag Handle Bar (Matches screenshot) */}
            <div className="pt-3 pb-1 flex justify-center shrink-0">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* Bottom Modal Header */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#F3E8D8] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#FEF3C7] text-[#B91C1C] shadow-2xs">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-base text-[#0F172A] leading-tight">
                    Destination Filters
                  </h2>
                  <p className="text-[11px] text-[#64748B]">
                    Faceted Kolkata exploration
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={onReset}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#BD1113] hover:underline mr-1 cursor-pointer"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset</span>
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  title="Close filters"
                  aria-label="Close filters"
                >
                  <PanelLeftClose className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Filter Form Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 scrollbar-thin">
              {renderFilterContent()}
            </div>

            {/* Sticky Bottom Action Buttons */}
            <div className="p-3.5 bg-white/95 backdrop-blur-md border-t border-[#F3E8D8] flex items-center gap-2.5 shrink-0 shadow-lg">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-[#BD1113] hover:bg-[#A80E10] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Apply Filters &amp; View Destinations ({totalFilteredCount})</span>
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={onReset}
                  className="py-3 px-3.5 rounded-xl border border-red-200 bg-red-50 text-[#BD1113] font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
