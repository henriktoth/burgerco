import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    const restaurants = [
    {
      id: 1,
      position: [47.4979, 19.0402] as [number, number],
      name: "burger.CO Belváros",
      address: "Váci utca 15, Budapest"
    },
    {
      id: 2,
      position: [47.5186, 19.0718] as [number, number],
      name: "burger.CO Pest",
      address: "Rákóczi út 42, Budapest"
    },
    {
      id: 3,
      position: [47.4734, 19.0617] as [number, number],
      name: "burger.CO Buda",
      address: "Bartók Béla út 23, Budapest"
    },
    {
      id: 4,
      position: [47.5316, 19.0356] as [number, number],
      name: "burger.CO Újlipótváros",
      address: "Szent István körút 8, Budapest"
    },
    {
      id: 5,
      position: [47.4561, 19.0708] as [number, number],
      name: "burger.CO Ferencváros",
      address: "Üllői út 89, Budapest"
    }
  ];

  return(
    <div className="flex flex-col items-center py-15">
      <h1 className="text-4xl font-bold text-center mb-10 uppercase">Itt találhatsz meg minket</h1>
      <MapContainer 
        center={[47.4979, 19.0402]} 
        zoom={12} 
        scrollWheelZoom={true}
        className="rounded-xl shadow-xl h-[400px] w-[900px] max-w-[90vw]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map((restaurant) => (
          <Marker key={restaurant.id} position={restaurant.position}>
            <Popup>
              <strong>{restaurant.name}</strong><br />
              {restaurant.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map;