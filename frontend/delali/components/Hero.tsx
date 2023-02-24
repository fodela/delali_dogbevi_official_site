import React from "react";
import { BsArrowBarDown, BsArrowDown } from "react-icons/bs";
import GlassyButton from "./GlassyButton";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className=" hero " id="home">
      <div className="header_text">
        <h1 className="heading_primary">
          Hi,
          <br />
          I'm Delali,
          <br />
          web developer
        </h1>
        <h5>FullStack / Django / Flask / React</h5>
        {/* <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        > */}
        <GlassyButton name="Contact Me!" glow="#00ff" link="#contact" />
        {/* </Link> */}
      </div>

      <div className="absolute bottom-8 -left-7 scroll_down  animate-bounce ">
        <p>scroll down </p> <BsArrowDown />
      </div>
      <div className=" absolute bottom-8 -right-7 scroll_down animate-bounce ">
        <p>scroll down </p> <BsArrowDown />
      </div>
    </section>
  );
};

export default Hero;
