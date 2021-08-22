import React from "react";
// import profesionalNoob from "../../../assets/images/professional_noob.jpg";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        {/* Image */}
        <h1 className="text-white text-center text-3xl lg:text-4xl font-semibold">
          We sell products that fill your life with css.
        </h1>
      </div>
      <SecondSection />
    </div>
  );
};

export default Home;
