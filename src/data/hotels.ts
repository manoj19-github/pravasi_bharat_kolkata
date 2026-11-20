export type PropertyType = 'hotel' | 'homestay' | 'bnb'

export type ZoneType =
  | 'EM Bypass / Science City'
  | 'Central Kolkata / Park Street'
  | 'Salt Lake & New Town'
  | 'South Kolkata'
  | 'Greater Kolkata / Suburbs'

export interface Hotel {
  id: string
  name: string
  propertyType: PropertyType // 'hotel' | 'homestay' | 'bnb'
  category: string // e.g. '5-Star Deluxe', '4-Star with Alcohol', 'Homestay-Silver', 'B&B-Gold', 'B&B-Silver'
  starRating?: number // 3, 4, 5
  nidhiId?: string // e.g. 'AWB000276', 'AWB001437', etc.
  nidhiCertified: boolean
  location: string
  zone: ZoneType
  address: string
  proximityToVenue: string
  distanceKm: number
  description: string
  image: string
  images: string[]
  officialWebsite?: string
  bookingSearchUrl: string
  googleMapsUrl: string
  latitude: number
  longitude: number
  facilities: string[]
  contactPhone?: string
  featured?: boolean
  approxPriceRange?: string
}

export const HOTELS_DATA: Hotel[] = [
  // ==========================================
  // 1. STAR & LUXURY HOTELS (NIDHI CLASSIFIED)
  // ==========================================
  {
    id: 'itc-royal-bengal',
    name: 'ITC Royal Bengal',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000276',
    nidhiCertified: true,
    location: 'Tangra, JBS Haldane Avenue',
    zone: 'EM Bypass / Science City',
    address: '1, JBS Haldane Ave, Opposite Science City, Kolkata 700046',
    proximityToVenue: 'Adjacent (0.4 km)',
    distanceKm: 0.4,
    description:
      'A grand luxury palace reflecting Bengal’s noble architectural traditions, with opulent suites, state-of-the-art convention facilities, and award-winning dining.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.itchotels.com/in/en/itcroyalbengal-kolkata',
    bookingSearchUrl:
      'https://www.google.com/search?q=ITC+Royal+Bengal+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ITC+Royal+Bengal+Kolkata',
    latitude: 22.5447,
    longitude: 88.3976,
    facilities: ['Wi-Fi', 'Swimming Pool', 'Spa & Wellness', 'Fine Dining', 'Helipad', 'Business Center'],
    contactPhone: '+91 33 4446 4646',
    featured: true,
    approxPriceRange: '₹14,000 - ₹28,000 / night',
  },
  {
    id: 'itc-sonar',
    name: 'ITC Sonar – Luxury Collection',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000315',
    nidhiCertified: true,
    location: 'Tangra, JBS Haldane Avenue',
    zone: 'EM Bypass / Science City',
    address: '1, JBS Haldane Ave, Opposite Science City, Tangra, Kolkata 700046',
    proximityToVenue: 'Adjacent (0.5 km)',
    distanceKm: 0.5,
    description:
      'Set amidst water lilies and landscaped lily ponds, ITC Sonar pays homage to the Golden Age of Bengal with world-class hospitality directly adjacent to the convention grounds.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.itchotels.com/in/en/itcsonar-kolkata',
    bookingSearchUrl:
      'https://www.google.com/search?q=ITC+Sonar+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ITC+Sonar+Kolkata',
    latitude: 22.5455,
    longitude: 88.3965,
    facilities: ['Water Lily Lagoons', 'Kaya Kalp Spa', 'Peshawri Dining', 'Executive Lounge', 'Wi-Fi'],
    contactPhone: '+91 33 2345 4545',
    featured: true,
    approxPriceRange: '₹12,000 - ₹24,000 / night',
  },
  {
    id: 'jw-marriott-kolkata',
    name: 'JW Marriott Hotel Kolkata',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiCertified: true,
    location: 'Tangra, JBS Haldane Avenue',
    zone: 'EM Bypass / Science City',
    address: '4A, JBS Haldane Ave, Tangra, Kolkata, West Bengal 700105',
    proximityToVenue: '0.6 km from venue',
    distanceKm: 0.6,
    description:
      'Contemporary 5-star hotel featuring refined guest rooms, infinity pool, multi-cuisine restaurants, and premier hospitality along the EM Bypass corridor.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.marriott.com/en-us/hotels/ccujw-jw-marriott-hotel-kolkata/overview/',
    bookingSearchUrl:
      'https://www.google.com/search?q=JW+Marriott+Hotel+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=JW+Marriott+Hotel+Kolkata',
    latitude: 22.5471,
    longitude: 88.3989,
    facilities: ['Infinity Pool', 'Luxury Spa', '24/7 Fitness', 'Executive Lounge', 'Banquet Spaces', 'Wi-Fi'],
    contactPhone: '+91 33 6633 0000',
    featured: true,
    approxPriceRange: '₹13,500 - ₹26,000 / night',
  },
  {
    id: 'hyatt-regency-kolkata',
    name: 'Hyatt Regency Kolkata',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000603',
    nidhiCertified: true,
    location: 'Salt Lake City, Sector III',
    zone: 'Salt Lake & New Town',
    address: 'JA 1, Sector III, Salt Lake City, Bidhannagar, Kolkata 700098',
    proximityToVenue: '3.8 km from venue',
    distanceKm: 3.8,
    description:
      'A landscaped urban resort in Salt Lake with sprawling manicured grounds, landscaped pool, Italian trattoria, and premier business conference facilities.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.hyatt.com/en-US/hotel/india/hyatt-regency-kolkata/kolka',
    bookingSearchUrl:
      'https://www.google.com/search?q=Hyatt+Regency+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Kolkata',
    latitude: 22.5701,
    longitude: 88.4055,
    facilities: ['Tennis Courts', 'Landscape Gardens', 'Swimming Pool', 'Italian Dining', 'Club Olympus Spa', 'Wi-Fi'],
    contactPhone: '+91 33 2335 1234',
    featured: true,
    approxPriceRange: '₹9,500 - ₹18,000 / night',
  },
  {
    id: 'the-astor-kolkata',
    name: 'The Astor, Kolkata',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB000421',
    nidhiCertified: true,
    location: 'Shakespeare Sarani, Park Street area',
    zone: 'Central Kolkata / Park Street',
    address: '15, Shakespeare Sarani, Elgin, Kolkata, West Bengal 700071',
    proximityToVenue: '4.2 km from venue',
    distanceKm: 4.2,
    description:
      'A distinguished red-brick colonial heritage property offering boutique luxury, famed kebab and international dining at Kebab-e-Que, and vintage Calcutta charm.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://astorkolkata.com/',
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Astor+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Astor+Kolkata',
    latitude: 22.5478,
    longitude: 88.3562,
    facilities: ['Kebab-e-Que Dining', 'Deck88 Lounge', 'Colonial Suites', 'Wi-Fi', 'Airport Pick-up'],
    contactPhone: '+91 33 2282 9950',
    featured: false,
    approxPriceRange: '₹5,500 - ₹9,500 / night',
  },
  {
    id: 'aauris-kolkata',
    name: 'Aauris Kolkata',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB000431',
    nidhiCertified: true,
    location: 'Robinson Street, Central Kolkata',
    zone: 'Central Kolkata / Park Street',
    address: '4, Robinson Street, Mullick Bazar, Park Street area, Kolkata 700017',
    proximityToVenue: '4.1 km from venue',
    distanceKm: 4.1,
    description:
      'Sleek modern boutique hotel minutes from Park Street, featuring the panoramic SkyBar rooftop pool, contemporary aesthetics, and gourmet fusion restaurants.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://aauris.com/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Aauris+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aauris+Hotel+Kolkata',
    latitude: 22.5489,
    longitude: 88.3582,
    facilities: ['SkyBar Rooftop', 'Outdoor Glass Pool', 'Gym & Spa', 'Executive Boardrooms', 'Wi-Fi'],
    contactPhone: '+91 33 4032 7777',
    featured: false,
    approxPriceRange: '₹5,000 - ₹8,500 / night',
  },
  {
    id: 'raajkutir-kolkata',
    name: 'Raajkutir – IHCL SeleQtions',
    propertyType: 'hotel',
    category: '5-Star Heritage',
    starRating: 5,
    nidhiId: 'AWB000549',
    nidhiCertified: true,
    location: 'Kankurgachi, Swabhumi Heritage Park',
    zone: 'EM Bypass / Science City',
    address: '89C, Narkeldanga Main Rd, Phool Bagan, Kankurgachi, Kolkata 700054',
    proximityToVenue: '4.6 km from venue',
    distanceKm: 4.6,
    description:
      'A boutique heritage property inspired by traditional 19th-century Bengali Zamindari rajbaris, offering authentic courtyard dining and cultural immersion.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.seleqtionshotels.com/en-in/raajkutir-kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Raajkutir+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Raajkutir+Kolkata',
    latitude: 22.5714,
    longitude: 88.3925,
    facilities: ['Rajbari Courtyards', 'East India Room Dining', 'Artisan Pool', 'Swabhumi Artisan Arcades', 'Wi-Fi'],
    contactPhone: '+91 33 4040 4040',
    featured: false,
    approxPriceRange: '₹8,000 - ₹15,000 / night',
  },
  {
    id: 'the-oberoi-grand',
    name: 'The Oberoi Grand',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiCertified: true,
    location: 'Esplanade, Jawaharlal Nehru Road',
    zone: 'Central Kolkata / Park Street',
    address: '15, Jawaharlal Nehru Rd, New Market Area, Kolkata, West Bengal 700013',
    proximityToVenue: '6.2 km from venue',
    distanceKm: 6.2,
    description:
      'Affectionately known as the "Grande Dame of Chowringhee", this iconic 1880s colonial monument offers palatial arches, courtyard swimming pool, and legendary Oberoi hospitality.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.oberoihotels.com/hotels-in-kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Oberoi+Grand+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Oberoi+Grand+Kolkata',
    latitude: 22.5606,
    longitude: 88.3518,
    facilities: ['Colonial Architecture', 'Courtyard Pool', 'Ayurvedic Spa', 'Baan Thai Restaurant', 'Valet', 'Wi-Fi'],
    contactPhone: '+91 33 2249 2323',
    featured: true,
    approxPriceRange: '₹14,500 - ₹29,000 / night',
  },
  {
    id: 'the-park-kolkata',
    name: 'The Park, Kolkata',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000534',
    nidhiCertified: true,
    location: '17 Park Street, Kolkata',
    zone: 'Central Kolkata / Park Street',
    address: '17, Park Street, Taltala, Kolkata, West Bengal 700016',
    proximityToVenue: '5.5 km from venue',
    distanceKm: 5.5,
    description:
      'Iconic design hotel situated right on Park Street with high-voltage nightlife, luxury wellness spa, and trendy boutique suites.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.theparkhotels.com/kolkata.html',
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Park+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Park+Kolkata',
    latitude: 22.5532,
    longitude: 88.3524,
    facilities: ['Tantra Nightclub', 'Aqua Poolside Bar', 'Aura Luxury Spa', 'Park Street Frontage', 'Wi-Fi'],
    contactPhone: '+91 33 2249 9000',
    featured: false,
    approxPriceRange: '₹7,500 - ₹14,000 / night',
  },
  {
    id: 'hotel-hindusthan-international',
    name: 'Hotel Hindusthan International (HHI)',
    propertyType: 'hotel',
    category: '5-Star with Alcohol',
    starRating: 5,
    nidhiId: 'AWB000417',
    nidhiCertified: true,
    location: 'AJC Bose Road, Central Kolkata',
    zone: 'Central Kolkata / Park Street',
    address: '235/1, AJC Bose Road, Kolkata, West Bengal 700020',
    proximityToVenue: '6.0 km from venue',
    distanceKm: 6.0,
    description:
      'Legendary central Kolkata 5-star hotel featuring Mythh 24-hour restaurant, Kalash Indian diner, Underground nightclub, and expansive conference facilities.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.hhihotels.com/kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Hotel+Hindusthan+International+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hotel+Hindusthan+International+Kolkata',
    latitude: 22.5408,
    longitude: 88.3514,
    facilities: ['Mythh 24/7 Dining', 'Kalash Restaurant', 'Swimming Pool', 'Wellness Spa', 'Wi-Fi'],
    contactPhone: '+91 33 2280 2323',
    featured: false,
    approxPriceRange: '₹6,500 - ₹12,000 / night',
  },
  {
    id: 'taj-bengal',
    name: 'Taj Bengal Kolkata',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000249',
    nidhiCertified: true,
    location: 'Alipore, Belvedere Road',
    zone: 'South Kolkata',
    address: '34B, Belvedere Rd, Alipore, Kolkata, West Bengal 700027',
    proximityToVenue: '7.8 km from venue',
    distanceKm: 7.8,
    description:
      'An iconic luxury sanctuary in green Alipore with palatial architecture, magnificent atrium art collection, and world-class Taj signature hospitality.',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Taj+Bengal+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Taj+Bengal+Kolkata',
    latitude: 22.5367,
    longitude: 88.3308,
    facilities: ['Signature Taj Butler', 'Atrium Art Collection', 'Outdoor Pool', 'Jiva Spa', 'Lush Gardens', 'Wi-Fi'],
    contactPhone: '+91 33 6612 3939',
    featured: true,
    approxPriceRange: '₹12,500 - ₹25,000 / night',
  },
  {
    id: 'novotel-kolkata',
    name: 'Novotel Kolkata Hotel & Residences',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000405',
    nidhiCertified: true,
    location: 'New Town, Rajarhat',
    zone: 'Salt Lake & New Town',
    address: 'CF 11, Action Area 1C, New Town, Kolkata, West Bengal 700156',
    proximityToVenue: '7.5 km from venue',
    distanceKm: 7.5,
    description:
      'Modern business hotel and serviced apartments in New Town offering spacious living, diverse dining, rooftop pool, and convenient airport connectivity.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://all.accor.com/hotel/8287/index.en.shtml',
    bookingSearchUrl:
      'https://www.google.com/search?q=Novotel+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Novotel+Kolkata',
    latitude: 22.5833,
    longitude: 88.4556,
    facilities: ['Serviced Apartments', 'Rooftop Pool', 'Fitness Club', 'All-Day Dining', 'Airport Shuttle', 'Wi-Fi'],
    contactPhone: '+91 33 4032 3333',
    featured: true,
    approxPriceRange: '₹7,000 - ₹13,000 / night',
  },
  {
    id: 'fairfield-by-marriott',
    name: 'Fairfield by Marriott Kolkata',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB000676',
    nidhiCertified: true,
    location: 'New Town, Action Area I',
    zone: 'Salt Lake & New Town',
    address: 'CB 218, Action Area 1C, New Town, Kolkata 700156',
    proximityToVenue: '7.2 km from venue',
    distanceKm: 7.2,
    description:
      'Contemporary international hospitality in the heart of New Town IT corridor, providing smart ergonomic rooms, Kava all-day diner, and fitness center.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.marriott.com/en-us/hotels/ccufi-fairfield-kolkata/overview/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Fairfield+by+Marriott+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Kolkata',
    latitude: 22.5861,
    longitude: 88.4528,
    facilities: ['Kava Diner', '24/7 Fitness Center', 'Business Corner', 'Wi-Fi', 'Airport Transit'],
    contactPhone: '+91 33 6666 4444',
    featured: false,
    approxPriceRange: '₹5,500 - ₹9,000 / night',
  },
  {
    id: 'the-westin-kolkata',
    name: 'The Westin Kolkata Rajarhat',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000272',
    nidhiCertified: true,
    location: 'New Town, Rajarhat',
    zone: 'Salt Lake & New Town',
    address: 'Plot No. CBD/2, Action Area II, New Town, Kolkata, West Bengal 700156',
    proximityToVenue: '9.2 km from venue',
    distanceKm: 9.2,
    description:
      'High-rise luxury landmark in New Town overlooking Eco Park lake, featuring Heavenly Bed comfort, rooftop bar 31/32, and proximity to Kolkata Airport.',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.marriott.com/en-us/hotels/ccuwi-the-westin-kolkata-rajarhat/overview/',
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Westin+Kolkata+Rajarhat+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Westin+Kolkata+Rajarhat',
    latitude: 22.6074,
    longitude: 88.4682,
    facilities: ['Sky Bar 31/32', 'Heavenly Spa', 'Infinity Pool', 'Eco Park Views', 'Express CCU Airport Transfer', 'Wi-Fi'],
    contactPhone: '+91 33 4037 1234',
    featured: false,
    approxPriceRange: '₹9,000 - ₹19,000 / night',
  },
  {
    id: 'taj-city-centre-newtown',
    name: 'Taj City Centre New Town',
    propertyType: 'hotel',
    category: '5-Star Deluxe',
    starRating: 5,
    nidhiId: 'AWB000438',
    nidhiCertified: true,
    location: 'City Centre II, New Town',
    zone: 'Salt Lake & New Town',
    address: 'Premises No. 227-1111, Plot No. IID-5, City Centre II, Action Area IID, New Town 700136',
    proximityToVenue: '10.5 km from venue',
    distanceKm: 10.5,
    description:
      'Chic urban oasis situated atop City Centre II mall, boasting iconic rooftop pool, Shamiana dining, and direct 10-minute access to Netaji Subhas Chandra Bose Airport.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.tajhotels.com/en-in/taj/taj-city-centre-new-town-kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Taj+City+Centre+New+Town+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Taj+City+Centre+New+Town+Kolkata',
    latitude: 22.6288,
    longitude: 88.4632,
    facilities: ['Shamiana Dining', 'Rooftop Pool', 'Shopping Mall Access', 'Jiva Spa', 'Airport Transit', 'Wi-Fi'],
    contactPhone: '+91 33 6820 0300',
    featured: false,
    approxPriceRange: '₹8,500 - ₹17,000 / night',
  },
  {
    id: 'golden-tulip-kolkata',
    name: 'Golden Tulip Kolkata',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB001160',
    nidhiCertified: true,
    location: 'Salt Lake Sector I',
    zone: 'Salt Lake & New Town',
    address: 'DD-19, Salt Lake Sector - I, Bidhannagar, Kolkata 700064',
    proximityToVenue: '5.2 km from venue',
    distanceKm: 5.2,
    description:
      'Well-appointed business hotel nestled in quiet Salt Lake Sector 1, featuring Anti Pasti dining, Noir cocktail lounge, and seamless metro access.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://kolkata.goldentulip.com/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Golden+Tulip+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Golden+Tulip+Kolkata',
    latitude: 22.5898,
    longitude: 88.4097,
    facilities: ['Anti Pasti Dining', 'Noir Lounge', 'Fitness Center', 'Wi-Fi', 'Metro Connectivity'],
    contactPhone: '+91 33 6657 8899',
    featured: false,
    approxPriceRange: '₹4,500 - ₹8,000 / night',
  },
  {
    id: 'lalit-great-eastern',
    name: 'The Lalit Great Eastern Kolkata',
    propertyType: 'hotel',
    category: '5-Star Heritage',
    starRating: 5,
    nidhiId: 'AWB001552',
    nidhiCertified: true,
    location: 'Dalhousie Square / BBD Bagh',
    zone: 'Central Kolkata / Park Street',
    address: '18, Hemanta Basu Sarani, Lal Dighi, BBD Bagh, Kolkata 700069',
    proximityToVenue: '6.8 km from venue',
    distanceKm: 6.8,
    description:
      'Asia’s first luxury hotel established in 1840, blending Victorian, Edwardian, and Contemporary wings with historic bakery and award-winning Rejuve Spa.',
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.thelalit.com/the-lalit-kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Lalit+Great+Eastern+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Lalit+Great+Eastern+Kolkata',
    latitude: 22.5684,
    longitude: 88.3512,
    facilities: ['Historic Bakery', 'Rejuve Spa', 'Tea Lounge', 'Heritage Suites', 'Swimming Pool', 'Wi-Fi'],
    contactPhone: '+91 33 4444 7777',
    featured: false,
    approxPriceRange: '₹8,500 - ₹18,000 / night',
  },
  {
    id: 'kenilworth-hotel',
    name: 'The Kenilworth Hotel Kolkata',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB001569',
    nidhiCertified: true,
    location: 'Little Russell Street, Central Kolkata',
    zone: 'Central Kolkata / Park Street',
    address: '1 & 2, Little Russell St, Kankaria Estates, Park Street area, Kolkata 700071',
    proximityToVenue: '5.6 km from venue',
    distanceKm: 5.6,
    description:
      'Charming luxury business hotel in Kolkata’s consulate district near Park Street. Features landscaped garden dining at The Big Ben English Pub and Aromas diner.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.kenilworthhotels.com/kolkata/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Kenilworth+Hotel+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kenilworth+Hotel+Kolkata',
    latitude: 22.5484,
    longitude: 88.3519,
    facilities: ['The Big Ben English Pub', 'Aromas Diner', 'So Thai Spa', 'Lush Lawn', 'Wi-Fi'],
    contactPhone: '+91 33 6621 4100',
    featured: false,
    approxPriceRange: '₹6,000 - ₹11,000 / night',
  },
  {
    id: 'hyatt-centric-ballygunge',
    name: 'Hyatt Centric Ballygunge Kolkata',
    propertyType: 'hotel',
    category: '5-Star with Alcohol',
    starRating: 5,
    nidhiId: 'AWB000268',
    nidhiCertified: true,
    location: 'Ballygunge, Garcha 1st Lane',
    zone: 'South Kolkata',
    address: '17, Garcha 1st Lane, Ballygunge, Kolkata, West Bengal 700019',
    proximityToVenue: '4.8 km from venue',
    distanceKm: 4.8,
    description:
      'Boutique upscale hotel in culturally rich Ballygunge with contemporary designer accommodations, rooftop pool, and locally inspired artisanal dining.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.hyatt.com/hyatt-centric/ccuct-hyatt-centric-ballygunge-kolkata',
    bookingSearchUrl:
      'https://www.google.com/search?q=Hyatt+Centric+Ballygunge+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hyatt+Centric+Ballygunge+Kolkata',
    latitude: 22.5278,
    longitude: 88.3625,
    facilities: ['Rooftop Swimming Pool', 'Artisanal Cafe', 'Fitness Center', 'South Kolkata Access', 'Wi-Fi'],
    contactPhone: '+91 33 3501 1234',
    featured: false,
    approxPriceRange: '₹7,500 - ₹14,000 / night',
  },
  {
    id: 'altair-boutique-hotel',
    name: 'Altair Boutique Hotel',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB000333',
    nidhiCertified: true,
    location: 'Sector V, Salt Lake IT Hub',
    zone: 'Salt Lake & New Town',
    address: 'EcoCentre, Floors 19-21, EM-4, EM Block, Sector V, Bidhannagar, Kolkata 700091',
    proximityToVenue: '6.4 km from venue',
    distanceKm: 6.4,
    description:
      'High-altitude designer boutique hotel on the top floors of EcoCentre tower, offering sky-high views, open-air infinity terrace pool, and lounge Capella.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://altairkolkata.com/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Altair+Boutique+Hotel+Salt+Lake+Kolkata+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Altair+Boutique+Hotel+Salt+Lake+Kolkata',
    latitude: 22.5739,
    longitude: 88.4338,
    facilities: ['Capella Sky Lounge', 'Panoramic Terrace Pool', 'Vedic Spa', 'Sector V IT Corridor', 'Wi-Fi'],
    contactPhone: '+91 33 7101 7101',
    featured: false,
    approxPriceRange: '₹5,500 - ₹9,500 / night',
  },
  {
    id: 'holiday-inn-express-airport',
    name: 'Holiday Inn Express Kolkata Airport',
    propertyType: 'hotel',
    category: '4-Star with Alcohol',
    starRating: 4,
    nidhiId: 'AWB000413',
    nidhiCertified: true,
    location: 'Jessore Road, NSCBI Airport Zone',
    zone: 'Salt Lake & New Town',
    address: '28 Jessore Road, Dum Dum, Near NSCBI Airport, Kolkata 700079',
    proximityToVenue: '14.5 km from venue',
    distanceKm: 14.5,
    description:
      'Modern IHG hotel directly connected to Netaji Subhas Chandra Bose Airport, featuring express grab-and-go breakfast, smart workstations, and rapid terminal transfer.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/kolkata/ccuex/hoteldetail',
    bookingSearchUrl:
      'https://www.google.com/search?q=Holiday+Inn+Express+Kolkata+Airport+official+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Kolkata+Airport',
    latitude: 22.6412,
    longitude: 88.4318,
    facilities: ['Express Breakfast', 'Airport Shuttle', '24/7 Fitness Center', 'Soundproof Rooms', 'Wi-Fi'],
    contactPhone: '+91 33 6638 8888',
    featured: false,
    approxPriceRange: '₹4,200 - ₹7,500 / night',
  },

  // ==========================================
  // 2. HOMESTAYS (NIDHI CLASSIFIED)
  // ==========================================
  {
    id: 'satguru-homestays',
    name: 'Satguru Homestays',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB001437',
    nidhiCertified: true,
    location: 'Tagore Park, Kasba / EM Bypass',
    zone: 'EM Bypass / Science City',
    address: 'D22A, Tagore Park, Kasba, Near Ruby Crossing, Kolkata 700039',
    proximityToVenue: '2.1 km from venue',
    distanceKm: 2.1,
    description:
      'Ministry of Tourism certified Silver Homestay located right off the EM Bypass near Tagore Park. Personalized Bengali home hospitality with home-cooked breakfast and spacious serviced rooms.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Satguru+Homestays+Tagore+Park+Kolkata+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Satguru+Homestays+Tagore+Park+Kolkata',
    latitude: 22.5186,
    longitude: 88.3962,
    facilities: ['Wi-Fi', 'Home Cooked Breakfast', 'Air Conditioned', 'Kitchen Access', 'Host Assistance', 'Laundry'],
    contactPhone: '+91 98319 77994',
    featured: true,
    approxPriceRange: '₹2,500 - ₹4,200 / night',
  },
  {
    id: 'central-homestay',
    name: 'Central Bed & Breakfast Homestay',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB000390',
    nidhiCertified: true,
    location: 'Sarat Bose Road, Lansdowne',
    zone: 'South Kolkata',
    address: '7th Floor, Lansdowne Court, 5B Sarat Bose Road, Kolkata 700020',
    proximityToVenue: '5.4 km from venue',
    distanceKm: 5.4,
    description:
      'Premier penthouse homestay on Sarat Bose Road. Offers serene bird’s-eye terrace views, artistic interiors, curated library, and warm local hosting for diaspora visitors.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Central+Bed+and+Breakfast+Lansdowne+Court+Sarat+Bose+Road+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Lansdowne+Court+5B+Sarat+Bose+Road+Kolkata',
    latitude: 22.5358,
    longitude: 88.3534,
    facilities: ['Terrace Garden', 'Terrace Breakfast', 'Curated Library', 'Wi-Fi', 'Air Conditioned', 'Elevator Access'],
    contactPhone: '+91 98310 12345',
    featured: false,
    approxPriceRange: '₹3,000 - ₹5,000 / night',
  },
  {
    id: 'balmy-homestay',
    name: 'Balmy Homestay',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB001213',
    nidhiCertified: true,
    location: 'Action Area 1C, New Town',
    zone: 'Salt Lake & New Town',
    address: 'Premises 11-0230, Plot CE/1/A/105, Street 0230, Action Area 1C, New Town 700156',
    proximityToVenue: '7.8 km from venue',
    distanceKm: 7.8,
    description:
      'Certified cozy homestay in planned New Town with calm residential surroundings, quick access to Biswa Bangla Gate and airport corridors, ideal for business delegates.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Balmy+Homestay+New+Town+Kolkata+booking',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Balmy+Homestay+New+Town+Kolkata',
    latitude: 22.5855,
    longitude: 88.4611,
    facilities: ['Wi-Fi', 'Spacious Balcony', 'Home Cooked Meals', '24/7 Security', 'Airport Proximity'],
    contactPhone: '+91 98305 45678',
    featured: false,
    approxPriceRange: '₹2,200 - ₹3,800 / night',
  },
  {
    id: 'the-moira-homestay',
    name: 'The Moira Bed & Breakfast',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB001542',
    nidhiCertified: true,
    location: 'Moira Street, Park Street Vicinity',
    zone: 'Central Kolkata / Park Street',
    address: '3 Moira Street, Opposite Sushila Birla Girls School, Kolkata 700017',
    proximityToVenue: '4.9 km from venue',
    distanceKm: 4.9,
    description:
      'Heritage townhouse homestay in upscale central Kolkata offering charming colonial high ceilings, handcrafted teak furniture, and bespoke morning hospitality.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=The+Moira+Bed+and+Breakfast+Moira+Street+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=3+Moira+Street+Kolkata',
    latitude: 22.5451,
    longitude: 88.3579,
    facilities: ['Antique Teak Decor', 'Wi-Fi', 'Continental Breakfast', 'Daily Housekeeping', 'Central Location'],
    contactPhone: '+91 98311 23456',
    featured: false,
    approxPriceRange: '₹3,200 - ₹5,500 / night',
  },
  {
    id: 'service-apts-park-street',
    name: 'Service Apartments Park Street',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB001204',
    nidhiCertified: true,
    location: 'Ripon Street, Park Street Area',
    zone: 'Central Kolkata / Park Street',
    address: '3A, Ripon Street, 3rd Floor, Park Street Area, Kolkata 700016',
    proximityToVenue: '5.2 km from venue',
    distanceKm: 5.2,
    description:
      'Convenient serviced apartments off Park Street providing fully furnished bedrooms, kitchenettes, high-speed Wi-Fi, and personalized stay assistance.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Service+Apartments+Park+Street+Ripon+Street+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=3A+Ripon+Street+Kolkata',
    latitude: 22.5518,
    longitude: 88.3567,
    facilities: ['Kitchenette', 'Wi-Fi', 'Daily Housekeeping', 'Park Street Walkable', 'Air Conditioning'],
    contactPhone: '+91 98301 85080',
    featured: false,
    approxPriceRange: '₹2,600 - ₹4,400 / night',
  },
  {
    id: 'sarkar-villa-homestay',
    name: 'Sarkar Villa Homestay',
    propertyType: 'homestay',
    category: 'Homestay-Silver',
    nidhiId: 'AWB001382',
    nidhiCertified: true,
    location: 'Mission Pally, Narendrapur',
    zone: 'South Kolkata',
    address: 'Garia Sonarpur Station Rd, Mission Pally, Narendrapur, Kolkata 700103',
    proximityToVenue: '11.5 km from venue',
    distanceKm: 11.5,
    description:
      'Peaceful suburban villa homestay surrounded by greenery and mango trees in South Kolkata, providing an authentic home away from home with traditional culinary meals.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Sarkar+Villa+Homestay+Narendrapur+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sarkar+Villa+Homestay+Narendrapur',
    latitude: 22.4411,
    longitude: 88.3972,
    facilities: ['Lush Garden', 'Traditional Bengali Kitchen', 'Quiet Retreat', 'Wi-Fi', 'Parking'],
    contactPhone: '+91 98302 33445',
    featured: false,
    approxPriceRange: '₹1,800 - ₹3,000 / night',
  },

  // ==========================================
  // 3. BED & BREAKFASTS (B&B - NIDHI CLASSIFIED)
  // ==========================================
  {
    id: 'handmade-homes-em-bypass',
    name: 'Handmade Homes – EM Bypass',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB001521',
    nidhiCertified: true,
    location: 'Mukundapur, EM Bypass Corridor',
    zone: 'EM Bypass / Science City',
    address: '1895, Mukundapur, Indunil Bhavan 3rd Floor, Kolkata 700075',
    proximityToVenue: '4.0 km from venue',
    distanceKm: 4.0,
    description:
      'Ministry of Tourism Silver classified B&B situated directly along the EM Bypass corridor. Custom-designed boutique suites with kitchenettes, swift transit to Biswa Bangla Mela Prangan.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Handmade+Homes+Mukundapur+EM+Bypass+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Mukundapur+Indunil+Bhavan+Kolkata',
    latitude: 22.5024,
    longitude: 88.4012,
    facilities: ['Wi-Fi', 'Kitchenette', 'Boutique Furniture', 'EM Bypass Access', 'Complimentary Breakfast'],
    contactPhone: '+91 98315 67890',
    featured: true,
    approxPriceRange: '₹2,600 - ₹4,500 / night',
  },
  {
    id: 'auckland-bed-and-breakfast',
    name: 'Auckland Bed and Breakfast',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB000409',
    nidhiCertified: true,
    location: 'AJC Bose Road, Central Kolkata',
    zone: 'Central Kolkata / Park Street',
    address: '6/7A, AJC Bose Road, Mullick Bazar, Kolkata 700017',
    proximityToVenue: '4.3 km from venue',
    distanceKm: 4.3,
    description:
      'A serene B&B retreat in central Kolkata offering well-appointed heritage-styled rooms, personalized travel concierge, and hearty English and Indian breakfast spreads.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Auckland+Bed+and+Breakfast+AJC+Bose+Road+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=6+7A+AJC+Bose+Road+Kolkata',
    latitude: 22.5458,
    longitude: 88.3614,
    facilities: ['English Breakfast', 'Wi-Fi', 'Air Conditioning', 'Central Location', 'Travel Concierge'],
    contactPhone: '+91 98300 77889',
    featured: false,
    approxPriceRange: '₹2,800 - ₹4,800 / night',
  },
  {
    id: 'handmade-homes-lords',
    name: 'Handmade Homes – Lords',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB001539',
    nidhiCertified: true,
    location: 'Prince Anwar Shah Road, Lake Gardens',
    zone: 'South Kolkata',
    address: '182, Prince Anwar Shah Rd, Capricorn Lords Building, Kolkata 700045',
    proximityToVenue: '6.8 km from venue',
    distanceKm: 6.8,
    description:
      'Urban chic Bed & Breakfast near South City Mall. Hand-curated decor with modern amenities, fast fiber Wi-Fi, and convenient shopping and dining at your doorstep.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Handmade+Homes+Lords+Prince+Anwar+Shah+Road+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Capricorn+Lords+Prince+Anwar+Shah+Road+Kolkata',
    latitude: 22.5031,
    longitude: 88.3587,
    facilities: ['South City Mall Proximity', 'Fiber Wi-Fi', 'Artisan Interiors', 'Kitchen Access', 'Breakfast Included'],
    contactPhone: '+91 98315 99001',
    featured: false,
    approxPriceRange: '₹2,900 - ₹5,000 / night',
  },
  {
    id: 'handmade-homes-tollygunge',
    name: 'Handmade Homes – Tollygunge',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB001517',
    nidhiCertified: true,
    location: 'Dr. Radha Govinda Nath Sarani, Tollygunge',
    zone: 'South Kolkata',
    address: '4/1, Dr. Radha Govinda Nath Sarani, 1st Floor, Kolkata 700026',
    proximityToVenue: '7.5 km from venue',
    distanceKm: 7.5,
    description:
      'Boutique B&B situated near Rabindra Sarobar lakes and Tollygunge metro, offering custom-crafted wooden furniture, serene terrace, and traditional breakfast.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Handmade+Homes+Tollygunge+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr+Radha+Govinda+Nath+Sarani+Tollygunge+Kolkata',
    latitude: 22.5089,
    longitude: 88.3498,
    facilities: ['Metro Proximity', 'Wi-Fi', 'Kitchen Facilities', 'Terrace View', 'Breakfast Included'],
    contactPhone: '+91 98315 77112',
    featured: false,
    approxPriceRange: '₹2,700 - ₹4,600 / night',
  },
  {
    id: 'lake-city-bnb',
    name: 'Lake City Home Stay & B&B',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB001592',
    nidhiCertified: true,
    location: 'Salt Lake City, Sector 1',
    zone: 'Salt Lake & New Town',
    address: 'BB-232, Salt Lake City, Sector I, Kolkata 700064',
    proximityToVenue: '5.8 km from venue',
    distanceKm: 5.8,
    description:
      'Spacious standalone villa B&B in peaceful Salt Lake Sector 1. Clean airy rooms overlooking tranquil leafy avenues with easy access to Salt Lake Central Park and Karunamoyee.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Lake+City+Home+Stay+Salt+Lake+BB+232+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=BB+232+Salt+Lake+City+Sector+1+Kolkata',
    latitude: 22.5934,
    longitude: 88.4067,
    facilities: ['Garden Balcony', 'Wi-Fi', 'Vegetarian Breakfast', 'Walking Distance to Metro', 'Quiet Surroundings'],
    contactPhone: '+91 98308 11223',
    featured: false,
    approxPriceRange: '₹2,400 - ₹4,000 / night',
  },
  {
    id: 'ganga-niwas-bnb',
    name: 'Ganga Niwas – Riverside B&B',
    propertyType: 'bnb',
    category: 'B&B-Gold',
    nidhiId: 'AWB000290',
    nidhiCertified: true,
    location: 'Batanagar, Riverside Development',
    zone: 'Greater Kolkata / Suburbs',
    address: 'Princep 1, Flat 24PH2, Core D, Riverside Development, 1 New Batanagar Rd, Kolkata 700140',
    proximityToVenue: '16.5 km from venue',
    distanceKm: 16.5,
    description:
      'Prestigious Ministry of Tourism Gold-certified penthouse B&B along the Hooghly River. Spectacular river sunset panoramas, bespoke luxury suites, golf course access, and river cruise hospitality.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    ],
    bookingSearchUrl:
      'https://www.google.com/search?q=Ganga+Niwas+Riverside+Batanagar+B%26B+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calcutta+Riverside+Batanagar+Kolkata',
    latitude: 22.5028,
    longitude: 88.2312,
    facilities: ['Riverfront Panoramic Balcony', 'Golf Course View', 'Bespoke Breakfast', 'Penthouse Luxury', 'Wi-Fi'],
    contactPhone: '+91 98300 44556',
    featured: true,
    approxPriceRange: '₹3,500 - ₹6,500 / night',
  },
  {
    id: 'vedic-village-aqua-bungalow',
    name: 'Vedic Village Aqua Bungalow',
    propertyType: 'bnb',
    category: 'B&B-Silver',
    nidhiId: 'AWB001243',
    nidhiCertified: true,
    location: 'Shikharpur, Rajarhat / Eco-Resort Enclave',
    zone: 'Greater Kolkata / Suburbs',
    address: 'Bungalow 41/9, Vedic Village, Shikharpur, P.O. Bagu, Rajarhat, Kolkata 700135',
    proximityToVenue: '14.2 km from venue',
    distanceKm: 14.2,
    description:
      'Nature-immersed lakeside aqua bungalow within the Vedic Village resort sanctuary. Traditional mud-architecture cottage with modern plunge pool, Ayurveda spa access, and tranquility.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    ],
    officialWebsite: 'https://thevedicvillage.com/',
    bookingSearchUrl:
      'https://www.google.com/search?q=Vedic+Village+Aqua+Bungalow+Rajarhat+Kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Vedic+Village+Spa+Resort+Kolkata',
    latitude: 22.6283,
    longitude: 88.5255,
    facilities: ['Lakeside View', 'Ayurveda Spa Access', 'Boating & Equestrian', 'Plunge Pool', 'Organic Dining', 'Wi-Fi'],
    contactPhone: '+91 33 6622 9900',
    featured: false,
    approxPriceRange: '₹4,500 - ₹8,500 / night',
  },
]
