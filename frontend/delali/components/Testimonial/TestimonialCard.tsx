import React from "react";
import { FaLinkedin, FaQuoteRight } from "react-icons/fa";
interface RecommendationType {
  recommendation: {
    imageLink: string;
    name: string;
    title: string;
    link: string;
    company: string;
    testimony: string;
  };
}

const TestimonialCard = ({ recommendation }: RecommendationType) => {
  return (
    <div className="card space_out p-2 flex-col gap-4 w-full shrink-0">
      <FaLinkedin className="text-3xl absolute top-5 right-5" />
      <p>{recommendation.testimony && recommendation.testimony}</p>
      <div className="author flex self-start items-center gap-2">
        <img
          src={recommendation.imageLink && recommendation.imageLink}
          alt="profile picture"
          className="h-10 rounded-full"
        />
        <div className="">
          <h3 className="text-lg font-semibold text-white">
            <a href={recommendation.link}>
              {" "}
              {recommendation.name && recommendation.name}
            </a>
          </h3>
          <p className="textxs">
            {recommendation.title && recommendation.title}
          </p>
          <p className="textxs">
            {recommendation.company && recommendation.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
