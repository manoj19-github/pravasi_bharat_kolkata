import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react'
import { Attraction } from '../../data/attractions'

interface DestinationGalleryModalProps {
  attraction: Attraction | null
  images: string[]
  isOpen: boolean
  onClose: () => void
}

export const DestinationGalleryModal: React.FC<DestinationGalleryModalProps> = ({
  attraction,
  images,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset to first image when attraction changes or modal opens
  useEffect(() => {
    setCurrentIndex(0)
  }, [attraction, isOpen])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  // Keyboard navigation: Left/Right arrows & Escape
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length, onClose])

  if (!isOpen || !attraction || images.length === 0) return null

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    /* Modal Backdrop - positioned strictly below sticky header so header is completely untouched */
    <div 
      className="fixed inset-x-0 bottom-0 top-[56px] sm:top-[68px] z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Modal Card Dialog */}
      <div 
        className="relative w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-[#0B1120] border border-white/20 shadow-2xl flex flex-col overflow-hidden max-h-[calc(100vh-84px)] sm:max-h-[calc(100vh-96px)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP HEADER BAR INSIDE MODAL (Completely safe from header overlap) */}
        <div className="w-full px-4 sm:px-6 py-3 bg-[#0F172A] border-b border-white/10 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="p-1.5 sm:p-2 rounded-xl bg-[#BD1113] text-white shadow-md shrink-0">
              <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-serif font-bold text-base sm:text-xl text-white tracking-tight truncate">
                  {attraction.name}
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 bg-[#BD1113]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#BD1113] shrink-0">
                  <Sparkles className="h-2.5 w-2.5 text-amber-300" />
                  {attraction.category}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 truncate hidden sm:block">
                {attraction.tagline}
              </p>
            </div>
          </div>

          {/* Right side: Photo count badge & Red Close Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold text-white">
              <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {images.length}
            </div>

            {/* Prominent High-Contrast Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 py-1.5 px-3 sm:px-4 rounded-full bg-[#BD1113] hover:bg-[#A80E10] text-white font-bold text-xs border border-white/20 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Close Gallery (Esc)"
              aria-label="Close Gallery"
            >
              <span>Close</span>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 2. MAIN CENTER PHOTO VIEWPORT */}
        <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 bg-black/50 overflow-hidden min-h-[220px] max-h-[54vh] sm:max-h-[58vh]">
          {/* Active Real Photo */}
          <img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${attraction.name} - View ${currentIndex + 1}`}
            className="max-h-[54vh] sm:max-h-[58vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10 transition-all duration-300 select-none"
          />

          {/* Floating Left Arrow Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-[#BD1113] text-white backdrop-blur-md border border-white/30 hover:border-[#BD1113] transition-all shadow-xl hover:scale-110 active:scale-95 z-20 cursor-pointer"
              title="Previous Photo (Left Arrow)"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}

          {/* Floating Right Arrow Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-[#BD1113] text-white backdrop-blur-md border border-white/30 hover:border-[#BD1113] transition-all shadow-xl hover:scale-110 active:scale-95 z-20 cursor-pointer"
              title="Next Photo (Right Arrow)"
              aria-label="Next Photo"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>

        {/* 3. BOTTOM THUMBNAIL STRIP */}
        {images.length > 1 && (
          <div className="w-full px-3 py-2 sm:py-2.5 bg-[#0F172A] border-t border-white/10 flex items-center justify-center shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5 max-w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-11 sm:h-13 w-16 sm:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'border-[#BD1113] ring-2 ring-[#BD1113]/80 scale-105 shadow-md'
                      : 'border-white/20 opacity-55 hover:opacity-100 hover:border-white/60'
                  }`}
                  title={`View Photo ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
