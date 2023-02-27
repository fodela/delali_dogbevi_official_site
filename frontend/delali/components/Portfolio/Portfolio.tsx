import React from "react";
import GlassyButton from "../GlassyButton";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Omnifood",
    description:
      "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!",
    thumbnailLink: "omnifood_laptop.webm",
    liveLink: "https://omnifood-fo.netlify.app/",
    stack: ["html", "css", "javascript"],
    gifLink: "omnifood.gif",
    githubLink: "https://github.com/fodela/Omnifood-Project",
  },
  {
    title: "Effect",
    description:
      "A productivity app that combines the Einshover and Pomodoro Technique to help user prioritize their work and improve their focus",
    thumbnailLink: "effect_laptop.webm",
    liveLink: "https://effect-fo.vercel.app/",
    stack: ["Python", "Flask", "Javascript", "React"],
    gifLink: "effect.gif",
    githubLink: "https://github.com/fodela/Effect",
  },
  // {
  //   title: "Thykel-Assistant",
  //   description:
  //     "Cutting-edge voice recognition technology. Just speak naturally and let ChatGPT do the rest, whether you're a student, researcher, or simply curious. Experience the power of voice-driven AI technology for yourself!",
  //   thumbnailLink: "effect.gif",
  //   liveLink: "coming soon.",
  //   stack: ["React", "Typescript", "Firebase"],
  //   gifLink: "effect.gif",
  // },
];

const Portfolio = () => {
  return (
    <section>
      <div className="bg_header">Works</div>
      <h2 className="heading_secondary">What I have done</h2>
      <p>A small gallery of my recent projects</p>
      <GlassyButton name="See More!" />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
