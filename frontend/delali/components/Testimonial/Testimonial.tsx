import React from "react";
import TestimonialCard from "./TestimonialCard";

const recommendations = [
  {
    imageLink:
      "https://media.licdn.com/dms/image/C5603AQGRnFB-ZHbutQ/profile-displayphoto-shrink_800_800/0/1652103499444?e=1683158400&v=beta&t=M9YMWuPiz2u7p6oGlU35FGX1AVcvZszqtqhbFXgir2k",
    name: "MaryBlessing Umeh",
    title: "Software Engineer",
    company: "",
    link: "https://www.linkedin.com/in/marybngozi/",
    testimony:
      "Delali is a passionate Software developer who is able to combine his experience in the medical field and tech to build software applications. He loves learning and assisting others in the team to achieve the goal.",
  },
];

const Testimonial: React.FC = () => {
  const images = ["logo.png", "logo.png", "logo.png"];

  return (
    <section>
      <div className="bg_header " id="testimonial">
        Testimonial
      </div>
      <h2 className="heading_secondary mb-8">What Others Say about Me!</h2>
      <div className="testimonial container flex justify-center h-full rounded-lg self-center">
        {recommendations.map((recommendation, index) => (
          <TestimonialCard recommendation={recommendation} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
