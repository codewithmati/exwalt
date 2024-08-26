import React from "react";

const BulletPoint = () => (
  <div className="shadow-lg pb-24 text-left">
    <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto" />
    <div className="lg:flex lg:justify-between mt-12 mx-24">
      <div className="lg:w-1/4">
        <h3 className="font-title font-medium text-[18px] tracking-wide text-[#111111]">
          Area of Usage
        </h3>
        <p className="text-[11px] mt-2 font-body text-[#707070] font-medium tracking-wide">
          Enhance integration, improve decisions, optimize urban management, and
          automate intelligently to transform city planning and operations.
        </p>
      </div>
      <ul className="lg:w-7/12 lg:grid lg:grid-cols-3 lg:gap-5 text-[11px]  font-body text-[#111111] font-medium tracking-wide mt-5 lg:mt-0 list-disc">
        <li className="mt-1 lg:mt-0 w-48">
          Smart city surveillance{" "}
          <span className="text-[#707070]">
            enhances safety by transforming CCTV feeds into interactive 3D scenes with AI.
          </span>
        </li>
        <li className="mt-1 lg:mt-0 ml-5   w-48">
          Environmental monitoring and management{" "}
          <span className="text-[#707070]">
            utilize real-time 3D scenes for accurate sustainability.
          </span>
        </li>
        <li className="mt-1 lg:mt-0 ml-10 w-48">
          Disaster response and management{" "}
          <span className="text-[#111111]">
            utilizes 3D scenes for emergency coordination.
          </span>
        </li>
        <li className="mt-1 lg:mt-0 w-48">
          Healthcare services{" "}
          <span className="text-[#707070]">
            can improve emergency response times with real-time 3D mapping and tracking.
          </span>
        </li>
        <li className="mt-1 lg:mt-0 ml-5 w-48">
          Community policing uses{" "}
          <span className="text-[#707070]">
            interactive, real-time, and historical 3D scenes to increase transparency and build trust.
          </span>
        </li>
        <li className="mt-1 lg:mt-0 ml-10 w-48">
          Utility management{" "}
          <span className="text-[#707070]">
            uses 3D visualization to efficiently monitor and maintain infrastructure.
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default BulletPoint;
