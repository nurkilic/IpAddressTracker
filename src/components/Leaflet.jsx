import React, { useEffect, useRef } from "react";
const Leaflet = ({ data }) => {
  const mapRef = useRef(null);

  const createleaflet = () => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    mapRef.current = L.map("map").setView(
      [data.location.lat +0.0065, data.location.lng],
      15
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);

    var iconLocation = L.icon({
      iconUrl: "/icon-location.svg",
      iconSize: [50, 66],
      iconAnchor: [25, 66], // point of the icon which will correspond to marker's location
    });
    L.marker([data.location.lat, data.location.lng], {
      icon: iconLocation,
    }).addTo(mapRef.current);
  };
  useEffect(() => {
    createleaflet();
  }, [data]);

  return <div id="map" className="h-[65%] w-full z-0 relative"></div>;
};

export default Leaflet;
