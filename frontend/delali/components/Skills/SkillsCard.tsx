import { useEffect, useRef } from "react";
import { BsBullseye } from "react-icons/bs";

import VanillaTilt from "vanilla-tilt";
import GlassyButton from "../GlassyButton";

interface SkillsCardProps {
  skill: { Field: string; list: string[] };
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  const tiltRef = useRef<any>();
  useEffect(() => {
    VanillaTilt.init(tiltRef.current!, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);
  return (
    <article className="">
      <div className="card" ref={tiltRef}>
        <div className="content ">
          <h2>
            <BsBullseye />
          </h2>
          <h3>{skill.Field}</h3>
          <ul className="text-left">
            {skill.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <GlassyButton />
        </div>
      </div>
    </article>
  );
};

export default SkillsCard;
