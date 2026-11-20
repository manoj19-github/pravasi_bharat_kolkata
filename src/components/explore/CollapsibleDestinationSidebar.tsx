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
  Anchor
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
  totalFilteredCount: _totalFilteredCount,
  onReset,
  isOpen,
  onClose
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 1024) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen])

  const activeFiltersCount = [
    Boolean(filters.searchQuery),
    filters.category !== 'All',
    filters.maxDistance !== null,
    filters.sortBy !== 'distance'
  ].filter(Boolean).length

  if (!isOpen) return null

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

  const renderContent = () => (
    <>
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
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#BD1113] hover:underline mr-1"
              title="Reset all filters"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            title="Close Filters"
            aria-label="Close Filters"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>
      </div>

              <div className="space-y-6">

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
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-left ${isSelected
                              ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                              : 'bg-[#FAF7F2] text-[#0F172A] border-[#E5D5C5]/70 hover:bg-[#FEF3C7] hover:border-[#FDE68A]'
                            }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-1">
                            <IconComp className={`h-3.5 w-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#BD1113]'}`} />
                            <span className="truncate">{cat === 'All' ? 'All Iconic Spaces' : cat}</span>
                          </div>

                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold shrink-0 ${isSelected
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
                        className={`py-2 px-2.5 rounded-xl text-left border transition-all ${filters.maxDistance === dist.value
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
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition border text-left ${filters.sortBy === sortOption.id
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : 'bg-[#FAF7F2] text-[#0F172A] border-[#E5D5C5]/70 hover:bg-[#FEF3C7]'
                          }`}
                      >
                        <span>{sortOption.label}</span>
                        <span className={`text-[9px] uppercase font-bold ${filters.sortBy === sortOption.id ? 'text-[#FEF3C7]' : 'text-slate-400'
                          }`}>
                          {sortOption.hint}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 4: Fast Search Reset Button */}
                {activeFiltersCount > 0 && (
                  <div className="pt-4 border-t border-[#F3E8D8]">
                    <button
                      onClick={onReset}
                      className="w-full py-2.5 px-4 rounded-xl border border-red-200 bg-red-50 text-[#BD1113] hover:bg-red-100 font-bold text-xs flex items-center justify-center gap-2 transition"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Reset All Filters ({activeFiltersCount})</span>
                    </button>
                  </div>
                )}

        {/* Mobile Sticky Footer with Apply Button */}
        <div className="pt-4 mt-6 border-t border-[#F3E8D8] flex items-center justify-between gap-3 lg:hidden">
          <button
            onClick={onReset}
            className="py-2.5 px-4 rounded-xl border border-[#E5D5C5] text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Reset Filters
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#BD1113] hover:bg-[#A80E10] text-white text-xs font-bold shadow-md transition text-center"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* 1. Desktop: Render inline sidebar in the grid layout */}
      <aside className="hidden lg:block w-80 shrink-0 rounded-2xl border border-[#F3E8D8] bg-white p-5 shadow-sm sticky top-[125px] max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
        {renderContent()}
      </aside>

      {/* 2. Mobile & Tablet: Render full-screen portal modal / bottom sheet */}
      {mounted &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[9999] flex flex-col justify-end">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
              onClick={onClose}
              aria-hidden="true"
            />
            {/* Bottom Sheet Drawer */}
            <aside className="relative z-10 w-full max-h-[85vh] rounded-t-3xl bg-white p-5 shadow-2xl border-t-2 border-[#BD1113] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
              {/* Mobile drag handle indicator */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto -mt-1 mb-4" />
              {renderContent()}
            </aside>
          </div>,
          document.body
        )}
    </>
  )
}
