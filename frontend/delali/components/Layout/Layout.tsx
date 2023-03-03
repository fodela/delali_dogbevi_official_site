import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-screen px-5 md:px-10">
      <Navigation />

      <main>{children}</main>
      {/* <footer className="fixed bottom-0">Footer</footer> */}
    </div>
  );
};
export default Layout;
