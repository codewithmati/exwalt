import React from "react";

function Loading() {
  return (
    <div className="relative h-screen bg-white text-center overflow-hidden ">
      <iframe
        src="https://my.spline.design/untitled-86b14bde1d944d365f9ae13efbc6fdb4/"
        className="h-full w-full bg-white"
      ></iframe>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-[500px] mx-auto text-center font-body text-xs font-mediumNMGT">
        “The harmony between technology and nature illuminated by <br />
        simplicity, lights up the darkness{" "}
        <span className="text-[#707070]">
          and builds a bridge to a bright future <br /> for all beings; this is
          a call of salvation whispered from centuries <br /> beyond, through
          knowledge and unity.”
        </span>
        <div className="mt-5 text-[#707070]">- Sefa Doğan</div>
      </div>
    </div>
  );
}

export default Loading;
