import React from "react";

const AppNavbar = () => {
  return (
    <header className="flex justify-between bg-gray-400 bg-opacity-50">
      <h1 className="m-4 font-bold">LOGO</h1>
      <div className="m-4 flex">
        <div className="mr-3">Navlink</div>
        <div className="mr-3">Navlink</div>
        <div className="mr-3">Navlink</div>
      </div>
      <div className="m-4 flex">
        <div className="mr-3">Navcom</div>
        <div className="mr-3">Navcom</div>
        <div className="mr-3">Navcom</div>
      </div>
    </header>
  );
};

export default AppNavbar;
