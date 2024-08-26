import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import R101 from "../assets/Rectangle 101.svg";
import { useState } from "react";

function Listing() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      id: "img-01",
      number: "01",
      title: "Enhanced Decision-Making",
      description:
        "Accurate, data-driven decisions that improve city operations and quality of life for residents.",
      imgSrc: R101,
    },
    {
      id: "img-02",
      number: "02",
      title: "Cost Savings",
      description:
        "Accurate, data-driven decisions that improve city operations and quality of life for residents.",
      imgSrc: R101,
    },
    {
      id: "img-03",
      number: "03",
      title: "Improved Public Services",
      description:
        "Better planning and delivery of public services, leading to higher citizen satisfaction.",
      imgSrc: R101,
    },
    {
      id: "img-04",
      number: "04",
      title: "Sustainability",
      description:
        "Promotion of sustainable practices and reduction of the city’s environmental footprint.",
      imgSrc: R101,
    },
  ];

  return (
    <>
      <div className="mx-24 text-left">
        <div className="lg:flex lg:justify-between mt-[80px] mb-[30px] ">
          <h3 className="text-[#111] font-title font-medium text-[18px] tracking-wide">
            Exwalt aims for DMF to
            <span className="text-[#707070] opacity-75 ml-2">
              integrate cutting-edge 
              <p>technologies seamlessly.</p>
            </span>
          </h3>
          <div className="lg:w-[46%] lg:flex lg:justify-between gap-20 text-[11px] lg:my-0 font-body text-[#707070]">
            <div className="lg:w-72">
              Exwalt envisions DMF growing into a broad platform seamlessly
              integrating cutting-edge technologies.
            </div>
            <div className="mt-2 lg:mt-0 lg:w-72 ">
              The goal is to create fully autonomous smart cities that are
              resilient, sustainable, and adaptive to the ever-changing needs of
              their inhabitants.
            </div>
          </div>
        </div>
        <div className="lg:hidden font-body  mt-32">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`border-t-2 mt-5 ${
                visibleIndex === index ? "text-[#111]" : "text-[#707070]"
              } opacity-85`}
            >
              <div className="flex justify-between mt-5">
                <div className="flex justify-start space-x-3">
                  <span
                    className={`ring-1 ${
                      visibleIndex === index
                        ? "ring-[#111] text-[#111]"
                        : "ring-[#707070] text-[#707070]"
                    } rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1`}
                  >
                    {item.number}
                  </span>
                  <div >
                    <div className="text-sm w-1 font-title font-mediumNMGT mt-1 tracking-wide">
                      {item.title}
                    </div>
                    {visibleIndex === index && (
                      <div className="text-[10px] mt-1 tracking-wide">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`h-3 transform ${
                      visibleIndex === index ? "rotate-180" : "rotate-90"
                    }`}
                    onClick={() => toggleVisibility(index)}
                  />
                </div>
              </div>
              {visibleIndex === index && (
                <img src={item.imgSrc} className="mt-2 mx-auto" alt="" />
              )}
            </div>
          ))}
          <hr className="my-5 border-1" />
        </div>

        <div className="flex justify-between dmf:hidden gap-6">
          <div className="w-1/2">
            {items.map((item, index) => (
              <div key={item.id} className="border-t-2">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)} // Reset to the first item on mouse leave
                  className={`my-6 flex justify-between ${
                    hoveredIndex === index ? "text-[#111]" : "text-[#707070]"
                  } opacity-85 group`}
                >
                  <div className="flex justify-start space-x-5">
                    <span
                      className={`ring-1 h-10 w-10 ${
                        hoveredIndex === index
                          ? "ring-[#111]"
                          : "ring-[#707070]"
                      } rounded-full flex justify-center items-center flex-shrink-0 mt-1`}
                    >
                      {item.number}
                    </span>
                    <div className="font-title w-32 text-sm mt-1.5 tracking-wide">
                      {item.title}
                    </div>
                  </div>
                  <div className=" opacity-80 font-body text-xs w-64 mt-1 tracking-wide">
                    {item.description}
                  </div>
                </a>
              </div>
            ))}
            <hr className="my-6 border-1" />
          </div>

          <div className="w-1/2 ">
            {items.map((item, index) => (
              <img
                key={item.id}
                src={item.imgSrc}
                className={`object-cover h-[375px] rounded-2xl float-right ${
                  hoveredIndex === index ? "" : "hidden"
                }`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
