import { HOTELS_DATA, Hotel } from './hotels'
import { ATTRACTIONS_DATA, Attraction } from './attractions'

export type MapLocationCategory =
  | 'convention'
  | 'hotel'
  | 'homestay'
  | 'bnb'
  | 'transport'
  | 'destination'
  // Backward compatibility
  | 'airport'
  | 'railway'
  | 'tourist'
  | 'historical'

export interface MapLocation {
  id: string
  name: string
  category: MapLocationCategory
  subCategory?: string
  propertyType?: 'hotel' | 'homestay' | 'bnb'
  latitude: number
  longitude: number
  address: string
  description: string
  image?: string
  officialWebsite?: string
  bookingSearchUrl?: string
  googleMapsUrl: string
  distanceToVenueKm: number
  badgeText?: string
  phone?: string
  email?: string
  rating?: string | number
  nidhiId?: string
  timing?: string
  entryFee?: string
  zone?: string
}

// 1. Convention & Cultural Venues for PBD 2027
export const CONVENTION_VENUES: MapLocation[] = [
  {
    id: 'venue-biswa-bangla',
    name: 'Biswa Bangla Mela Prangan (Primary Convention Venue)',
    category: 'convention',
    subCategory: 'Primary Venue',
    latitude: 22.5448,
    longitude: 88.3995,
    address: '3, JBS Haldane Ave, Tangra, Kolkata, West Bengal 700046',
    description:
      'Official main venue for the 19th Pravasi Bharatiya Divas Convention 2027. World-class international exhibition and convention center with expansive air-conditioned pavilions, VIP lounges, global business forum halls, and West Bengal Pavilion.',
    image: '/images/hotels/itc-royal-bengal_1.jpg',
    officialWebsite: 'https://www.wbhidcoltd.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Biswa+Bangla+Mela+Prangan+Kolkata',
    distanceToVenueKm: 0,
    badgeText: 'Primary PBD 2027 Venue',
  },
  {
    id: 'venue-bbcc-newtown',
    name: 'Biswa Bangla Convention Centre (BBCC New Town)',
    category: 'convention',
    subCategory: 'Auxiliary Venue',
    latitude: 22.5855,
    longitude: 88.4632,
    address: 'Action Area 1, New Town, Rajarhat, Kolkata, West Bengal 700156',
    description:
      'One of South Asia’s largest convention facilities, boasting a 3,200-capacity plenary hall, extensive exhibition spaces, and banquet halls hosting specialized PBD summits and diaspora youth conclaves.',
    image: '/images/hotels/the-westin-kolkata-rajarhat_1.jpg',
    officialWebsite: 'https://biswabanglaconventioncentre.com',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Biswa+Bangla+Convention+Centre+New+Town+Kolkata',
    distanceToVenueKm: 11.2,
    badgeText: 'Auxiliary Convention Hub',
  },
  {
    id: 'venue-dhono-dhanyo',
    name: 'Dhono Dhanyo Auditorium (Conch Auditorium)',
    category: 'convention',
    subCategory: 'Cultural Venue',
    latitude: 22.5317,
    longitude: 88.3283,
    address: '1, National Library Ave, Alipore, Kolkata, West Bengal 700027',
    description:
      'Iconic 2,600-capacity architectural masterpiece shaped like a majestic marine conch shell (Sankha). Designed for prestigious cultural galas, plenary musical evenings, and performing arts festivals during PBD 2027.',
    image: '/images/hotels/morvee-hotels-alipore_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dhono+Dhanyo+Auditorium+Alipore+Kolkata',
    distanceToVenueKm: 8.2,
    badgeText: 'Iconic Conch Cultural Centre',
  },
  {
    id: 'venue-science-city-complex',
    name: 'Science City Convention Complex',
    category: 'convention',
    subCategory: 'Seminar & Expo',
    latitude: 22.5401,
    longitude: 88.3965,
    address: 'J.B.S. Haldane Avenue, Mirania Gardens, Tangra, Kolkata 700046',
    description:
      'Located just 800m across from Biswa Bangla Mela Prangan, featuring a 2,232-seat Main Auditorium, 392-seat Mini Auditorium, and eight seminar halls for bilateral diaspora industry sessions.',
    image: '/images/hotels/itc-sonar_1.jpg',
    officialWebsite: 'https://sciencecitykolkata.org.in',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Science+City+Main+Auditorium+Kolkata',
    distanceToVenueKm: 0.8,
    badgeText: 'Science & Trade Hub',
  },
  {
    id: 'venue-nazrul-mancha',
    name: 'Nazrul Mancha (Rabindra Sarobar)',
    category: 'convention',
    subCategory: 'Cultural Amphitheatre',
    latitude: 22.5115,
    longitude: 88.3582,
    address: 'Southern Avenue, Dhakuria, Kolkata, West Bengal 700029',
    description:
      'Renowned open-air cultural auditorium situated beside picturesque Rabindra Sarobar Lake, hosting traditional folk concerts, Baul music recitals, and Rabindrasangeet tributes.',
    image: '/images/hotels/regenta-orkos-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Nazrul+Mancha+Kolkata',
    distanceToVenueKm: 5.6,
    badgeText: 'Cultural Music Amphitheatre',
  },
]

// 2. Getting to Kolkata: Airport, Railway Stations, Bus & River Terminals
export const TRANSIT_HUBS: MapLocation[] = [
  {
    id: 'transit-airport-ccu',
    name: 'Netaji Subhas Chandra Bose International Airport (CCU)',
    category: 'transport',
    subCategory: 'Aviation Gateway',
    latitude: 22.6547,
    longitude: 88.4467,
    address: 'Jessore Rd, Dum Dum, Kolkata, West Bengal 700052',
    description:
      'Primary international aviation gateway connecting Kolkata with direct flights to London, Dubai, Singapore, Bangkok, Doha, and all major Indian state capitals. Includes dedicated 24x7 PBD Welcome Desks, VIP lounges, and pre-paid transport.',
    image: '/images/hotels/holiday-inn-express-airport_1.jpg',
    officialWebsite: 'https://www.aai.aero/en/airports/kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Netaji+Subhas+Chandra+Bose+International+Airport+Kolkata',
    distanceToVenueKm: 15.2,
    badgeText: 'Primary Air Gateway (CCU)',
    phone: '+91 33 2511 8036',
  },
  {
    id: 'transit-rail-howrah',
    name: 'Howrah Railway Terminus (HWH)',
    category: 'transport',
    subCategory: 'Railway Terminus',
    latitude: 22.5838,
    longitude: 88.3426,
    address: 'Station Rd, Howrah, West Bengal 711101',
    description:
      'India’s oldest and busiest 23-platform railway terminus. Originating station for Vande Bharat, Rajdhani, and Shatabdi expresses, connected directly to Kolkata via Rabindra Setu and underground Green Line Metro.',
    image: '/images/hotels/the-astor-kolkata_1.jpg',
    officialWebsite: 'https://www.irctc.co.in',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Howrah+Railway+Station',
    distanceToVenueKm: 8.5,
    badgeText: 'Historic Rail Terminus (HWH)',
    phone: '139',
  },
  {
    id: 'transit-rail-sealdah',
    name: 'Sealdah Railway Station (SDAH)',
    category: 'transport',
    subCategory: 'Railway Station',
    latitude: 22.5675,
    longitude: 88.3712,
    address: 'Bepin Behari Ganguly St, Sealdah, Kolkata, West Bengal 700014',
    description:
      'Key terminal handling northern and eastern long-distance express trains, suburban connections, and direct underground interchange with Kolkata Metro Line 2 (Green Line).',
    image: '/images/hotels/hotel-walson-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sealdah+Railway+Station',
    distanceToVenueKm: 4.8,
    badgeText: 'Metro-Linked Terminal (SDAH)',
    phone: '139',
  },
  {
    id: 'transit-rail-kolkata',
    name: 'Kolkata Railway Station (Chitpur - KOAA)',
    category: 'transport',
    subCategory: 'Railway Station',
    latitude: 22.6033,
    longitude: 88.3768,
    address: 'Belgachia, Kolkata, West Bengal 700004',
    description:
      'Modern intercity rail station hosting premier superfast express services across eastern and northeastern India, as well as the international Maitree Express to Dhaka, Bangladesh.',
    image: '/images/hotels/ethnotel-airport-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kolkata+Railway+Station+Chitpur',
    distanceToVenueKm: 7.9,
    badgeText: 'Superfast Terminal (KOAA)',
    phone: '139',
  },
  {
    id: 'transit-rail-shalimar',
    name: 'Shalimar Railway Station (SHM)',
    category: 'transport',
    subCategory: 'Railway Station',
    latitude: 22.5567,
    longitude: 88.3183,
    address: 'Shalimar, Shibpur, Howrah, West Bengal 711103',
    description:
      'Originating terminal for South Eastern Railway corridors linking Kolkata to Puri, Chennai, Bengaluru, and Hyderabad with newly augmented passenger lounges and taxi services.',
    image: '/images/hotels/taj-bengal-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shalimar+Railway+Station',
    distanceToVenueKm: 9.8,
    badgeText: 'SER Rail Terminal (SHM)',
    phone: '139',
  },
  {
    id: 'transit-rail-santragachi',
    name: 'Santragachi Junction (SRC)',
    category: 'transport',
    subCategory: 'Railway Junction',
    latitude: 22.5802,
    longitude: 88.2831,
    address: 'Santragachi, Howrah, West Bengal 711112',
    description:
      'Major rail transit node along the Kona Expressway with express coach and taxi interchanges for delegates arriving from southern and western regions.',
    image: '/images/hotels/jaiswal-house-alipore_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Santragachi+Junction',
    distanceToVenueKm: 13.5,
    badgeText: 'Major Rail Junction (SRC)',
  },
  {
    id: 'transit-bus-babughat',
    name: 'Babughat Interstate Bus Terminus & Launch Ghat',
    category: 'transport',
    subCategory: 'Bus & Ferry Hub',
    latitude: 22.5647,
    longitude: 88.3414,
    address: 'Strand Rd, B.B.D. Bagh, Kolkata, West Bengal 700001',
    description:
      'Interstate bus terminal along the Hooghly riverfront coordinating AC deluxe coaches to neighboring states, alongside heritage Ganges passenger ferry jetties to Howrah.',
    image: '/images/hotels/peerless-hotel-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Babughat+Bus+Terminus+Kolkata',
    distanceToVenueKm: 7.4,
    badgeText: 'Interstate Bus & River Ferry',
  },
  {
    id: 'transit-bus-esplanade',
    name: 'Esplanade Central Bus & Tram Interchange',
    category: 'transport',
    subCategory: 'Central Transit Hub',
    latitude: 22.5639,
    longitude: 88.3512,
    address: 'Esplanade, Dharmatala, Kolkata, West Bengal 700069',
    description:
      'Heart of Kolkata’s urban transit network connecting underground Metro Line 1 & Line 2, historic electric trams, long-distance state buses, and 24x7 app cab stands.',
    image: '/images/hotels/the-park-kolkata_2.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Esplanade+Bus+Terminus+Kolkata',
    distanceToVenueKm: 6.5,
    badgeText: 'Metro & Tram Central Hub',
  },
  {
    id: 'transit-bus-karunamoyee',
    name: 'Karunamoyee International Bus Terminus (Salt Lake)',
    category: 'transport',
    subCategory: 'International Bus Hub',
    latitude: 22.5866,
    longitude: 88.4208,
    address: 'Karunamoyee, Salt Lake Sector 2, Bidhannagar, Kolkata 700091',
    description:
      'Specialized international bus terminal operating the Maitree AC bus service to Dhaka and long-distance Volvo routes connecting Salt Lake IT corridor to eastern destinations.',
    image: '/images/hotels/hyatt-regency-kolkata_1.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Karunamoyee+Bus+Terminus+Salt+Lake',
    distanceToVenueKm: 6.1,
    badgeText: 'International Coach Terminal',
  },
  {
    id: 'transit-ghat-millennium',
    name: 'Millennium Park Ganga Cruise Terminal',
    category: 'transport',
    subCategory: 'River Cruise Terminal',
    latitude: 22.5714,
    longitude: 88.3442,
    address: 'Strand Rd, Fairley Place, B.B.D. Bagh, Kolkata 700001',
    description:
      'Picturesque riverfront terminal operating luxury Ganga evening cruise vessels, river taxis, and panoramic heritage ferry rides across the Hooghly River.',
    image: '/images/hotels/the-lalit-great-eastern_2.jpg',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Millennium+Park+Kolkata+Ghat',
    distanceToVenueKm: 7.8,
    badgeText: 'Heritage River Cruise Port',
  },
]

// 3. Transform all 69 certified accommodations from HOTELS_DATA into MapLocations
export const ACCOMMODATION_LOCATIONS: MapLocation[] = HOTELS_DATA.map((h: Hotel) => {
  let mappedCategory: MapLocationCategory = 'hotel'
  let badge = h.category

  if (h.propertyType === 'homestay') {
    mappedCategory = 'homestay'
    badge = `${h.category} (Homestay)`
  } else if (h.propertyType === 'bnb') {
    mappedCategory = 'bnb'
    badge = `${h.category} (B&B)`
  } else {
    mappedCategory = 'hotel'
    badge = `${h.category} (Hotel)`
  }

  return {
    id: `stay-${h.id}`,
    name: h.name,
    category: mappedCategory,
    subCategory: h.category,
    propertyType: h.propertyType,
    latitude: h.latitude,
    longitude: h.longitude,
    address: h.address,
    description: h.description,
    image: h.image,
    officialWebsite: h.officialWebsite,
    bookingSearchUrl: h.bookingSearchUrl,
    googleMapsUrl: h.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.address)}`,
    distanceToVenueKm: h.distanceKm,
    badgeText: badge,
    phone: h.contactPhone,
    rating: h.starRating,
    nidhiId: h.nidhiId,
    zone: h.zone,
  }
})

// 4. Transform all 20 Iconic Kolkata Destinations from ATTRACTIONS_DATA into MapLocations
export const DESTINATION_LOCATIONS: MapLocation[] = ATTRACTIONS_DATA.map((a: Attraction) => {
  return {
    id: `dest-${a.id}`,
    name: a.name,
    category: 'destination',
    subCategory: a.category,
    latitude: a.latitude,
    longitude: a.longitude,
    address: `${a.name}, Kolkata (Near Metro: ${a.nearestMetro})`,
    description: a.description,
    image: a.image,
    googleMapsUrl: a.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' Kolkata')}`,
    distanceToVenueKm: a.distanceKm,
    badgeText: `Iconic Sight • ${a.category}`,
    timing: a.visitingHours,
    entryFee: a.entryFee,
  }
})

// Master Array combining all 104 locations across Kolkata
export const MAP_LOCATIONS: MapLocation[] = [
  ...CONVENTION_VENUES,
  ...TRANSIT_HUBS,
  ...ACCOMMODATION_LOCATIONS,
  ...DESTINATION_LOCATIONS,
]

// Category Filter Groups for Map UIs
export const MAP_CATEGORIES = [
  { id: 'all', label: 'All Places', count: MAP_LOCATIONS.length, color: '#BD1113' },
  { id: 'convention', label: 'Convention Venues', count: CONVENTION_VENUES.length, color: '#BD1113', emoji: '🏛️' },
  { id: 'hotel', label: 'Hotels', count: HOTELS_DATA.filter((h) => h.propertyType === 'hotel').length, color: '#D97706', emoji: '🏨' },
  { id: 'homestay', label: 'Homestays', count: HOTELS_DATA.filter((h) => h.propertyType === 'homestay').length, color: '#059669', emoji: '🏡' },
  { id: 'bnb', label: 'Bed & Breakfast', count: HOTELS_DATA.filter((h) => h.propertyType === 'bnb').length, color: '#B45309', emoji: '☕' },
  { id: 'transport', label: 'Getting to Kolkata', count: TRANSIT_HUBS.length, color: '#0284C7', emoji: '✈️' },
  { id: 'destination', label: 'Iconic Destinations', count: DESTINATION_LOCATIONS.length, color: '#0A265D', emoji: '🕌' },
] as const
