import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Testimonial from "../components/Testimonial/Testimonial";
// import localFont from "next/font/local";
// const myFont = localFont({src:"./my-font.woff2"})

// const customFont = myFont({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delali Dogbevi | Home</title>
        <link rel="icon" href="/favicon/logo_icon_double_dark.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
      // className={`${fontName.variable} font-sans`}
      >
        <Layout>
          <Hero />
          <Portfolio />
          <About />
          <Skills />
          <Testimonial />
          <Contact />
        </Layout>
      </div>
    </>
  );
};

export default Home;
