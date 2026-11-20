export interface Attraction {
  id: string
  name: string
  category: 
    | 'Heritage & Architecture' 
    | 'Spiritual & Sacred' 
    | 'Art & Literature' 
    | 'Riverside & Cruises' 
    | 'Culinary & Bazaars' 
    | 'Science & Innovation'
    | 'Sports & Nature'
  tagline: string
  description: string
  historicalSignificance: string
  delegateTips: string
  highlights: string[]
  image: string
  images: string[]
  distanceKm: number
  distanceFromVenue: string
  nearestMetro: string
  visitingHours: string
  bestTime?: string
  entryFee: string
  latitude: number
  longitude: number
  googleMapsUrl: string
  featured: boolean
}

export const ATTRACTIONS_DATA: Attraction[] = [
  // 1. Victoria Memorial Hall
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial Hall',
    category: 'Heritage & Architecture',
    tagline: 'Colonial Indo-Saracenic Marble Masterpiece in 64 Acres of Gardens',
    description:
      'A magnificent monument crafted entirely from pristine white Makrana marble between 1906 and 1921. Conceptualized by Lord Curzon and designed by William Emerson, it stands today as India’s premier colonial museum, holding priceless royal portraiture, Queen Victoria’s personal artifacts, and rare oil paintings of British India.',
    historicalSignificance:
      'Represents the zenith of the British Raj in Calcutta, blending British architectural grandeur with Mughal domes, Venetian arches, and classical Greek porticos. Crowned by a 16-foot bronze Angel of Victory on a ball bearing that rotates with the breeze.',
    delegateTips:
      'Visit in late afternoon to catch the golden sunlight reflecting off the white marble and stay for the evening Son-et-Lumière (Sound & Light) show narrating the story of Calcutta.',
    highlights: ['Makrana Marble Facade', 'Rotating Angel of Victory', 'Royal Portrait Gallery', '64-Acre Landscaped Gardens', 'Evening Sound & Light Show'],
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 6.8,
    distanceFromVenue: '6.8 km (18 min via Maa Flyover)',
    nearestMetro: 'Rabindra Sadan / Maidan Metro (Blue Line)',
    visitingHours: '10:00 AM – 5:00 PM (Museum), 5:30 AM – 7:00 PM (Gardens) • Closed Mondays',
    entryFee: '₹50 (Indian / PIO) • ₹500 (Foreign Nationals) • ₹20 (Gardens only)',
    latitude: 22.5448,
    longitude: 88.3426,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Victoria+Memorial+Hall+Kolkata',
    featured: true
  },

  // 2. Howrah Bridge (Rabindra Setu)
  {
    id: 'howrah-bridge',
    name: 'Howrah Bridge (Rabindra Setu)',
    category: 'Heritage & Architecture',
    tagline: 'World’s Busiest Balanced Cantilever Engineering Wonder',
    description:
      'Commissioned in 1943 during the height of World War II, this iconic cantilever bridge connects Kolkata to Howrah across the sacred Hooghly River. Fabricated entirely with 26,500 tons of high-tensile steel by Tata Steel without a single nut or bolt—relying exclusively on riveting.',
    historicalSignificance:
      'Renamed Rabindra Setu in 1965 in honor of Rabindranath Tagore. It is a symbol of Indian industrial prowess and the gateway through which millions travel each day, serving as the cultural heart of Kolkata’s skyline.',
    delegateTips:
      'Take a sunset ferry from Fairlie Place or Prinsep Ghat to Howrah to view the full cantilever silhouette against the dusk sky, followed by its spectacular LED illumination at night.',
    highlights: ['Zero Nuts or Bolts (Fully Riveted)', '26,500 Tons of Indian Steel', '705-Meter River Span', 'Hooghly Sunset Vistas', 'Architectural Night Illumination'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600100397608-f010f443b77a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598890777032-bde13fba5be3?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 8.5,
    distanceFromVenue: '8.5 km (22 min via Central Corridor)',
    nearestMetro: 'Howrah Railway Station Metro (Green Line - Under River)',
    visitingHours: 'Open 24 Hours • Best visited during early sunrise or illuminated evening',
    entryFee: 'Free Public Access (Pedestrian Walkway & Vehicles)',
    latitude: 22.5851,
    longitude: 88.3468,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Howrah+Bridge+Kolkata',
    featured: true
  },

  // 3. Dakshineswar Kali Temple
  {
    id: 'dakshineswar-temple',
    name: 'Dakshineswar Kali Temple',
    category: 'Spiritual & Sacred',
    tagline: 'Sanctified 19th-Century Navaratna Temple of Bhavatarini Kali',
    description:
      'Constructed in 1855 by the visionary philanthropist Rani Rashmoni on the eastern bank of the Hooghly River. The complex centers on a majestic nine-spired Navaratna temple honoring Maa Bhavatarini (an aspect of Kali), bordered by 12 identical twin-temple Shiva shrines and a Radha-Krishna sanctum.',
    historicalSignificance:
      'World-renowned as the spiritual hermitage where Sri Ramakrishna Paramahansa practiced intense spiritual sadhana across various world religions, establishing the gospel of universal religious harmony.',
    delegateTips:
      'Early morning between 6:30 AM and 8:30 AM offers peaceful darshan before crowds gather. Be sure to visit Ramakrishna’s historic room and the Panchavati grove.',
    highlights: ['Nine-Spired Navaratna Architecture', '12 Shiva Ghat Temples', 'Sri Ramakrishna Sanctum & Cot', 'Panchavati Meditation Grove', 'Hooghly Riverfront Steps'],
    image: 'https://images.unsplash.com/photo-1622312644211-137684df6d52?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1622312644211-137684df6d52?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 16.5,
    distanceFromVenue: '16.5 km (35 min via Belgharia Expressway)',
    nearestMetro: 'Dakshineswar Metro Station (Blue Line Terminal)',
    visitingHours: '6:00 AM – 12:30 PM & 3:30 PM – 8:30 PM (Daily)',
    entryFee: 'Free Entry (Special Puja offerings available)',
    latitude: 22.6547,
    longitude: 88.3575,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dakshineswar+Kali+Temple+Kolkata',
    featured: true
  },

  // 4. Belur Math (Ramakrishna Mission)
  {
    id: 'belur-math',
    name: 'Belur Math (Ramakrishna Mission)',
    category: 'Spiritual & Sacred',
    tagline: 'Global Headquarters of Ramakrishna Math Synthesizing All World Faiths',
    description:
      'Sprawled over 40 serene acres along the western bank of the Hooghly River, Belur Math was founded in 1897 by Swami Vivekananda. The central temple honoring Sri Ramakrishna uniquely combines Hindu temple spires, Buddhist stupas, Christian cathedral cross-plans, and Islamic domes and arches.',
    historicalSignificance:
      'The administrative epicenter of the worldwide Ramakrishna Math and Mission, championing "Atmano Mokshartham Jagaddhitaya Cha" (For one’s own salvation and the welfare of the world). Also houses the Swami Vivekananda Samadhi and Holy Mother Sarada Devi Temple.',
    delegateTips:
      'Do not miss the evening congregational prayer (Aarti) at 5:30 PM when the twilight bells ring across the river and devotional hymns create a meditative calm.',
    highlights: ['Interfaith Architectural Synthesis', 'Swami Vivekananda Samadhi Shrine', 'Holy Mother Sarada Devi Temple', 'Evening Aarti Congregational Chants', 'Extensive Riverfront Promenades'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 15.0,
    distanceFromVenue: '15.0 km (30 min via GT Road)',
    nearestMetro: 'Dakshineswar Metro + 10-min Scenic Hooghly Ferry to Belur Ghat',
    visitingHours: '6:30 AM – 11:30 AM & 4:00 PM – 8:30 PM (Aarti at 5:30 PM)',
    entryFee: 'Free Entry (Silence strictly maintained inside temple)',
    latitude: 22.6323,
    longitude: 88.3558,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Belur+Math+Kolkata',
    featured: true
  },

  // 5. Prinsep Ghat & River Cruise
  {
    id: 'prinsep-ghat',
    name: 'Prinsep Ghat & Hooghly River Cruise',
    category: 'Riverside & Cruises',
    tagline: 'Gothic-Ionian Riverfront Monument & Serene Wooden Boat Experiences',
    description:
      'Erected in 1843 in honor of Anglo-Indian scholar and antiquarian James Prinsep, this majestic Palladian portico features Greek Ionian columns overlooking the Hooghly. Directly framed by the soaring cable towers of Vidyasagar Setu (Second Hooghly Bridge), it is Kolkata’s premier riverfront promenade.',
    historicalSignificance:
      'Served as the historic landing jetty for visiting British royals and viceroys arriving by boat before the advent of modern railways. Today, it preserves the romantic riverside essence of old Calcutta.',
    delegateTips:
      'Charter a traditional hand-rowed wooden country boat (dinghy) during golden hour to drift under the cable cables of Vidyasagar Setu as the city lights illuminate the Hooghly waters.',
    highlights: ['Greek Ionian Colonnaded Monument', 'Hand-Rowed Wooden Boat Cruises', 'Framed Vidyasagar Setu Panorama', 'Riverside Landscaped Walkway', 'Heritage Street Food & Tea Kiosks'],
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600100397608-f010f443b77a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 8.0,
    distanceFromVenue: '8.0 km (18 min via Red Road / Maa Flyover)',
    nearestMetro: 'Prinsep Ghat Circular Railway / Esplanade Metro',
    visitingHours: 'Open 24 Hours • Boating operates from 2:00 PM to 8:00 PM',
    entryFee: 'Free Public Monument • Country boat ride ₹300 – ₹500 / 30 mins',
    latitude: 22.5562,
    longitude: 88.3323,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Prinsep+Ghat+Kolkata',
    featured: true
  },

  // 6. Jorasanko Thakur Bari
  {
    id: 'jorasanko-thakur-bari',
    name: 'Jorasanko Thakur Bari',
    category: 'Art & Literature',
    tagline: 'Cradle of Bengal Renaissance & Ancestral Home of Rabindranath Tagore',
    description:
      'Built in the 18th century by Prince Dwarkanath Tagore, this sprawling red-brick North Kolkata mansion is the sacred birthplace and residence of Asia’s first Nobel laureate Rabindranath Tagore. Today, it houses the Rabindra Bharati University Museum, retaining intact the poet’s personal living quarters, painting studio, and death chamber.',
    historicalSignificance:
      'The vibrant epicentre of the 19th-century Bengal Renaissance, where literature, theater, music, Brahmo spiritual reforms, and anti-colonial intellectual movements were nurtured across generations.',
    delegateTips:
      'Spend time in the Indo-Japanese and Chinese cultural galleries that document Tagore’s pioneering pan-Asian travels, philosophy, and friendship with international scholars.',
    highlights: ['Tagore Birth & Memorial Chambers', 'Original Manuscripts & Artwork', 'Indo-Japanese Cultural Gallery', 'Heritage Red-Brick Courtyard', 'Rabindra Bharati Archives'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 7.5,
    distanceFromVenue: '7.5 km (20 min via CR Avenue Corridor)',
    nearestMetro: 'Girish Park Metro Station (Blue Line)',
    visitingHours: '10:30 AM – 5:00 PM (Closed Mondays and Official Holidays)',
    entryFee: '₹20 (Indian Nationals) • ₹150 (Foreign Visitors) • ₹10 (Students)',
    latitude: 22.5855,
    longitude: 88.3592,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jorasanko+Thakur+Bari+Kolkata',
    featured: true
  },

  // 7. Kumartuli Artisan Colony
  {
    id: 'kumartuli',
    name: 'Kumartuli Artisan Colony',
    category: 'Art & Literature',
    tagline: 'Centuries-Old Potter Hub Sculpting Clay into Divine Deities',
    description:
      'Nestled in the historic lanes of North Kolkata beside the Hooghly River, Kumartuli is a 300-year-old traditional clay artisans’ settlement. Here, generational master sculptors transform sacred Ganga silt, bamboo armatures, and straw into lifelike idols of Goddess Durga and other deities shipped worldwide.',
    historicalSignificance:
      'The creative beating heart behind Kolkata’s Durga Puja festival, inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in 2021.',
    delegateTips:
      'Walk respectfully through Banamali Sarkar Street with a camera to witness sculptors intricately painting eyes (Chokkhudan) on clay idols. Best experienced on foot.',
    highlights: ['UNESCO Heritage Craftsmanship', 'Sacred Ganga Clay Sculpting', 'Generational Artisan Studios', 'Banamali Sarkar Street Walk', 'Worldwide Idol Export Center'],
    image: 'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 9.2,
    distanceFromVenue: '9.2 km (24 min via Bagbazar Corridor)',
    nearestMetro: 'Sovabazar Sutanuti Metro Station (Blue Line)',
    visitingHours: 'Open daylight hours (10:00 AM – 7:00 PM)',
    entryFee: 'Free Public Access (Photography permits for specific studios)',
    latitude: 22.6019,
    longitude: 88.3664,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kumartuli+Kolkata',
    featured: true
  },

  // 8. College Street (Boi Para) & Indian Coffee House
  {
    id: 'college-street',
    name: 'College Street (Boi Para) & Indian Coffee House',
    category: 'Art & Literature',
    tagline: 'World’s Largest Secondhand Book Market & Historic Intellectual Adda',
    description:
      'Stretching 1.5 km between Bowbazar and Mahatma Gandhi Road, College Street (fondly known as "Boi Para") is flanked by Calcutta University and Presidency University. Flanked by thousands of makeshift wooden stalls housing rare manuscripts, academic treatises, and Bengali literature, it is anchored by the fabled Indian Coffee House.',
    historicalSignificance:
      'The nerve center of Bengal’s political, literary, and philosophical discourse for over a century, frequented by Rabindranath Tagore, Netaji Subhas Chandra Bose, Satyajit Ray, and Amartya Sen.',
    delegateTips:
      'Order an infused cold coffee or hot espresso with mutton cutlets on the 1st floor of the Indian Coffee House under ceiling fans while taking in the intellectual ambiance.',
    highlights: ['1.5 km Continuous Book Bazaars', 'Historic Indian Coffee House Adda', 'Presidency University Heritage', 'Rare First Editions & Manuscripts', 'Centuries-Old Publishing Houses'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 5.5,
    distanceFromVenue: '5.5 km (15 min via CIT Road)',
    nearestMetro: 'Central / Mahatma Gandhi Road Metro Station (Blue Line)',
    visitingHours: 'Bookstalls: 10:30 AM – 8:00 PM • Coffee House: 9:00 AM – 9:00 PM',
    entryFee: 'Free Walk • Dining / Books as purchased',
    latitude: 22.5744,
    longitude: 88.3639,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=College+Street+Coffee+House+Kolkata',
    featured: true
  },

  // 9. Park Street & Kolkata’s Culinary Heritage
  {
    id: 'park-street',
    name: 'Park Street & Kolkata’s Culinary Heritage',
    category: 'Culinary & Bazaars',
    tagline: 'Colonial High Street Celebrated for Jazz, Bakeries, & Iconic Fine Dining',
    description:
      'Officially Mother Teresa Sarani, Park Street is Kolkata’s legendary culinary boulevard that has defined fine dining, jazz, and nightlife since the colonial era. Home to Flurys (the European tearoom established in 1927), Peter Cat (famed for its Iranian Chelo Kebab), Mocambo (Continental sizzling delicacies), and Tung Fong.',
    historicalSignificance:
      'The cultural epicenter of Anglo-Indian cosmopolitan Calcutta, celebrated in literature and cinema for its European tearooms, live jazz clubs, and illuminated Christmas carnivals.',
    delegateTips:
      'Plan an afternoon tea with rum balls and chicken patties at Flurys, followed by dinner at Peter Cat. Arrive early as tables have beloved loyal queues.',
    highlights: ['Flurys 1927 English Tearoom', 'Peter Cat Iconic Chelo Kebab', 'Mocambo Continental Sizzlers', 'Colonial Boulevard Architecture', 'Nightlife & Heritage Cafes'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 5.0,
    distanceFromVenue: '5.0 km (12 min via Park Circus Connector)',
    nearestMetro: 'Park Street Metro Station (Blue Line)',
    visitingHours: 'Restaurants & Tearooms open 7:30 AM – 11:30 PM',
    entryFee: 'Free Boulevard • Dining per menu',
    latitude: 22.5516,
    longitude: 88.3524,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Park+Street+Kolkata',
    featured: true
  },

  // 10. New Market & Gariahat Shopping Hubs
  {
    id: 'new-market-gariahat',
    name: 'New Market & Gariahat Shopping Hubs',
    category: 'Culinary & Bazaars',
    tagline: 'Colonial Sir Stuart Hogg Market & Traditional Bengal Handloom Hub',
    description:
      'New Market (opened in 1874 as Sir Stuart Hogg Market) is a Victorian red-brick Gothic shopping landmark with over 2,000 stalls selling everything from silver jewelry and Kashmiri shawls to traditional Jewish bakery delights at Nahoum & Sons. In South Kolkata, Gariahat forms Bengal’s supreme open-air corridor for authentic Dhakai Jamdani, Baluchari, and Tussar silk sarees.',
    historicalSignificance:
      'Built exclusively for Calcutta’s British residents, New Market evolved into an inclusive multicultural bazaar. Nahoum’s bakery remains India’s oldest operating Jewish bakery since 1902.',
    delegateTips:
      'Pick up plum cakes and walnut brownies from Nahoum & Sons in New Market, and visit Gariahat for authentic West Bengal Government Manjusha & Tantuja handloom textiles.',
    highlights: ['Victorian Red-Brick Clock Tower', 'Nahoum & Sons 1902 Jewish Bakery', 'Handloom Saree Emporiums', 'Authentic Silver & Terracotta Crafts', 'Bustling Street-Food Stalls'],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 5.8,
    distanceFromVenue: '5.8 km (15 min via Park Circus / Shakespeare Sarani)',
    nearestMetro: 'Esplanade Metro (for New Market) / Kalighat Metro (for Gariahat)',
    visitingHours: '10:00 AM – 8:30 PM (Closed Sundays in portions of New Market)',
    entryFee: 'Free Entry (Shopping per purchases)',
    latitude: 22.5601,
    longitude: 88.3528,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=New+Market+Kolkata',
    featured: true
  },

  // 11. St. Paul’s Cathedral
  {
    id: 'st-pauls-cathedral',
    name: 'St. Paul’s Cathedral',
    category: 'Heritage & Architecture',
    tagline: 'First Anglican Cathedral in Asia with Sublime Indo-Gothic Architecture',
    description:
      'Completed in 1847 under Bishop Daniel Wilson, St. Paul’s Cathedral is renowned as the first Anglican cathedral built in Asia and the first bishopric church established outside the United Kingdom. Designed by Major William Nairn Forbes, it features Gothic revival architecture with soaring vaulted ceilings, delicate tracery, and stained glass windows designed by Sir Edward Burne-Jones.',
    historicalSignificance:
      'The cathedral survived major earthquakes in 1897 and 1934, leading to the reconstruction of its iconic bell tower modeled on the Bell Harry Tower of Canterbury Cathedral. It stands across lush gardens adjacent to the Victoria Memorial.',
    delegateTips:
      'Step inside for peaceful reflection and view the intricate West Window stained glass and delicate Florentine frescoes commemorating historic figures of the Raj.',
    highlights: ['First Anglican Cathedral in Asia', 'Canterbury-Inspired Bell Tower', 'Burne-Jones Stained Glass Windows', 'Indo-Gothic Vaulted Ceilings', 'Lush Historic Garden Precinct'],
    image: 'https://images.unsplash.com/photo-1548625361-195fe5795df5?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548625361-195fe5795df5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 6.5,
    distanceFromVenue: '6.5 km (16 min via Maa Flyover / AJC Bose Road)',
    nearestMetro: 'Rabindra Sadan / Maidan Metro Station (Blue Line)',
    visitingHours: '9:00 AM – 12:00 PM & 3:00 PM – 6:00 PM (Monday to Saturday), Sunday services',
    entryFee: 'Free Entry (Respectful quiet dress code requested)',
    latitude: 22.5442,
    longitude: 88.3468,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St+Pauls+Cathedral+Kolkata',
    featured: true
  },

  // 12. Marble Palace & North Kolkata Heritage Mansions
  {
    id: 'marble-palace',
    name: 'Marble Palace & North Kolkata Heritage Mansions',
    category: 'Heritage & Architecture',
    tagline: 'Neoclassical 1835 Aristocratic Mansion Housing Rubens & Reynolds Art',
    description:
      'Built in 1835 by wealthy merchant Raja Rajendra Mullick on Muktaram Babu Street, this grand palace is crafted from 90 varieties of rare marble imported from Italy and Greece. The private estate encompasses a neoclassical mansion with Corinthian pillars, Victorian courtyards, Chinese ceramics, clock collections, and the Mullick family’s private aviary.',
    historicalSignificance:
      'One of the best-preserved family-inhabited aristocratic mansions in India, containing genuine master oil paintings by Sir Joshua Reynolds, Peter Paul Rubens, and Bartolomé Esteban Murillo.',
    delegateTips:
      'Obtain a visiting pass from the West Bengal Tourism Information Centre on BBD Bagh at least 24 hours in advance, or present PBD delegate credentials at the gate.',
    highlights: ['90 Varieties of Imported Marble', 'Original Rubens & Reynolds Paintings', 'Corinthian Pillar Verandas', 'Victorian Private Aviary', '19th-Century Belgian Glass Clocks'],
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 7.2,
    distanceFromVenue: '7.2 km (18 min via CR Avenue Corridor)',
    nearestMetro: 'Mahatma Gandhi Road Metro Station (Blue Line)',
    visitingHours: '10:00 AM – 4:00 PM (Closed Mondays & Thursdays)',
    entryFee: 'Free Entry with Tourism Permit / PBD Pass',
    latitude: 22.5828,
    longitude: 88.3589,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Marble+Palace+Kolkata',
    featured: true
  },

  // 13. Indian Museum & Kolkata’s Cultural Institutions
  {
    id: 'indian-museum',
    name: 'Indian Museum (Jadughar)',
    category: 'Heritage & Architecture',
    tagline: 'Asia’s Oldest & Largest Multipurpose Museum Founded in 1814',
    description:
      'Known locally as "Jadughar" (House of Wonders), the Indian Museum was founded in 1814 under the stewardship of Danish botanist Dr. Nathaniel Wallich at the Asiatic Society. Housed in a grand neoclassical quadrangle designed by Walter Granville, it is the ninth oldest museum in the world and the largest in the Asia-Pacific region, spanning 35 galleries.',
    historicalSignificance:
      'Houses over 100,000 priceless artifacts including the original Lion Capital of the Ashoka Pillar, a 4,000-year-old Egyptian mummy, 2nd-century BC Bharhut Buddhist railings, Gandhara Buddha sculptures, and fossil skeletons of prehistoric dinosaurs.',
    delegateTips:
      'Allocate at least 2 hours to explore the Bharhut Buddhist Gallery, the Egyptian Mummy chamber, and the rare coin and numismatics collection.',
    highlights: ['4,000-Year-Old Egyptian Mummy', 'Ashoka Pillar Lion Capital', '2nd-Century BC Bharhut Stupa Rails', 'Gandhara Sculptural Heritage', 'Meteorite & Prehistoric Fossil Room'],
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 5.9,
    distanceFromVenue: '5.9 km (14 min via Park Street / JL Nehru Road)',
    nearestMetro: 'Park Street Metro Station (Blue Line)',
    visitingHours: '10:00 AM – 6:00 PM (Tuesday to Sunday) • Closed Mondays',
    entryFee: '₹50 (Indian Nationals) • ₹500 (Foreign Visitors) • Free for Children',
    latitude: 22.5579,
    longitude: 88.3511,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Indian+Museum+Kolkata',
    featured: true
  },

  // 14. Eden Gardens & Kolkata’s Sporting Heritage
  {
    id: 'eden-gardens',
    name: 'Eden Gardens & Kolkata’s Sporting Heritage',
    category: 'Sports & Nature',
    tagline: 'The Legendary "Mecca of Indian Cricket" Established in 1864',
    description:
      'Established in 1864 beside the Maidan and BBD Bagh, Eden Gardens is India’s oldest and most iconic international cricket stadium. With a seating capacity of over 66,000, it is universally revered as the "Mecca of Indian Cricket" and the home ground of the Cricket Association of Bengal and the Kolkata Knight Riders.',
    historicalSignificance:
      'Host to legendary moments in cricketing lore: VVS Laxman and Rahul Dravid’s historic follow-on victory against Australia in 2001, Rohit Sharma’s world-record 264 ODI runs, and Carlos Brathwaite’s 2016 World T20 winning sixes.',
    delegateTips:
      'Stroll through the adjoining landscaped Eden Gardens public park featuring a 150-year-old Burmese pagoda brought from Prome in 1854 by Lord Dalhousie.',
    highlights: ['Mecca of Indian Cricket Since 1864', 'B.C. Roy Club House Archives', '66,000-Capacity Roaring Colosseum', 'Historic 1854 Burmese Pagoda', 'Maidan Green Sporting Corridor'],
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600100397608-f010f443b77a?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 7.8,
    distanceFromVenue: '7.8 km (18 min via Red Road Corridor)',
    nearestMetro: 'Esplanade Metro Station (Blue Line / Green Line interchange)',
    visitingHours: 'Outer Gardens open 6:00 AM – 6:00 PM • Stadium entry subject to matches & CAB clearance',
    entryFee: 'Garden entry ₹20 • Stadium museum tours by CAB booking',
    latitude: 22.5646,
    longitude: 88.3433,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eden+Gardens+Kolkata',
    featured: true
  },

  // 15. Science City Kolkata
  {
    id: 'science-city',
    name: 'Science City Kolkata',
    category: 'Science & Innovation',
    tagline: 'Largest Science Centre in the Indian Subcontinent Directly Adjacent to Venue',
    description:
      'Situated directly opposite the PBD 2027 venue (Biswa Bangla Mela Prangan) on the EM Bypass, Science City was inaugurated in 1997 by the National Council of Science Museums. It is the largest interactive science complex in the subcontinent, featuring the iconic Space Odyssey, Dynamotion Hall, Evolution Theme Park, Earth Exploration Hall, and a 3D digital theatre.',
    historicalSignificance:
      'A pioneering model of science communication across the Global South, inspiring millions of students and international delegates in astrophysics, robotics, biotechnology, and space research.',
    delegateTips:
      'Only an 8-minute walk from Biswa Bangla Mela Prangan. Take the aerial ropeway (cable car) across the campus for a birds-eye panoramic view of the convention venue and EM Bypass skyline.',
    highlights: ['Directly Adjacent to Convention Venue', 'Space Odyssey with IMAX Astrovision', 'Interactive Dynamotion Hall', 'Life-Sized Robotic Dinosaur Park', 'Aerial Cable Car (Ropeway) Ride'],
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 0.8,
    distanceFromVenue: '0.8 km (2 min walk / direct opposite venue)',
    nearestMetro: 'Science City Bus Corridor / Future Orange Line Metro',
    visitingHours: '9:00 AM – 7:00 PM (Open all 365 days including holidays)',
    entryFee: '₹65 (General Entry) • Space Theatre ₹100 • Cable Car ₹50',
    latitude: 22.5401,
    longitude: 88.3968,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Science+City+Kolkata',
    featured: true
  },

  // 16. Alipore Zoological Garden & Indian Botanic Garden
  {
    id: 'alipore-zoo-botanic-garden',
    name: 'Alipore Zoological Garden & Indian Botanic Garden',
    category: 'Sports & Nature',
    tagline: 'India’s Oldest Formal 1876 Zoo & 250-Year-Old Historic Great Banyan Tree',
    description:
      'This dual natural heritage showcase covers the Alipore Zoological Gardens (opened in 1876 by the Prince of Wales, home to Royal Bengal tigers, one-horned rhinos, and migratory bird lakes) and the nearby Acharya Jagadish Chandra Bose Indian Botanic Garden in Shibpur (established in 1787 by Colonel Robert Kyd). The Botanic Garden houses the legendary 250-year-old "Great Banyan Tree" covering over 3.5 acres.',
    historicalSignificance:
      'The Botanic Garden is where tea seeds from China were first cultivated and acclimatized, pioneering India’s worldwide tea industry. The Great Banyan is noted in the Guinness Book of Records as having the largest canopy circumference in the world.',
    delegateTips:
      'Walk the perimeter boardwalk under the Great Banyan Tree’s 4,000+ aerial prop roots, and visit Alipore Zoo’s newly restored heritage reptile and avian pavilions.',
    highlights: ['250-Year-Old Giant Great Banyan Tree', 'Guinness World Record Tree Canopy', 'India’s Oldest 1876 Alipore Zoo', 'Royal Bengal Tigers & One-Horned Rhinos', 'Pioneering 1787 Tea Cultivation Site'],
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 7.4,
    distanceFromVenue: '7.4 km (18 min via D.L. Khan Road / Maa Flyover)',
    nearestMetro: 'Netaji Bhavan Metro (Blue Line) for Zoo / Howrah Station for Botanic Garden',
    visitingHours: 'Alipore Zoo: 9:00 AM – 4:30 PM (Closed Thursdays) • Botanic Garden: 8:00 AM – 5:00 PM',
    entryFee: 'Alipore Zoo: ₹30 • Botanic Garden: ₹100 (Indian) / ₹500 (Foreigners)',
    latitude: 22.5367,
    longitude: 88.3314,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alipore+Zoological+Garden+Kolkata',
    featured: true
  },

  // 17. Netaji Bhawan
  {
    id: 'netaji-bhawan',
    name: 'Netaji Bhawan',
    category: 'Heritage & Architecture',
    tagline: 'Ancestral Residence of Netaji Subhas Chandra Bose & Great Escape Memorial',
    description:
      'Located at 38/2 Lala Lajpat Rai Sarani, this 1909 traditional Bengali mansion was built by Janakinath Bose, father of legendary freedom fighter and leader of the Indian National Army (INA) Netaji Subhas Chandra Bose. Preserved by the Netaji Research Bureau under Dr. Sisir Kumar Bose, it houses Netaji’s original study, uniform, letters to Mahatma Gandhi, and prison belongings.',
    historicalSignificance:
      'The historic site of the daring "Great Escape" of January 16, 1941, when Netaji slipped past British CID surveillance in his nephew’s 1937 Wanderer automobile (chassis W-24), which remains proudly exhibited in the portico.',
    delegateTips:
      'View the original black 1937 Wanderer sedan in the driveway, followed by the multimedia archive displaying Netaji’s fiery speeches in Singapore and Berlin.',
    highlights: ['Original 1937 Wanderer "Great Escape" Car', 'Netaji’s Intact Bedroom & Study Room', 'INA Historic Uniforms & Swords', 'Rare Letters to Gandhi, Nehru & Tagore', 'Netaji Research Bureau Library'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 5.6,
    distanceFromVenue: '5.6 km (14 min via Beckbagan / Park Circus Connector)',
    nearestMetro: 'Netaji Bhavan Metro Station (Blue Line)',
    visitingHours: '11:00 AM – 4:30 PM (Closed Mondays and National Holidays)',
    entryFee: '₹20 (Adults) • ₹10 (Children under 12)',
    latitude: 22.5358,
    longitude: 88.3496,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Netaji+Bhawan+Kolkata',
    featured: true
  },

  // 18. Eco Park & Biswa Bangla Gate (New Town)
  {
    id: 'eco-park',
    name: 'Eco Park & Biswa Bangla Gate (New Town)',
    category: 'Science & Innovation',
    tagline: '480-Acre Modern Ecological Wonder with Seven Wonders Replicas',
    description:
      'Spanning 480 magnificent acres surrounding a 112-acre waterbody in New Town Rajarhat, Prakriti Tirtha (Eco Park) is India’s largest urban ecological park. Developed by WBHIDCO, it features exact architectural replicas of the Seven Wonders of the World (including the Taj Mahal, Colosseum, Christ the Redeemer, and Great Pyramids), ecological tea gardens, floating musical fountains, and kayaking.',
    historicalSignificance:
      'Showcases modern West Bengal’s smart-city urban planning, sustainability, and technological ambition. Nearby stands the Biswa Bangla Gate—an extraordinary 55-meter-high circular hanging viewing gallery and fine dining restaurant.',
    delegateTips:
      'Book an evening dinner or high-tea at the Biswa Bangla Gate hanging restaurant for 360-degree aerial views of Kolkata’s futuristic New Town skyline.',
    highlights: ['Seven Wonders of the World Replicas', '55-Meter Biswa Bangla Ring Restaurant', '480 Acres of Ecological Gardens', '112-Acre Boating & Kayaking Lake', 'Musical Fountain & Rose Garden'],
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 11.5,
    distanceFromVenue: '11.5 km (22 min via Major Arterial Road New Town)',
    nearestMetro: 'New Town Metro Corridor / Eco Park Bus Terminal',
    visitingHours: '2:30 PM – 8:30 PM (Tuesday to Saturday), 12:00 PM – 8:30 PM (Sunday) • Closed Mondays',
    entryFee: '₹30 (Park Entry) • Individual activity & 7 Wonders charges separate',
    latitude: 22.6022,
    longitude: 88.4658,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eco+Park+New+Town+Kolkata',
    featured: true
  },

  // 19. M. P. Birla Planetarium
  {
    id: 'mp-birla-planetarium',
    name: 'M. P. Birla Planetarium',
    category: 'Science & Innovation',
    tagline: 'Asia’s Largest Planetarium with Buddhist Stupa Dome Architecture',
    description:
      'Inaugurated in 1963 by Prime Minister Jawaharlal Nehru, the M. P. Birla Planetarium on Cathedral Road is Asia’s largest planetarium and the second largest in the world. Its distinctive single-storey dome architecture is inspired by the ancient 3rd-century BC Buddhist Great Stupa at Sanchi. Equipped with a state-of-the-art opto-mechanical Carl Zeiss projector and fulldome digital projection.',
    historicalSignificance:
      'A pioneering landmark of modern Indian science education, bridging India’s ancient astronomical heritage (Aryabhata, Varahamihira) with contemporary astrophysics and cosmic exploration.',
    delegateTips:
      'Combine your visit with the adjoining Victoria Memorial and St. Paul’s Cathedral. Check the show timetable for English language full-dome cosmic presentations.',
    highlights: ['Asia’s Largest Planetarium', 'Sanchi Buddhist Stupa Dome Architecture', 'Carl Zeiss Hybrid Fulldome Projection', 'Space & Astronomy Gallery', 'Located on Central Cathedral Road'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 6.6,
    distanceFromVenue: '6.6 km (16 min via Maa Flyover / AJC Bose Road)',
    nearestMetro: 'Maidan / Rabindra Sadan Metro Station (Blue Line)',
    visitingHours: '12:00 PM – 6:30 PM (Daily show screenings)',
    entryFee: '₹100 (General Admission per show)',
    latitude: 22.5458,
    longitude: 88.3444,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Birla+Planetarium+Kolkata',
    featured: true
  },

  // 20. Kalighat Kali Temple & Mother House
  {
    id: 'kalighat-temple',
    name: 'Kalighat Kali Temple & Mother House',
    category: 'Spiritual & Sacred',
    tagline: 'Ancient 51 Shaktipeeth Shrine & Mother Teresa’s Global Mission',
    description:
      'Kalighat is one of India’s most sacred 51 Shaktipeethas, situated along the ancient Adi Ganga canal. Legend holds that the right toes of Goddess Sati fell here. The current 1809 temple features Bengal Jor-Bangla and Chala architecture. A short drive away on AJC Bose Road stands the Mother House—the global headquarters of the Missionaries of Charity where Saint Mother Teresa lived, served, and was laid to rest.',
    historicalSignificance:
      'Calcutta’s very name is traditionally derived from "Kalighat". The Mother House stands as a testament to Kolkata’s global legacy of compassion, where Mother Teresa’s Nobel Peace Prize and personal tomb are preserved.',
    delegateTips:
      'Visit Kalighat in the morning for peaceful prayer. Then visit Mother Teresa’s Tomb at Mother House for quiet contemplation and to see her preserved room and personal exhibits.',
    highlights: ['Sacred 51 Shaktipeeth Shrinelandmark', 'Origin of Kolkata’s Etymological Name', 'Traditional Bengal Chala Architecture', 'Saint Mother Teresa’s Tomb at Mother House', 'Historic Adi Ganga Ghats'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622312644211-137684df6d52?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=1200&auto=format&fit=crop'
    ],
    distanceKm: 6.2,
    distanceFromVenue: '6.2 km (15 min via Rashbehari Avenue Connector)',
    nearestMetro: 'Kalighat Metro Station (Blue Line)',
    visitingHours: 'Kalighat: 5:00 AM – 2:00 PM & 5:00 PM – 10:30 PM • Mother House: 8:00 AM – 12:00 PM & 3:00 PM – 6:00 PM (Closed Thursdays)',
    entryFee: 'Free Entry (Respectful silence and dress codes observed)',
    latitude: 22.5208,
    longitude: 88.3426,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kalighat+Kali+Temple+Kolkata',
    featured: true
  }
]
