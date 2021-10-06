import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Content = () => {
  return (
    <div className="flex justify-between bg-gray-700">
      <NavLeft />
      <h1 className="p-8">Content</h1>
      <NavRight />
    </div>
  );
};

export default Content;
