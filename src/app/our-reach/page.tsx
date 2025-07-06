"use client";

import { ChevronDown, Globe } from "lucide-react";
import BackgroundCarousel from "../components/BackgroundCarousel";
import { useState } from "react";

interface ContinentData {
  id: string;
  name: string;
  emoji: string;
  description: string;
  cities: string[];
  color: string;
}

const continentsData: ContinentData[] = [
  {
    id: "americas",
    name: "Americas",
    emoji: "🌎",
    description: "Shipping ports across North, Central, and South America",
    cities: [
      // Argentina
      "Buenos Aires",
      "Bahia Blanca - Argentina",

      // Brazil
      "Macaé",
      "Rio de Janeiro",
      "Santos",
      "São Sebastião",
      "Paranaguá",
      "Itajaí",
      "Rio de Grande - Brazil",

      // Bahamas
      "Freeport - Bahamas",

      // Canada
      "Dartmouth",
      "Halifax",
      "Montreal",
      "Ottawa",
      "Quebec",
      "Vancouver",

      // Caribbean
      "Point Fortin - Trinidad & Tobago",
      "Point Lisas - Trinidad & Tobago",
      "Pointe-a-Pierre - Trinidad & Tobago",
      "Port of Spain - Trinidad & Tobago",
      "St. Eustatius - Netherlands Antilles",
      "Curaçao - Netherlands Antilles",
      "St. Croix - US Virgin Islands",

      // Chile
      "Quintero",
      "San Antonio",
      "Valparaíso - Chile",

      // Curaçao
      "Willemstad",
      "All Ports - Curaçao",

      // Ecuador
      "Guayaquil - Ecuador",

      // Panama
      "Balboa",
      "Cristóbal - Panama",

      // USA
      "Baltimore, MD",
      "Boston, MA",
      "Charleston, SC",
      "Houston, TX",
      "Jacksonville, FL",
      "Long Beach, CA",
      "Los Angeles, CA",
      "Miami, FL",
      "Mobile, AL",
      "New Orleans, LA",
      "New York/New Jersey",
      "Norfolk, VA",
      "Oakland, CA",
      "Philadelphia, PA",
      "Port Everglades, FL",
      "Port of Savannah, GA",
      "San Diego, CA",
      "San Francisco, CA",
      "Seattle, WA",
      "Tacoma, WA",
    ],
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "asia",
    name: "Asia-Pacific",
    emoji: "🌏",
    description: "Spanning the vast and dynamic Asian markets",
    cities: [
      // Australia
      "Brisbane",
      "Darwin",
      "Geelong",
      "Melbourne",
      "Sydney",

      // Bangladesh
      "Chittagong",

      // China
      "All Ports - China",

      // India
      "All Ports - India",

      // Indonesia
      "All Ports - Indonesia",

      // Japan
      "Chiba",
      "Kawasaki",
      "Tokyo",
      "Yokohama",

      // Malaysia
      "Pasir Gudang",
      "Port Kiang",
      "Tanjung Pelepas",

      // New Zealand
      "Auckland",
      "Hastings",
      "Napier",
      "Tauranga",
      "Wellington",

      // Philippines
      "Manila",

      // Singapore
      "All Ports - Singapore",

      // South Korea
      "Busan",
      "Daesan",
      "Inchion",
      "Masan",
      "Pohang",
      "Ulsan",
      "Yosu",

      // Sri Lanka
      "Colombo",
      "Galle",

      // Thailand
      "Bangkok",
      "Laem Chabang",
      "Map Ta Phut",
      "Rayong",
      "Sriracha",
    ],
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "europe",
    name: "Europe",
    emoji: "🌍",
    description: "Serving major European business centers",
    cities: [
      "All Ports - Belgium",
      "All Ports - Croatia",
      "Larnaca",
      "Limassol",
      "Vassilikos",
      "Copenhagen",
      "Esblerg",
      "Fredericia",
      "Kalundborg",
      "Helsinki",
      "Porvoo",
      "Fos",
      "Lavera",
      "Dunkirk",
      "Le Havre",
      "Marseilles",
      "Bremen",
      "Brernerhaven",
      "Hamburg",
      "Lubeck",
      "Rostock",
      "Stadersand",
      "Wilhelmshaven",
      "All Ports - Gibraltar",
      "Eleusis",
      "Pachi",
      "Piraeus",
      "All Ports - Ireland",
      "Augusta",
      "Brindisi",
      "Genoa",
      "Gioia Tauro",
      "Livorno",
      "Milazza",
      "Naples",
      "Ravenna",
      "Taranto",
      "Riga",
      "Ventspils",
      "All Ports - Malta",
      "All Ports - Netherlands",
      "Alesund",
      "Bergen",
      "Fredrikstan",
      "Karsto",
      "Kristiansund",
      "Oslo",
      "Mongstad",
      "Slagen",
      "Stavanger",
      "Tromso",
      "Gdansk",
      "Gdynia",
      "Sopot",
      "Leixoes",
      "Lisbon",
      "Setubal",
      "Sines",
      "Constantza",
      "Algeciras",
      "Barcelona",
      "Bilbao",
      "Cadiz",
      "Huelva",
      "La Coruna",
      "Malaga",
      "Palma",
      "Tarragona",
      "Tenerife",
      "Valencia",
      "Brofijorden",
      "Gothenburg",
      "Karlstad",
      "Kristinehamn",
      "Stenungsund",
      "Stockholm",
      "All Ports - Turkey",
      "All Ports - UK",
    ],
    color: "from-green-400 to-teal-500",
  },
  {
    id: "africa",
    name: "Africa",
    emoji: "🌍",
    description: "Connecting diverse markets across the African continent",
    cities: [
      "All Ports - Egypt",
      "Lagos - Nigeria",
      "Port Harcourt - Nigeria",
      "Apapa - Nigeria",
      "Cape Town",
      "Durban",
      "Richards Bay",
      "Saldanha Bay",
      "Port Elizabeth",
      "Port Mauritius",
    ],
    color: "from-orange-400 to-red-500",
  },
  {
    id: "oceania",
    name: "Australia & Oceania",
    emoji: "🌊",
    description: "Shipping gateways to and from Oceania",
    cities: [
      "Brisbane",
      "Darwin",
      "Geelong",
      "Melbourne",
      "Sydney",
      "Auckland",
      "Hastings",
      "Napier",
      "Tauranga",
      "Wellington",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "middle-east",
    name: "Middle East",
    emoji: "🕌",
    description: "Key shipping hubs across the Middle East",
    cities: [
      "Ajman",
      "Dubai",
      "Fujairah",
      "Khor Fakkan",
      "Jebel Ali",
      "Port Rashid",
      "Sharjah",
    ],
    color: "from-yellow-400 to-amber-500",
  },
];



export default function OurReach() {
  const [openContinent, setOpenContinent] = useState<string | null>(null);

  const toggleContinent = (id: string) => {
    setOpenContinent((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <BackgroundCarousel />
      <div className="px-4 py-12 sm:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Our Global Reach
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden mt-[12vh] gap-4 px-2 sm:px-4">
            {/* Left Side - Earth Image */}
            <div
              className="w-full lg:w-1/2 h-[300px] lg:h-[88vh] bg-contain bg-no-repeat bg-center rounded-xl"
              style={{ backgroundImage: `url('./earth.png')` }}
            />

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 h-auto lg:h-[88vh] flex flex-col bg-white/5 rounded-lg backdrop-blur-md sm:px-6 pt-4">
              <div
                className="flex-1 overflow-y-auto px-2 pb-6 [&::-webkit-scrollbar]:hidden scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <ul className="space-y-3">
                  {continentsData.map((continent) => (
                    <li key={continent.id}>
                      <div
                        role="button"
                        aria-expanded={openContinent === continent.id}
                        onClick={() => toggleContinent(continent.id)}
                        className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 cursor-pointer
        py-3 px-3 flex flex-col"
                      >
                        {/* Top row: Chevron and title */}
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            {/* Chevron left for mobile and desktop */}
                            <ChevronDown
                              className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${
                                openContinent === continent.id
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            />

                            {/* Continent emoji (desktop only) */}
                            <span className="text-xl hidden sm:inline">
                              {continent.emoji}
                            </span>

                            {/* Continent name */}
                            <h3 className="text-base sm:text-sm font-semibold text-gray-900">
                              {continent.name}
                            </h3>
                          </div>
                        </div>

                        {/* Description (desktop only) */}
                        <p className="hidden sm:block text-sm text-gray-600 pl-6 pt-1">
                          {continent.description}
                        </p>

                 {/* Accordion content */}
<div
  className={`transition-all duration-500 ease-in-out bg-white rounded-b-xl ${
    openContinent === continent.id
      ? "max-h-[300px] p-0 mt-2 shadow-inner"
      : "max-h-0 p-0 overflow-hidden"
  }`}
>
  {openContinent === continent.id && (
    <div className="max-h-[300px] overflow-y-auto p-4 pr-2 custom-scrollbar">
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        {continent.cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  )}
</div>

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
