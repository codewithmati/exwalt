// import React from "react";
import { Banner } from "./Banner";
import img1 from "../assets/images/1.svg";
import img2 from "../assets/images/2.svg";
import img3 from "../assets/images/3.svg";
import img4 from "../assets/images/4.svg";
import img5 from "../assets/images/5.svg";
import img6 from "../assets/images/6.svg";

// const images = [
//   { id: crypto.randomUUID(), image: img1 },
//   { id: crypto.randomUUID(), image: img2 },
//   { id: crypto.randomUUID(), image: img3 },
//   { id: crypto.randomUUID(), image: img4 },
//   { id: crypto.randomUUID(), image: img5 },
//   // { id: crypto.randomUUID(), image: img6 },
// ];

function Partners() {
  return (
    <div className="mx-24 mt-[148px] my-16">
      <div className="text-center my-10 mx-5">
        <div className="text-center font-medium text-[20px] xl:text-[25px] font-title tracking-wide text-[#111]">
          Trusted Partners
        </div>
        <p className="text-center mt-2 text-[12px] lg:text-sm xl:text-[14px] px-5 font-body text-[#707070] font-medium tracking-wide">
          Exwalt collaborates with industry leaders and <br /> organizations to
          deliver exceptional solutions.
        </p>
        <div className="flex justify-center">
          <img src={img6} alt="logo" className="size-24"/>
        </div>
      </div>
      <div className="flex gap-24 mx-24 ">
        <img src={img1} alt="brands" className="size-24"/>
        <img src={img2} alt="brands" className="size-24"/>
        <img src={img3} alt="brands" className="size-24"/>
        <img src={img4} alt="brands" className="size-24"/>
        <img src={img5} alt="brands" className="size-24"/>
      </div>
    </div>
  );
}

export default Partners;
