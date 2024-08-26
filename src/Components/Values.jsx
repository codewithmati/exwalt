import Ball from "../assets/Ball.svg";
import Vision from "../assets/Flower.svg";
import Mission from "../assets/image 12 copy.svg";
import Future from "../assets/image 13 copy.svg";

function Values() {

  
  return (
    <>
      <div
        id="next-section"
        className="mx-24 mt-[100px] my-16"
      >
        <div className="lg:flex lg:justify-between mx-2">
          <div className="font-title font-medium text-[18px] tracking-wide text-[#111111]">
            The Pillars of Exwalt
          </div>
          <div className="text-[11px] font-body text-[#707070] font-medium">
            <p>These pillars define our commitment to excellence</p>
            <p>and innovation, guiding every decision and shaping</p>
            <p>our vision for the future.</p>
          </div>
        </div>
            <div
              className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            >
              {[{title: "Minimalism", desc: "Simplicity powers user-friendly, functional designs. Aesthetic clarity comes from removing unnecessary details.", img: Ball},
                {title: "Vision", desc: "Innovative technologies transform lives, shaping the future. A boundary-pushing vision aims to create a better world.", img: Vision},
                {title: "Mission", desc: "We enhance life quality with sustainable, smart tech solutions, driving progress and adding value to society.", img: Mission},
                {title: "Future", desc: "Innovation and creativity shape the future, creating a smarter, more sustainable, and connected world through advanced technology.", img: Future}]
                .map(({ title, desc, img }, idx) => (
                  <div key={idx} className="min-w-[250px] lg:max-w-[350px] bg-[#F5F5F5]  py-10 rounded-xl text-center">
                    <img src={img} className="size-28 mx-auto" alt={title} />
                    <div className="font-medium text-[18px] mt-8 font-title tracking-wide text-[#111111]">{title}</div>
                    <div className="text-[10px] font-body text-[#707070]  mx-5 tracking-wide">{desc}</div>
                  </div>
              ))}
            </div>
      </div>
    </>
  );
}

export default Values;
