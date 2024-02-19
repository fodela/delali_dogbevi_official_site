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
      <div
        className=" 
        text-[17vmin] font-extrabold absolute  text-color_gray_for_light_mode dark:text-color_gray_for_dark_mode right-4 bottom-4 text-right -rotate-[40deg]  blur-sm 
uppercase "
      >
        <p className="">Frontend</p> <p className="pr-20 lg:pr-56">Backend</p>{" "}
        <p>UI/UX</p>
      </div>
      <div className="">
        <h1 className="relative">
          <span className="md:text-xl capitalize text-black dark:text-white block">
            A full Stack Experience
          </span>
          <span className=" uppercase heading_primary pl-2">
            That Br
            <span className="before:border before:rounded-full before:w-96 before:h-96">
              i
            </span>
            ngs It <br />
            all Together
          </span>{" "}
        </h1>
        <h2>FullStack / Django / Flask / React</h2>

        <div className="flex gap-4 mt-8">
          {" "}
          <GlassyButton name="My Portfolio" glow="#3cc39f" link="portfolio" />
          <GlassyButton name="Contact me" link="#contact" />
        </div>
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
