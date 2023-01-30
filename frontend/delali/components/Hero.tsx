import React from "react";
import GlassyButton from "./GlassyButton";

const Hero = () => {
  return (
    <section className=" hero">
      <div className="header_text">
        <h1 className="text-5xl font-bold text-white">
          Hi,
          <br />
          I'm Delali,
          <br />
          web developer
        </h1>
        <h5>FullStack / Django / Flask / React</h5>
        <GlassyButton name="Contact Me!" glow="#f00" />
      </div>
      <div className=" absolute bottom-0 left-0">
        <span className="animate-bounce ">scroll down</span> <span>&rarr;</span>
      </div>
      <div className=" bottom-0 right-0 absolute  flex rotate-90">
        <span className="animate-bounce ">scroll down</span> <span>&rarr;</span>
      </div>
    </section>
  );
};

export default Hero;
