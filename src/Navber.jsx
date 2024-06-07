import React from "react";

const Navber = () => {
  let toggletheme = () => {
    document.documentElement.classList.add("dark");
  };
  let theme = () => {
    document.documentElement.classList.remove("dark");
  };
  return (
    <>
      <div className="container mx-auto bg-blue-900 flex justify-between dark:bg-red-800">
        <img
          className="w-20 align-middle ml-4"
          src="../images/logo.png"
          alt="logo"
        />
        <div className="flex items-center">
          <ul className="flex gap-8 items-center text-white">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <button
            onClick={toggletheme}
            className=" ml-20 mr-10 py-3 px-4 bg-orange-700 rounded-md text-white"
          >
            On
          </button>
          <button
            onClick={theme}
            className=" ml-20 mr-10 py-3 px-4 bg-orange-700 rounded-md text-white"
          >
            Off
          </button>
        </div>
      </div>
    </>
  );
};

export default Navber;
