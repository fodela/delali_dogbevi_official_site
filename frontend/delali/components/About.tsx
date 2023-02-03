import React, { MouseEventHandler } from "react";

const About = () => {
  const aboutInfo =
    "I'm a full stack developer with a unique twist - a medical education background! My strong attention to detail, critical thinking abilities, and excellent collaboration skills combined with my passion for productivity and AI, make me a valuable asset to any team. I'm a skilled problem solver, a great teacher, and I always have a witty comment at the ready. My goal is to find a company where I can work on innovative projects, continuously challenge myself, and have a little fun along the  way. In my free time, you'll find me playing football or immersed in a drama movie. Let's work together and create something amazing!";
  const infoArray = aboutInfo.split("");
  console.log(infoArray);

  const animationHandler: MouseEventHandler = (e: any) => {
    if (!e.target.className.includes("animate-smoke")) {
      e.target.className += " animate-smoke";
    }
  };
  return (
    <section className="overflow-hidden">
      <h2 className="heading_secondary">About</h2>
      <p>
        {infoArray.map((letter) =>
          letter === " " ? (
            <span> </span>
          ) : (
            <span
              className="relative inline-block cursor-pointer"
              onMouseOver={(e) => animationHandler(e)}
            >
              {letter}
            </span>
          )
        )}
      </p>
    </section>
  );
};

export default About;
