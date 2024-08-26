import { useState } from "react";
import World from "../assets/world 1.svg";
import Grabber from "../assets/Grabber.svg";
import Logo2 from "../assets/images/Frame 34.svg";

function SectionWorld() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  const items = [
    {
      id: "item-01",
      number: "01",
      title: "Image Collection and Integration",
      description:
        "PCSV collects images from multiple cameras and integrates them to form a comprehensive and detailed scene. These images are processed using specialized algorithms and AI models.",
    },
    {
      id: "item-02",
      number: "02",
      title: "Real-time Depth Mapping and 3D Modeling",
      description:
        "The collected images are used to generate real-time depth maps and 3D models. Artificial intelligence analyzes the depth information from these images and constructs a three-dimensional representation of the scene.",
    },
    {
      id: "item-03",
      number: "03",
      title: "Real-time and Historical Data",
      description:
        "With PCSV, operators can navigate the scene in real-time and evaluate situations as they happen. Additionally, they can access historical data to analyze past events.",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      {/* once this section reach the full screen display the add the functional like that one section is stay static and seccond one move upwrd on it */}
      <div className="relative overflow-x-auto text-left scroll-hidden mt-16">
        {/* this section stay static*/}

        <div className=" lg:flex lg:justify-between sm:mx-16 md:mx-24 sticky top-0 lg:mx-32 ">
          <div className="lg:w-1/2 mx-5 mt-20">
            <div className="font-title font-medium text-[18px] tracking-wide text-[#111111]">
              Tailored Solutions
            </div>
            <div className="text-[13px] mt-2 font-body font-medium text-[#707070]">
              Designed to be highly adaptable, DMF can be customized to meet the
              specific needs of each organization and situation, ensuring
              optimal functionality, seamless integration, and enhanced user
              experience.
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={World} className="mt-10 float-right" alt="" />
          </div>
        </div>
        {/* this section should be scroll and move upward*/}
        <div className="bg-white rounded-t-3xl shadow-t-xl top-60 shadow-top absolute z-10">
          <img src={Grabber} className="mx-auto p-5" alt="Grabber" />
          <div className="mt-8 text-center">
            <span className="font-body tracking-wide font-mediumNMGT mr-2 relative top-0.5 text-[#111]">
              exwalt
            </span>
            <span className="text-custom-size tracking-wide font-bold ring-[1.5px] ring-[#111] rounded-full py-0.5 px-2">
              TECHNOLOGY
            </span>
          </div>
          <div className="font-title mt-3 tracking-wide text-[18px] lg:text-[20px] text-[#111] text-center">
            Point Cloud Synthetic Vision
          </div>
          <div className="my-2 text-[13px] lg:text-sm font-medium mb-6 lg:w-[450px] text-[#707070] mx-5 sm:mx-16 md:mx-48 lg:mx-auto text-center">
            With AI integration, PCSV transforms camera feeds into interactive
            3D scenes, providing real-time updates and an enriched synthetic
            vision experience.
          </div>
          <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto my-6 mt-24" />
          <div className="dmf:hidden">
            <img
              src={Logo2}
              className="absolute top-[350px] left-1/2 size-40 transform -translate-x-1/2 -translate-y-1/2"
              alt="Logo2"
            />
          </div>

          {items.map((item, index) => (
            <div key={item.id}>
              <a
                href="#"
                className={`flex justify-start space-x-3 lg:space-x-7 mx-24  ${
                  hoveredIndex === index ? "opacity-100" : "opacity-75"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`ring-1 rounded-full w-8 h-8 lg:h-10 lg:w-10 flex items-center justify-center flex-shrink-0 ${
                    hoveredIndex === index
                      ? "ring-[#111] text-[#111]"
                      : "ring-[#707070] text-[#707070]"
                  }`}
                >
                  {item.number}
                </span>
                <div className="lg:grid lg:grid-cols-2">
                  <div
                    className={`text-[15px] font-title font-mediumNMGT tracking-wide lg:w-52 ${
                      hoveredIndex === index ? "text-[#111]" : "text-[#707070]"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`text-[11px] font-body font-mediumNMGT tracking-wide lg:ml-[250px] ${
                      hoveredIndex === index
                        ? "text-[#111] opacity-80"
                        : "text-[#707070]"
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              </a>
              {index !== items.length - 1 && (
                <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto my-6" />
              )}
            </div>
          ))}
          <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-[#989797] to-gray-50 w-4/5 mx-auto my-6" />
        </div>
        
      </div>
    </>
  );
}

export default SectionWorld;
