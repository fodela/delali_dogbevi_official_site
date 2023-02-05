import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonial: React.FC = () => {
  const images = ["logo.png", "logo.png", "logo.png"];

  return (
    <section className="">
      <h2 className="heading_secondary">Testimonial</h2>
      <div className="testimonial container flex overflow-x-scroll ">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonial;
