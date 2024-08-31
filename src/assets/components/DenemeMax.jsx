import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const DenemeMax = ({ data, getLocationByIp }) => {
  const [valueIp, setValueIp] = useState("");

  const handleClick = () => {
    getLocationByIp(valueIp);
  };

  return (
    <div className="absolute top-0 left-0 right-0 flex flex-col items-center z-10 pt-6 px-6 max-w-[1440px] mx-auto">
      <h1 className="text-white text-2xl font-medium mb-6">
        IP Address Tracker
      </h1>
      <div className="flex w-full mb-6">
        <input
          value={valueIp}
          type="text"
          placeholder="Search for any IP address or domain"
          className="flex-grow rounded-l-xl py-3 px-4 text-sm"
          onChange={(e) => setValueIp(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-black rounded-r-xl flex items-center justify-center p-4 hover:bg-gray-800 transition-colors"
        >
          <ArrowRight className="text-white" size={18} />
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full text-center max-w-[327px]">
        {[
          { label: "IP Address", value: data.ip },
          {
            label: "Location",
            value: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
          },
          { label: "Timezone", value: `UTC ${data.location.timezone}` },
          { label: "ISP", value: data.isp },
        ].map((item, index) => (
          <div key={index} className={`${index > 0 ? "mt-4" : ""}`}>
            <h4 className="text-[10px] text-dark-gray uppercase mb-1">
              {item.label}
            </h4>
            <p className="text-xl font-medium text-very-dark-gray">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DenemeMax;
