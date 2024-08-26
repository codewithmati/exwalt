import React, { useState } from "react";
import ExwaltLogo from "../assets/images/Logo.svg";
import ExwaltMenu from "../assets/images/Menu.svg";
import Aside from "./Aside";
import chevronup from "../assets/images/chevron-up.svg";
import arrowupgray from "../assets/images/arrow-up-right gray.svg";
import arrowup from "../assets/images/arrow-up-right.svg";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  const [showDepartments, setShowDepartments] = useState(false);
  const toggleVisibility = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <>
      <div className="bg-white flex py-[12px] lg:py-[16px] lg:justify-between font-body text-sm text-[#111111] font-medium">
        <span>
          <ul className="space-x-5 absolute left-0 hd:hidden mt-1 flex ml-5 lg-ml-7">
            <Link to="/company">Company</Link>
            <a
              href="#"
              className="flex"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                toggleVisibility();
              }}
            >
              <span>Departments</span>
              <img
                src={chevronup}
                className={`h-5 ml-1 transform transition-transform duration-300 ${
                  showDepartments ? "rotate-180" : ""
                }`}
                alt="Chevron"
              />
            </a>
            <a href="#">Careers</a>
          </ul>
        </span>
        <span>
          <a href="/">
            <img
              src={ExwaltLogo}
              className="size-5 lg:size-7 ml-5 lg:ml-0"
              alt="Logo"
            />
          </a>
        </span>
        <span>
          <a
            href=""
            className="flex absolute right-0 mr-5 lg:mr-7 "
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              toggleMenuVisibility();
            }}
          >
            <img
              src={ExwaltMenu}
              className="h-4 lg:h-5 mr-1.5 lg:mr-2.5 mt-0.5 lg:mt-1"
              alt="Menu"
            />
            <span className=" text-[12px] lg:text-sm lg:mt-1">Menu</span>
          </a>
        </span>
      </div>

      {showDepartments && (
        <div className="flex lg:justify-between font-body text-sm text-[#111111]">
          <ul className="py-5 px-7 bg-white absolute left-0 right-0 hd:hidden flex">
            <a href="#">Technology</a>
            <img src={arrowup} className="h-4 ml-1.5" alt="Arrow Up" />
            <div className="ml-5 text-gray-400">
              Entertainment<sup>Soon</sup>
            </div>
            <img src={arrowupgray} className="h-4 ml-1.5" alt="Arrow Up Gray" />
          </ul>
        </div>
      )}

      {showMenu && <Aside onClose={() => setShowMenu(false)} />}
    </>
  );
}

export default Header;
