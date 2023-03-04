import React from "react";
import TestimonialCard from "./TestimonialCard";

const recommendations = [
  {
    imageLink: "https://unsplash.it/100/100",
    name: "MaryBlessing Umeh",
    title: "Software Engineer",
    company: "Swizel Technologies Limited",
    link: "https://www.linkedin.com/in/marybngozi/",
    testimony:
      "Delali is a passionate Software developer who is able to combine his experience in the medical field and tech to build software applications. He loves learning and assisting others in the team to achieve the goal.",
  },
  {
    imageLink: "https://unsplash.it/100/100",
    name: "Samson Akanbi",
    title: "Android Developer",
    company: "Chemonics",
    link: "https://www.linkedin.com/in/sakanbi/",
    testimony:
      "During our mentoring sessions, he exhibited a profound understanding of the subject matter and asked questions that not only showcased his technical acumen but also demonstrated his critical thinking skills.",
  },
  {
    imageLink: "https://unsplash.it/100/100",
    name: "Kalu Chinonso",
    title: "Application Support Analyst",
    company: "MTN Nigeria",
    link: "https://www.linkedin.com/in/iamkaluchinonso/",
    testimony:
      "Working with Delali was a very great experience as he put his all into his projects. He is willing to learn and adapt to new technologies.",
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
