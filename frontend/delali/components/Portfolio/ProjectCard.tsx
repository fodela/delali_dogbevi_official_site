import { MouseEventHandler, useState } from "react";
import GlassyButton from "../GlassyButton";

interface Props {
  project: {
    title: string;
    description: string;
    thumbnailLink: string;
    liveLink: string;
    stack: string[];
    gifLink: string;
    githubLink: string;
  };
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="relative group z-30 ">
      <div
        className=" top-0 left-0 right-0 bottom-0   p-2 h-96 w-72 transition-all  flex flex-col  relative
      "
      >
        <video
          className="rounded-md hide group-hover:opacity-100 w-full"
          src={project.thumbnailLink}
          controls={true}
        />
        <div className="flex">
          <GlassyButton
            name="live link"
            link={project.liveLink}
            target="_blank"
          />
          <GlassyButton
            name="Github"
            link={project.githubLink}
            target="_blank"
          />
        </div>
      </div>
      <div
        className={`project absolute top-0 left-0 max-w-lg shadow-lg h-full w-full bg-[rgba(255,255,255,.1)] p-2 backdrop-blur-lg
        rounded-lg group-hover:animate-reveal_top group-hover:-z-30 group-hover:blur-lg`}
      >
        <img className="w-full  rounded-lg" src={project.gifLink} alt="" />

        <h3 className="text-lg font-bold text-white ">{project.title}</h3>
        <p className="h-2/5">{project.description}</p>
        <div>
          <span className="font-bold text-lg text-white">Stack: </span>
          {project.stack.map((skill, index) => (
            <span key={index}>{skill} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
