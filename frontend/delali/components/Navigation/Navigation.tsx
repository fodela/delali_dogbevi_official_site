import Link from "next/link";
import Image from "next/image";
const Navigation = () => {
	return (
		<nav className="bg-blue-500 flex flex-col h-screen w-[130px]">
			<div className="flex flex-col bg-black">
				{/* <Image src="logo.png" /> */}
				<img src="logo.png" alt="" />

				<p className="text-[rgb(165,165,165)] text-sm p-4">Delali Dogbevi</p>
			</div>
			<Link href="/About">About</Link>
			<Link href="/Projects">Projects</Link>
			<Link href="/blog">blog</Link>
		</nav>
	);
};

export default Navigation;
