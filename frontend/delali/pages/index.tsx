import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Testimonial from "../components/Testimonial/Testimonial";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delali Dogbevi | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Testimonial />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
