import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Delali Dogbevi | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>From Layout</Layout>
		</>
	);
};

export default Home;
