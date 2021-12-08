import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Proficiency = () => {
  useEffect(() => {
    aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="py-10">
      <div className="flex lg:flex-row flex-col justify-between lg:space-x-12 items-center">
        <div className="lg:w-[50%] w-full">
          <h1 className="lg:text-5xl text-3xl font-semibold text-gray-600">
            <span className="text-yellow-400 ">My Proficiency</span>
            With <br />
            The Topics
          </h1>
          <img
            className="object-contain lg:w-[70%] w-full mt-4"
            src="/images/proficiency.svg"
            alt="proficiency.svg"
          />
          <p className="text-gray-600 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet
            nulla ut hac urna, ornare enim.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-4 lg:w-[50%] w-full">
          <div className="shadow-md bg-gray-100 relative rounded-md p-4">
            <div className="flex flex-row justify-between">
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                React JS
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                95%
              </h1>
            </div>

            <div
              data-aos="react-elongate"
              className="bg-green-600 absolute bottom-0  h-[0.8rem] rounded-full"
            ></div>
          </div>
          <div className="shadow-md relative bg-gray-100 rounded-md p-4">
            <div className="flex flex-row justify-between">
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                Node JS
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                90%
              </h1>
            </div>

            <div
              data-aos="node-elongate"
              className="bg-yellow-400 h-[0.8rem] absolute bottom-0 rounded-full"
            ></div>
          </div>
          <div className="shadow-md relative bg-gray-100 rounded-md p-4">
            <div className="flex flex-row justify-between">
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                Html5/Css3/javaScript
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                95%
              </h1>
            </div>

            <div
              data-aos="html-elongate"
              className="bg-blue-600 absolute bottom-0 h-[0.8rem] rounded-full"
            ></div>
          </div>
          <div className="shadow-md bg-gray-100 relative rounded-md p-4">
            <div className="flex flex-row justify-between">
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                Laravel
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                80%
              </h1>
            </div>

            <div
              data-aos="laravel-elongate"
              className="bg-red-600  absolute bottom-0 h-[0.8rem] rounded-full"
            ></div>
          </div>
          <div className="shadow-md relative bg-gray-100 rounded-md p-4">
            <div className="flex flex-row justify-between">
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                Django
              </h1>
              <h1 className="lg:text-3xl text-xl font-semibold text-gray-600 py-2">
                80%
              </h1>
            </div>

            <div
              data-aos="django-elongate"
              data-aos-offset="5"
              className="bg-pink-600 absolute bottom-0 h-[0.8rem] rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proficiency;
