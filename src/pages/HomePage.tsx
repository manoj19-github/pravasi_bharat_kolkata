import { HeroSection } from '../components/home/HeroSection'
import { FeaturedHotels } from '../components/home/FeaturedHotels'
import { WelcomeSection } from '../components/home/WelcomeSection'
import { ConventionOverview } from '../components/home/ConventionOverview'
import { KolkataHighlights } from '../components/home/KolkataHighlights'
import { TransitSection } from '../components/home/TransitSection'
import { MapPreviewSection } from '../components/home/MapPreviewSection'

export const HomePage = () => {
  return (
    <div>
      {/* 1. Master Cultural Hero Section */}
      <HeroSection />

      {/* 2. Automated Featured Convention Accommodation Carousel */}
      <FeaturedHotels />

      {/* 3. Three-Day Convention Programme Highlights (Placed directly after Hotels section) */}
      <ConventionOverview />

      {/* 4. Iconic Kolkata Destinations & Sightseeing (Placed directly after Convention Programme) */}
      <KolkataHighlights />

      {/* 5. Airport & City Transit Connectivity (Getting to Kolkata & Venue - Placed directly below Destinations) */}
      <TransitSection />

      {/* 6. Host State Chief Minister Welcome */}
      <WelcomeSection />

      {/* 7. Interactive OpenStreetMap Preview */}
      <MapPreviewSection />
    </div>
  )
}
