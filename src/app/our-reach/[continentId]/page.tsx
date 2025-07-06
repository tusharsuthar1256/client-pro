import { MapPin } from 'lucide-react';

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

export default function ContinentPage({ params }: { params: { continentId: string } }) {
  const continent = continentsData.find((c) => c.id === params.continentId);

  if (!continent) {
    return <div className="p-10 text-center text-xl text-red-500">Continent not found</div>;
  }

  return (
     <>
          <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
    <div className="min-h-screen py-20 px-6 ">
      <div className="max-w-4xl mx-auto">
        <div className={`rounded-xl p-8 shadow-md bg-gradient-to-r ${continent.color} text-white`}>
          <h1 className="text-4xl font-bold mb-2">{continent.emoji} {continent.name}</h1>
          <p className="text-white/90">{continent.description}</p>
        </div>

        <div className="mt-10 h-[300px] overflow-scroll ">
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-blue-900 mr-2 " />
            <h2 className="text-2xl font-semibold text-white">Cities & Ports</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {continent.cities.map((city) => (
              <div
                key={city}
                className="bg-white text-black p-4 rounded-lg shadow-sm border hover:shadow-md transition"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     </>
  );
}
