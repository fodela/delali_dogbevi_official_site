import React from "react";
import GlassyButton from "../GlassyButton";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Impact Nutrition Consult",
    description:
      "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
    thumbnailLink: "omnifood_laptop.webm",
    liveLink: "https://impactnutritionconsult.com",
    stack: ["Nextjs", "TailwindCss", "typescript", "PostgreSQL", "Node"],
    gifLink: "omnifood.gif",
    githubLink: "",
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
  {
    title: "Thykel-Assistant",
    description:
      "Experience AI chatbot with advanced voice recognition. Speak naturally, let ChatGPT handle the rest. Try voice-driven AI technology now!",
    thumbnailLink: "effect.gif",
    liveLink: "coming soon.",
    stack: ["React", "Typescript", "Firebase"],
    gifLink: "effect.gif",
    githubLink: "",
  },
];

const Portfolio = () => {
  return (
    <section>
      <div className="bg_header">Works</div>
      <h2 className="heading_secondary">What I have done</h2>
      <p>A small gallery of my recent projects</p>
      <GlassyButton name="See More!" link="portfolio" />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
