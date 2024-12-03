/* eslint-disable react/no-unescaped-entities */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/mapStyles.css';

const Map = () => {
  return (
    <div className="map-cls">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100%', borderRadius: '10px' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <div className="popup-content">
              <h3>McDonald's</h3>
              <p>South London</p>
              <p 
              style={{
                fontSize: "x-small",
                fontWeight: "normal"
                }}>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
              <p>Phone number: <span>+934443-43</span></p>
              <p>Website:</p>
              <span>http://mcdonalds.uk/</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
