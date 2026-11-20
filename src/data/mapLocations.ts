export interface MapLocation {
  id: string
  name: string
  category:
    | 'convention'
    | 'hotel'
    | 'tourist'
    | 'historical'
    | 'airport'
    | 'railway'
    | 'transport'
  latitude: number
  longitude: number
  address: string
  description: string
  image?: string
  officialWebsite?: string
  googleMapsUrl: string
  distanceToVenueKm: number
  badgeText?: string
}

export const MAP_LOCATIONS: MapLocation[] = [
  // Convention Venue
  {
    id: 'venue-biswa-bangla',
    name: 'Biswa Bangla Mela Prangan (Convention Venue)',
    category: 'convention',
    latitude: 22.5448,
    longitude: 88.3995,
    address: '3, JBS Haldane Ave, Tangra, Kolkata, West Bengal 700046',
    description:
      'Official venue for the 19th Pravasi Bharatiya Divas Convention 2027. State-of-the-art international exhibition and convention center with expansive pavilions, VIP halls, and business facilities.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Biswa+Bangla+Mela+Prangan+Kolkata',
    distanceToVenueKm: 0,
    badgeText: 'Official PBD 2027 Venue',
  },

  // Airport & Major Railway Terminals
  {
    id: 'airport-ccu',
    name: 'Netaji Subhas Chandra Bose International Airport (CCU)',
    category: 'airport',
    latitude: 22.6547,
    longitude: 88.4467,
    address: 'Dum Dum, Kolkata, West Bengal 700052',
    description:
      'Major international airport connecting Kolkata globally. Dedicated PBD delegate reception helpdesks, prepaid taxi counters, and direct shuttle corridors available.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Netaji+Subhas+Chandra+Bose+International+Airport+Kolkata',
    distanceToVenueKm: 15.2,
    badgeText: 'Primary Air Gateway',
  },
  {
    id: 'rail-howrah',
    name: 'Howrah Railway Terminus (HWH)',
    category: 'railway',
    latitude: 22.5838,
    longitude: 88.3426,
    address: 'Station Rd, Howrah, West Bengal 711101',
    description:
      'India’s oldest and busiest railway complex connecting Kolkata to all national capitals and metros. Features 23 platforms and heritage Victorian red-brick facade.',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Howrah+Railway+Station',
    distanceToVenueKm: 8.5,
    badgeText: 'Major Rail Hub',
  },
  {
    id: 'rail-sealdah',
    name: 'Sealdah Railway Station (SDAH)',
    category: 'railway',
    latitude: 22.5675,
    longitude: 88.3712,
    address: 'Bepin Behari Ganguly St, Sealdah, Kolkata, West Bengal 700014',
    description:
      'Key terminal handling long-distance express trains and regional lines, integrated with Kolkata Metro Green Line.',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sealdah+Railway+Station',
    distanceToVenueKm: 4.8,
    badgeText: 'Metro Connected Station',
  },
  {
    id: 'rail-kolkata',
    name: 'Kolkata Railway Station (Chitpur - KOAA)',
    category: 'railway',
    latitude: 22.6033,
    longitude: 88.3768,
    address: 'Belgachia, Kolkata, West Bengal 700004',
    description:
      'Modern terminal handling major northern and eastern long-distance superfast and international trains.',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kolkata+Railway+Station+Chitpur',
    distanceToVenueKm: 7.9,
    badgeText: 'Express Rail Terminal',
  },

  // Key Hotels & Resorts
  {
    id: 'map-hotel-itc-royal',
    name: 'ITC Royal Bengal',
    category: 'hotel',
    latitude: 22.5447,
    longitude: 88.3976,
    address: '1, JBS Haldane Ave, Tangra, Kolkata 700046',
    description:
      'Grand palatial luxury hotel situated right beside the Biswa Bangla Mela Prangan.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.itchotels.com/in/en/itcroyalbengal-kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ITC+Royal+Bengal+Kolkata',
    distanceToVenueKm: 0.4,
    badgeText: '0.4 km to Venue',
  },
  {
    id: 'map-hotel-jw-marriott',
    name: 'JW Marriott Hotel Kolkata',
    category: 'hotel',
    latitude: 22.5471,
    longitude: 88.3989,
    address: '4A, JBS Haldane Ave, Tangra, Kolkata 700105',
    description:
      'Luxury 5-star hotel along EM Bypass with world-class dining, pool, and business amenities.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.marriott.com/en-us/hotels/ccujw-jw-marriott-hotel-kolkata/overview/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=JW+Marriott+Hotel+Kolkata',
    distanceToVenueKm: 0.6,
    badgeText: '0.6 km to Venue',
  },
  {
    id: 'map-hotel-hyatt',
    name: 'Hyatt Regency Kolkata',
    category: 'hotel',
    latitude: 22.5701,
    longitude: 88.4055,
    address: 'JA Block, Sector III, Salt Lake, Kolkata 700098',
    description:
      'Urban resort hotel surrounded by lush gardens, pool, and fine dining.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.hyatt.com/en-US/hotel/india/hyatt-regency-kolkata/kolka',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Kolkata',
    distanceToVenueKm: 3.8,
    badgeText: '3.8 km to Venue',
  },
  {
    id: 'map-hotel-novotel',
    name: 'Novotel Kolkata Hotel & Residences',
    category: 'hotel',
    latitude: 22.5833,
    longitude: 88.4556,
    address: 'CF 11, Action Area 1C, New Town, Kolkata 700156',
    description:
      'Premier hotel in New Town with serviced apartments and direct airport connectivity.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://all.accor.com/hotel/8287/index.en.shtml',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Novotel+Kolkata',
    distanceToVenueKm: 7.5,
    badgeText: '7.5 km to Venue',
  },
  {
    id: 'map-hotel-oberoi',
    name: 'The Oberoi Grand',
    category: 'hotel',
    latitude: 22.5606,
    longitude: 88.3518,
    address: '15, Jawaharlal Nehru Rd, Kolkata 700013',
    description:
      'Heritage luxury hotel in the heart of Esplanade offering Victorian splendor.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.oberoihotels.com/hotels-in-kolkata/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Oberoi+Grand+Kolkata',
    distanceToVenueKm: 6.2,
    badgeText: 'Heritage Center',
  },
  {
    id: 'map-hotel-taj-bengal',
    name: 'Taj Bengal Kolkata',
    category: 'hotel',
    latitude: 22.5367,
    longitude: 88.3308,
    address: '34B, Belvedere Rd, Alipore, Kolkata 700027',
    description:
      'Iconic luxury landmark in historic Alipore with Taj signature hospitality.',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Taj+Bengal+Kolkata',
    distanceToVenueKm: 7.8,
    badgeText: 'Alipore Luxury',
  },
  {
    id: 'map-hotel-itc-sonar',
    name: 'ITC Sonar – Luxury Collection',
    category: 'hotel',
    latitude: 22.5455,
    longitude: 88.3965,
    address: '1, JBS Haldane Ave, Tangra, Kolkata 700046',
    description:
      'Set amidst water lilies and landscaped lagoons, directly adjacent to Biswa Bangla Mela Prangan.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.itchotels.com/in/en/itcsonar-kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ITC+Sonar+Kolkata',
    distanceToVenueKm: 0.5,
    badgeText: 'Adjacent (0.5 km)',
  },
  {
    id: 'map-hotel-raajkutir',
    name: 'Raajkutir – IHCL SeleQtions',
    category: 'hotel',
    latitude: 22.5714,
    longitude: 88.3925,
    address: '89C, Narkeldanga Main Rd, Phool Bagan, Kankurgachi, Kolkata 700054',
    description:
      'Boutique heritage property inspired by traditional 19th-century Bengali Zamindari rajbaris with artisan courtyards.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.seleqtionshotels.com/en-in/raajkutir-kolkata/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Raajkutir+Kolkata',
    distanceToVenueKm: 4.6,
    badgeText: 'Heritage Rajbari',
  },
  {
    id: 'map-hotel-the-astor',
    name: 'The Astor, Kolkata',
    category: 'hotel',
    latitude: 22.5478,
    longitude: 88.3562,
    address: '15, Shakespeare Sarani, Elgin, Kolkata, West Bengal 700071',
    description:
      'Heritage colonial red-brick boutique hotel near Park Street, home to iconic Kebab-e-Que.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://astorkolkata.com/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Astor+Kolkata',
    distanceToVenueKm: 4.2,
    badgeText: 'Heritage 4-Star',
  },
  {
    id: 'map-hotel-aauris',
    name: 'Aauris Kolkata',
    category: 'hotel',
    latitude: 22.5489,
    longitude: 88.3582,
    address: '4, Robinson Street, Park Street area, Kolkata 700017',
    description:
      'Modern boutique 4-star hotel with panoramic rooftop SkyBar and glass pool.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://aauris.com/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aauris+Hotel+Kolkata',
    distanceToVenueKm: 4.1,
    badgeText: 'Boutique 4-Star',
  },
  {
    id: 'map-hotel-the-park',
    name: 'The Park, Kolkata',
    category: 'hotel',
    latitude: 22.5532,
    longitude: 88.3524,
    address: '17, Park Street, Kolkata 700016',
    description:
      'Iconic 5-star design hotel in central Park Street with vibrant dining and nightlife.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.theparkhotels.com/kolkata.html',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Park+Kolkata',
    distanceToVenueKm: 5.5,
    badgeText: 'Park Street Core',
  },
  {
    id: 'map-hotel-westin',
    name: 'The Westin Kolkata Rajarhat',
    category: 'hotel',
    latitude: 22.6074,
    longitude: 88.4682,
    address: 'Plot No. CBD/2, Action Area II, New Town, Kolkata 700156',
    description:
      'Luxury high-rise landmark overlooking Eco Park lake with Heavenly Bed comforts and Sky Bar 31/32.',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.marriott.com/en-us/hotels/ccuwi-the-westin-kolkata-rajarhat/overview/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Westin+Kolkata+Rajarhat',
    distanceToVenueKm: 9.2,
    badgeText: 'New Town Luxury',
  },
  {
    id: 'map-stay-satguru',
    name: 'Satguru Homestays (NIDHI Certified)',
    category: 'hotel',
    latitude: 22.5186,
    longitude: 88.3962,
    address: 'D22A, Tagore Park, Kasba, Near Ruby Crossing, Kolkata 700039',
    description:
      'Ministry of Tourism Silver certified homestay located off EM Bypass with home-cooked breakfast and spacious serviced rooms.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Satguru+Homestays+Tagore+Park+Kolkata',
    distanceToVenueKm: 2.1,
    badgeText: 'Homestay (2.1 km)',
  },
  {
    id: 'map-stay-handmade-em-bypass',
    name: 'Handmade Homes – EM Bypass',
    category: 'hotel',
    latitude: 22.5024,
    longitude: 88.4012,
    address: '1895, Mukundapur, Indunil Bhavan 3rd Floor, Kolkata 700075',
    description:
      'Silver-classified boutique B&B suites with kitchenettes situated right along the EM Bypass corridor.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Mukundapur+Indunil+Bhavan+Kolkata',
    distanceToVenueKm: 4.0,
    badgeText: 'B&B (4.0 km)',
  },
  {
    id: 'map-stay-central-homestay',
    name: 'Central Bed & Breakfast Homestay',
    category: 'hotel',
    latitude: 22.5358,
    longitude: 88.3534,
    address: '7th Floor, Lansdowne Court, 5B Sarat Bose Road, Kolkata 700020',
    description:
      'Penthouse homestay on Sarat Bose Road offering panoramic terrace views and curated library.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Lansdowne+Court+5B+Sarat+Bose+Road+Kolkata',
    distanceToVenueKm: 5.4,
    badgeText: 'Penthouse Stay',
  },
  {
    id: 'map-hotel-kenilworth',
    name: 'The Kenilworth Hotel Kolkata',
    category: 'hotel',
    latitude: 22.5484,
    longitude: 88.3519,
    address: '1 & 2, Little Russell St, Park Street area, Kolkata 700071',
    description:
      'Charming luxury business hotel in Kolkata’s consulate district near Park Street with The Big Ben English Pub.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.kenilworthhotels.com/kolkata/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kenilworth+Hotel+Kolkata',
    distanceToVenueKm: 5.6,
    badgeText: 'Park St 4-Star',
  },
  {
    id: 'map-hotel-hyatt-centric',
    name: 'Hyatt Centric Ballygunge',
    category: 'hotel',
    latitude: 22.5278,
    longitude: 88.3625,
    address: '17, Garcha 1st Lane, Ballygunge, Kolkata 700019',
    description:
      'Boutique upscale hotel in culturally rich Ballygunge with contemporary designer accommodations and rooftop pool.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://www.hyatt.com/hyatt-centric/ccuct-hyatt-centric-ballygunge-kolkata',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hyatt+Centric+Ballygunge+Kolkata',
    distanceToVenueKm: 4.8,
    badgeText: 'Ballygunge Luxury',
  },
  {
    id: 'map-hotel-altair',
    name: 'Altair Boutique Hotel',
    category: 'hotel',
    latitude: 22.5739,
    longitude: 88.4338,
    address: 'EcoCentre, Floors 19-21, Sector V, Salt Lake, Kolkata 700091',
    description:
      'High-altitude designer boutique hotel with open-air terrace infinity pool and Capella Sky Lounge.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    officialWebsite: 'https://altairkolkata.com/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Altair+Boutique+Hotel+Salt+Lake+Kolkata',
    distanceToVenueKm: 6.4,
    badgeText: 'Sector V Sky Hotel',
  },
  {
    id: 'map-stay-balmy',
    name: 'Balmy Homestay (NIDHI Certified)',
    category: 'hotel',
    latitude: 22.5855,
    longitude: 88.4611,
    address: 'CE/1/A/105, Action Area 1C, New Town 700156',
    description:
      'Certified cozy homestay in planned New Town with quick access to Biswa Bangla Gate and airport corridors.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Balmy+Homestay+New+Town+Kolkata',
    distanceToVenueKm: 7.8,
    badgeText: 'New Town Stay',
  },
  {
    id: 'map-stay-ganga-niwas',
    name: 'Ganga Niwas – Riverside B&B (NIDHI Gold)',
    category: 'hotel',
    latitude: 22.5028,
    longitude: 88.2312,
    address: 'Princep 1, Riverside Development, 1 New Batanagar Rd, Kolkata 700140',
    description:
      'Gold-certified penthouse B&B along the Hooghly River with panoramic river sunset balconies and golf course access.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calcutta+Riverside+Batanagar+Kolkata',
    distanceToVenueKm: 16.5,
    badgeText: 'Riverfront B&B Gold',
  },

  // Tourist & Historical Destinations (All 20 Iconic Kolkata Sites)
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial Hall',
    category: 'tourist',
    latitude: 22.5448,
    longitude: 88.3426,
    address: 'Queens Way, Maidan, Kolkata 700071',
    description: 'Magnificent white Makrana marble monument surrounded by 64 acres of landscaped gardens, showcasing an extensive royal gallery.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Victoria+Memorial+Hall+Kolkata',
    distanceToVenueKm: 6.8,
    badgeText: 'Iconic Landmark'
  },
  {
    id: 'howrah-bridge',
    name: 'Howrah Bridge (Rabindra Setu)',
    category: 'historical',
    latitude: 22.5851,
    longitude: 88.3468,
    address: 'Howrah Bridge, Kolkata, West Bengal 700001',
    description: 'World-famous balanced cantilever engineering wonder constructed with 26,500 tons of riveted high-tensile Indian steel.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Howrah+Bridge+Kolkata',
    distanceToVenueKm: 8.5,
    badgeText: 'Engineering Wonder'
  },
  {
    id: 'dakshineswar-temple',
    name: 'Dakshineswar Kali Temple',
    category: 'tourist',
    latitude: 22.6547,
    longitude: 88.3575,
    address: 'Dakshineswar, Kolkata, West Bengal 700076',
    description: 'Sacred 1855 Navaratna temple honoring Maa Bhavatarini, sanctified by the sadhana of Sri Ramakrishna Paramahansa.',
    image: 'https://images.unsplash.com/photo-1622312644211-137684df6d52?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dakshineswar+Kali+Temple+Kolkata',
    distanceToVenueKm: 16.5,
    badgeText: 'Spiritual Center'
  },
  {
    id: 'belur-math',
    name: 'Belur Math (Ramakrishna Mission)',
    category: 'historical',
    latitude: 22.6323,
    longitude: 88.3558,
    address: 'Belur, Howrah, West Bengal 711202',
    description: 'Global headquarters of Ramakrishna Math synthesizing Hindu, Christian, and Islamic architecture in universal harmony.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Belur+Math+Kolkata',
    distanceToVenueKm: 15.0,
    badgeText: 'Spiritual Harmony'
  },
  {
    id: 'prinsep-ghat',
    name: 'Prinsep Ghat & Hooghly River Cruise',
    category: 'tourist',
    latitude: 22.5562,
    longitude: 88.3323,
    address: 'Strand Rd, Vidyasagar Setu, Kolkata 700021',
    description: 'Greek Ionian colonnade overlooking the Hooghly River, offering traditional hand-rowed wooden country boat river cruises.',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Prinsep+Ghat+Kolkata',
    distanceToVenueKm: 8.0,
    badgeText: 'Riverside Promenade'
  },
  {
    id: 'jorasanko-thakur-bari',
    name: 'Jorasanko Thakur Bari',
    category: 'historical',
    latitude: 22.5855,
    longitude: 88.3592,
    address: '267, Rabindra Sarani, Singhi Bagan, Jorasanko, Kolkata 700007',
    description: 'Ancestral residence of Rabindranath Tagore, preserving the genesis of the Bengal Renaissance, manuscripts, and artwork.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jorasanko+Thakur+Bari+Kolkata',
    distanceToVenueKm: 7.5,
    badgeText: 'Tagore Ancestral Home'
  },
  {
    id: 'kumartuli',
    name: 'Kumartuli Artisan Colony',
    category: 'tourist',
    latitude: 22.6019,
    longitude: 88.3664,
    address: 'Kumartuli, Hatkhola, Kolkata, West Bengal 700005',
    description: 'Centuries-old potters’ settlement where master sculptors mold sacred Ganga silt into world-famous Durga idols.',
    image: 'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kumartuli+Kolkata',
    distanceToVenueKm: 9.2,
    badgeText: 'UNESCO Craft Colony'
  },
  {
    id: 'college-street',
    name: 'College Street Boi Para & Coffee House',
    category: 'historical',
    latitude: 22.5744,
    longitude: 88.3639,
    address: 'College Street, Bowbazar, Kolkata 700073',
    description: 'The world-famous 1.5 km secondhand book market and historic intellectual Indian Coffee House adda.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=College+Street+Coffee+House+Kolkata',
    distanceToVenueKm: 5.5,
    badgeText: 'Intellectual Hub'
  },
  {
    id: 'park-street',
    name: 'Park Street Culinary Heritage',
    category: 'tourist',
    latitude: 22.5516,
    longitude: 88.3524,
    address: 'Park Street (Mother Teresa Sarani), Kolkata 700016',
    description: 'Kolkata’s legendary culinary boulevard celebrated for Flurys English tearoom, Peter Cat Chelo Kebab, and Mocambo.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Park+Street+Kolkata',
    distanceToVenueKm: 5.0,
    badgeText: 'Culinary High Street'
  },
  {
    id: 'new-market-gariahat',
    name: 'New Market & Gariahat Shopping Hubs',
    category: 'tourist',
    latitude: 22.5601,
    longitude: 88.3528,
    address: 'Lindsay St, New Market Area, Kolkata 700087',
    description: 'Victorian Sir Stuart Hogg Market featuring 2,000+ stalls and Nahoum Jewish bakery, alongside Gariahat silk saree hub.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=New+Market+Kolkata',
    distanceToVenueKm: 5.8,
    badgeText: 'Historic Bazaars'
  },
  {
    id: 'st-pauls-cathedral',
    name: 'St. Paul’s Cathedral',
    category: 'historical',
    latitude: 22.5442,
    longitude: 88.3468,
    address: '1A, Cathedral Rd, Maidan, Kolkata, West Bengal 700071',
    description: 'First Anglican cathedral built in Asia (1847) featuring sublime Indo-Gothic architecture and Edward Burne-Jones stained glass.',
    image: 'https://images.unsplash.com/photo-1548625361-195fe5795df5?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St+Pauls+Cathedral+Kolkata',
    distanceToVenueKm: 6.5,
    badgeText: 'Indo-Gothic Cathedral'
  },
  {
    id: 'marble-palace',
    name: 'Marble Palace & North Kolkata Mansions',
    category: 'historical',
    latitude: 22.5828,
    longitude: 88.3589,
    address: '46, Muktaram Babu St, Chorbagan, Kolkata, West Bengal 700007',
    description: 'Aristocratic 1835 mansion built from 90 varieties of imported marble, housing original Rubens, Reynolds, and Murillo artwork.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marble+Palace+Kolkata',
    distanceToVenueKm: 7.2,
    badgeText: 'Neoclassical Palace'
  },
  {
    id: 'indian-museum',
    name: 'Indian Museum (Jadughar)',
    category: 'historical',
    latitude: 22.5579,
    longitude: 88.3511,
    address: '27, Jawaharlal Nehru Rd, Park Street area, Kolkata 700016',
    description: 'Asia’s oldest and largest multipurpose museum (1814) featuring 35 galleries, an Egyptian mummy, and the Ashoka Lion Capital.',
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Indian+Museum+Kolkata',
    distanceToVenueKm: 5.9,
    badgeText: 'Asia’s Oldest Museum'
  },
  {
    id: 'eden-gardens',
    name: 'Eden Gardens & Sporting Heritage',
    category: 'tourist',
    latitude: 22.5646,
    longitude: 88.3433,
    address: 'BBD Bagh, Kolkata, West Bengal 700021',
    description: 'The iconic "Mecca of Indian Cricket" founded in 1864, boasting 66,000 capacity and a historic 1854 Burmese Pagoda.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eden+Gardens+Kolkata',
    distanceToVenueKm: 7.8,
    badgeText: 'Mecca of Cricket'
  },
  {
    id: 'science-city',
    name: 'Science City Kolkata',
    category: 'tourist',
    latitude: 22.5401,
    longitude: 88.3968,
    address: 'J.B.S. Haldane Avenue, Tangra, Kolkata 700046',
    description: 'Largest interactive science museum in the Indian subcontinent located directly opposite the PBD 2027 convention venue.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Science+City+Kolkata',
    distanceToVenueKm: 0.8,
    badgeText: 'Adjacent to Venue'
  },
  {
    id: 'alipore-zoo-botanic-garden',
    name: 'Alipore Zoo & Indian Botanic Garden',
    category: 'tourist',
    latitude: 22.5367,
    longitude: 88.3314,
    address: 'Belvedere Rd, Alipore, Kolkata, West Bengal 700027',
    description: 'India’s oldest formal 1876 zoo and the historic 1787 Botanic Garden sheltering the 250-year-old Great Banyan Tree.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alipore+Zoological+Garden+Kolkata',
    distanceToVenueKm: 7.4,
    badgeText: 'Natural Heritage'
  },
  {
    id: 'netaji-bhawan',
    name: 'Netaji Bhawan',
    category: 'historical',
    latitude: 22.5358,
    longitude: 88.3496,
    address: '38/2, Lala Lajpat Rai Sarani, Elgin, Kolkata, West Bengal 700020',
    description: 'Ancestral home of Netaji Subhas Chandra Bose preserving his study, uniform, and the 1937 Wanderer car of the Great Escape.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Netaji+Bhawan+Kolkata',
    distanceToVenueKm: 5.6,
    badgeText: 'Freedom Memorial'
  },
  {
    id: 'eco-park',
    name: 'Eco Park & Biswa Bangla Gate (New Town)',
    category: 'tourist',
    latitude: 22.6022,
    longitude: 88.4658,
    address: 'Major Arterial Road, Action Area II, New Town, Kolkata 700156',
    description: '480-acre modern ecological wonder with Seven Wonders replicas and the futuristic 55m Biswa Bangla hanging ring restaurant.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eco+Park+New+Town+Kolkata',
    distanceToVenueKm: 11.5,
    badgeText: 'Smart Urban Oasis'
  },
  {
    id: 'mp-birla-planetarium',
    name: 'M. P. Birla Planetarium',
    category: 'tourist',
    latitude: 22.5458,
    longitude: 88.3444,
    address: 'Cathedral Rd, Maidan, Kolkata, West Bengal 700071',
    description: 'Asia’s largest planetarium designed with Buddhist Sanchi Stupa dome architecture, equipped with Carl Zeiss cosmic projection.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Birla+Planetarium+Kolkata',
    distanceToVenueKm: 6.6,
    badgeText: 'Asia’s Largest Planetarium'
  },
  {
    id: 'kalighat-temple',
    name: 'Kalighat Kali Temple & Mother House',
    category: 'historical',
    latitude: 22.5208,
    longitude: 88.3426,
    address: 'Anami Sangha, Kalighat, Kolkata, West Bengal 700026',
    description: 'Sacred 51 Shaktipeeth temple and Missionaries of Charity Mother House preserving Saint Mother Teresa’s tomb.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kalighat+Kali+Temple+Kolkata',
    distanceToVenueKm: 6.2,
    badgeText: 'Sacred Shaktipeeth'
  },
]
