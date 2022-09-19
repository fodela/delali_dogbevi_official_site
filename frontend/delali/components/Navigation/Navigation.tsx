import Link from "next/link";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
const Navigation = () => {
	return (
		<nav className="bg-[rgb(24,24,24)] flex flex-col h-screen w-[130px] divide-y divide-gray-700">
			<div className="flex flex-col">
				{/* <Image src="logo.png" /> */}
				<img src="logo.png" alt="" />

				<p className="text-[rgb(165,165,165)] text-sm text-center py-1">
					Delali Dogbevi
				</p>
			</div>
			<NavigationLink name="About" link="/about" />
			<NavigationLink name="Skills" link="/skills" />
			<NavigationLink name="Work" link="/works" />
			<NavigationLink name="Blog" link="/blog" />
			<NavigationLink name="Contact" link="/contact" />
		</nav>
	);
};

export default Navigation;
