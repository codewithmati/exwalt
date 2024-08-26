import React from "react";
import R74 from "../assets/Rectangle 74.svg";
import PlayIcon from "../assets/Icon.svg";
import "../App.css";

function SectionVideo() {
  return (
    <>
      <div className="mx-5 sm:mx-16 md:mx-24 lg:mx-32 mt-24 lg:mt-36 bg-white">
        <div className="lg:flex lg:justify-between text-left">
          <div className="text-[#111] font-title font-medium text-[15px] tracking-wide">
            Exwalt aims for PCSV to integrate <br />
            <span className="text-[#707070] opacity-75">
              a wide range of advanced technologies seamlessly.
            </span>
          </div>
          <div className="lg:w-[50%] lg:flex lg:justify-between text-[11px] my-2 lg:my-0 font-body text-[#707070] font-medium ">
            <div className="lg:w-72">
              Exwalt envisions PCSV growing into a comprehensive platform
              seamlessly integrating a wide range of advanced technologies.
            </div>
            <div className="mt-2 lg:mt-0 lg:w-72 ">
              The goal is to create fully autonomous smart cities that are
              resilient, sustainable, and adaptive to the ever-changing needs of
              their inhabitants.
            </div>
          </div>
        </div>
        <div className="relative mx-auto">
          <img
            src={R74}
            className="object-cover h-[350px] mx-auto lg:h-full rounded-2xl my-10 "
            alt=""
          />

          <div className="absolute inset-0 flex items-center justify-center text-white mx-5">
            <div>
              <div className="flex flex-col">
                <div className=" font-medium tracking-wide text-[15px] text-center font-title ">
                  Video Title Here
                </div>
                <div className=" text-[11px] text-center mt-3 font-body tracking-wide opacity-95">
                  Designed to be highly adaptable, PCSV can be customized to
                  meet the specific needs of each organization <br /> and
                  situation, ensuring optimal functionality, seamless
                  integration, and enhanced user experience.
                </div>
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-12 md:text-center md:text-xs md:font-medium tracking-wide md:mt-5 md:justify-center hidden font-title ">
                <div>
                  Managed Assets
                  <div className="mt-2 font-bold text-lg">$2.6B</div>
                </div>
                <div>
                  Created In The Metaverse
                  <div className="mt-2 font-bold text-lg">8,000km2</div>
                </div>
                <div>
                  Data Sets
                  <div className="mt-2 font-bold text-lg">+20</div>
                </div>
                <div>
                  APIs <div className="mt-2 font-bold text-lg">+50</div>
                </div>
              </div>
              <div className="text-center mt-5">
                <button className="text-xs bg-white px-4 py-2 rounded-lg text-black font-bold">
                  <div className="flex justify-center items-center">
                    <div>
                      <img src={PlayIcon} className="mr-1" alt="" />
                    </div>
                    <button className="text-custom-size">PLAY VIDEO</button>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionVideo;
