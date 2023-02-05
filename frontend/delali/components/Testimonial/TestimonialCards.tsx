import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCards = () => {
  return (
    <div className="card space_out p-2 flex-col gap-4 w-full shrink-0">
      <FaQuoteRight className="text-3xl absolute top-5 right-5" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non ex eos
        nisi animi aut, explicabo sunt molestiae error eaque sequi voluptate
        tempora obcaecati, veritatis nam eius facere. Dignissimos, esse!
      </p>
      <div className="author flex self-start items-center gap-2">
        <img
          src="logo.png"
          alt="delali's profile picture"
          className="h-10 rounded-full"
        />
        <h3 className="text-lg font-semibold text-white">Delali Dogbevi</h3>
      </div>
    </div>
  );
};

export default TestimonialCards;
