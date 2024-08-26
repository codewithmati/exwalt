import React from "react";
import ExwaltLogo from "../assets/images/Logo.svg";

function Footer() {
  return (
    <>
      <hr className="border-0 h-px bg-gradient-to-r from-white via-[#989797] to-white w-4/5 mx-auto my-8" />

      <div className="mx-24 md:flex md:justify-between text-left">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 font-body font-medium tracking-wide md:w-2/3">
          {[
            {
              title: "About",
              items: ["Company", "Careers"],
            },
            {
              title: "Departments",
              items: ["Technology", "Entertainment"],
            },
            {
              title: "Others",
              items: ["News", "API"],
            },
            {
              title: "Social",
              items: ["Instagram", "LinkedIn", "Business Inquiries"],
            },
          ].map(({ title, items }) => (
            <li key={title} className="mb-2 sm:mb-0">
              <p className="text-[#707070] text-[9px]">{title}</p>
              <ul className="mt-1 space-y-1 text-[#111] text-[11px]">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-5 md:mt-0 md:w-1/3">
          <p className="text-[#707070] text-[9px] font-semibold">Newsletter</p>
          <p className="mt-1 text-[#111] text-[11px] w-36">
            Get the latest news and updates
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              className="py-2 text-[11px] border-b border-[#707070] w-2/3 mr-5 outline-none"
              placeholder="Enter Email Address"
            />
            <button className="px-4 py-2 text-[11px] ring-1 ring-[#707070] rounded-lg text-[#111] font-body font-bold">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex items-start space-x-2 mt-3">
            <input type="checkbox" className="mt-1" />
            <p className="font-body text-[11px] tracking-wide">
              I agree to receive emails from Exwalt and the{" "}
              <a href="#" className="font-medium">
                data privacy statement
              </a>.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-5 mx-24 sm:flex sm:justify-between text-[9px] font-body text-[#707070] tracking-wide font-medium">
        <div className="flex items-center space-x-3">
          <a href="/">
            <img src={ExwaltLogo} className="w-6" alt="Exwalt Logo" />
          </a>
          <p>© 2024 Exwalt Ltd. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
