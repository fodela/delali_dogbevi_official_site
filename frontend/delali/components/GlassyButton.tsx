import React from "react";

const GlassyButton = ({ name = "Read More", glow = "" }) => {
  return (
    <div className={`btn ${glow && "glow"}`}>
      <a href="#">{name}</a>
    </div>
  );
};

export default GlassyButton;
