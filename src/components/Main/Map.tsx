import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import restaurants from '../../assets/restaurants.json'

function Map() {
  return(
    <div id="etterem" className="flex flex-col items-center py-15">
      <h1 className="text-4xl font-bold text-center mb-10 uppercase px-10">You can find us here</h1>
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
          <Marker key={restaurant.id} position={restaurant.position as [number, number]}>
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