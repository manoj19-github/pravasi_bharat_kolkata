# 19th Pravasi Bharatiya Divas 2027 — Kolkata Welcome & Visitor Portal

An official-grade, culturally authentic, and visitor-centric web application for the **19th Pravasi Bharatiya Divas Convention 2027**, hosted in Kolkata, West Bengal, India.

---

## 🏛️ Event Context & Parent Website Relationship
- **Parent Website**: [https://pbdindia.gov.in/](https://pbdindia.gov.in/)
- **Integration Point**: On the parent PBD portal, clicking the **"Know More"** CTA on the official Kolkata showcase card redirects visitors to this dedicated portal.
- **Convention Dates**: January 7–9, 2027
- **Host Venue**: Biswa Bangla Mela Prangan, Kolkata, West Bengal
- **Official Theme**: *"Return to Roots: Reigniting the Diaspora Connect with Bharat"*

---

## 🎨 Visual Identity & Color System
Strictly adheres to the official PBD government aesthetic:
* **Primary Saffron / Burnt Orange (`#D94B12`)**: CTAs, active indicators, countdown numbers, marker pins.
* **Deep Maroon / Terracotta Brown (`#63240F`)**: Main headings, editorial serif titles, prestige frames.
* **Warm Pure White (`#FFFFFF`) & Soft Ivory (`#FAF5EF`)**: Card backgrounds and clean canvas.
* **Decorative Pale Peach (`#F5E7DA`) & Golden Zari (`#C89234`)**: Traditional Bengali Alpana mandala watermarks and framing.

---

## 🗺️ Portal Navigation & Core Routes

### 1. `/` — Home & Welcome Experience
* **55% / 45% Hero**: Authentic visual montage featuring Howrah Bridge, Rabindranath Tagore, heritage tram, yellow taxi, Hooghly river, morning chai, and Maa Durga emblem.
* **Live Countdown Timer**: Calculating days, hours, minutes, seconds to **January 7, 2027 (09:00 AM IST)**.
* **Chief Minister's Welcome**: Formal greetings by **Shri Suvendu Adhikari**, Hon'ble Chief Minister of West Bengal.
* **Three-Day Programme Highlights**: Youth PBD (Jan 7), Inauguration (Jan 8), Valedictory & Awards (Jan 9).
* **Discover Kolkata & Stays Preview**: 6 curated sights, 4 closest luxury hotels, and airport/rail transit guide.
* **Interactive Map Preview**: Direct entry point to the full mapping canvas.

### 2. `/hotels` — Delegate Accommodation Portal
* **12+ Curated Properties**: ITC Royal Bengal, JW Marriott, Hyatt Regency, Novotel, The Oberoi Grand, Taj Bengal, Raajkutir, The Westin, etc.
* **Live Search & Category Filters**: Search by name or area; filter by *Luxury*, *Premium*, *Heritage*, or *Near Venue (≤ 5 km)*.
* **Tri-Action Booking Logic**:
  1. Direct Official Hotel Website.
  2. Google Booking Search Fallback (`{Hotel} Kolkata official booking`).
  3. Google Maps Direct Navigation (`{Hotel} Kolkata`).
* **Official Advisory Notice**: Distinguishing independent curated suggestions from certified MEA event blocks.

### 3. `/explore-kolkata` — City Heritage & Curated Itineraries
* **6 Cultural Pillars**: Architectural Heritage, Literature & Knowledge, Artistic Craftsmanship, Gastronomy & Mishti, Spiritual Universalism, Modern IT & Smart City.
* **5 Official 2-Day Itineraries**: *A Taste of Kolkata*, *City Heritage Walk*, *The Cultural & Literature Experience*, *Kolkata Religious Tour*, and *Artisanal & Handloom Trail* (with morning/afternoon/evening schedules and map routes).
* **Destination Directory**: Filterable sightseeing catalog with timings, highlights, and direct navigation links.
* **West Bengal Hospitality Corner**: Celebrating *"Atithi Devo Bhava"*.

### 4. `/map` — Dedicated Interactive Visitor Map
* **Technology**: **Leaflet** + **React Leaflet** with **OpenStreetMap** tiles.
* **Layout Inspired by `durgapujakolkata.in/map`**:
  - Fullscreen responsive mapping interface.
  - Left search & discovery sidebar (380px on desktop, swipeable bottom sheet on mobile).
  - Categorized custom SVG markers: Convention Venue, Luxury Hotels, Tourist Sights, Airport (CCU), Railway Stations (Howrah, Sealdah, Kolkata Station).
  - Programmatic map panning (`flyTo`) on selection.
  - **"Locate Me" Geolocation**: Centers the map on the delegate's live coordinates.

---

## 🚀 Quick Start

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
