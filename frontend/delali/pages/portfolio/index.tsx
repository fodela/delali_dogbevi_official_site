import React from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";

const projects = [
  {
    title: "Omnifood",
    description:
      "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. ",
    thumbnailLink: "omnifood_laptop.webm",
    liveLink: "https://omnifood-fo.netlify.app/",
    stack: ["html", "css", "javascript"],
    gifLink: "omnifood.gif",
    githubLink: "https://github.com/fodela/Omnifood-Project",
  },
  {
    title: "Effect",
    description:
      "A productivity app that combines the Einshower and the Pomodoro Technique to help user prioritize their work and improve their focus",
    thumbnailLink: "effect_laptop.webm",
    liveLink: "https://effect-fo.vercel.app/",
    stack: ["Python", "Flask", "Javascript", "React"],
    gifLink: "effect.gif",
    githubLink: "https://github.com/fodela/Effect",
  },
  // {
  //   title: "Thykel-Assistant",
  //   description:
  //     "Cutting-edge voice recognition technology. Just speak naturally and let ChatGPT do the rest, whether you're a student, researcher, or simply curious. Experience the power of voice-driven AI technology for yourself!",
  //   thumbnailLink: "effect.gif",
  //   liveLink: "coming soon.",
  //   stack: ["React", "Typescript", "Firebase"],
  //   gifLink: "effect.gif",
  // },
];

const portfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo/logo_icon_double_dark.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <header className="flex flex-col mt-24 gap-32 max-w-screen-lg mx-auto p-2 sm:p-10">
          <h2 className="text-black dark:text-white text-8xl font-semibold">
            Portfolio
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <p className="text-xl max-w-md">
              I build both the frontend (the part people see and use) and the
              backend (the part that makes everything work behind the scenes) of
              websites and apps.
            </p>
            <div className="flex justify-between text-black dark:text-white ">
              <div className="flex items-center uppercase gap-2 sm:gap-4">
                <div className="flex  items-center">
                  <span className="text-8xl">38</span>
                  <span className="text-4xl sm:text-5xl">+</span>
                </div>{" "}
                <div className="flex flex-col text-xs">
                  <span>successful</span>
                  {""}
                  <span>Projects</span>
                </div>
              </div>
              <div className="flex justify-between sm:gap-10 gap-5   text-black dark:text-white ">
                <div className="flex items-center uppercase gap-2 sm:gap-4">
                  <div className="flex  items-center">
                    <span className="text-8xl">3</span>
                    <span className="text-4xl sm:text-5xl">+</span>
                  </div>{" "}
                  <div className="flex flex-col text-xs">
                    <span>Years of</span> <span>Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

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
      </Layout>
    </>
  );
};

export default portfolioPage;
