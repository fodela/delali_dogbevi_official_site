import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const NavBottom = () => {
  return (
    <div className="flex justify-between p-4">
      <a
        className="text-[rgb(165,165,165)] justify-center"
        href="https://www.linkedin.com/in/delali-dogbevi/"
        target="_blank"
      >
        <FaLinkedinIn size="20" />
      </a>
      <a
        className="text-[rgb(165,165,165)] justify-center"
        href="https://github.com/fodela"
        target="_blank"
      >
        <BsGithub size="20" />
      </a>
      <a
        className="text-[rgb(165,165,165)] justify-center"
        href="https://twitter.com/Fodela2"
        target="_blank"
      >
        <BsTwitter size="20" />
      </a>
    </div>
  );
};

export default NavBottom;
