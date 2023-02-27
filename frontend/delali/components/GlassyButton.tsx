import React from "react";

const GlassyButton = ({ name = "Read More", glow = "", link = "#" }) => {
  return (
    <div className={`btn ${glow && "glow"}`}>
      <a href={link}>{name}</a>
    </div>
  );
};

export default GlassyButton;
