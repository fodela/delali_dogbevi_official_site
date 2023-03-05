import { MouseEventHandler, useState } from "react";
import GlassyButton from "../GlassyButton";
import Image from "next/image";

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
        className=" top-0 left-0 right-0 bottom-0 p-2 h-96 w-72 transition-all  flex flex-col  relative
      "
      >
        <video
          className="rounded-md hide group-hover:opacity-100 w-full"
          src={project.thumbnailLink}
          controls={true}
        />
        <div className="flex rounded-md hide group-hover:opacity-100">
          <GlassyButton
            name="live link"
            link={project.liveLink}
            target="_blank"
          />
          {project.githubLink && (
            <GlassyButton
              name="Github"
              link={project.githubLink}
              target="_blank"
            />
          )}
        </div>
      </div>
      <div
        className={`project absolute top-0 left-0 max-w-lg shadow-lg h-full w-full bg-color_gray_for_light_mode dark:bg-color_gray_for_dark_mode p-2 backdrop-blur-lg
        rounded-lg group-hover:animate-reveal_top group-hover:-z-30 group-hover:blur-lg`}
      >
        <Image
          className="rounded-lg "
          src={`/gif/${project.gifLink}`}
          alt="project gif"
          width={275}
          height={160}
        />

        <article className="2/5 my-2">
          <h3 className="text-lg font-bold  ">{project.title}</h3>
          <p className="">{project.description}</p>
        </article>
        <div>
          <span className="font-bold text-lg">Stack: </span>
          {project.stack.map((skill, index) => (
            <span key={index}>{skill} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
