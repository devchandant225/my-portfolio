import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Tsparticles } from "..";

const LandingSection = () => {
  const location = useLocation();

  var i = 0;
  var txt =
    "A passionate full stack web developer and mobile app developer having an experience of building web applications with javascript/Reactjs/Nodejs/python/Django/Flask and some other cool libraries and frameworks and cross-platform mobile applications using react-native.";
  var speed = 10;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  useEffect(() => {
    if (location.pathname === "/") {
      typeWriter();
    }
  }, []);

  return (
    <>
      <div className="relative py-6 lg:mb-0 mb-[18rem] lg:mt-0 mt-6">
        <Tsparticles />
        <div className="absolute px-12 z-30 top-0 w-full flex lg:flex-row flex-col-reverse justify-between items-center">
          <div className="lg:w-[40%] w-full flex flex-col  justify-center">
            <h1 className="text-2xl text-gray-600 font-bold">
              Hy! I Am <br />
              <span className="lg:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
                Chandan thakur
              </span>
            </h1>
            <p
              id="text"
              className="text-gray-600 text-sm font-semibold py-4"
            ></p>
            <button className="bg-blue-600 transition-all duration-500 border-2 hover:text-blue-500 hover:bg-white hover:border-blue-600 px-4 py-2 w-[10rem] text-gray-100 font-semibold text-lg rounded-full">
              Hire me
            </button>
          </div>
          <div className="relative lg:w-[50%] w-full">
            <img
              className="absolute top-0"
              src="/vectors/Vector-1.svg"
              alt="vector1"
            />
            <img className="" src="/vectors/Vector.svg" alt="vector" />
            <img
              className="absolute object-contain lg:w-[30rem] lg:left-[5rem] left-0 lg:top-10 top-0 lg:h-[30rem] w-[100%] h-[20rem] rounded-md"
              src="/ckt.jpg"
              alt="ckt.jpg"
            />

            <img
              id="love_emoji_3d"
              className="absolute -top-10 lg:-left-16 left-0"
              src="/images/love_emoji_3d.png"
              alt="love_emoji_3d"
            />
            <img
              id="star-1"
              className="absolute bottom-0 lg:-left-12 left-0"
              src="/images/Star 1.svg"
              alt="Star 1.svg"
            />
            {/* <img
            className="absolute -bottom-[15rem] right-[15rem]"
            src="/images/Star 2.svg"
            alt="Star 2.svg"
          /> */}
            {/* <img
              id="heart"
              className="absolute bottom-0 right-0"
              src="/images/love_3d.svg"
              alt="love_3d.svg"
            /> */}
            {/* <div
              className="absolute lg:block hidden   lg:top-0 -top-8
           right-0 shadow-lg flex flex-row space-x-2 bg-gray-200 justify-between items-center px-4 py-2 rounded-xl"
            >
              <img
                className="w-8 h-8 object-cover"
                src="/vectors/setting.svg"
                alt="setting.svg"
              />
              <div className="">
                <h2 className="lg:text-xl text-sm font-semibold text-gray-600">
                  Development
                </h2>
                <p className="lg:text-sm font-semibold text-gray-600">
                  Full stack web development
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* <img
        id="football"
        src="/football.png"
        alt="football.png"
        className="object-cover absolute -bottom-7 left-[9rem] w-[4rem] h-[4rem]"
      /> */}
      </div>
    </>
  );
};

export default LandingSection;
