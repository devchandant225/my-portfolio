import React from "react";

const Infographics = () => {
  return (
    <div className="pb-[15rem]">
      <center>
        <h1 className="lg:text-5xl text-3xl font-semibold">
          Overall <br />
          <span className="text-yellow-400">Timeline Infographics</span>
        </h1>
      </center>
      <div className="relative lg:w-[50%]  w-full mx-auto">
        <center className="relative">
          <img
            className="object-cover  w-[22rem]"
            src="/vectors/circle.svg"
            alt="circle.svg"
          />
          <img
            className="object-cover absolute w-[60%] bottom-[-1rem] left-[7.8rem]"
            src="/vectors/longcurve.svg"
            alt="longcurve.svg"
          />
          <img
            className="object-cover w-[4rem] transform rotate-[15deg] absolute top-[7rem] left-[7.5rem]"
            src="/vectors/shortcurve.svg"
            alt="longcurve.svg"
          />
        </center>
        <div className="grid grid-cols-5 space-x-8">
          <div className="w-[15rem] h-[15rem] absolute top-[6rem] left-[-7rem] transform rotate-[85deg]">
            <img
              className="w-[15rem] h-[15rem] object-contain"
              src="/vectors/flask.svg"
              alt="flask.svg"
            />
          </div>
          <div className="w-[15rem] h-[15rem]  absolute top-[17rem] left-[-3em] transform rotate-[40deg]">
            <img
              className="w-[15rem] h-[15rem] object-contain"
              src="/vectors/flask.svg"
              alt="flask.svg"
            />
          </div>
          <div className="w-[15rem] h-[15rem] absolute left-[9rem] top-[22rem]  transform rotate-[2deg]">
            <img
              className="w-[15rem] h-[15rem] object-contain"
              src="/vectors/flask.svg"
              alt="flask.svg"
            />
          </div>
          <div className="w-[15rem] h-[15rem] absolute right-[2rem] bottom-[-12rem] transform rotate-[-35deg]">
            <img
              className="w-[15rem] h-[15rem] object-contain"
              src="/vectors/flask.svg"
              alt="flask.svg"
            />
          </div>
          <div className="w-[15rem] h-[15rem]  absolute right-[-5rem] bottom-[-2rem] transform rotate-[-75deg]">
            <img
              className="w-[15rem] h-[15rem] object-contain"
              src="/vectors/flask.svg"
              alt="flask.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographics;
