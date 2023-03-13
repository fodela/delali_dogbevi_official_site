import { ReactNode } from "react";
import Navigation from "./Dashboard/Navigation";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className=" p-6 bg-[rgb(64,64,64)] w-full  ">{children}</div>
    </div>
  );
};

export default Dashboard;
