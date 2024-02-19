import Head from "next/head";
import Image from "next/image";
import GlassyButton from "../../components/GlassyButton";

const index = () => {
  return (
    <>
      <Head>
        <title>Delali Dogbevi | About</title>
        <link rel="icon" href="/logo/logo_icon_double_dark.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-lg mx-auto gap-8 mt-32 pb-8">
        <h2 className="text-4xl text-center mb-8 dark:text-white font-bold">
          About Me
        </h2>
        <div className="grid  sm:grid-cols-2 gap-8 items-center">
          <Image
            className=""
            src="/images/about.png"
            width={463}
            height={700}
            alt="a picture of delali sitting in a chair"
          />
          <div className=" flex flex-col gap-4">
            <h3 className="text-3xl">Delali Jean-Pierre Dogbevi</h3>
            <h4 className="text-xl">Full-stack Developer</h4>
            <p>
              I'm a full stack developer with a unique twist - a medical
              education background! My strong attention to detail, critical
              thinking abilities, and excellent collaboration skills combined
              with my passion for productivity and AI, make me a valuable asset
              to any team. I'm a skilled problem solver, a great teacher, and I
              always have a witty comment at the ready. My goal is to find a
              company where I can work on innovative projects, continuously
              challenge myself, and have a little fun along the way. In my free
              time, you'll find me playing football or immersed in a drama
              movie. Let's work together and create something amazing!
            </p>
            <div className="flex gap-8">
              {" "}
              <GlassyButton name="Download CV" link="/cv.pdf" target="_blank" />
              <GlassyButton glow="##3cc39f" name="Hire Me" link="/contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
