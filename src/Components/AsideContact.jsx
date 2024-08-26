import React, { useState } from "react";
import close from "../assets/images/cross.svg";
import youtube from "../assets/images/youtube.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import x from "../assets/images/x-twitter.svg";
import PropTypes from "prop-types"; // Import PropTypes
import chevronup from "../assets/images/chevron-up.svg";
import arrowup from "../assets/images/arrow-up-right.svg";
import "./AsideContact.css";

function AsideContact({ onClose }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showOther, setShowOther] = useState(false);

  const toggleMenuVisibility = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setToggleMenu(false); // Close the menu after selecting an option

    // Show 'Other' input if 'Others' is selected, hide it otherwise
    setShowOther(option === "Others");
  };

  const [message, setMessage] = useState("");
  const maxLength = 400;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setMessage(value);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-10" onClick={onClose}></div>

      {/* Menu */}
      <div className="bg-gray-50 fixed right-0 top-0 w-[350px] h-screen font-body text-sm p-5 z-10 flex flex-col">
        <a
          href="#"
          className="flex justify-end mb-4"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            onClose();
          }}
        >
          <img src={close} className="h-5 mr-1" alt="Close" />
          Close
        </a>
        <div className="text-body font-mediumNMGT">
          <div className="mt-7 relative">
            <div className="relative inline-block w-full">
              <input
                type="text"
                id="inquiryReason"
                value={selectedOption}
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenuVisibility(e);
                }}
                className={`w-full border-b border-[#707070] text-xs py-1.5 bg-transparent focus:outline-none transition-colors ${
                  selectedOption ? "text-[#111111]" : ""
                }`}
                autoComplete="off"
              />
              <img
                src={chevronup}
                className={`absolute right-0 top-1.5 h-5 transform transition-transform duration-300 ${
                  toggleMenu ? "rotate-180" : ""
                }`}
                alt="Chevron"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenuVisibility(e);
                }}
              />
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMenuVisibility(e);
              }}
              className={`text-[#707070] text-xs absolute left-0 top-1.5 flex items-center cursor-pointer transition-all ${
                selectedOption ? "-top-3 text-xs" : ""
              }`}
            >
              Inquiry reason*
            </a>

            {toggleMenu && (
              <ul className="text-[#707070] mt-2">
                <li className="text-xs mb-1.5 cursor-pointer">
                  <a href="#" onClick={() => handleOptionSelect("Reason 1")}>
                    Reason 1
                  </a>
                </li>
                <li className="text-xs mb-1.5 cursor-pointer">
                  <a href="#" onClick={() => handleOptionSelect("Reason 2")}>
                    Reason 2
                  </a>
                </li>
                <li className="text-xs mb-1.5 cursor-pointer">
                  <a href="#" onClick={() => handleOptionSelect("Others")}>
                    Others
                  </a>
                </li>
              </ul>
            )}

            {showOther && (
              <div className="mt-5 relative">
                <input
                  type="text"
                  id="title"
                  className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
                  autoComplete="off"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
                >
                  Title*
                </label>
              </div>
            )}
          </div>

          <div className="mt-5 relative">
            <input
              type="text"
              id="fullName"
              className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
              autoComplete="off"
              placeholder=" "
            />
            <label
              htmlFor="fullName"
              className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
            >
              Full Name*
            </label>
          </div>
          <div className="mt-5 relative">
            <input
              type="text"
              id="company"
              className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
              autoComplete="off"
              placeholder=" "
            />
            <label
              htmlFor="company"
              className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
            >
              Company
            </label>
          </div>
          <div className="mt-5 relative">
            <input
              type="number"
              id="phoneNumber"
              className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
              autoComplete="off"
              placeholder=" "
            />
            <label
              htmlFor="phoneNumber"
              className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
            >
              Phone Number*
            </label>
          </div>
          <div className="mt-5 relative">
            <input
              type="email"
              id="emailAddress"
              className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
              autoComplete="off"
              placeholder=" "
            />
            <label
              htmlFor="emailAddress"
              className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
            >
              Email Address*
            </label>
          </div>
          <div className="mt-5 relative">
            <input
              type="text"
              id="message"
              value={message}
              onChange={handleChange}
              className="w-full border-b border-[#707070] text-sm font-mediumNMGT py-1 bg-transparent focus:outline-none focus:border-[#111111] transition-colors peer placeholder:invisible"
              autoComplete="off"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="text-[#707070] text-xs absolute left-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all peer-focus:text-[#707070]"
            >
              Message
            </label>
            <div
              className={`text-xs absolute right-0 top-1.5 cursor-text peer-focus:text-custom-size peer-focus:-top-3 transition-all ${
                message.length >= maxLength ? "text-red-500" : "text-[#707070]"
              }`}
            >
              {message.length}/{maxLength}
            </div>
          </div>
          <div className="flex justify-start items-start  space-x-2 mt-5 text-xs ">
            <input type="checkbox" className="mt-1" name="" id="" />{" "}
            <div className="text-[#707070] ">
              I agree to receive emails from Exwalt and the{" "}
              <a href="#" className=" underline text-[#5b5b5b] ">
                data privacy statement.
              </a>
            </div>
          </div>
          <div className="text-center my-5 bg-white py-1 border rounded-lg border-[#111] text-custom-size font-boldNM tracking-wider">
            <button className="">SUBMIT</button>
          </div>
          <div className="mt-7 w-36">
            Lorem ipsum dolor sit amet consectetur.
          </div>

          <div className=" flex justify-between text-xs font-mediumNMGT mt-5">
            <div className="">
              <div className="text-[#707070]">Business Inquiries</div>

              <a href="#" className=" flex text-[#111] text-sm mt-1">
                info@exwalt.com
                <img
                  src={arrowup}
                  className="h-4 ml-1.5 mt-0.5"
                  alt="Arrow Up"
                />
              </a>
            </div>
            <div className="w-1/2">
              <div className="text-[#707070]">Support</div>
              <a href="#" className=" flex text-[#111] text-sm mt-1">
                support@exwalt.com
                <img
                  src={arrowup}
                  className="h-4 ml-1.5 mt-0.5"
                  alt="Arrow Up"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs font-mediumNMGT items-center mt-auto">
          <div className="w-1/2 text-[#707070] flex flex-col gap-1">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="w-1/2 flex space-x-2 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="h-4" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={x} className="h-4" alt="X Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={youtube} className="h-4" alt="YouTube" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="h-4" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Define prop types for the component
AsideContact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AsideContact;
