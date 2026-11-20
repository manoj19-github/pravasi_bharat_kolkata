export interface TransitOption {
  id: string
  title: string
  iconName: string
  category: 'Air' | 'Rail' | 'Metro & Road'
  summary: string
  keyHubs: string[]
  advisory: string
  contactHelpline?: string
  googleMapsUrl: string
}

export const TRANSIT_DATA: TransitOption[] = [
  {
    id: 'air-connectivity',
    title: 'Netaji Subhas Chandra Bose International Airport (CCU)',
    iconName: 'Plane',
    category: 'Air',
    summary:
      'Located at Dum Dum (approx. 15 km from Biswa Bangla Mela Prangan). Offers domestic connections to all major Indian state capitals and direct international flights across Southeast Asia, Middle East, and beyond.',
    keyHubs: [
      'Prepaid Taxi Desks in Arrivals Terminal',
      'Dedicated PBD 2027 Welcome & Helpdesk counter',
      'Air-conditioned VIP shuttle service to convention hotels',
    ],
    advisory:
      'Travel time from Airport to Biswa Bangla Mela Prangan via Maa Flyover / EM Bypass is approximately 35–45 minutes depending on traffic.',
    contactHelpline: '+91 33 2511 8036',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Netaji+Subhas+Chandra+Bose+International+Airport+Kolkata',
  },
  {
    id: 'rail-connectivity',
    title: 'Railway Terminals (Howrah, Sealdah, Kolkata Station)',
    iconName: 'Train',
    category: 'Rail',
    summary:
      'Kolkata is seamlessly anchored by three major railway terminals: Howrah Junction (HWH), Sealdah (SDAH), and Kolkata Station (KOAA). High-speed Vande Bharat and Rajdhani express trains link the city nationwide.',
    keyHubs: [
      'Howrah Junction (8.5 km to venue) – Eastern Railway HQ',
      'Sealdah Station (4.8 km to venue) – Metro Green Line connected',
      'Kolkata Chitpur Station (7.9 km to venue) – Express terminal',
    ],
    advisory:
      'Government prepaid yellow taxi booths and app-based ride cabs are available 24/7 right outside all main station exits.',
    contactHelpline: '139 (Indian Railways 24x7 Help)',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Howrah+Railway+Station',
  },
  {
    id: 'road-metro',
    title: 'Metro Rail & Arterial Road Connectivity',
    iconName: 'Navigation',
    category: 'Metro & Road',
    summary:
      'Biswa Bangla Mela Prangan is prominently situated along the Eastern Metropolitan Bypass (EM Bypass) and connected via the Maa Flyover directly to Central Kolkata, Park Street, and Victoria Memorial.',
    keyHubs: [
      'EM Bypass & Maa Flyover (Signal-free elevated expressway)',
      'Kolkata Metro Green Line (Howrah Maidan to Sector V)',
      'Kolkata Heritage Trams & AC Transit Buses',
    ],
    advisory:
      'Delegates staying along the EM Bypass corridor (ITC Royal Bengal, JW Marriott) enjoy walking or 2-minute commute access to the convention venue.',
    contactHelpline: '1073 (Kolkata Traffic Helpline)',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Biswa+Bangla+Mela+Prangan+Kolkata',
  },
]
