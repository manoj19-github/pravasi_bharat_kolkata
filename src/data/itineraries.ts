export interface Itinerary {
  id: string
  title: string
  tagline: string
  duration: string
  recommendedFor: string
  image: string
  googleMapsRouteUrl: string
  schedule: {
    morning: { time: string; place: string; description: string }
    afternoon: { time: string; place: string; description: string }
    evening: { time: string; place: string; description: string }
  }
}

export const ITINERARIES_DATA: Itinerary[] = [
  {
    id: 'taste-of-kolkata',
    title: 'A Taste of Kolkata: Gastronomy Trail',
    tagline: 'Savor legendary street foods, Bengali feasts, and iconic sweets',
    duration: '2 Days',
    recommendedFor: 'Food Connoisseurs & First-time Visitors',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    googleMapsRouteUrl:
      'https://www.google.com/maps/dir/College+Street+Coffee+House/Flurys+Park+Street/Kewpie%27s+Kitchen+Kolkata',
    schedule: {
      morning: {
        time: '8:30 AM – 11:30 AM',
        place: 'College Street & Indian Coffee House',
        description:
          'Start with traditional kochuri and hot chai at Coffee House, followed by authentic sandesh tasting at century-old sweet shops.',
      },
      afternoon: {
        time: '12:30 PM – 3:30 PM',
        place: 'Park Street & Traditional Bengali Dining',
        description:
          'Experience royal Kolkata biryani with aromatic aloo and delicate mutton chaap, followed by traditional Mishti Doi.',
      },
      evening: {
        time: '5:00 PM – 8:00 PM',
        place: 'Dacre Lane Street Food & Prinsep Ghat Chai',
        description:
          'Taste hot puchkas, kathi rolls, and enjoy earthen kulhad chai beside the breeze of the Hooghly river.',
      },
    },
  },
  {
    id: 'city-heritage-walk',
    title: 'Kolkata City Heritage Walk',
    tagline: 'Journey through Victorian monuments and Bengal Renaissance landmarks',
    duration: '2 Days',
    recommendedFor: 'History Enthusiasts & Architecture Delegates',
    image:
      'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
    googleMapsRouteUrl:
      'https://www.google.com/maps/dir/BBD+Bagh/General+Post+Office+Kolkata/Victoria+Memorial+Hall',
    schedule: {
      morning: {
        time: '7:30 AM – 11:00 AM',
        place: 'Dalhousie Square (BBD Bagh) & Writers Building',
        description:
          'Explore Greco-Roman colonial edifices, St. John’s Church, and the historic General Post Office with its brass dome.',
      },
      afternoon: {
        time: '12:00 PM – 3:30 PM',
        place: 'Indian Museum & St. Paul’s Cathedral',
        description:
          'Marvel at Asia’s oldest museum galleries followed by the Indo-Gothic stained glass arches of St. Paul’s Cathedral.',
      },
      evening: {
        time: '4:30 PM – 7:30 PM',
        place: 'Victoria Memorial Hall & Gardens',
        description:
          'Walk the white marble colonnades and witness the musical Light and Sound show beneath the evening sky.',
      },
    },
  },
  {
    id: 'cultural-literature',
    title: 'The Cultural & Literature Experience',
    tagline: 'Trace the footprints of Tagore, Swami Vivekananda, and Bengal masters',
    duration: '2 Days',
    recommendedFor: 'Diaspora Academics, Writers & Cultural Delegates',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    googleMapsRouteUrl:
      'https://www.google.com/maps/dir/Jorasanko+Thakur+Bari/College+Street/National+Library+Kolkata',
    schedule: {
      morning: {
        time: '9:30 AM – 12:00 PM',
        place: 'Jorasanko Thakur Bari',
        description:
          'Visit the ancestral house and museum of Rabindranath Tagore, discovering the original rooms where Gitanjali was penned.',
      },
      afternoon: {
        time: '1:00 PM – 4:00 PM',
        place: 'College Street Boi Para & Presidency Heritage',
        description:
          'Browse world-famous book stalls, historic printing presses, and interact with literary intellectuals over hot tea.',
      },
      evening: {
        time: '5:00 PM – 8:00 PM',
        place: 'Nandan Cultural Complex & Academy of Fine Arts',
        description:
          'Attend an evening theatrical production or fine art exhibition at Bengal’s premier cultural hub.',
      },
    },
  },
  {
    id: 'religious-harmony',
    title: 'Kolkata Religious & Spiritual Tour',
    tagline: 'Experience universal spiritual harmony along the sacred Hooghly',
    duration: '2 Days',
    recommendedFor: 'Spiritual Seekers & Peace Pilgrims',
    image:
      'https://images.unsplash.com/photo-1622312644211-137684df6d52?q=80&w=800&auto=format&fit=crop',
    googleMapsRouteUrl:
      'https://www.google.com/maps/dir/Dakshineswar+Kali+Temple/Belur+Math/Kalighat+Kali+Temple',
    schedule: {
      morning: {
        time: '6:30 AM – 10:30 AM',
        place: 'Dakshineswar Kali Temple & Holy Ghats',
        description:
          'Offer prayers at the sanctified Navaratna Kali temple, visit Sri Ramakrishna’s quiet prayer room, and take a tranquil ferry.',
      },
      afternoon: {
        time: '11:00 AM – 2:30 PM',
        place: 'Belur Math (Ramakrishna Mission Headquarters)',
        description:
          'Meditate in the universal sanctum sanctorum designed by Swami Vivekananda synthesizing world architectural traditions.',
      },
      evening: {
        time: '4:30 PM – 7:30 PM',
        place: 'Kalighat Shaktipeeth & Evening Ganga Aarti',
        description:
          'Visit one of the 51 sacred Shakti Peethas followed by a peaceful river cruise watching evening lamps float on the Ganga.',
      },
    },
  },
  {
    id: 'shopping-trail',
    title: 'Kolkata Artisanal & Handloom Trail',
    tagline: 'Discover Bengal Baluchari, Dhakai Jamdani silks, and Dokra crafts',
    duration: '2 Days',
    recommendedFor: 'Shoppers, Art Lovers & Gift Seekers',
    image:
      'https://images.unsplash.com/photo-1601625463687-25541fb72f62?q=80&w=800&auto=format&fit=crop',
    googleMapsRouteUrl:
      'https://www.google.com/maps/dir/New+Market+Kolkata/Dakshinapan+Shopping+Complex/Gariahat+Market',
    schedule: {
      morning: {
        time: '10:00 AM – 1:00 PM',
        place: 'New Market (Sir Stuart Hogg Market)',
        description:
          'Explore Victorian arcades with vintage silver jewelry, leather goods, embroidered shawls, and handmade conch artifacts.',
      },
      afternoon: {
        time: '2:30 PM – 5:30 PM',
        place: 'Dakshinapan State Emporiums & Biswa Bangla',
        description:
          'Shop certified authentic handicrafts: Bankura clay horses, Dokra metal castings, and hand-woven Tant and Jamdani sarees.',
      },
      evening: {
        time: '6:00 PM – 8:30 PM',
        place: 'Gariahat Market Handloom Boutiques',
        description:
          'Stroll through vibrant textile avenues and conclude with hot kathi rolls and mishti at traditional confectioneries.',
      },
    },
  },
]
