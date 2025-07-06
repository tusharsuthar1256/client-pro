// 'use client';

// import { useState } from 'react';
// import { ChevronDown, Globe, MapPin } from 'lucide-react';

// interface ContinentData {
//   id: string;
//   name: string;
//   emoji: string;
//   description: string;
//   cities: string[];
//   color: string;
// }

// const continentsData: ContinentData[] = [
//   {
//     id: 'africa',
//     name: 'Africa',
//     emoji: '🌍',
//     description: 'Connecting diverse markets across the African continent',
//     cities: [
//       'Alexandria', 'Damietta', 'Port Said', 'Suez', 'Asry Day Dock M',
//       'Luanda',
//       'Cape Town', 'Durban', 'Richards Bay', 'Saldanha Bay', 'Port Elizabeth',
//       'Port Mauritius'
//     ],
//     color: 'from-orange-400 to-red-500'
//   },
//   {
//     id: 'asia',
//     name: 'Asia-Pacific',
//     emoji: '🌏',
//     description: 'Spanning the vast and dynamic Asian markets',
//     cities: [
//       'Brisbane', 'Darwin', 'Geelong', 'Melbourne', 'Sydney',
//       'Chittagong',
//       'All Ports - China',
//       'All Ports - India',
//       'All Ports - Indonesia',
//       'Chiba', 'Kawasaki', 'Tokyo', 'Yokohama',
//       'Pasir Gudang', 'Port Kiang', 'Tanjung Pelepas',
//       'Auckland', 'Hastings', 'Napier', 'Tauranga', 'Wellington',
//       'Manila',
//       'All Ports - Singapore',
//       'Busan', 'Daesan', 'Inchion', 'Masan', 'Pohang', 'Ulsan', 'Yosu',
//       'Colombo', 'Galle',
//       'Bangkok', 'Laem Chabang', 'Map Ta Phut', 'Rayong', 'Sriracha',
//       'Ajman', 'Dubai', 'Fujairah', 'Khor Fakkan', 'Jebel Ali', 'Port Rashid', 'Sharjah'
//     ],
//     color: 'from-blue-400 to-indigo-500'
//   },
//   {
//     id: 'europe',
//     name: 'Europe',
//     emoji: '🌍',
//     description: 'Serving major European business centers',
//     cities: [
//       'All Ports - Belgium',
//       'All Ports - Croatia',
//       'Larnaca', 'Limassol', 'Vassilikos',
//       'Copenhagen', 'Esblerg', 'Fredericia', 'Kalundborg',
//       'Helsinki', 'Porvoo',
//       'Fos', 'Lavera', 'Dunkirk', 'Le Havre', 'Marseilles',
//       'Bremen', 'Brernerhaven', 'Hamburg', 'Lubeck', 'Rostock', 'Stadersand', 'Wilhelmshaven',
//       'All Ports - Gibraltar',
//       'Eleusis', 'Pachi', 'Piraeus',
//       'All Ports - Ireland',
//       'Augusta', 'Brindisi', 'Genoa', 'Gioia Tauro', 'Livorno', 'Milazza', 'Naples', 'Ravenna', 'Taranto',
//       'Riga', 'Ventspils',
//       'All Ports - Malta',
//       'All Ports - Netherlands',
//       'Alesund', 'Bergen', 'Fredrikstan', 'Karsto', 'Kristiansund', 'Oslo', 'Mongstad', 'Slagen', 'Stavanger', 'Tromso',
//       'Gdansk', 'Gdynia', 'Sopot',
//       'Leixoes', 'Lisbon', 'Setubal', 'Sines',
//       'Constantza',
//       'Algeciras', 'Barcelona', 'Bilbao', 'Cadiz', 'Huelva', 'La Coruna', 'Malaga', 'Palma', 'Tarragona', 'Tenerife', 'Valencia',
//       'Brofijorden', 'Gothenburg', 'Karlstad', 'Kristinehamn', 'Stenungsund', 'Stockholm',
//       'All Ports - Turkey',
//       'All Ports - UK'
//     ],
//     color: 'from-green-400 to-teal-500'
//   },
//   {
//     id: 'north-america',
//     name: 'North America',
//     emoji: '🌎',
//     description: 'Coast-to-coast coverage across North America',
//     cities: [
//       'Freeport - Bahamas',
//       'Dartmouth', 'Halifax', 'Montreal', 'Ottawa', 'Quebec', 'Vancouver',
//       'Point Fortin', 'Point Lisas', 'Pointe-a-Pierre', 'Port of Spain - Trinidad & Tobago',
//       'St. Eustatius', 'Curaçao - Netherlands Antilles',
//       'St. Croix - US Virgin Islands',
//       'Balboa', 'Cristóbal - Panama',
//       'Baltimore, MD', 'Boston, MA', 'Charleston, SC', 'Houston, TX', 'Jacksonville, FL',
//       'Long Beach, CA', 'Los Angeles, CA', 'Miami, FL', 'Mobile, AL', 'New Orleans, LA',
//       'New York/New Jersey', 'Norfolk, VA', 'Oakland, CA', 'Philadelphia, PA',
//       'Port Everglades, FL', 'Port of Savannah, GA', 'San Diego, CA', 'San Francisco, CA',
//       'Seattle, WA', 'Tacoma, WA'
//     ],
//     color: 'from-purple-400 to-pink-500'
//   },
//   {
//     id: 'south-america',
//     name: 'South America',
//     emoji: '🌎',
//     description: 'Connecting vibrant South American markets',
//     cities: [
//       'Buenos Aires', 'Bahia Blanca - Argentina',
//       'Macaé', 'Rio de Janeiro', 'Santos', 'São Sebastião', 'Paranaguá', 'Itajaí', 'Rio de Grande - Brazil',
//       'Quintero', 'San Antonio', 'Valparaíso - Chile',
//       'Willemstad', 'All Ports - Curaçao',
//       'Guayaquil - Ecuador'
//     ],
//     color: 'from-yellow-400 to-orange-500'
//   },
//   {
//     id: 'australia',
//     name: 'Australia & Oceania',
//     emoji: '🌏',
//     description: 'Serving the Pacific region and Oceania',
//     cities: [
//       'Brisbane', 'Darwin', 'Geelong', 'Melbourne', 'Sydney',
//       'Auckland', 'Hastings', 'Napier', 'Tauranga', 'Wellington',
//       'Port Mauritius'
//     ],
//     color: 'from-cyan-400 to-blue-500'
//   },
//   {
//     id: 'antarctica',
//     name: 'Antarctica',
//     emoji: '🧊',
//     description: 'Research stations and scientific outposts',
//     cities: ['McMurdo Station', 'Palmer Station', 'Rothera Station', 'Belgrano II Base', 'Halley Station'],
//     color: 'from-slate-400 to-gray-500'
//   }
// ];


// export default function OurReach() {
//   const [expandedContinent, setExpandedContinent] = useState<string | null>(null);

//   const toggleContinent = (continentId: string) => {
//     setExpandedContinent(expandedContinent === continentId ? null : continentId);
//   };

//   return (
//     <>
//         <div 
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
//         }}
//       />
//     <div className="px-4 py-12 sm:px-6 lg:px-8 pt-20">
//       <div className="mx-auto max-w-4xl">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
//             <Globe className="h-8 w-8 text-blue-600" />
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Our Global{' '}
//             <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
//               Reach
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Connecting businesses and communities across all seven continents with 
//             comprehensive coverage and local expertise in every major market.
//           </p>
//         </div>

//         {/* Continents Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {continentsData.map((continent) => (
//             <div
//               key={continent.id}
//               className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               {/* Card Header */}
//               <div
//                 className={`bg-gradient-to-r ${continent.color} p-6 cursor-pointer transition-all duration-300`}
//                 onClick={() => toggleContinent(continent.id)}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <span className="text-3xl">{continent.emoji}</span>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1">
//                         {continent.name}
//                       </h3>
//                       <p className="text-white/90 text-sm">
//                         {continent.cities.length} locations
//                       </p>
//                     </div>
//                   </div>
//                   <ChevronDown
//                     className={`h-6 w-6 text-white transition-transform duration-300 ${
//                       expandedContinent === continent.id ? 'rotate-180' : ''
//                     }`}
//                   />
//                 </div>
//                 <p className="text-white/90 text-sm mt-3 leading-relaxed">
//                   {continent.description}
//                 </p>
//               </div>

//               {/* Expandable Content */}
//               <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                   expandedContinent === continent.id
//                     ? 'max-h-96 opacity-100'
//                     : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="p-6 bg-gray-50">
//                   <div className="flex items-center mb-4">
//                     <MapPin className="h-5 w-5 text-gray-600 mr-2" />
//                     <h4 className="font-semibold text-gray-900">Cities & Ports</h4>
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {continent.cities.map((city) => (
//                       <div
//                         key={city}
//                         className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
//                       >
//                         <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//                         <span className="text-gray-700 font-medium">{city}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="group">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
//                 <Globe className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-2">7</h3>
//               <p className="text-gray-600">Continents Covered</p>
//             </div>
//             <div className="group">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4 group-hover:bg-teal-200 transition-colors duration-300">
//                 <MapPin className="h-8 w-8 text-teal-600" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-2">
//                 {continentsData.reduce((total, continent) => total + continent.cities.length, 0)}
//               </h3>
//               <p className="text-gray-600">Cities & Ports</p>
//             </div>
//             <div className="group">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold">24</span>
//                 </div>
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
//               <p className="text-gray-600">Global Support</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



'use client';

import { ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';
import BackgroundCarousel from '../components/BackgroundCarousel';
import { useState } from 'react';

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
    id: 'africa',
    name: 'Africa',
    emoji: '🌍',
    description: 'Connecting diverse markets across the African continent',
    cities: [
      'Alexandria', 'Damietta', 'Port Said', 'Suez', 'Asry Day Dock M',
      'Luanda',
      'Cape Town', 'Durban', 'Richards Bay', 'Saldanha Bay', 'Port Elizabeth',
      'Port Mauritius'
    ],
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'asia',
    name: 'Asia-Pacific',
    emoji: '🌏',
    description: 'Spanning the vast and dynamic Asian markets',
    cities: [
      'Brisbane', 'Darwin', 'Geelong', 'Melbourne', 'Sydney',
      'Chittagong',
      'All Ports - China',
      'All Ports - India',
      'All Ports - Indonesia',
      'Chiba', 'Kawasaki', 'Tokyo', 'Yokohama',
      'Pasir Gudang', 'Port Kiang', 'Tanjung Pelepas',
      'Auckland', 'Hastings', 'Napier', 'Tauranga', 'Wellington',
      'Manila',
      'All Ports - Singapore',
      'Busan', 'Daesan', 'Inchion', 'Masan', 'Pohang', 'Ulsan', 'Yosu',
      'Colombo', 'Galle',
      'Bangkok', 'Laem Chabang', 'Map Ta Phut', 'Rayong', 'Sriracha',
      'Ajman', 'Dubai', 'Fujairah', 'Khor Fakkan', 'Jebel Ali', 'Port Rashid', 'Sharjah'
    ],
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'europe',
    name: 'Europe',
    emoji: '🌍',
    description: 'Serving major European business centers',
    cities: [
      'All Ports - Belgium',
      'All Ports - Croatia',
      'Larnaca', 'Limassol', 'Vassilikos',
      'Copenhagen', 'Esblerg', 'Fredericia', 'Kalundborg',
      'Helsinki', 'Porvoo',
      'Fos', 'Lavera', 'Dunkirk', 'Le Havre', 'Marseilles',
      'Bremen', 'Brernerhaven', 'Hamburg', 'Lubeck', 'Rostock', 'Stadersand', 'Wilhelmshaven',
      'All Ports - Gibraltar',
      'Eleusis', 'Pachi', 'Piraeus',
      'All Ports - Ireland',
      'Augusta', 'Brindisi', 'Genoa', 'Gioia Tauro', 'Livorno', 'Milazza', 'Naples', 'Ravenna', 'Taranto',
      'Riga', 'Ventspils',
      'All Ports - Malta',
      'All Ports - Netherlands',
      'Alesund', 'Bergen', 'Fredrikstan', 'Karsto', 'Kristiansund', 'Oslo', 'Mongstad', 'Slagen', 'Stavanger', 'Tromso',
      'Gdansk', 'Gdynia', 'Sopot',
      'Leixoes', 'Lisbon', 'Setubal', 'Sines',
      'Constantza',
      'Algeciras', 'Barcelona', 'Bilbao', 'Cadiz', 'Huelva', 'La Coruna', 'Malaga', 'Palma', 'Tarragona', 'Tenerife', 'Valencia',
      'Brofijorden', 'Gothenburg', 'Karlstad', 'Kristinehamn', 'Stenungsund', 'Stockholm',
      'All Ports - Turkey',
      'All Ports - UK'
    ],
    color: 'from-green-400 to-teal-500'
  },
  {
    id: 'north-america',
    name: 'North America',
    emoji: '🌎',
    description: 'Coast-to-coast coverage across North America',
    cities: [
      'Freeport - Bahamas',
      'Dartmouth', 'Halifax', 'Montreal', 'Ottawa', 'Quebec', 'Vancouver',
      'Point Fortin', 'Point Lisas', 'Pointe-a-Pierre', 'Port of Spain - Trinidad & Tobago',
      'St. Eustatius', 'Curaçao - Netherlands Antilles',
      'St. Croix - US Virgin Islands',
      'Balboa', 'Cristóbal - Panama',
      'Baltimore, MD', 'Boston, MA', 'Charleston, SC', 'Houston, TX', 'Jacksonville, FL',
      'Long Beach, CA', 'Los Angeles, CA', 'Miami, FL', 'Mobile, AL', 'New Orleans, LA',
      'New York/New Jersey', 'Norfolk, VA', 'Oakland, CA', 'Philadelphia, PA',
      'Port Everglades, FL', 'Port of Savannah, GA', 'San Diego, CA', 'San Francisco, CA',
      'Seattle, WA', 'Tacoma, WA'
    ],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'south-america',
    name: 'South America',
    emoji: '🌎',
    description: 'Connecting vibrant South American markets',
    cities: [
      'Buenos Aires', 'Bahia Blanca - Argentina',
      'Macaé', 'Rio de Janeiro', 'Santos', 'São Sebastião', 'Paranaguá', 'Itajaí', 'Rio de Grande - Brazil',
      'Quintero', 'San Antonio', 'Valparaíso - Chile',
      'Willemstad', 'All Ports - Curaçao',
      'Guayaquil - Ecuador'
    ],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'australia',
    name: 'Australia & Oceania',
    emoji: '🌏',
    description: 'Serving the Pacific region and Oceania',
    cities: [
      'Brisbane', 'Darwin', 'Geelong', 'Melbourne', 'Sydney',
      'Auckland', 'Hastings', 'Napier', 'Tauranga', 'Wellington',
      'Port Mauritius'
    ],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'antarctica',
    name: 'Antarctica',
    emoji: '🧊',
    description: 'Research stations and scientific outposts',
    cities: ['McMurdo Station', 'Palmer Station', 'Rothera Station', 'Belgrano II Base', 'Halley Station'],
    color: 'from-slate-400 to-gray-500'
  }
];

export default function OurReach() {
  
  const [openContinent, setOpenContinent] = useState<string | null>(null);

  const toggleContinent = (id: string) => {
    setOpenContinent((prev) => (prev === id ? null : id));
  };
  return (
    <>
     <BackgroundCarousel/>
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

          <div className="flex w-full h-[88vh] overflow-hidden mt-[12vh]">
        {/* Left Side - Earth Image */}
        <div
          className="w-1/2 h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url('./earth.png')` }}
        />

        {/* Right Side - Content */}
        <div className="w-1/2 h-full flex flex-col bg-white/5 m-4 mr-10 right-scroll mb-6 backdrop-blur-md">
     

      <div className="flex-1 overflow-y-auto px-6 pb-6">
  <ul className="space-y-4">
    {continentsData.map((continent) => (
      <li key={continent.id}>
        <div
          onClick={() => toggleContinent(continent.id)}
          className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
        >
          {/* Main Card Content */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-start gap-4">
              <span className="text-2xl">{continent.emoji}</span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">{continent.name}</h3>
                <p className="text-sm text-gray-600">{continent.description}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${
                openContinent === continent.id ? 'rotate-180' : ''
              }`}
            />
          </div>

          {/* Accordion Inner Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-b-xl ${
              openContinent === continent.id ? 'max-h-[200px] p-6 m-2 shadow-2xl pt-0 ' : 'max-h-0 p-0'
            }`}
          >
            {openContinent === continent.id && (
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {continent.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
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
