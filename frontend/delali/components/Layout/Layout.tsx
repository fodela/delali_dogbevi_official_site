import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" w-screen">
      {isNavOpen && <Navigation />}

      <main className="p-4 w-full">{children}</main>
      <footer className="fixed bottom-0">Footer</footer>
    </div>
  );
};
export default Layout;
