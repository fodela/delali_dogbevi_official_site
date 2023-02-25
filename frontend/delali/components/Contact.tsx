import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import GlassyButton from "./GlassyButton";
import countryCodes from "../public/CountryCodes.json";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const handleTelephone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value.replace(countryCode, ""));
    setFormattedPhoneNumber(`${countryCode}${phoneNumber}`);
  };
  return (
    <section className="flex flex-col " id="contact">
      <div className="bg_header">Cont@ct</div>
      <h2 className="heading_secondary">Get in touch!</h2>
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
              <option value={"+233"} className="bg-blue-500">
                Select country code
              </option>
              {countryCodes.map((code) => (
                <option className="bg-blue-500" value={code.dial_code}>
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
