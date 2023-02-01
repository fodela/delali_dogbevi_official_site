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
  };
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="relative group z-30 ">
      <div
        className=" top-0 left-0 right-0 bottom-0   p-2 h-96 w-72 transition-all  flex items-center relative
      "
      >
        <video
          className="rounded-md hide group-hover:opacity-100 w-full"
          src="trivia_project.mp4"
          controls={true}
          autoPlay={true}
        />
        <div className="absolute  top-30 hide rounded-full left-0 opacity-0 bottom-30 bg-[#0000005a] right-0 flex items-center justify-center hover:opacity-100 ">
          <GlassyButton name="Live Link" />
        </div>
      </div>
      <div
        className={`project absolute top-0 left-0 max-w-lg shadow-lg h-full w-full bg-[rgba(255,255,255,.1)] p-2 backdrop-blur-lg
        rounded-lg group-hover:animate-reveal_top group-hover:-z-30 group-hover:blur-lg`}
        // onMouseOver={(e) => animationHandler(e)}
        // onMouseLeave={(e) => setTimeout(() => setIsHovered(false), 3000)}
      >
        <img className="w-full h-3/5 rounded-lg" src="logo.png" alt="" />

        <h3 className="text-lg font-bold text-white ">{project.title}</h3>
        <p>{project.description}</p>
        <div>
          <span className="font-bold text-lg text-white">Stack: </span>
          {project.stack.map((skill) => (
            <span>{skill} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
