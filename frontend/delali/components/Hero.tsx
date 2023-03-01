import React from "react";
import { BsArrowBarDown, BsArrowDown } from "react-icons/bs";
import GlassyButton from "./GlassyButton";
import { Link } from "react-scroll";
import Image from "next/image";
// import { useSession } from "next-auth/react";

const Hero = () => {
  // const { data: session } = useSession();
  return (
    <section className="" id="home">
      <div className="">
        <div className="relative">
          <h1
            className="
          heading_primary"
          >
            Hi,
            <br />
            I'm Delali,
            <br />
            web developer
          </h1>{" "}
        </div>
        <h5>FullStack / Django / Flask / React</h5>

        <GlassyButton name="Contact Me!" glow="#3cc39f" link="#contact" />
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
