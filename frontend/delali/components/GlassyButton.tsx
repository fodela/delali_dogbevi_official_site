import Link from "next/link";
import React from "react";

const GlassyButton = ({
  name = "Read More",
  glow = "",
  link = "#",
  target = "",
  action = () => {},
}) => {
  return (
    <div className={`btn ${glow && "glow"}`} onClick={() => action()}>
      <Link href={link} target="_blank">
        {name}
      </Link>
    </div>
  );
};

export default GlassyButton;
