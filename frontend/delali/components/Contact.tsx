import React from "react";
import GlassyButton from "./GlassyButton";

const Contact = () => {
  return (
    <section className="flex flex-col">
      <h2 className="heading_secondary">Contact</h2>
      <div className="contact p-4 bg-white/10 rounded-lg ">
        <form action="" className=" flex flex-col gap-4 w-11/12 m-auto">
          <input type="text" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="tel" name="" id="" placeholder="tel +23300000000" />
          <input type="text" placeholder="Contact" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Message" />

          <GlassyButton name="Send message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
