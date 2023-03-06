import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const NavBottom = () => {
  return (
    <div className="flex flex-col gap-10 items-center p-4">
      <a
        className="dark:text-white/60 text-black/50 justify-center"
        href="https://www.linkedin.com/in/delali-dogbevi/"
        target="_blank"
      >
        <FaLinkedinIn size="25" />
      </a>
      <a
        className="dark:text-white/60 text-black/50 justify-center"
        href="https://github.com/fodela"
        target="_blank"
      >
        <BsGithub size="25" />
      </a>
      <a
        className="dark:text-white/60 text-black/50 justify-center"
        href="https://twitter.com/Fodela2"
        target="_blank"
      >
        <BsTwitter size="25" />
      </a>
    </div>
  );
};

export default NavBottom;
