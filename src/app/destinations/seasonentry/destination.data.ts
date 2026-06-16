import type { Destination } from "../components/types";

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "Middle East",
    season: ["winter"],
    tag: "Popular",
    tagColor: "bg-amber-100 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85",
    description:
      "Where luxury meets futuristic adventure. Iconic skylines, golden deserts, and world-class experiences await.",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Palm Jumeirah",
      "Dubai Mall",
    ],
    duration: "4–7 nights",
    budget: "₹80,000+",
    bestFor: "Luxury & Shopping",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Dubai*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    season: ["monsoon"],
    tag: "Trending",
    tagColor: "bg-emerald-100 text-emerald-700",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=1600&q=85",
    description:
      "A soulful escape wrapped in ancient temples, terraced rice fields, and the rhythm of the ocean.",
    highlights: [
      "Ubud Rice Terraces",
      "Tanah Lot Temple",
      "Seminyak Beach",
      "Mount Batur",
    ],
    duration: "5–8 nights",
    budget: "₹55,000+",
    bestFor: "Honeymoon & Culture",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Bali*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "Indian Ocean",
    season: ["winter"],
    tag: "Exotic",
    tagColor: "bg-sky-100 text-sky-700",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=85",
    description:
      "Turquoise lagoons, overwater villas, and silence so pure it feels like another world.",
    highlights: [
      "Overwater Bungalows",
      "Coral Reef Diving",
      "Sunset Cruises",
      "Private Beach",
    ],
    duration: "5–7 nights",
    budget: "₹1,20,000+",
    bestFor: "Luxury Honeymoon",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Maldives*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Asia",
    season: ["winter"],
    tag: "Popular",
    tagColor: "bg-amber-100 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    description:
      "Vibrant street markets, golden temples, tropical islands, and cuisine that changes everything.",
    highlights: [
      "Bangkok Temples",
      "Phi Phi Islands",
      "Chiang Mai",
      "Floating Markets",
    ],
    duration: "6–10 nights",
    budget: "₹45,000+",
    bestFor: "Family & Adventure",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Thailand*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "Asia",
    season: ["winter"],
    tag: "City Break",
    tagColor: "bg-violet-100 text-violet-700",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    description:
      "A gleaming city-state where colonial charm, futuristic gardens, and incredible food collide.",
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Hawker Centres",
    ],
    duration: "3–5 nights",
    budget: "₹60,000+",
    bestFor: "City & Food",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Singapore*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "japan",
    name: "Japan",
    country: "Japan",
    region: "Asia",
    season: ["summer", "winter"],
    tag: "Trending",
    tagColor: "bg-indigo-100 text-indigo-700",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    description:
      "A gorgeous land of temples, cherry blossoms, futuristic cities, and rich traditions.",
    highlights: [
      "Mount Fuji",
      "Kyoto Shrines",
      "Tokyo Shibuya Cross",
      "Bullet Train Experience",
    ],
    duration: "6–9 nights",
    budget: "₹1,80,000+",
    bestFor: "Culture & Tech",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Japan*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "Asia",
    season: ["winter", "summer"],
    tag: "Popular",
    tagColor: "bg-emerald-100 text-emerald-700",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    description:
      "Immerse yourself in limestone bays, ancient towns, vibrant markets, and flavorful cuisine.",
    highlights: [
      "Halong Bay Cruise",
      "Hoi An Ancient Town",
      "Cu Chi Tunnels",
      "Mekong Delta",
    ],
    duration: "5–8 nights",
    budget: "₹45,000+",
    bestFor: "Adventure & Heritage",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Vietnam*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    region: "Asia",
    season: ["summer", "winter"],
    tag: "Scenic",
    tagColor: "bg-teal-100 text-teal-700",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description:
      "The roof of the world — discover ancient Buddhist heritage, soaring mountains, and spiritual serenity.",
    highlights: [
      "Kathmandu Valley",
      "Pokhara Lake View",
      "Chitwan National Park",
      "Everest Base Camp View",
    ],
    duration: "4–7 nights",
    budget: "₹30,000+",
    bestFor: "Spiritual & Trekking",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Nepal*.%20Could%20you%20share%20details%3F",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "Asia",
    season: ["monsoon"],
    tag: "Hidden Gem",
    tagColor: "bg-lime-100 text-lime-700",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    description:
      "The pearl of the Indian Ocean — tea hills, ancient ruins, leopard safaris, and pristine beaches.",
    highlights: [
      "Sigiriya Rock",
      "Yala Safari",
      "Ella Train Ride",
      "Temple of the Tooth",
    ],
    duration: "7–10 nights",
    budget: "₹40,000+",
    bestFor: "Culture & Wildlife",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Sri%20Lanka*.%20Could%20you%20share%20details%3F",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    region: "Asia",
    season: ["winter", "summer"],
    tag: "Popular",
    tagColor: "bg-amber-100 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=800&q=80",
    description:
      "Explore historical colonial towns, shopping districts, tropical rainforests, and paradise islands.",
    highlights: [
      "Petronas Twin Towers",
      "Batu Caves",
      "Langkawi Archipelago",
      "Penang Street Art",
    ],
    duration: "4–7 nights",
    budget: "₹40,000+",
    bestFor: "Family & Shopping",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Malaysia*.%20Could%20you%20share%20details%3F",
  },
  {
    slug: "turkey",
    name: "Turkey",
    country: "Turkey",
    region: "Europe",
    season: ["summer", "winter"],
    tag: "Cultural",
    tagColor: "bg-violet-100 text-violet-700",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    description:
      "A magnificent bridge between East and West. Discover Byzantine history, fairy chimneys, and busy bazaars.",
    highlights: [
      "Hagia Sophia",
      "Cappadocia Balloons",
      "Pamukkale Terraces",
      "Grand Bazaar",
    ],
    duration: "6–9 nights",
    budget: "₹1,10,000+",
    bestFor: "History & Romance",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Turkey*.%20Could%20you%20share%20details%3F",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    country: "Azerbaijan",
    region: "Middle East",
    season: ["winter", "summer"],
    tag: "Modern Heritage",
    tagColor: "bg-rose-100 text-rose-700",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
    description:
      "The Land of Fire. Witness mud volcanoes, ultra-modern architecture, and charming medieval walls.",
    highlights: [
      "Baku Old City",
      "Flame Towers",
      "Gobustan Mud Volcanoes",
      "Heydar Aliyev Center",
    ],
    duration: "4–6 nights",
    budget: "₹65,000+",
    bestFor: "Architecture & Exploration",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Azerbaijan*.%20Could%20you%20share%20details%3F",
  },
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "India",
    season: ["monsoon"],
    tag: "Serene",
    tagColor: "bg-emerald-100 text-emerald-700",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description:
      "God's Own Country — backwaters, spice gardens, Ayurveda, and lush monsoon greenery.",
    highlights: [
      "Alleppey Backwaters",
      "Munnar Tea Gardens",
      "Kovalam Beach",
      "Ayurvedic Spa",
    ],
    duration: "5–8 nights",
    budget: "₹25,000+",
    bestFor: "Wellness & Nature",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Kerala*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "jim-corbett",
    name: "Jim Corbett",
    country: "India",
    region: "India",
    season: ["winter", "summer"],
    tag: "Safari",
    tagColor: "bg-amber-100 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience thrilling jungle safaris, tiger sightings, and nature trails in India's oldest national park.",
    highlights: [
      "Tiger Jeep Safari",
      "Dhikala Forest Zone",
      "Ramganga River",
      "Jungle Lodging",
    ],
    duration: "3–5 nights",
    budget: "₹15,000+",
    bestFor: "Wildlife & Safaris",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Jim%20Corbett*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "India",
    season: ["winter"],
    tag: "Popular",
    tagColor: "bg-amber-100 text-amber-700",
    image:
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&w=800&q=80",
    description:
      "Sun, sea, and soul — Portuguese forts, beach shacks, and the most legendary sunsets in India.",
    highlights: [
      "Baga & Anjuna Beach",
      "Old Goa Churches",
      "Spice Plantation",
      "Night Markets",
    ],
    duration: "4–6 nights",
    budget: "₹18,000+",
    bestFor: "Beach & Nightlife",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Goa*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "India",
    season: ["winter"],
    tag: "Heritage",
    tagColor: "bg-rose-100 text-rose-700",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    description:
      "Land of Kings — discover grand palaces, ancient forts, folk music, and vibrant desert colors.",
    highlights: [
      "Amber Fort (Jaipur)",
      "City Palace & Lakes",
      "Mehrangarh Fort (Jodhpur)",
      "Thar Desert Safari",
    ],
    duration: "4–7 nights",
    budget: "₹22,000+",
    bestFor: "Heritage & Culture",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Rajasthan*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "andaman-nicobar",
    name: "Andaman & Nicobar",
    country: "India",
    region: "India",
    season: ["winter"],
    tag: "Exotic",
    tagColor: "bg-sky-100 text-sky-700",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    description:
      "Pristine beaches, crystal clear waters, coral reefs, and exciting water sports in tropical serenity.",
    highlights: [
      "Radhanagar Beach",
      "Coral Reef Scuba Diving",
      "Havelock Island Walk",
      "Cellular Jail Light Show",
    ],
    duration: "5–8 nights",
    budget: "₹45,000+",
    bestFor: "Honeymoon & Adventure",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Andaman%20and%20Nicobar*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    country: "India",
    region: "India",
    season: ["summer"],
    tag: "Adventure",
    tagColor: "bg-orange-100 text-orange-700",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-altitude wonderland of stark landscapes, ancient monasteries, and magnetic skies.",
    highlights: [
      "Pangong Lake",
      "Nubra Valley",
      "Magnetic Hill",
      "Thiksey Monastery",
    ],
    duration: "6–9 nights",
    budget: "₹35,000+",
    bestFor: "Adventure & Spiritual",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Ladakh*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    region: "India",
    season: ["summer"],
    tag: "Scenic",
    tagColor: "bg-teal-100 text-teal-700",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1593417376544-4c4201061e22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Heaven on earth — shimmering Dal Lake, snow-capped peaks, and houseboat stays that feel timeless.",
    highlights: [
      "Dal Lake Houseboat",
      "Gulmarg Snow",
      "Pahalgam Valley",
      "Mughal Gardens",
    ],
    duration: "5–7 nights",
    budget: "₹30,000+",
    bestFor: "Nature & Romance",
    waLink:
      "https://wa.me/919870324003?text=Hello%2C%20I%27m%20interested%20in%20*Kashmir*.%20Could%20you%20share%20details%3F",
    featured: true,
  },
];

export type SeasonKey = "summer" | "monsoon" | "winter";

export function getDestinationsBySeasonKey(season: SeasonKey): Destination[] {
  return DESTINATIONS.filter((d) => d.season.includes(season));
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getRelatedDestinations(
  current: Destination,
  limit = 3
): Destination[] {
  return DESTINATIONS.filter(
    (d) =>
      d.slug !== current.slug &&
      (d.region === current.region ||
        d.season.some((s) => current.season.includes(s)))
  ).slice(0, limit);
}