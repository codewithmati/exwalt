// import React from 'react'/
import Header from "../Components/Header";
import ExwaltLogo from "../assets/images/Logo.svg";

function PageNotFound() {
  return (
    <>
      <div className=" bg-gray-100 h-full pb-10">
        <Header />
        <div className="flex flex-1 items-center justify-center ">
          <div className="mt-16">
            <div className="text-[#707070] text-base font-mediumNMGT text-center ">
              404
            </div>
            <div className=" text-[#111111] text-xl font-title text-center mt-2">
              The page you’re looking <br /> for can’t be found.
            </div>
            <div className="text-[#707070] text-xs text-center mt-1 ">
              Lorem ipsum dolor sit amet consectetur. Diam <br /> imperdiet
              feugiat feugiat bibendum.
            </div>
            <div className="text-center w-32 mx-auto my-5 bg-[#111] text-[#fff] py-1.5 border rounded-lg text-custom-size font-boldNM tracking-wider">
              <a href="/">GO TO HOMEPAGE</a>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto mt-20 mb-6" />
          <div className="md:flex md:justify-between sm:mx-10 md:mx-16 lg:mx-24 mx-5">
            <div className="md:w-2/3">
              <ul className="grid grid-cols-2 md:grid-cols-4 font-body tracking-wide font-medium lg:grid-cols-5 ">
                <li>
                  <li className="text-[#707070] text-xs">About</li>
                  <li className="mt-1 text-[#111] text-sm  ">Company</li>
                  <li className="text-[#111] text-sm  ">Careers</li>
                  <li className="text-[#111] text-sm  ">Business Inquires</li>
                </li>
                <li>
                  <li className="text-[#707070] text-xs">Departments</li>
                  <li className="mt-1 text-[#111] text-sm  ">Technology</li>
                  <li className="text-[#111] text-sm  ">Entertainment</li>
                </li>
                <li className="mt-2 sm:mt-0">
                  <li className="text-[#707070] text-xs">Others</li>
                  <li className="mt-1 text-[#111] text-sm">News</li>
                  <li className="text-[#111] text-sm">API</li>
                </li>
                <li className="mt-2 sm:mt-0">
                  <li className="text-[#707070] text-xs"> Social</li>
                  <li className="mt-1 text-[#111] text-sm">Instagram</li>
                  <li className="text-[#111] text-sm">Linkedin</li>
                </li>
              </ul>
            </div>
            <div className="mt-5 md:mt-0 font-semibold text-[#707070] md:w-1/3">
              <ul>
                <li>
                  <li className="text-[#707070] text-xs">Newsletter</li>
                  <li className="mt-1 text-[#111] text-sm w-36">
                    Get the latest news and updates
                  </li>
                  <li className="flex">
                    <input
                      type="email"
                      name=""
                      id=""
                      className="py-2 text-xs mt-3 border-b-[1px] bg-gray-100 border-[#707070] w-2/3 mr-5  outline-none"
                      placeholder="Enter Email Address"
                    />
                    <button className=" text-xs px-4 py-2 mt-4 ring-1 ring-[#707070] rounded-lg text-[#111] tracking-wide font-body font-bold">
                      SUBSCRIBE
                    </button>
                  </li>
                  <div className="flex justify-start space-x-2 mt-3 items-start">
                    <input type="checkbox" className="mt-1" name="" id="" />{" "}
                    <div className="font-normal font-body tracking-wide text-xs w-72">
                      I agree to receive emails from Exwalt and the{" "}
                      <a href="" className=" font-mediumNMGT text-xs ">
                        data privacy statement.
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-10 mx-5 sm:flex sm:justify-between sm:mx-10 md:mx-16 lg:mx-24 text-xs font-body text-[#707070] tracking-wide font-mediumNMGT">
            <div className="flex justify-start space-x-3">
              <a href="/">
                <img src={ExwaltLogo} className=" size-6" alt="" />
              </a>
              <div className=" sm:mt-1">
                Copyright © 2024 Exwalt Ltd. All rights reserved.
              </div>
            </div>
            <div className="flex justify-between space-x-4 text-xs mt-3 sm:mt-1">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
