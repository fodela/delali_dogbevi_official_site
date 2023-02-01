import React from "react";
import GlassyButton from "../GlassyButton";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Effect",
    description:
      "A productivity app that combines the Einshover and Pomodoro Technique to help user prioritize their work and improve their focus",
    thumbnailLink: "#",
    liveLink: "",
    stack: ["Python", "Flask", "React"],
    gifLink: "",
  },
  {
    title: "Effect",
    description:
      "A productivity app that combines the Einshover and Pomodoro Technique to help user prioritize their work and improve their focus",
    thumbnailLink: "#",
    liveLink: "",
    stack: ["Python", "Flask", "React"],
    gifLink: "",
  },
  {
    title: "Effect",
    description:
      "A productivity app that combines the Einshover and Pomodoro Technique to help user prioritize their work and improve their focus",
    thumbnailLink: "#",
    liveLink: "",
    stack: ["Python", "Flask", "React"],
    gifLink: "",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2 className="heading_secondary">My Portfolio</h2>
      <p>A small gallery of my recent projects</p>
      <GlassyButton name="See More!" />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
