import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { X, Navigation, ExternalLink, Clock, Train, Building2, MapPin } from 'lucide-react'
import { Attraction } from '../../data/attractions'

interface DestinationRouteModalProps {
  attraction: Attraction | null
  isOpen: boolean
  onClose: () => void
}

const VENUE_COORDS: [number, number] = [22.5448, 88.3995] // Biswa Bangla Mela Prangan

// Map auto-bounds controller
const RouteMapAutoBounds: React.FC<{
  venueCoords: [number, number]
  destCoords: [number, number]
}> = ({ venueCoords, destCoords }) => {
  const map = useMap()
  useEffect(() => {
    const bounds = L.latLngBounds([venueCoords, destCoords])
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 })
  }, [venueCoords, destCoords, map])
  return null
}

// Custom markers
const venueIcon = L.divIcon({
  className: 'venue-marker',
  html: `
    <div style="background-color: #0F172A;" class="w-9 h-9 rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl ring-2 ring-[#BD1113]">
      <span style="font-size: 15px;">🏛️</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20],
})

const destinationIcon = L.divIcon({
  className: 'destination-marker',
  html: `
    <div style="background-color: #BD1113;" class="w-9 h-9 rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl ring-2 ring-[#FDE68A] animate-bounce">
      <span style="font-size: 15px;">📍</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20],
})

export const DestinationRouteModal: React.FC<DestinationRouteModalProps> = ({
  attraction,
  isOpen,
  onClose
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !attraction || !mounted) return null

  const destCoords: [number, number] = [attraction.latitude, attraction.longitude]

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl bg-[#FFFDF9] border border-[#E5D5C5] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-[#F3E8D8] bg-[#FAF7F2]">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
                  <span className="p-1.5 sm:p-2 rounded-xl bg-[#BD1113] text-white shadow-xs shrink-0">
                    <Navigation className="h-4 w-4" />
                  </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-sm sm:text-lg text-[#0F172A] leading-tight truncate">
                            Route to {attraction.name}
                          </h3>
                            <span className="text-[9.5px] sm:text-[10px] bg-[#FEF3C7] text-[#B91C1C] px-2 py-0.5 rounded-full font-bold border border-[#FDE68A] shrink-0">
                              {attraction.distanceFromVenue}
                            </span>
                          </div>
                            <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5 truncate">
                              From Biswa Bangla Mela Prangan (Convention Venue)
                            </p>
                          </div>
                      </div>

                      <button
                        onClick={onClose}
                        className="p-1.5 sm:p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors shrink-0"
                        title="Close Route Map"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Map Container */}
                      <div className="relative w-full h-[240px] sm:h-[380px] lg:h-[420px] bg-slate-100">
                        <MapContainer
                          center={VENUE_COORDS}
                          zoom={12}
                          scrollWheelZoom={true}
                          className="w-full h-full"
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />

                          <RouteMapAutoBounds venueCoords={VENUE_COORDS} destCoords={destCoords} />

                          {/* Polyline Route */}
                          <Polyline
                            positions={[VENUE_COORDS, destCoords]}
                            color="#BD1113"
                            weight={4}
                            opacity={0.8}
                            dashArray="8, 8"
                          />

                          {/* Venue Marker */}
                          <Marker position={VENUE_COORDS} icon={venueIcon}>
                            <Popup>
                              <div className="text-xs">
                                <strong className="text-[#0F172A] block font-serif">
                                  Biswa Bangla Mela Prangan
                                </strong>
                                <span className="text-[11px] text-[#BD1113] font-bold">
                                  Official Convention Venue (PBD 2027)
                                </span>
                              </div>
                            </Popup>
                          </Marker>

                          {/* Destination Marker */}
                          <Marker position={destCoords} icon={destinationIcon}>
                            <Popup>
                              <div className="text-xs">
                                <strong className="text-[#0F172A] block font-serif">
                                  {attraction.name}
                                </strong>
                                <span className="text-[11px] text-[#475569]">
                                  {attraction.distanceFromVenue}
                                </span>
                              </div>
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </div>

                      {/* Route Details Card */}
                      <div className="p-4 sm:p-5 bg-white border-t border-[#F3E8D8] space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5D5C5]/60 flex items-start gap-2.5">
                            <Clock className="h-4 w-4 text-[#BD1113] shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                Distance &amp; Time
                              </span>
                              <span className="font-bold text-[#0F172A] text-xs">
                                {attraction.distanceFromVenue}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5D5C5]/60 flex items-start gap-2.5">
                            <Train className="h-4 w-4 text-[#BD1113] shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                Nearest Metro
                              </span>
                              <span className="font-bold text-[#0F172A] text-xs">
                                {attraction.nearestMetro}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5D5C5]/60 flex items-start gap-2.5">
                            <Building2 className="h-4 w-4 text-[#BD1113] shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                Visiting Hours
                              </span>
                              <span className="font-semibold text-[#0F172A] text-[11px] line-clamp-1">
                                {attraction.visitingHours}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#F3E8D8]">
                          <div className="text-[11px] text-[#64748B] flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-[#BD1113]" />
                            <span>Dedicated PBD Delegate shuttle &amp; prepaid AC electric taxi stands available at venue.</span>
                          </div>

                          <a
                            href={attraction.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-[#BD1113] to-[#8B1D1D] hover:from-[#A00E10] hover:to-[#701515] text-white font-bold text-xs shadow-sm hover:shadow transition-all shrink-0"
                          >
                            <span>Open in Google Maps Navigation</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>,
                  document.body
                )
}
