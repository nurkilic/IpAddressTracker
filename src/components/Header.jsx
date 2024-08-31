import React from "react";
import backgroundImage from "../assets/images/pattern-bg-desktop.png";

const Header = () => {
  return (
    <div
      className=" w-full bg-cover h-[35%]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default Header;
