import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Deneme = ({ data, getLocationByIp }) => {
  const [valueIp, setValueIp] = useState("");

  const handleClick = () => {
    getLocationByIp(valueIp);
  };

  return (
    <div className="absolute top-0 left-0 right-0 flex flex-col items-center z-10 pt-8 px-4">
      <h1 className="text-white text-3xl font-semibold mb-8">
        IP Address Tracker
      </h1>
      <div className="flex w-full max-w-xl mb-12">
        <input
          value={valueIp}
          type="text"
          placeholder="Search for any IP address or domain"
          className="flex-grow rounded-l-lg p-4 text-sm"
          onChange={(e) => setValueIp(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-black rounded-r-lg flex items-center justify-center p-4 hover:bg-gray-800 transition-colors"
        >
          <ArrowRight className="text-white" size={20} />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {[
          { label: "IP Address", value: data.ip },
          {
            label: "Location",
            value: `${data.location.city}, ${data.location.region}, ${data.location.country}`,
          },
          { label: "Timezone", value: `UTC ${data.location.timezone}` },
          { label: "ISP", value: data.isp },
        ].map((item, index) => (
          <div
            key={index}
            className={`${
              index < 3 ? "md:border-r md:border-gray-300" : ""
            } md:px-6`}
          >
            <h4 className="text-gray-500 text-xs uppercase mb-2">
              {item.label}
            </h4>
            <p className="text-xl font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deneme;
