import { useEffect, useRef } from "react";

import VanillaTilt from "vanilla-tilt";
import GlassyButton from "../GlassyButton";

interface SkillsCardProps {
  skill: { Field: string; list: string[] };
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  const tiltRef = useRef<HTMLDivElement>();
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
          <h2>01</h2>
          <h3>{skill.Field}</h3>
          <ul>
            {skill.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <GlassyButton />
        </div>
      </div>
    </article>
  );
};

export default SkillsCard;
