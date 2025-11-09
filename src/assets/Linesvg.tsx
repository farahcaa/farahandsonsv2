import React from "react";

const Linesvg = () => {
  return (
    <div className=" flex justify-center">
      <svg
        className="overflow-hidden xs:w-[400px] lg:w-[600px]"
        width="800"
        height="12"
        viewBox="0 0 800 12"
      >
        <line x1="0" y1="6" x2="800" y2="6" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default Linesvg;
