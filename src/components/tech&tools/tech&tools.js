import React, { useEffect } from "react";
import toolntech from "./tech&tools.json";
import aos from "aos";
import "aos/dist/aos.css";

const Techtools = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="overflow-hidden w-full py-8">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-[50%] w-full ">
          <h1 className="lg:text-5xl text-3xl text-gray-600 font-semibold">
            Tools And Technology <br />{" "}
            <span className="text-yellow-400">I’m Best At....</span>
          </h1>
          {/* <img
            src="/images/tool&tech.svg"
            alt="tool&tech.svg"
            className="object-contain w-[60%] p-4"
          /> */}
          <p className="text-gray-600 py-4 text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer id egestas massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer id egestas massa. Lorem ipsum
            dolor sit amet, consectetur
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-100 font-semibold px-4 py-2 rounded-full">
            Contact me
          </button>
        </div>
        <div
          data-aos="zoom-in-up"
          className="lg:w-[50%] w-full relative flex flex-row justify-center items-center lg:mt-0 mt-16"
        >
          <div className="lg:w-[25rem] lg:h-[25rem]  rounded-full flex flex-row justify-center items-center border-2 border-gray-600 bg-gray-300">
            <div
              id="green-circle"
              className="w-[20rem] h-[20rem] relative  rounded-full  flex flex-row justify-center items-center bg-green-600 "
            >
              <div
                id="atom"
                className="absolute transform skew-y-12 -top-16 bg-gray-50 rounded-full border-2 border-gray-100 p-2"
              >
                <img
                  className="w-[3rem]  h-[3rem] object-cover"
                  src="/tech&tools/atom.svg"
                  alt="atom.svg"
                />
              </div>

              <div
                id="django"
                className="bottom-[50%] p-2 left-[-4rem] absolute bg-gray-50 rounded-full border-2 border-gray-100"
              >
                <img
                  className="w-[3rem] h-[3rem]  object-cover"
                  src="/tech&tools/django.svg"
                  alt="django.svg"
                />
              </div>
              <div
                id="nodejs"
                className="absolute bottom-[-4rem] right-[40%] bg-gray-50 rounded-full border-2 border-gray-100 p-2"
              >
                <img
                  className="w-[3rem] h-[3rem]  object-cover"
                  src="/tech&tools/nodejs.svg"
                  alt="nodejs.svg"
                />
              </div>
              <div
                id="laravel"
                className="absolute top-[6rem] -right-16 bg-gray-50 rounded-full border-2 border-gray-100 p-2"
              >
                <img
                  className="w-[3rem] h-[3rem]  object-cover"
                  src="/tech&tools/laravel.png"
                  alt="laravel.png"
                />
              </div>
            </div>

            <div className="absolute">
              <div
                id="yellow-circle"
                className="w-[15rem] relative h-[15rem] rounded-full flex flex-row justify-center items-center bg-yellow-400 "
              >
                <div className="w-[10rem] h-[10rem] rounded-full flex flex-row justify-center items-center bg-pink-500 "></div>
                <div
                  id="javascript"
                  className=" absolute -top-9 bg-gray-50 rounded-full border-2 border-gray-100 p-2"
                >
                  <img
                    className="w-[3rem] h-[3rem] object-cover"
                    src="/tech&tools/javascript.svg"
                    alt="javascript.svg"
                  />
                </div>
                <div
                  id="css3"
                  className="bottom-0 left-0 absolute bg-gray-50 rounded-full border-2 border-gray-100 p-2"
                >
                  <img
                    className="w-[3rem] h-[3rem]  object-cover"
                    src="/tech&tools/css3.svg"
                    alt="css3.svg"
                  />
                </div>
                <div
                  id="html"
                  className="absolute bottom-0 right-0 bg-gray-50 rounded-full border-2 border-gray-100 p-2"
                >
                  <img
                    className="w-[3rem] h-[3rem] object-cover"
                    src="/tech&tools/html.svg"
                    alt="html.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ zIndex: "-1" }}
            className="absolute top-[-2rem] lg:block hidden right-[6rem]"
            src="/vectors/techVector.svg"
            alt="techVector.svg"
          />
          <img
            style={{ zIndex: "-1" }}
            className="absolute bottom-[-48px] lg:block hidden right-[7rem]"
            src="/vectors/techVector1.svg"
            alt="techVector1.svg"
          />
        </div>
      </div>
      <div className="relative grid lg:grid-cols-4 grid-cols-2 lg:gap-x-4 gap-x-2 gap-y-8 mt-20">
        <div className="absolute top-0 w-full flex flex-row justify-between">
          <div className="pink-bulb w-[20rem] h-[20rem] filter blur-3xl rounded-full bg-pink-400 bg-opacity-50 shadow-2xl"></div>
          <div className="blue-bulb w-[20rem] h-[20rem] filter blur-3xl rounded-full bg-blue-400 bg-opacity-50 shadow-2xl"></div>
        </div>
        {toolntech &&
          toolntech.map((item) => (
            <div
              data-aos="flip-left"
              className="flex flex-row justify-center items-center lg:gap-x-2 gap-x-1 bg-gray-200 shadow-lg rounded-xl lg:w-[15rem] w-[10rem] lg:px-4 py-2 transition-all duration-500 hover:transform hover:-translate-y-3 "
            >
              <img
                className="lg:w-[4rem] w-[2rem] lg:h-[4rem] h-[2rem] object-contain"
                src={item.image}
                alt={item.title}
              />
              <h1 className="lg:text-2xl text-lg font-semibold text-gray-700">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Techtools;
