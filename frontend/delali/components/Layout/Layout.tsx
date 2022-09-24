import React from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex">
			<Navigation />
			<div className="flex flex-col justify-between ">
				<main>{children}</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
};
export default Layout;
