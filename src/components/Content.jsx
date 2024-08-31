import React, { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";

const Content = ({ data, getLocationByIp }) => {
  const [valueIp, setValueIp] = useState("");
  console.log(valueIp);

  const handleClick = () => {
    getLocationByIp(valueIp);
  };
  return (
    <div className="absolute top-0 right-0  justify-center items-center flex flex-col z-10 w-full max-sm:px-4">
      <h1 className="text-white  text-3xl font-semibold mt-5 text-center ">
        IP Address Tracker
      </h1>
      <div className="flex my-6 w-full justify-center   max-[`700px`]:bg-slate-800   ">
        <input
          value={valueIp}
          type="text"
          placeholder="Search for any IP address or domain"
          className="rounded-l-xl p-5 w-[550px] "
          onChange={(e) => setValueIp(e.target.value)}
        />
        <div
          onClick={handleClick}
          className="bg-black rounded-r-xl flex items-center p-4 "
        >
          <img className="max-w-[20px]" src={arrow} alt="Arrow" />
        </div>
      </div>
      <div className="min-h-52 w-5/6 bg-white z-50 relative rounded-xl shadow-md mt-7 flex py-8 max-lg:flex-col max-lg:justify-center max-lg:w-auto max-lg:items-center max-lg:text-center  ">
        <div className="flex flex-col borderright w-1/4 pl-10 max-lg:items-center max-lg:justify-center">
          <h4 className=" ">IP Address</h4>
          <p className="">{data.ip}</p>
        </div>
        <div className="flex flex-col borderright  w-1/4 pl-10 max-lg:items-center max-lg:justify-center ">
          <h4 className="max-lg:mt-4">Location</h4>
          <p className="min-w-56">
            {data.location.city}, {data.location.region},{" "}
            {data.location.country}
          </p>
        </div>
        <div className="flex flex-col borderright  w-1/4 pl-10 max-lg:items-center max-lg:justify-center">
          <h4 className="max-lg:mt-4">Timezone</h4>
          <p className="">UTC{data.location.timezone}</p>
        </div>
        <div className="flex flex-col lastelement w-1/4 pl-10 max-lg:items-center max-lg:justify-center">
          <h4 className="max-lg:mt-4">ISP</h4>
          <p className="">{data.isp || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
