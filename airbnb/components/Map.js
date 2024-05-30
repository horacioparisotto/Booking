import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: 600,
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/horacioparisotto/clwsayzm303ug01qo5bw4f7h7"
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: viewport.width, height: viewport.height }}
      initialViewState={{
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        zoom: viewport.zoom,
      }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          <Popup latitude={result.lat} longitude={result.long}>
            {result.title}
          </Popup>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
