import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaG9yYWNpb3Bhcmlzb3R0byIsImEiOiJjbHdzYXQ0M3AwNWRnMmpvanBvcjI1cW8xIn0.f7l4o34GO6_BOCjBedyFUw";

const Map = ({ location }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.4512);
  const [lat, setLat] = useState(43.6568);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    let geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.current.addControl(geocoder);

    geocoder.query(location);

    geocoder.on("result", (e) => {
      const { center } = e.result;
      map.current.flyTo({
        center: center,
        zoom: 12,
      });
    });

    const controls = document.getElementsByClassName("mapboxgl-ctrl-top-right");
    if (controls.length > 0) {
      controls[0].style.display = "none";
    }
  }, []);

  const randomLocation = {
    center: [
      Math.random() * 360 - 180, // Random longitude between -180 and 180
      Math.random() * 180 - 90, // Random latitude between -90 and 90
    ],
  };

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          height: "100%",
          width: "950px",
        }}
      />
    </div>
  );
};

export default Map;
