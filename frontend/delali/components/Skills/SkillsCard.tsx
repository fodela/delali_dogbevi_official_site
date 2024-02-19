import { BsBullseye } from "react-icons/bs";

import GlassyButton from "../GlassyButton";

interface SkillsCardProps {
  skill: { Field: string; list: string[] };
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  return (
    <article className="">
      <div className="card">
        <div className="content">
          <h2>
            <BsBullseye className="text-color_gray_for_light_mode dark:text-color_gray_for_dark_mode" />
          </h2>
          <h3 className="mb-2">{skill.Field}</h3>
          <div className="text-left">
            {skill.list.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <GlassyButton />
        </div>
      </div>
    </article>
  );
};

export default SkillsCard;
