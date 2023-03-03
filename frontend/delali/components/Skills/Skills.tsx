import SkillsCard from "./SkillsCard";

const allSkills = [
  {
    Field: "FRONTEND",
    list: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT & REDUX",
      "NEXTJS",
      "JEST",
      "CYPRESS",
    ],
  },
  {
    Field: "BACKEND",
    list: [
      "PYTHON",
      "FLASK",
      "DJANGO",
      "PYTEST",
      "AUTH0",
      "DOCKER",
      "FIREBASE",
      "AWS & KUBERNETES",
    ],
  },

  {
    Field: "DATABASES & TOOLS",
    list: [
      "SQL",
      "MONGODB",
      "FIRESTORE",
      "POSTGRESQL",
      "GIT/GITHUB",
      "MaterialUI",
      "TailwindCss",
    ],
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
    <section className="flex w-full" id="skills">
      <div className="bg_header">Skills</div>
      <h2 className="heading_secondary">What I can do.</h2>
      <p>This is just the tip of the iceberg.</p>

      <div className=" flex flex-wrap justify-center items-center gap-6 w-full mt-12">
        {allSkills.map((skill, index) => (
          <SkillsCard skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
