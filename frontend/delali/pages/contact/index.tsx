import Head from "next/head";
import Contact from "../../components/Contact";
import Layout from "../../components/Layout/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Delali Dogbevi | Contact</title>
        <link rel="icon" href="/logo/logo_icon_double_dark.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Contact />;
      </Layout>
    </>
  );
};

export default index;
