import React, { MouseEventHandler } from "react";
import GlassyButton from "./GlassyButton";
import Image from "next/image";

const About = () => {
  // const aboutInfo =
  //   "I'm a full stack developer with a unique twist - a medical education background! My strong attention to detail, critical thinking abilities, and excellent collaboration skills combined with my passion for productivity and AI, make me a valuable asset to any team. I'm a skilled problem solver, a great teacher, and I always have a witty comment at the ready. My goal is to find a company where I can work on innovative projects, continuously challenge myself, and have a little fun along the  way. In my free time, you'll find me playing football or immersed in a drama movie. Let's work together and create something amazing!";
  // const infoArray = aboutInfo.split("");

  // const animationHandler: MouseEventHandler = (e: any) => {
  //   if (!e.target.className.includes("animate-smoke")) {
  //     e.target.className += " animate-smoke";
  //   }
  // };
  return (
    <section className="" id="about">
      <div className="bg_header">About</div>
      <h2 className="heading_secondary">Me, Myself and I</h2>
      <div className="max-w-screen-lg mx-auto grid  sm:grid-cols-2 gap-8 items-center">
        <Image
          className=""
          src="/images/about.png"
          width={463}
          height={700}
          alt="a picture of delali sitting in a chair"
        />
        <div className=" flex flex-col gap-4">
          <h3 className="text-3xl">Delali Jean-Pierre Dogbevi</h3>
          <h4 className="text-xl">Full-stack Developer</h4>
          <p>
            I'm a full stack developer with a unique twist - a medical education
            background! My strong attention to detail, critical thinking
            abilities, and excellent collaboration skills combined with my
            passion for productivity and AI, make me a valuable asset to any
            team. I'm a skilled problem solver, a great teacher, and I always
            have a witty comment at the ready. My goal is to find a company
            where I can work on innovative projects, continuously challenge
            myself, and have a little fun along the way. In my free time, you'll
            find me playing football or immersed in a drama movie. Let's work
            together and create something amazing!
          </p>
          <div className="flex gap-8">
            {" "}
            <GlassyButton name="Download CV" link="/cv.pdf" target="_blank" />
            <GlassyButton glow="##3cc39f" name="Hire Me" link="/contact" />
          </div>
        </div>
      </div>
      <GlassyButton name="Read More" link="about" />
    </section>
  );
};

export default About;

/*
theme: {
    extend: {
      colors: {
        color_gray_for_dark_mode: "rgba(255, 255, 255, 0.1)",
        color_gray_for_light_mode:"rgba(0,0,0,.05)"
      },
      keyframes: {
        reveal_top: {
          "0%": {
            transform: "translateY(0)",
            zIndex: "30",
            filter: "blur(0)",
          },
          "50%": {
            transform: "translateY(-100%)",
          },
          "75%": {
            // filter: "blur(13px)",
            zIndex: "-20",
            filter: "blur(0)",
          },
          "95%": {
            zIndex: "-20",
            filter: "blur(13px)",
          },

          "100%": {
            transform: "translateY(0%)",
            // opacity: "0",
            display: "none",
            zIndex: "-20",
            filter: "blur(23px)",
          },
        },
        reveal_down: {
          "0%": {
            transform: "translateY(0)",
            filter: "blur(23px)",
            zIndex: "-20",
          },
          "50%": {
            transform: "translateY(-100%)",
            filter: "blur(0)",
            zIndex: "0",
          },

          "100%": {
            transform: "translateY(0%)",
            zIndex: "30",
            display: "none",
          },
        },
        smoke: {
          "0%": {
            opacity: 1,
            filter: "blur(0)",
            transform: "translate(0) rotate(0) scale(1)",
          },
          "50%": {
            opacity: 1,
            pointerEvents: "none",
          },
          "99%": {
            opacity: 0,
            // position: "absolute",
            filter: "blur(20px)",
            transform: "translate(300px, -300px) rotate(720deg) scale(4)",
          },
          "100%": {
            opacity: 0,
            // position: "absolute",
            filter: "blur(20px)",
            transform: "translate(0) rotate(0deg) scale(1)",
          },
        },
        hide: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        reveal_top: "reveal_top 2s  ease-in-out",
        reveal_down: "reveal_down 2s ease-in-out ",
        smoke: "smoke 3s linear forwards",
        hide: "hide 2s linear  ",
      },
      // fontFamily:{
      //   sans:["var(--fontName)"]
      // }
    },
  },

  */
