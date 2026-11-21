import { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Compass,
  MapPin,
  Sparkles,
  RotateCcw,
  Landmark,
  Award,
  Quote,
  HeartHandshake,
  SlidersHorizontal
} from 'lucide-react'
import { ATTRACTIONS_DATA, Attraction } from '../data/attractions'
import { PBD_EVENT_DATA } from '../data/event'
import { DestinationCard } from '../components/explore/DestinationCard'
import { DestinationGalleryModal } from '../components/explore/DestinationGalleryModal'
import { DestinationFilterBar, DestinationFilterState } from '../components/explore/DestinationFilterBar'
import { CollapsibleDestinationSidebar } from '../components/explore/CollapsibleDestinationSidebar'
import alponaThemeSvg from '../assets/alpana/alpona_theme.svg'
import chakra from '../assets/alpana/chakra.svg'
import staticCornerMotif from '../assets/images/cultural/corner_motif_crimson_right.png'
import cmHeroImg from '../assets/images/cm_welcome_hero.png'

const INITIAL_FILTERS: DestinationFilterState = {
  searchQuery: '',
  category: 'All',
  maxDistance: null,
  sortBy: 'distance'
}

export const ExploreKolkataPage = () => {
  const location = useLocation()
  const [filters, setFilters] = useState<DestinationFilterState>(INITIAL_FILTERS)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [targetedCardId, setTargetedCardId] = useState<string | null>(null)

  // Gallery Modal state
  const [galleryAttraction, setGalleryAttraction] = useState<Attraction | null>(null)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const cm = PBD_EVENT_DATA.chiefMinister

  // Unique categories
  const categories = useMemo(() => {
    const list = Array.from(new Set(ATTRACTIONS_DATA.map((a) => a.category)))
    return ['All', ...list]
  }, [])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    ATTRACTIONS_DATA.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1
    })
    return counts
  }, [])

  // Filter & sort logic
  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS_DATA.filter((item) => {
      // 1. Text Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim()
        const matchName = item.name.toLowerCase().includes(q)
        const matchTag = item.tagline.toLowerCase().includes(q)
        const matchDesc = item.description.toLowerCase().includes(q)
        const matchHighlights = item.highlights.some((h) => h.toLowerCase().includes(q))
        const matchMetro = item.nearestMetro.toLowerCase().includes(q)
        if (!matchName && !matchTag && !matchDesc && !matchHighlights && !matchMetro) {
          return false
        }
      }

      // 2. Category
      if (filters.category !== 'All' && item.category !== filters.category) {
        return false
      }

      // 3. Proximity Radius
      if (filters.maxDistance !== null && item.distanceKm > filters.maxDistance) {
        return false
      }

      return true
    }).sort((a, b) => {
      if (filters.sortBy === 'distance') {
        return a.distanceKm - b.distanceKm
      }
      if (filters.sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
  }, [filters])

  // Handle URL Hash navigation from homepage "Learn More" buttons
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      setTargetedCardId(targetId)

      // Allow DOM to settle, then scroll to targeted card
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          const yOffset = -120 // Header & filter bar offset
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 350)

      // Remove pulse highlight after 4 seconds
      const clearTimer = setTimeout(() => {
        setTargetedCardId(null)
      }, 4500)

      return () => {
        clearTimeout(timer)
        clearTimeout(clearTimer)
      }
    }
  }, [location.hash])

  const handleOpenGallery = (attraction: Attraction, images: string[]) => {
    setGalleryAttraction(attraction)
    setGalleryImages(images)
    setIsGalleryOpen(true)
  }

  const culturalPillars = [
    {
      title: 'Architectural Grandeur',
      desc: 'Victorian marble palazzos, Indo-Saracenic columns, and colonial terracotta facades spanning 300 years of living history.',
      icon: '🏛️',
    },
    {
      title: 'Literature & Knowledge',
      desc: 'The genesis of the Bengal Renaissance, Tagore’s Nobel legacy, and College Street—the world’s largest book market.',
      icon: '📚',
    },
    {
      title: 'Artistic Craftsmanship',
      desc: 'Centuries-old clay idol sculptors in Kumartuli, Dokra metal craft, and UNESCO-inscribed Durga Puja celebrations.',
      icon: '🎨',
    },
    {
      title: 'Gastronomy & Mishti',
      desc: 'From royal Awadhi-style Kolkata Biryani to spongy Rosogollas, Sandesh, and legendary Park Street culinary lore.',
      icon: '🍲',
    },
    {
      title: 'Spiritual Universalism',
      desc: 'Sacred river ghats, Ramakrishna Mission’s universal harmony at Belur Math, and ancient Shaktipeeth shrines.',
      icon: '🛕',
    },
    {
      title: 'Modern IT & Smart City',
      desc: 'New Town Silicon Hub, smart green transit corridors, and the Biswa Bangla International Convention ecosystem.',
      icon: '🏙️',
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] text-[#0F172A] selection:bg-[#BD1113]/20 selection:text-[#BD1113] overflow-x-clip">

      {/* Background Bengali Alpana Motifs (Matches Homepage Aesthetic) */}
      <div className="absolute -left-28 sm:-left-36 lg:-left-44 top-24 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none z-0 opacity-20 select-none">
        <img
          src={alponaThemeSvg}
          alt=""
          className="w-full h-full object-contain animate-spin-slow filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.12)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute -right-28 sm:-right-36 lg:-right-44 top-[500px] w-64 sm:w-80 lg:w-[380px] h-64 sm:h-80 lg:h-[380px] pointer-events-none z-0 opacity-15 select-none">
        <img
          src={chakra}
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(189,17,19,0.1)]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-2 right-0 w-32 sm:w-48 lg:w-64 opacity-15 pointer-events-none select-none z-0">
        <img
          src={staticCornerMotif}
          alt=""
          className="w-full h-auto object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 pt-6 pb-20">

        {/* Section Header (Unified font size, weight and style with Home page section headers) */}
        <div className="w-[98vw] max-w-[1920px] mx-auto px-2 sm:px-4 flex flex-col items-center justify-center text-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-0.5 mb-1.5 shadow-2xs">
            <Compass className="w-3 h-3 text-[#BD1113]" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#BD1113]">
              OFFICIAL DELEGATE GUIDE • 19TH PBD 2027
            </span>
          </div>

          <h1 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
            <span className="text-[#0A265D]">Discover Kolkata — The City of Joy</span>{' '}
            <span className="text-[#BD1113]">Iconic Heritage, Sacred Shrines &amp; Living Culture</span>
          </h1>

          <p className="mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-2xl leading-relaxed tracking-normal">
            From the marble splendors of Victoria Memorial to sacred river cruises at Prinsep Ghat, intellectual addas on College Street, and the sculptors of Kumartuli—curated for overseas Indian delegates visiting Biswa Bangla Mela Prangan.
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
            <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
            <span className="h-[1px] w-8 bg-[#BD1113]/40" />
          </div>
        </div>

        {/* Modern Sticky Top Filter cum Search Bar: Exactly ONE Single Line, Minimal Height */}
        <DestinationFilterBar
          filters={filters}
          setFilters={setFilters}
          categories={categories}
          totalFilteredCount={filteredAttractions.length}
          totalCount={ATTRACTIONS_DATA.length}
          onReset={() => setFilters(INITIAL_FILTERS)}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Content Section: 3-Column Destination Cards Grid */}
        <div className="w-[96vw] sm:w-[94vw] lg:w-[94vw] max-w-[1760px] mx-auto px-2 sm:px-6 lg:px-8 mt-4 sm:mt-5">

          {/* Real-time Counter & Sidebar Toggle Indicator */}
          <div className="flex items-center justify-between text-xs text-[#64748B] mb-4 pb-2 border-b border-[#E5D5C5]/60">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium">
                Showing <strong className="text-[#0F172A] font-bold text-sm">{filteredAttractions.length}</strong> of {ATTRACTIONS_DATA.length} iconic destinations
              </span>
              {filters.searchQuery && (
                <span className="inline-flex items-center gap-1 bg-red-50 text-[#BD1113] px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-red-200">
                  &ldquo;{filters.searchQuery}&rdquo;
                </span>
              )}
              {filters.category !== 'All' && (
                <span className="bg-[#FEF3C7] text-[#B91C1C] px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-[#FDE68A]">
                  {filters.category}
                </span>
              )}
              {filters.maxDistance && (
                <span className="bg-slate-100 text-[#0F172A] px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                  within {filters.maxDistance} km of venue
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-500">
                <MapPin className="h-3 w-3 text-[#BD1113]" />
                <span>Distances from Biswa Bangla Mela Prangan</span>
              </span>

              {!isSidebarOpen && (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BD1113] hover:underline"
                >
                  <SlidersHorizontal className="h-3 w-3" />
                  <span>Category &amp; Facet Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Layout: Collapsible Sidebar + Dynamic Cards Grid */}
          <div className="flex flex-col lg:flex-row items-start gap-5">
            {/* Collapsible Left Filter & Categories Sidebar */}
            <CollapsibleDestinationSidebar
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              categoryCounts={categoryCounts}
              totalCount={ATTRACTIONS_DATA.length}
              totalFilteredCount={filteredAttractions.length}
              onReset={() => setFilters(INITIAL_FILTERS)}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Destination Cards Container */}
            <div className="flex-1 w-full min-w-0">
              {filteredAttractions.length > 0 ? (
                <div className={`grid grid-cols-1 md:grid-cols-2 ${isSidebarOpen ? 'xl:grid-cols-3' : 'lg:grid-cols-3'} gap-6`}>
                  {filteredAttractions.map((attraction) => (
                    <DestinationCard
                      key={attraction.id}
                      attraction={attraction}
                      onOpenGallery={handleOpenGallery}
                      isTargeted={targetedCardId === attraction.id}
                    />
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-20 px-4 bg-white/90 rounded-3xl border border-dashed border-[#E5D5C5] shadow-xs max-w-xl mx-auto">
                  <div className="inline-flex p-3 rounded-full bg-red-50 text-[#BD1113] mb-3">
                    <Landmark className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#0F172A]">
                    No Destinations Match Your Filter Criteria
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5 max-w-md mx-auto">
                    Try widening your distance radius, searching for different keywords, or resetting category filters to see all 20 iconic Kolkata destinations.
                  </p>
                  <button
                    onClick={() => setFilters(INITIAL_FILTERS)}
                    className="mt-4 inline-flex items-center gap-1.5 py-2 px-5 rounded-xl bg-[#BD1113] text-white text-xs font-bold hover:bg-[#A00E10] transition shadow"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Cultural Pillars Section */}
          <div className="mt-20 pt-12 border-t border-[#E5D5C5]/80">
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3 py-0.5 mb-1.5 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#BD1113]" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#BD1113]">
                  BENGAL CULTURAL HERITAGE
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight">
                <span className="text-[#0A265D]">Why Kolkata</span>{' '}
                <span className="text-[#BD1113]">Captivates the World</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-[13.5px] text-[#475569] font-medium max-w-xl mx-auto leading-relaxed tracking-normal">
                Six foundational pillars of Bengal’s soul, philosophy, and global identity welcoming the Pravasi diaspora.
              </p>
              <div className="mt-2 flex items-center justify-center gap-1.5">
                <span className="h-[1px] w-8 bg-[#BD1113]/40" />
                <span className="w-1 h-1 rounded-full bg-[#BD1113]" />
                <span className="h-[1px] w-8 bg-[#BD1113]/40" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturalPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#F3E8D8] bg-white p-6 shadow-sm hover:shadow-md transition group"
                >
                  <div className="text-3xl mb-3">{pillar.icon}</div>
                  <h3 className="font-serif font-bold text-lg text-[#0F172A] group-hover:text-[#BD1113] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chief Minister's Warm Welcome Section (Matches Home Page Exactly) */}
          <div className="mt-16">

            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center mb-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] px-3.5 py-1 mb-1.5 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#BD1113]" />
                <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#BD1113]">
                  HOST STATE LEADERSHIP • WEST BENGAL
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight text-[#0F172A]">
                Chief Minister's <span className="text-[#BD1113]">Warm Welcome</span>
              </h2>

              <p className="mt-1 text-xs text-[#475569] font-medium max-w-xl leading-relaxed">
                Extending the timeless warmth of Bengal's hospitality to overseas Indian delegates gathering for the 19th Pravasi Bharatiya Divas 2027 in Kolkata.
              </p>

              <div className="mt-2 flex items-center justify-center gap-1.5">
                <span className="h-[1px] w-8 bg-[#BD1113]/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD1113]" />
                <span className="h-[1px] w-8 bg-[#BD1113]/40" />
              </div>
            </div>

            {/* Master Card with Top Royal Gradient Rim */}
            <div className="rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#EFE1CD] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#BD1113] via-[#D97706] to-[#BD1113]" />

              <div className="p-5 sm:p-7 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                  {/* Left Column: Official CM Hero Image Card */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="w-full relative rounded-2xl bg-gradient-to-b from-[#FAF2E4] via-[#FFFDF9] to-[#FAF0E1] border border-[#EBD6BE] p-3.5 shadow-xs overflow-hidden group">

                      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-white/90 to-[#FAF5EC]/90 border border-[#EFE1CD] p-2 flex items-center justify-center">
                        <img
                          src={cmHeroImg}
                          alt={`${cm.name} - ${cm.title}`}
                          className="w-full h-auto max-h-[220px] sm:max-h-[250px] object-contain drop-shadow-md group-hover:scale-102 transition-transform duration-500"
                        />
                      </div>

                      {/* Identity Strip */}
                      <div className="mt-2.5 pt-2 border-t border-[#EBD6BE] text-center">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF0E1] border border-[#EBD6BE] text-[9.5px] font-bold uppercase tracking-wider text-[#BD1113] mb-1">
                          <Sparkles className="w-2.5 h-2.5 text-[#D97706]" />
                          <span>OFFICIAL HOST STATE LEADERSHIP</span>
                        </div>

                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#0A265D]">
                          {cm.name}
                        </h3>

                        <p className="text-xs font-semibold text-[#BD1113]">
                          {cm.title}
                        </p>

                        <p className="text-[11px] text-[#64748B] font-medium">
                          {cm.state}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Warm Welcome Message */}
                  <div className="lg:col-span-7 flex flex-col justify-between">

                    {/* Greeting */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <HeartHandshake className="w-4 h-4 text-[#BD1113]" />
                      <span className="font-script text-2xl sm:text-3xl text-[#BD1113]">
                        {cm.messageTitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A265D] tracking-tight leading-snug mb-2.5">
                      Warmest Greetings to Overseas Indian Delegates &amp; Luminaries
                    </h3>

                    {/* Message Callout Body */}
                    <div className="relative pl-4 sm:pl-5 border-l-3 border-[#BD1113] bg-[#FAF5EC]/70 rounded-r-2xl p-3 sm:p-4 mb-3">
                      <Quote className="absolute -top-2.5 -left-2.5 w-5 h-5 text-[#BD1113] fill-[#BD1113] bg-[#FAF5EC] p-0.5 rounded-full" />

                      <div className="space-y-2 text-xs sm:text-[13px] text-[#334155] leading-relaxed">
                        <p className="font-bold text-xs sm:text-sm text-[#0A265D]">
                          Dear Members of the Global Indian Diaspora,
                        </p>

                        <p className="font-medium">
                          It gives us immense pleasure to welcome you to Kolkata, the cultural and intellectual heart of India, for the landmark <span className="font-bold text-[#BD1113]">19th Pravasi Bharatiya Divas Convention 2027</span>.
                        </p>

                        <p className="font-medium">
                          Bengal has historically served as a cradle of renaissance, literature, enterprise, and timeless cultural harmony. Biswa Bangla Mela Prangan and the entire people of West Bengal await your presence with warmth and reverence (অতিথি দেবো ভব). May your visit foster lasting partnerships and treasured memories with Bengal and Bharat.
                        </p>

                        <p className="font-bold text-[#0A265D] pt-0.5">
                          With warm regards &amp; best wishes,
                        </p>
                      </div>
                    </div>

                    {/* Signature & Official Link */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pt-3 border-t border-[#F0E4D5]">
                      <div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-[#0A265D]">
                          {cm.name}
                        </h4>
                        <p className="text-[11px] font-semibold text-[#BD1113]">
                          {cm.title}, {cm.state}
                        </p>
                      </div>
                      {/* <a
                        href="https://wbtourism.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-[#FAF0E1] hover:bg-[#FEF3C7] text-[#BD1113] font-bold text-xs border border-[#EBD6BE] transition-all shadow-2xs"
                      >
                        <span>Explore WB Tourism</span>
                        <ExternalLink className="h-3 w-3" />
                      </a> */}
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Photo Gallery Lightbox Modal */}
      <DestinationGalleryModal
        attraction={galleryAttraction}
        images={galleryImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

    </div>
  )
}
