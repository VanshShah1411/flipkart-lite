import React from "react";

const SecondSection = ({ image }) => {
  return (
    // bg me img
    <div className="p-8 h-64 second-section-card">
      <p>Professional Clothes for noobs</p>
      {/* text */}
      <button className="bg-black text-white shadow rounded">
        Shop now <i className="fa-solid fa-chevron-right"></i>
      </button>
      {/* shop now */}
    </div>
  );
};

export default SecondSection;
