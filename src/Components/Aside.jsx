import React, { useState } from "react";
import chevronup from "../assets/images/chevron-up.svg";
import arrowup from "../assets/images/arrow-up-right.svg";
import close from "../assets/images/cross.svg";
import youtube from "../assets/images/youtube.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import x from "../assets/images/x-twitter.svg";
import PropTypes from "prop-types"; // Import PropTypes
import AsideContact from "./AsideContact";

function Aside({ onClose }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showContact, setShowContact] = useState(false); // New state for AsideContact visibility
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  const MenuVisibility = () => {
    setToggleMenu(!toggleMenu);
    setActiveSection(toggleMenu ? "" : "departments");
  };

  const toggleContactVisibility = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-10"
        onClick={onClose}
      ></div>

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

        <div className="flex-1 overflow-y-auto">
          <ul className="mt-7 flex flex-col font-mediumNMGT">
            <a
              href="#"
              className={`px-2.5 my-2.5 ${
                activeSection === "" ? "text-[#111111]" : "text-[#707070]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("");
              }}
            >
              Company
            </a>
            <a
              href="#"
              className="flex px-2.5 my-2.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                MenuVisibility();
              }}
            >
              <span
                className={`${
                  activeSection === "departments"
                    ? "text-[#707070]"
                    : "text-[#111111]"
                }`}
              >
                Departments
              </span>
              <img
                src={chevronup}
                className={`h-5 ml-1 transform transition-transform duration-300 ${
                  toggleMenu ? "rotate-180" : ""
                }`}
                alt="Chevron"
              />
            </a>

            {toggleMenu && activeSection === "departments" && (
              <div>
                <hr className="text-[#707070]" />
                <a
                  href="#"
                  className={`flex my-2.5 ${
                    activeSection === "departments"
                      ? "text-[#111111]"
                      : "text-[#707070]"
                  }`}
                >
                  <img
                    src={arrowup}
                    className="h-4 mx-2.5 mt-0.5"
                    alt="Arrow Up"
                  />
                  <span>Technology</span>
                </a>
                <a
                  href="#"
                  className={`flex my-2.5 ${
                    activeSection === "departments"
                      ? "text-[#111111]"
                      : "text-[#707070]"
                  }`}
                >
                  <img
                    src={arrowup}
                    className="h-4 mx-2.5 mt-0.5"
                    alt="Arrow Up"
                  />
                  <span>Entertainment</span>
                </a>
              </div>
            )}

            <a
              href="#"
              className={`px-2.5 my-2.5 ${
                activeSection === "" ? "text-[#111111]" : "text-[#707070]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("");
              }}
            >
              Careers
            </a>
            <a
              href="#"
              className={`px-2.5 my-2.5 ${
                activeSection === "" ? "text-[#111111]" : "text-[#707070]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("");
              }}
            >
              News
            </a>
            <a
              href="#"
              className={`px-2.5 my-2.5 ${
                activeSection === "" ? "text-[#111111]" : "text-[#707070]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("");
              }}
            >
              API
            </a>
            <a
              href="#"
              className={`px-2.5 my-2.5 ${
                activeSection === "" ? "text-[#111111]" : "text-[#707070]"
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                toggleContactVisibility(); // Toggle AsideContact visibility
              }}
            >
              Contact
            </a>
          </ul>
        </div>

        {showContact && <AsideContact onClose={() => setShowContact(false)} />}

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
Aside.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Aside;
