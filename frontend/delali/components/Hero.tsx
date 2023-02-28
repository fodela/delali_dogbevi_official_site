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
          {/* <div className="absolute right-0 top">
            <Image
              className=""
              src="/images/hero.png"
              width={250}
              height={250}
              alt="a headshot of delali smiling"
            />
          </div> */}
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
        {/* <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        > */}
        <GlassyButton name="Contact Me!" glow="#3cc39f" link="#contact" />
        {/* {session ? (
          <GlassyButton name="Sign out" />
        ) : (
          <GlassyButton name="Sign in" />
        )} */}
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
