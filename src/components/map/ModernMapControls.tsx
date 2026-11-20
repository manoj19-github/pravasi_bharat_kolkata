import React, { useState, useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { Plus, Minus, RotateCcw, MousePointer2 } from 'lucide-react'

interface ModernMapControlsProps {
  initialCenter?: [number, number]
  initialZoom?: number
  positionClassName?: string
  showScrollHint?: boolean
}

export const ModernMapControls: React.FC<ModernMapControlsProps> = ({
  initialCenter = [22.5448, 88.3995],
  initialZoom = 13,
  positionClassName = 'bottom-6 right-5',
  showScrollHint = true,
}) => {
  const map = useMap()
  const [currentZoom, setCurrentZoom] = useState<number>(() => Math.round(map.getZoom()))
  const [isZooming, setIsZooming] = useState<boolean>(false)

  useEffect(() => {
    const handleZoom = () => {
      setCurrentZoom(Math.round(map.getZoom()))
      setIsZooming(true)
      const timer = setTimeout(() => setIsZooming(false), 800)
      return () => clearTimeout(timer)
    }

    map.on('zoomend', handleZoom)
    return () => {
      map.off('zoomend', handleZoom)
    }
  }, [map])

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    map.zoomIn(1)
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    map.zoomOut(1)
  }

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    map.flyTo(initialCenter, initialZoom, { duration: 1.2 })
  }

  return (
    <div
      className={`absolute z-[999] flex flex-col items-end pointer-events-auto select-none transition-all duration-300 ${positionClassName}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Scroll-wheel Hint Pill */}
      {showScrollHint && (
        <div className="mb-2 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EBD6BE] shadow-md shadow-[#BD1113]/5 text-[#BD1113] animate-pulse">
          <MousePointer2 className="w-3 h-3 animate-bounce" />
          <span className="text-[10px] font-bold tracking-wide">
            Scroll Wheel Zoom Active
          </span>
        </div>
      )}

      {/* Main Glassmorphic Zoom Control Stack */}
        <div className="flex flex-col items-center bg-white/95 backdrop-blur-lg rounded-2xl p-1 sm:p-1.5 shadow-[0_12px_36px_-6px_rgba(189,17,19,0.2)] border-2 border-[#EBD6BE] gap-1 sm:gap-1.5 transition-all hover:border-[#BD1113]/40">

          {/* Zoom In (+) */}
          <button
            type="button"
            onClick={handleZoomIn}
            title="Zoom In (or use mouse scroll up)"
            aria-label="Zoom In"
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-[#0A265D] hover:bg-[#BD1113] hover:text-white transition-all duration-200 active:scale-90 hover:shadow-md group cursor-pointer"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:scale-110" />
          </button>

          {/* Live Zoom Multiplier Display / Recenter Button */}
          <button
            type="button"
            onClick={handleReset}
            title="Click to reset zoom to convention epicenter"
            aria-label="Reset Zoom"
            className={`w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-center justify-center rounded-xl border transition-all duration-300 cursor-pointer ${
              isZooming
                ? 'bg-[#BD1113] text-white border-[#BD1113] scale-105 shadow-sm'
                : 'bg-[#FAF0E1]/90 hover:bg-[#FAF0E1] text-[#BD1113] border-[#EBD6BE]'
            }`}
          >
          <span className="text-[10px] sm:text-[11px] font-black font-mono tracking-tighter leading-none">
            {currentZoom}x
          </span>
          <span className="text-[6.5px] sm:text-[7.5px] uppercase font-bold tracking-widest leading-none mt-0.5 opacity-80">
            ZOOM
          </span>
        </button>

        {/* Zoom Out (-) */}
        <button
          type="button"
          onClick={handleZoomOut}
          title="Zoom Out (or use mouse scroll down)"
          aria-label="Zoom Out"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-[#0A265D] hover:bg-[#BD1113] hover:text-white transition-all duration-200 active:scale-90 hover:shadow-md group cursor-pointer"
        >
          <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:scale-110" />
        </button>

        {/* Subtle Horizontal Divider */}
        <div className="w-5 sm:w-6 h-[1px] bg-[#EBD6BE]/80 my-0.5" />

        {/* Reset / Recenter to Venue */}
        <button
          type="button"
          onClick={handleReset}
          title="Recenter Map on Biswa Bangla Mela Prangan"
          aria-label="Recenter Map"
          className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-[#BD1113] hover:bg-[#FAF0E1] transition-all duration-200 active:scale-90 hover:rotate-[-45deg] cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

      </div>
    </div>
  )
}
