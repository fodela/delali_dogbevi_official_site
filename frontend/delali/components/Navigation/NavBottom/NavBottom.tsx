import NavIcon from "./NavIcon";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const NavBottom = () => {
	return (
		<div className="flex justify-between p-4">
			<NavIcon
				icon={<FaLinkedinIn size="20" />}
				link="https://www.linkedin.com/in/delali-dogbevi/"
			/>
			<NavIcon icon={<BsGithub size="20" />} link="https://github.com/fodela" />
			<NavIcon
				icon={<BsTwitter size="20" />}
				link="https://twitter.com/Fodela2"
			/>
		</div>
	);
};

export default NavBottom;
