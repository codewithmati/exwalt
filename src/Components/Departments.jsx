import React from "react";
import Ball from "../assets/Ball.svg";
import Vision from "../assets/Flower.svg";

function Departments() {
  return (
    <>
      <div className="my-32">
        <div className="font-title  text-center tracking-wide text-[18px] lg:text-[20px] text-[#111]">
          Exwalt Departments
        </div>
        <div className="my-2 text-[11px]  font-medium mb-6 lg:w-[450px] text-[#707070] mx-auto text-center">
          Exwalt operates through multiple specialized <br /> departments,
          focusing on technology and <br /> entertainment innovations.
        </div>
        <div className="lg:hidden">
          <hr className="w-44 mx-auto rotate-90 h-[1px] mt-32 mb-32 border-0 bg-gradient-to-r from-white via-[#989797] to-white" />
        </div>
        <div className="my-16 md:flex md:justify-between mx-40">
          <div className="lg:w-1/2 ">
            <img src={Ball} className=" size-28 mx-auto" alt="" />
            <div className="text-center mt-2  font-medium  font-title tracking-wide">
              Technology
            </div>
            <div className="text-[11px] text-center mt-2 mx-10 sm:w-72 sm:mx-auto font-body font-medium tracking-wide text-[#707070]">
              The technology department pioneers software and hardware for smart
              cities and innovation.
            </div>
            <div className="text-center mt-5">
              <button className=" text-custom-size tracking-wide bg-[#111] px-5 py-2 rounded-lg text-white font-bold">
                <div>DISCOVER</div>
              </button>
            </div>
          </div>
          <div className="dmf:hidden">
            <hr className="w-[300px] rotate-90 h-[1px] mt-36 border-0 bg-gradient-to-r from-white via-[#989797] to-white" />
          </div>

          <div className="lg:w-1/2 my-16 md:my-0">
            <img src={Vision} className=" size-28 mx-auto" alt="" />
            <div className="text-center mt-2 font-medium font-title tracking-wide">
              Entertainment
            </div>
            <div className="text-[11px] text-center mt-2 mx-10 sm:w-72 sm:mx-auto font-body font-medium tracking-wide text-[#707070]">
              The entertainment department creates immersive video games and
              captivating animations.
            </div>
            <div className="text-center mt-5">
              <button className=" text-custom-size tracking-wide bg-[#111] px-5 py-2 rounded-lg text-white font-bold">
                <div>DISCOVER</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departments;
