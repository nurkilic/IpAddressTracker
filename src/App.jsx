import axios from "axios";
import "./App.css";
import Content from "./assets/components/Content";
import Header from "./assets/components/Header";
import Leaflet from "./assets/components/Leaflet";
import { useState } from "react";
import Deneme from "./assets/components/deneme";

function App() {
  const startingIp = {
    ip: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      lat: 32.69922,
      lng: -117.11281,
      postalCode: "",
      timezone: "-07:00",
      geonameId: 5375481,
    },
    domains: [
      "12safhoie.top",
      "167853.xyz",
      "20070217.xyz",
      "20iiij.cyou",
      "21vek-dev.by",
    ],
    as: {
      asn: 15169,
      name: "GOOGLE",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
  };
  const denemeIp = {
    ip: "192.212.174.101",
    location: {
      country: "US",
      region: "California",
      city: "Rosemead",
      lat: 34.08057,
      lng: -118.07285,
      postalCode: "91770",
      timezone: "-07:00",
      geonameId: 5388867,
    },
    as: {
      asn: 7127,
      name: "SCE",
      route: "192.212.0.0/15",
      domain: "",
      type: "",
    },
    isp: "",
  };

  const [data, setData] = useState(startingIp);

  const getLocationByIp = async (ipAdress) => {
    ipAdress = ipAdress || "8.8.8.8";
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_wALe4FIn0GOF6urfiuXpG1hg26tJ2&ipAddress=${ipAdress}`;
    await axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-screen relative min-w-72">
      {/* <Deneme data={data} getLocationByIp={getLocationByIp} /> */}
      <Content data={data} getLocationByIp={getLocationByIp} />
      <Header />
      <Leaflet data={data} />
    </div>
  );
}

export default App;
