"use client";

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import GlassyButton from "./GlassyButton";
import countryCodes from "../public/CountryCodes.json";
import { MdCall, MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const handleTelephone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value.replace(countryCode, ""));
    setFormattedPhoneNumber(`${countryCode}${phoneNumber}`);
  };
  return (
    <section className="flex flex-col mt-32 " id="contact">
      <div className="bg_header">Cont@ct</div>
      <h2 className="heading_secondary">Get in touch!</h2>
      <div className="flex justify-center gap-8 flex-wrap py-6">
        <div className="flex items-center p-4 rounded-lg gap-4 bg-color_gray_for_dark_mode backdrop-blur-lg grow max-w-[269px] shadow-md">
          <MdCall size={40} className="border p-2 rounded-full" />
          <div>
            <h4>Call Me</h4>
            <p>+233-26-801-5095</p>
          </div>
        </div>
        <div className="flex items-center p-4 rounded-lg gap-4 bg-color_gray_for_dark_mode backdrop-blur-lg shadow-md">
          <MdEmail size={40} className="border p-2 rounded-full" />
          <div>
            <h4>E-mail</h4>
            <p>particleme30@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center p-4 rounded-lg gap-4 bg-color_gray_for_dark_mode backdrop-blur-lg grow max-w-[269px] justify-center shadow-lg">
          <div className="border rounded-full p-3">
            <a
              href="https://www.linkedin.com/in/delali-dogbevi/"
              target="_blank"
            >
              <BsLinkedin size={30} className="" />
            </a>
          </div>
          <div className="border rounded-full p-3">
            <a href="https://twitter.com/fodela2" target="_blank">
              <BsTwitter size={30} className="" />
            </a>
          </div>
          <div className="border rounded-full p-3">
            <a href="https://github.com/fodela" target="_blank">
              <BsGithub size={30} className="" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact ">
        <div>
          <form
            action=""
            className=" flex flex-col gap-4 w-11/12 m-auto sm:grid sm:grid-cols-2"
          >
            <input type="text" placeholder="Name" required />
            <input type="email" name="" id="" placeholder="Email" required />

            {/* <input type="tel" name="" id="" placeholder="tel +23300000000" /> */}
            <select onChange={(e) => setCountryCode(e.target.value)}>
              <option value={"+233"}>Select country code</option>
              {countryCodes.map((code) => (
                <option
                  key={code.code}
                  className="bg-color_gray_for_light_mode dark:bg-gray-900"
                  value={code.dial_code}
                >
                  {code.name}: {code.dial_code}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name=""
              id=""
              value={`${countryCode}${phoneNumber}`}
              placeholder="Phone Number"
              onChange={(e) => handleTelephone(e)}
            />

            <input
              type="text"
              placeholder="Subject"
              className="sm:col-span-2"
            />
            <textarea
              className="sm:col-span-2 "
              rows={4}
              placeholder="Message"
            />

            <GlassyButton name="Send message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
