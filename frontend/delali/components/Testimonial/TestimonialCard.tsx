import Image from "next/image";
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
    <div className="peer peer-hover:animate-shuffle card space_out p-2 flex-col gap-4 w-full shrink-0">
      <FaLinkedin className="text-3xl absolute top-5 right-5" />
      <p>{recommendation.testimony && recommendation.testimony}</p>
      <div className="author flex self-start items-center gap-2">
        {recommendation.imageLink && (
          <img
            src={recommendation.imageLink}
            alt="profile picture"
            className="h-10 rounded-full"
            height={50}
            width={50}
          />
        )}
        <div className="">
          <h3 className="text-lg font-semibold ">
            <a href={recommendation.link}>
              {" "}
              {recommendation.name && recommendation.name}
            </a>
          </h3>
          <p className="text-xs">
            {recommendation.title && recommendation.title}
          </p>
          <p className="text-xs">
            {recommendation.company && `@${recommendation.company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
