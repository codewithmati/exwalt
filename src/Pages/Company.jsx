import React from "react";
import Header from "../Components/Header";
import CompanyHero from "../assets/HeroCompany.svg";
import PlayIcon from "../assets/Icon.svg";
import ComVideo from "../assets/Comapny Video.svg";
import founder from "../assets/sefaDogan.svg";
import Footer from "../Components/Footer";

function Company() {
  return (
    <>
      <Header />
      <div className="relative">
        <img src={CompanyHero} alt="Company Hero" className="w-full h-auto" />
        <div className="absolute inset-0 top-3/4 flex text-white text-base font-semibold">
          <p className="lg:mx-32 w-96 ">
            Exwalt is at the forefront{" "}
            <span className="text-gray-400">
              of technological and entertainment innovation, dedicated to
              transforming ideas into reality.
            </span>
          </p>
        </div>
      </div>
      <div className=" w-60 lg:mx-32 mt-10 font-semibold">
        Changing the way the world looks technology.
      </div>
      <div className="flex justify-between mx-32  mt-28">
        <div className="relative w-5/12">
          <img src={ComVideo} className="object-cover h-auto" alt="" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <button className="text-xs bg-white px-4 py-2 rounded-lg text-black font-bold">
              <div className="flex">
                <div>
                  <img src={PlayIcon} className="mr-1" alt="" />
                </div>
                <div>PLAY VIDEO</div>
              </div>
            </button>
          </div>
        </div>

        <div className="w-1/2 text-xs items-center">
          <div className="grid grid-cols-2 gap-8">
            <p>
              {` Exwalt, founded by Sefa Doğan in 2021 and based in Turkey, pushes
              the boundaries of technology to deliver innovative solutions that
              shape the future. Our goal is to transform daily life, business,
              and cities with advanced software and hardware. In every project,
              we combine aesthetics and functionality to create reliable and
              impactful experiences that simplify and enhance users' lives.`}
              <p className="mt-3">
                At the intersection of creativity and engineering, Exwalt makes
                a mark in the entertainment industry with immersive games and
                animations that open the doors to virtual worlds. Our
                Entertainment Office blends storytelling and technology to
                deliver unique experiences that captivate users. We aim for
                perfection in every detail, offering a visual and auditory
                feast.
              </p>
            </p>
            <p>
              Our Technology Office leads the transformation of various sectors
              with innovative software and advanced hardware solutions. We
              develop reliable and scalable solutions in healthcare, education,
              energy, and many other fields. By utilizing real-time data
              analysis and intelligent systems, we make processes more efficient
              and effective.{" "}
              <p className="mt-3">
                Exwalt builds the world of tomorrow today. Our mission is to
                enhance the quality of life and add value to society through
                technology. Our vision is to push the boundaries and create a
                smarter, more connected, and sustainable world. We move forward
                with the principles of innovation and excellence in every step
                we take.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs mt-1 mx-32">
        At the forefront of innovation, Exwalt is dedicated to shaping the
        future.
      </div>

      <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-gray-500 to-gray-50 w-4/5 mx-auto my-12" />

      <div className="mt-12 lg:flex lg:justify-between mx-5 sm:mx-12 lg:mx-24 xl:mx-32">
        <div className="text-gray-500 text-xs font-semibold w-72">
          Founder
          <div className="text-black text-base">Sefa Dogan.</div>
        </div>
        <div className="text-xs lg:w-1/2 lg:grid lg:grid-cols-2">
          <div>
            Sefa Doğan, with extensive experience in software, technology,
            electronics, and design, previously held senior roles before
            developing his own technologies at Exwalt.
          </div>
          <div className="mt-1 lg:mt-0 lg:ml-5">
            His company has quickly become known for its innovative projects and
            continues to grow and evolve under his guidance.
          </div>
        </div>
      </div>
      <div className="xl:mx-32 mt-10">
        <img src={founder} className="mx-auto" alt="" />
      </div>

      <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-gray-500 to-gray-50 w-4/5 mx-auto my-12" />

      <div className="mt-12 lg:flex lg:justify-between mx-5 sm:mx-12 lg:mx-24 xl:mx-32">
        <div className="w-1/2">
          <div className="text-gray-500 text-xs font-semibold w-72">
            Mission
            <div className="text-black text-base">
              Revolutionizing technology and entertainment.
            </div>
          </div>
          <div className="text-xs items-center">
            <div className="grid grid-cols-2 gap-8 mt-5">
              <p>
                {`At Exwalt, our mission is to drive the evolution of technology
                and entertainment by creating innovative solutions that push the
                boundaries of what's possible.`}
                <p className="mt-3">
                  We are dedicated to developing cutting-edge software and
                  hardware that transform everyday life, enhance business
                  operations, and create immersive digital experiences. Our
                  commitment to excellence ensures that every product we create
                  not only meets but exceeds industry standards, delivering
                  unparalleled quality and reliability.
                </p>
              </p>
              <p>
                In the realm of entertainment, we blend storytelling with
                advanced technology to produce captivating video games and
                animations. Our goal is to craft experiences that not only
                entertain but also inspire and engage audiences on a deeper
                level.
                <p className="mt-3">
                  By harnessing the power of technology and creativity, Exwalt
                  strives to revolutionize how people interact with and perceive
                  the digital world, paving the way for a smarter, more
                  connected future.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-5/12 mt-6">
          <img src={ComVideo} className="object-cover h-auto" alt="" />
          <div className="text-xs mt-1">
            At the forefront of innovation, Exwalt is dedicated to shaping the
            future.
          </div>
        </div>
      </div>
      <div className="mt-12 lg:flex lg:justify-between mx-5 sm:mx-12 lg:mx-24 xl:mx-32">
        <div className="w-5/12 mt-6">
          <img src={ComVideo} className="object-cover h-auto" alt="" />
          <div className="text-xs mt-1">
            At the forefront of innovation, Exwalt is dedicated to shaping the
            future.
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-gray-500 text-xs font-semibold w-72">
            Vision
            <div className="text-black text-base">
              Creating sustainable and innovative solutions.
            </div>
          </div>
          <div className="text-xs items-center">
            <div className="grid grid-cols-2 gap-8 mt-5">
              <p>
                Exwalt envisions a future where technology and entertainment
                converge to create extraordinary experiences that redefine how
                we live, work, and play.
                <p className="mt-3">
                  Our vision is to be at the forefront of this transformation,
                  driving innovation in both fields with a relentless focus on
                  quality, creativity, and user experience.
                </p>
                <p className="mt-3">
                  By seamlessly integrating advanced technologies into our
                  products, we aim to enhance everyday life and empower
                  individuals and businesses to reach new heights.
                </p>
              </p>
              <p>
                At Exwalt, we believe in the harmony between nature and
                technology. Our vision includes creating solutions that not only
                advance human capabilities but also respect and enhance the
                natural world.
                <p className="mt-3">
                  By developing sustainable technologies and environmentally
                  conscious entertainment, we strive to foster a balanced
                  relationship between our innovations and the ecosystem. This
                  approach ensures that our technological advancements
                  contribute to a healthier, more sustainable planet, where
                  technology and nature coexist in perfect harmony.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-gray-500 to-gray-50 w-4/5 mx-auto my-8" />
      <div className="sm:mx-16 md:mx-20 lg:mx-32 my-16 mx-5">
        <div className="lg:flex lg:justify-between">
          <div className=" font-semibold text-base">The Pillars of Exwalt</div>
          <div className="text-xs my-1 lg:w-72">
            These pillars define our commitment to excellence and innovation,
            guiding every decision and shaping our vision for the future.
          </div>
        </div>
        <div className="flex justify-between xl:justify-center gap-5 overflow-x-auto my-10">
          <div className="min-w-64 lg:max-w-72 bg-gray-100 p-5 rounded-xl">
            <img src="" className="size-16 mb-16" alt="" />
            <div className="font-semibold mt-5">Integrity</div>
            <div className="font-normal text-xs mt-2">
              We uphold the highest standards of honesty and transparency in all
              our interactions, building trust with our clients, partners, and
              employees.
            </div>
          </div>
          <div className="min-w-64 lg:max-w-72 bg-gray-100 p-5 rounded-xl">
            <img src="" className="size-16 mb-16" alt="" />
            <div className="font-semibold mt-5">Collaboration</div>
            <div className="font-normal text-xs mt-2">
              Teamwork is at the heart of our success. We believe that diverse
              perspectives and shared goals drive innovation and create
              stronger, more effective solutions.
            </div>
          </div>
          <div className="min-w-64 lg:max-w-72 bg-gray-100 p-5 rounded-xl">
            <img src="" className="size-16 mb-16" alt="" />
            <div className="font-semibold mt-5">Excellence</div>
            <div className="font-normal text-xs mt-2">
              We are committed to delivering the highest quality in everything
              we do. Our dedication to excellence ensures that we consistently
              exceed expectations.
            </div>
          </div>
          <div className="min-w-64 lg:max-w-72 bg-gray-100 p-5  rounded-xl">
            <img src="" className="size-16 mb-16" alt="" />
            <div className="font-semibold mt-5">Continuous Learning</div>
            <div className="font-normal text-xs mt-2">
              We encourage a culture of ongoing education and professional
              growth, empowering our team to stay ahead in a rapidly evolving
              industry.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 xl:mx-32 rounded-2xl">
        <div>
          <div className="flex flex-col py-10">
            <div className="font-semibold text-sm text-center text-gray-500">
              Career
            </div>
            <div className="font-semibold text-xl text-center mt-2 w-64 mx-auto">
              Discover open positions and join our team.
            </div>
            <div className="text-center mt-5">
              <button className="text-xs px-4 py-2 rounded-lg text-black font-bold ring-1 ring-black">
                <p>VIEW POSITIONS</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 h-px bg-gradient-to-r from-gray-50 via-gray-500 to-gray-50 w-4/5 mx-auto my-8" />
      <Footer />
    </>
  );
}

export default Company;
