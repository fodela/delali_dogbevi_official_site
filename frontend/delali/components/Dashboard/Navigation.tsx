import Link from "next/link";

import {
  BsDashSquare,
  BsImage,
  BsPinAngleFill,
  BsPinFill,
  BsWindow,
} from "react-icons/bs";
import {
  FaComment,
  FaDivide,
  FaHome,
  FaLayerGroup,
  FaMapPin,
  FaMedium,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-60  py-4">
      <ul className="flex flex-col gap-3">
        <Link href="/blog">
          <li className="nav_link">
            <FaHome /> <span>Dashboard</span>
          </li>
        </Link>

        <Link href="/blog/create">
          <li className="nav_link">
            <BsPinAngleFill /> <span>Posts</span>
          </li>
        </Link>
        <li className="nav_link">
          <FaComment /> <span>Comments</span>
        </li>
        <li className="nav_link">
          <FaLayerGroup /> <span>Categories</span>
        </li>

        <li className="nav_link">
          <BsImage /> <span>Media</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
