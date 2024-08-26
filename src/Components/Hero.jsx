import Header from "./Header";

const SPLINE_URL = "https://my.spline.design/untitled-86b14bde1d944d365f9ae13efbc6fdb4/";

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header placed outside the main container */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Header />
      </div>

      <div className="h-screen bg-[#FFFFFF] relative overflow-hidden">
      <iframe
          src={SPLINE_URL}
          className="h-screen w-full absolute top-0 z-10"
          title="3D Animation"
          frameBorder="0"
          allowFullScreen
          style={{ pointerEvents: 'none' }} // Ensure iframe does not capture scroll events
        ></iframe>

        <div className="absolute bottom-0 left-0 right-0 z-20 text-center">
          <div className="font-medium text-[13px] xl:text-[20px] font-title tracking-wide text-[#111]">
            Bridging the Horizons
          </div>
          <p className="mt-2 text-[11px] lg:text-xs px-5 font-body text-[#707070] font-medium tracking-wide">
            At the forefront of innovation, Exwalt is dedicated to <br />
            shaping the future. Innovating beyond boundaries <br />
            to create a world of endless opportunities.
          </p>
          <div className="mt-5 relative">
            <button
              onClick={scrollToNextSection}
              className="py-1.5 px-4 ring-[0.5px] ring-[#707070] rounded-full text-[11px] font-mediumNMGT tracking-wider"
            >
              Scroll Down
            </button>
            <div className="flex justify-center mt-[42.5px]">
              <hr className="w-[85px] rotate-90 h-[1px] border-0 bg-gradient-to-r from-[#707070] to-[#d9d9d9]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;