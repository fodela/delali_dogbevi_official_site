import React from "react";
import Layout from "../components/Layout/Layout";
import GlassyButton from "../components/GlassyButton";
import { FaHome } from "react-icons/fa";

const notFound = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen  justify-center items-center  ">
        <div className="flex divide-x-2">
          <h2 className="text-8xl font-bold py-8 px-4">404</h2>
          <div className="py-8 px-4">
            <h4 className="text-4xl mb-3">Sorry!</h4>
            <p>The Page You're Looking For</p>
            <p>Was Not Found</p>
          </div>
        </div>
        <GlassyButton name="Go Home" link="/" />
      </div>
    </Layout>
  );
};

export default notFound;
