import React from "react";
import GlassyButton from "../GlassyButton";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

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
    // <section>
    //   <div className="bg_header">Works</div>
    //   <h2 className="heading_secondary">What I have done</h2>
    //   <p>A small gallery of my recent projects</p>
    //   <GlassyButton name="See More!" link="portfolio" />
    //   <div className="flex flex-wrap items-center justify-center gap-6">
    //     {projects.map((project, index) => (
    //       <ProjectCard project={project} key={index} />
    //     ))}
    //   </div>
    // </section>
    <section className="grid md:grid-cols-2 items-center gap-4 mx-auto max-w-screen-lg">
      {projects.map((project, index) => (
        <article
          key={index}
          className=" border p-4 rounded-lg max-w-lg"
          title={project.title}
        >
          <figure>
            <Image
              src={`/${project.gifLink}`}
              width={500}
              height={300}
              className="border rounded"
              alt={`image `}
            />
            <div>Personal project</div>
            <figcaption className="text-3xl font-bold text-black dark:text-white mt-5 mb-2">
              {project.title}
            </figcaption>
          </figure>
          <div className="flex flex-col gap-2 text-sm ">
            <p>{project.description}</p>
            <div className="flex gap-3">
              <span className="font-bold text-black dark:text-white">
                Stack:
              </span>{" "}
              <div className="flex gap-2">
                {project.stack.map((stack) => (
                  <span>{stack}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="flex flex-col uppercase border-l-2 px-2 py-1 gap-1">
                <span className="text-xs">completion:</span>{" "}
                <span className="font-bold text-black dark:text-white">
                  6 weeks
                </span>
              </div>
              <div className="flex flex-col uppercase border-l-2 px-2 py-1 gap-1">
                <span className="text-xs">Role:</span>{" "}
                <span className="font-bold text-black dark:text-white">
                  Frontend Team-lead
                </span>
              </div>
              <div className="flex flex-col uppercase border-l-2 px-2 py-1 gap-1">
                <span className="text-xs">View</span>{" "}
                <span className="font-bold text-black dark:text-white">
                  Full Detail
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
