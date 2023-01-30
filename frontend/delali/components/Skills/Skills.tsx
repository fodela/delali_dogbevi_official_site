import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import GlassyButton from "../GlassyButton";
import SkillsCard from "./SkillsCard";

const allSkills = [
  {
    Field: "Programming Languages",
    list: ["PYTHON", "JAVASCRIPT", "HTML", "CSS", "SQL"],
  },
  {
    Field: "FRAMEWORKS",
    list: ["REACT", "NEXTJS", "DJANGO", "FLASK"],
  },

  {
    Field: "TOOLS",
    list: ["GIT", "POSTGRES", "FIREBASE", "AUTH0", "DOCKER", "KUBERNETES"],
  },
  {
    Field: "OTHERS",
    list: [
      "API DEVELOPMENT",
      "API CONSUMPTION",
      "CLOUD DEPLOYMENT",
      "TEST DRIVEN DEVELOPMENT",
    ],
  },
  {
    Field: "LANGUAGES",
    list: ["ENGLISH", "FRENCH"],
  },
];

const Skills = () => {
  return (
    <section className="flex w-full">
      <h2 className="heading_secondary">Skills</h2>
      <div className=" flex flex-wrap justify-center items-center gap-6 w-full">
        {allSkills.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
