export interface EventDetails {
  name: string
  edition: string
  year: number
  startDate: string
  endDate: string
  location: string
  state: string
  country: string
  venue: string
  theme: string
  themeDescription: string
  leadIntro: string
  timeline: {
    day: number
    date: string
    title: string
    description: string
    highlights: string[]
  }[]
  chiefMinister: {
    name: string
    title: string
    state: string
    messageTitle: string
    messageBody: string[]
    portraitUrl: string
    profileUrl: string
  }
}

export const PBD_EVENT_DATA: EventDetails = {
  name: "Pravasi Bharatiya Divas",
  edition: "19th",
  year: 2027,
  startDate: "2027-01-07T09:00:00+05:30",
  endDate: "2027-01-09T18:00:00+05:30",
  location: "Kolkata",
  state: "West Bengal",
  country: "India",
  venue: "Biswa Bangla Mela Prangan",
  theme: "Return to Roots: Reigniting the Diaspora Connect with Bharat",
  themeDescription:
    "A celebration of roots, heritage, and global Indian synergy. Pravasi Bharatiya Divas provides a flagship platform for overseas Indians to engage with modern India and participate actively in its transformative progress.",
  leadIntro:
    "Pravasi Bharatiya Divas is celebrated once every two years to strengthen engagement of the overseas Indian community with the Government of India and to reconnect them with their ethnic roots. Commemorating Mahatma Gandhi's return from South Africa to Mumbai on January 9, 1915, this 19th edition in Kolkata invites delegates into the intellectual, artistic, and cultural capital of India.",
  timeline: [
    {
      day: 1,
      date: "January 7, 2027",
      title: "Youth Pravasi Bharatiya Divas",
      description:
        "Dedicated to youth diaspora achievers, global innovators, entrepreneurs, and students reconnecting with Indian heritage and tech leadership.",
      highlights: [
        "Inaugural Plenary on Youth Diaspora Innovation",
        "Panel: Artificial Intelligence, CleanTech & Startups in India",
        "Cultural Gala & Welcome Reception by West Bengal",
      ],
    },
    {
      day: 2,
      date: "January 8, 2027",
      title: "Inauguration of 19th PBD Convention",
      description:
        "Official inaugural address by the Hon'ble Prime Minister of India, with Chief Guest of Honour, Union Ministers, and State delegations.",
      highlights: [
        "Inaugural Address by Hon'ble Prime Minister of India",
        "Release of Commemorative Postal Stamp & Exhibition Opening",
        "Ministerial Plenaries on Trade, Investment & Higher Education",
      ],
    },
    {
      day: 3,
      date: "January 9, 2027",
      title: "Valedictory Session & Pravasi Bharatiya Samman",
      description:
        "Conferment of the prestigious Pravasi Bharatiya Samman Awards by the Hon'ble President of India to overseas Indians of preeminent distinction.",
      highlights: [
        "Valedictory Address by Hon'ble President of India",
        "Conferment of Pravasi Bharatiya Samman Awards",
        "Grand Cultural Performance: Traditions of Bengal",
      ],
    },
  ],
  chiefMinister: {
    name: "Shri Suvendu Adhikari",
    title: "Hon'ble Chief Minister",
    state: "Government of West Bengal",
    messageTitle: "A Warm Welcome to Kolkata",
    messageBody: [
      "Dear Members of the Global Indian Diaspora,",
      "It gives us immense pleasure to welcome you to Kolkata, the cultural heart of India, for the 19th Pravasi Bharatiya Divas Convention 2027.",
      "Our city, renowned for its rich heritage, intellectual traditions, artistic excellence, and warm hospitality, looks forward to welcoming delegates from across the world.",
      "May your visit be filled with meaningful connections, memorable experiences, and a renewed bond with your roots.",
      "With warm regards,",
    ],
    portraitUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    profileUrl: "https://cmo.wb.gov.in/",
  },
}
