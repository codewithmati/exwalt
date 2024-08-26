import { useRef } from "react";
import M1 from "../assets/Media.svg";
import M2 from "../assets/Media (1).svg";
import M3 from "../assets/Media (2).svg";
import M4 from "../assets/Media (3).svg";

const newsItems = [
  { img: M1, title: "Exwalt Expo Opened.", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi." },
  { img: M2, title: "FarmZone Is Available On PS5", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi." },
  { img: M3, title: "DMF of the World", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi." },
  { img: M4, title: "Exwalt’s First Android Testing", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi." },
  { img: M4, title: "Automation Is Here", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi." }
];

const News = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300; // Amount to scroll when button is clicked

  const scroll = (direction) => {
    sliderRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex justify-between mx-24 outline-none">
        <div>
          <div className="flex justify-between">
            <h2 className="font-title font-medium text-[18px] tracking-wide text-[#111111]">News & Updates</h2>
            <a href="#" className="text-custom-size font-boldNM tracking-wide underline">SEE All</a>
          </div>
          <p className="text-[11px] font-body text-[#707070] font-medium">
            Stay informed with the latest news and updates from
          </p>
          <p className="text-[11px] font-body text-[#707070] font-medium">
            Exwalt, featuring our innovations and achievements.
          </p>   
        </div>
        <div className="flex justify-center text-center gap-2">
            <button
            onClick={()=>scroll(-1)}
            className="w-6 h-6 flex justify-center items-center mt-10 text-xs bg-gray-100 text-black rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={()=>scroll(1)}
            className="w-6 h-6 flex justify-center items-center mt-10 text-xs bg-gray-100 text-black rounded-full"
          >
            &gt;
          </button>
        </div>

      </div>
      <div
        ref={sliderRef}
        className="flex gap-[20px] overflow-x-auto my-8 mb-28 ml-24 cursor-grab scroll-hidden"
        // style={{ scrollBehavior: 'smooth' }}
      >
        {newsItems.map((item, index) => (
          <div key={index} className="min-w-[250px] lg:max-w-[180px] text-left flex-shrink-0">
            <img src={item.img} alt={item.title} />
            <h3 className="text-[14px] font-medium font-title tracking-wide mt-2">{item.title}</h3>
            <p className="text-[11px] w-48 font-body text-[#707070]  mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
