import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="py-10 mt-8 ">
      <div className="relative flex lg:flex-row flex-col justify-between items-center lg:space-x-8 space-x-0">
        <div className="absolute top-0 w-full flex flex-row justify-between">
          {/* <div className="pink-bulb w-[20rem] h-[20rem] filter blur-3xl rounded-full bg-pink-400 bg-opacity-50 shadow-2xl"></div>
          <div className="blue-bulb w-[20rem] h-[20rem] filter blur-3xl rounded-full bg-blue-400 bg-opacity-50 shadow-2xl"></div> */}
        </div>
        <div className="lg:w-[30%] w-full lg:pb-0 pb-8">
          <h1 className="text-2xl text-gray-600 font-bold">
            My Awesome <br />
            <span className="lg:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
              Services
            </span>
          </h1>
          <img
            src="/images/services.svg"
            alt="services.svg"
            className="object-contain  lg:hidden block p-6"
          />
          <p className="text-gray-600 text-sm font-semibold lg:pt-3 lg:pb-3 pb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <buttom className="my-8 font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-100 px-6 py-2 rounded-full">
            Download Cv
          </buttom>
        </div>
        <div className="lg:w-[70%] w-full grid lg:grid-cols-2 grid-cols-1 gap-x-8 text-gray-600">
          <div className="flex flex-row justify-center items-center">
            <div data-aos="flip-right" className="box1-wrapper">
              <div
                id="box1"
                className="relative bg-gray-50 overflow-hidden shadow-xl text-center px-4 py-2 rounded-2xl"
              >
                <center className="mt-8">
                  <img
                    className=""
                    src="/vectors/design.svg"
                    alt="design.svg"
                  />
                </center>
                <h1 className="text-2xl font-semibold py-1">Design</h1>
                <p className="py-1 text-sm font-semibold">
                  It is a long established fact that a reader will be distracted
                  by
                </p>
                <button className="py-1 bg-blue-600 font-semibold border-2 rounded-full px-3 transition-all duration-500 hover:bg-gray-100 hover:text-blue-600 hover:transform hover:scale-x-110 hover:border-blue-600 text-blue-100">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="lg:space-y-4 space-y-8 lg:mt-0 mt-6">
            <div data-aos="flip-left" className="box2-wrapper">
              <div
                id="box2"
                className="relative bg-gray-50 overflow-hidden shadow-xl text-center px-4 py-2 rounded-2xl"
              >
                <center className="lg:mt-8 ">
                  <img
                    className=""
                    src="/vectors/setting.svg"
                    alt="setting.svg"
                  />
                </center>
                <h1 className="text-2xl font-semibold py-1">Development</h1>
                <p className="py-1 text-sm font-semibold">
                  It is a long established fact that a reader will be distracted
                  by
                </p>
                <button className="py-1 bg-blue-600 font-semibold border-2  rounded-full px-3 transition-all duration-500 hover:bg-gray-100 hover:text-blue-600 hover:transform hover:scale-x-110 hover:border-blue-600 text-blue-100">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div data-aos="flip-up" className="box3-wrapper">
              <div
                id="box3"
                className="relative bg-gray-50 overflow-hidden shadow-xl text-center px-4 py-2 rounded-2xl"
              >
                <center className="mt-8">
                  <img
                    className=""
                    src="/vectors/digitalocean.svg"
                    alt="digitalocean.svg"
                  />
                </center>
                <h1 className="text-2xl font-semibold py-1">Deployment</h1>
                <p className="py-1 text-sm font-semibold">
                  It is a long established fact that a reader will be distracted
                  by
                </p>
                <button className="py-1 bg-blue-600 font-semibold border-2 rounded-full px-3 transition-all duration-500 hover:bg-gray-100 hover:text-blue-600 hover:transform hover:scale-x-110 hover:border-blue-600 text-blue-100">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
