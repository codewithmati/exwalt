import imgExwalt from "../assets/BG.svg";
import Grabber from "../assets/Grabber.svg";
import G0 from "../assets/G1.svg";
import G1 from "../assets/G2.svg";
import G2 from "../assets/G3.svg";
import G3 from "../assets/G4.svg";
import glasslogo from "../assets/glasslogo.svg";
import R0 from "../assets/Rectangle 97.svg";
import R1 from "../assets/Rectangle 98.svg";
import R2 from "../assets/Rectangle 99.svg";
import R3 from "../assets/Rectangle 100.svg";
import Listing from "./Listing";
import Partners from "./Partners";
import News from "./News";
import Footer from "./Footer";
import SectionWorld from "./SectionWorld";
import SectionVideo from "./SectionVideo";
import Departments from "./Departments";
import BulletPoint from "./BulletPoint";
import Values from "./Values";
import Hero from "./Hero";

const images = [
  { bg: R0, icon: G0, title: "Real-time Data", text: "Real-time data provides immediate insights, crucial for agile decision-making." },
  { bg: R1, icon: G1, title: "City Management", text: "City management ensures efficient urban operations for sustainable development." },
  { bg: R2, icon: G2, title: "3D Simulations", text: "Visualizing scenarios and evacuation plans, aiding planning and decision-making." },
  { bg: R3, icon: G3, title: "AI-Driven", text: "Enhances operations and decision-making through advanced AI." }
];

function SectionDMF() {

  return (
    <div className="relative h-screen xl:h-auto overflow-x-auto scroll-hidden top-0">
      <Hero />
      <Values />
      <Partners />
      <div className="sticky top-0 h-screen xl:h-auto overflow-x-auto scroll-hidden z-5">
         <img src={imgExwalt} className="object-cover h-screen xl:h-full w-full" alt="Background" />
           <div className="absolute inset-0 text-white flex flex-col justify-center items-center  mx-24">
           {/* <div className="mt-[-80px]"> */}
              <img 
                src={glasslogo}
                alt="Logo" 
                className="w-[250px] h-auto mt-[-80px] backdrop-opacity-20"
              />
            {/* </div> */}
             <div className="xl:flex xl:justify-between xl:w-full text-center mt-[-20px]">
               <div className="font-title text-[15px]">Exwalt Technologies</div>
               <div className="text-[11px] mx-auto lg:mx-0 text-left">
                 <p>Embracing the essence of minimalism, our design</p>
                 <p>philosophy focuses on clarity and purpose. Exwalt creates</p>
                 <p>intuitive, streamlined solutions that blend form and function.</p>
             </div>
             </div>
          </div>
      </div>

      <div className="bg-white text-[#111] rounded-t-3xl text-center shadow-top absolute z-10 w-full left-0 right-0 top-[95%] overflow-x-auto scroll-hidden">
        <img src={Grabber} className="mx-auto my-5" alt="Grabber" />
        <div className="mt-8">
          <span className="font-body tracking-wide font-medium mr-2 text-[#111]">exwalt</span>
          <span className="text-custom-size tracking-wide font-bold ring-[1.5px] ring-[#111] rounded-full py-0.5 px-2">TECHNOLOGY</span>
        </div>
        <div className="mt-3 font-title tracking-wide text-[18px] lg:text-[20px] text-[#111]">Digital Management Framework</div>
        <div className="my-2 text-[13px] lg:text-sm font-medium mb-6 lg:w-[450px] mx-5 sm:mx-16 md:mx-48 lg:mx-auto">
          An innovative framework for real-time data, 3D simulations, and smart city management supported by AI, enabling advanced urban planning and dynamic decision-making.
        </div>
        <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto mt-10" />
        <div className="lg:flex lg:justify-between mx-24 px-2 my-5">
          <div className="font-title font-medium text-[18px] tracking-wide text-[#111111]">
            Key Capabilities
          </div>
          <div className="text-[11px] font-body text-[#707070] font-medium text-left">
            <p>Enhance integration, improve decisions, optimize urban, </p>
            <p>management, and automate intelligently to transform</p> 
            <p>city plaining and operation</p>
          </div>
        </div>
        {/* <div className="flex sm:mx-16 md:mx-24 lg:mx-24 items-center"> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 mx-24'>
            {images.map(({ bg, icon, title, text }, index) => (
              <div key={index} className="shrink-0 relative w-full">
                <img src={bg} className="size-64 object-fit rounded-2xl" alt={title} />
                <div className="absolute inset-0 flex flex-col items-center justify-center mx-5 text-white text-center">
                  <img src={icon} className="size-24 mx-auto backdrop-blur-md" alt={title} />
                  <div className="font-medium text-[15px] mt-2 font-title">{title}</div>
                  <div className="text-[10px]  font-body">{text}</div>
                </div>
              </div>
            ))}
          </div>
        {/* </div> */}
        <Listing />
        <SectionWorld />
        <SectionVideo />
        <BulletPoint />
        <Departments />
        <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto mb-8 mt-24 " />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default SectionDMF;
