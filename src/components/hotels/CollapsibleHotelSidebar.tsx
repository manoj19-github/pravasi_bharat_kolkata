import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
  ArrowUpDown,
  Filter,
  PanelLeftClose
} from 'lucide-react'
import { ZoneType } from '../../data/hotels'
import { FilterState } from './StickyHotelFilterBar'

interface CollapsibleHotelSidebarProps {
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
  isOpen: boolean
  onClose: () => void
}

export const CollapsibleHotelSidebar: React.FC<CollapsibleHotelSidebarProps> = ({
  filters,
  setFilters,
  counts,
  availableFacilities,
  availableZones,
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

  if (!isOpen) return null

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
              Filters &amp; Search
            </h2>
            <p className="text-[10px] text-[#64748B]">
              Faceted stay preferences
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

      <div className="space-y-5">
        {/* 1. Keyword Search */}
        <div>
          <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            Search Directory
          </label>
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#BD1113]" />
            <input
              type="text"
              placeholder="Search stay name, road, area..."
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl border-2 border-[#E5D5C5] bg-[#FAF7F2] text-[#0F172A] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#BD1113]/15 focus:border-[#BD1113] focus:bg-white transition-all shadow-inner"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 2. Property Type Tabs */}
        <div>
          <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider">
            Accommodation Type
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'all' }))}
              className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                filters.propertyType === 'all'
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                  : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
              }`}
            >
              <span>All Stays</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filters.propertyType === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {counts.total}
              </span>
            </button>

            <button
              onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'hotel' }))}
              className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                filters.propertyType === 'hotel'
                  ? 'bg-[#BD1113] text-white border-[#BD1113] shadow-xs'
                  : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                Hotels
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filters.propertyType === 'hotel' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {counts.hotels}
              </span>
            </button>

            <button
              onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'homestay' }))}
              className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                filters.propertyType === 'homestay'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                Homestays
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filters.propertyType === 'homestay' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {counts.homestays}
              </span>
            </button>

            <button
              onClick={() => setFilters((prev) => ({ ...prev, propertyType: 'bnb' }))}
              className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                filters.propertyType === 'bnb'
                  ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                  : 'bg-[#FFFDF9] text-[#0F172A] border-[#E5D5C5] hover:bg-[#FEF3C7]'
              }`}
            >
              <span className="flex items-center gap-1">
                <Coffee className="h-3 w-3" />
                B&amp;B
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filters.propertyType === 'bnb' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {counts.bnbs}
              </span>
            </button>
          </div>
        </div>

        {/* 3. NIDHI Govt. Certification Switch */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#FEF3C7]/90 to-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between">
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-[#B91C1C] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#0F172A] block leading-tight">
                NIDHI Verified
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
            <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#BD1113]"></div>
          </label>
        </div>

        {/* 4. Proximity to Biswa Bangla Mela Prangan */}
        <div>
          <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider flex items-center justify-between">
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
          <div className="space-y-1">
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

        {/* 5. Geographic Corridor / Zone */}
        <div>
          <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <Filter className="h-3 w-3 text-[#BD1113]" />
            <span>Kolkata Zone / Corridor</span>
          </label>
          <select
            value={filters.selectedZone}
            onChange={(e) => setFilters((prev) => ({ ...prev, selectedZone: e.target.value }))}
            className="w-full py-2 px-3 text-xs rounded-xl border border-[#E5D5C5] bg-[#FFFDF9] text-[#0F172A] font-medium focus:outline-none focus:ring-2 focus:ring-[#BD1113]/30 focus:border-[#BD1113]"
          >
            <option value="All">All Locations &amp; Corridors</option>
            {availableZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        {/* 6. Sort Order */}
        <div>
          <label className="block text-[11px] font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <ArrowUpDown className="h-3 w-3 text-[#BD1113]" />
            <span>Sort By</span>
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
            className="w-full py-2 px-3 text-xs rounded-xl border border-[#E5D5C5] bg-[#FFFDF9] text-[#0F172A] font-medium focus:outline-none focus:ring-2 focus:ring-[#BD1113]/30 focus:border-[#BD1113]"
          >
            <option value="distance">Nearest to Biswa Bangla Mela Prangan</option>
            <option value="rating">Star Rating &amp; Luxury Tier</option>
            <option value="name">Name (Alphabetical A–Z)</option>
          </select>
        </div>

        {/* 7. Facilities / Amenities Checklist */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider">
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
          <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
            {availableFacilities.map((fac) => {
              const isSelected = filters.selectedFacilities.includes(fac)
              return (
                <button
                  key={fac}
                  onClick={() => handleFacilityToggle(fac)}
                  className={`text-[10.5px] px-2.5 py-1 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold shadow-xs'
                      : 'bg-[#FFFDF9] text-[#475569] border-[#E5D5C5] hover:bg-[#FEF3C7]'
                  }`}
                >
                  {fac}
                </button>
              )
            })}
          </div>
        </div>

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
