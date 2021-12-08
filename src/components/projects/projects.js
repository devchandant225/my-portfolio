import React from "react";

const Projects = () => {
  const slideRight = () => {
    const element = document.getElementById("project-container");
    element.scrollLeft += 200;
  };
  const slideLeft = () => {
    const element = document.getElementById("project-container");
    element.scrollLeft -= 200;
  };

  return (
    <div className=" py-10">
      <h1 className="lg:text-5xl text-3xl font-semibold text-gray-600">
        Client’s get
        <span className="text-yellow-400">always exceptional </span> <br />
        works from me......
      </h1>

      <div className="flex flex-row justify-end lg:hidden block">
        <div onClick={slideLeft} className="relative cursor-pointer">
          <img
            className="w-[5rem] h-[5rem]"
            src="/vectors/left.svg"
            alt="left.svg"
          />
          <p className="text-gray-50 absolute top-6 left-6">prev</p>
        </div>
        <div onClick={slideRight} className="relative cursor-pointer">
          <img
            className="w-[5rem] h-[5rem]"
            src="/vectors/right.svg"
            alt="right.svg"
          />
          <p className="text-gray-50 absolute top-6 left-6">next</p>
        </div>
      </div>

      <div className="flex flex-row justify-between py-4">
        <div className="w-[30%] flex flex-col justify-center items-center relative lg:block hidden pl-16  ">
          <div
            onClick={slideRight}
            className="relative cursor-pointer active:transform active:translate-y-4 z-30 mt-28"
          >
            <img
              className="w-[5rem] h-[5rem]"
              src="/vectors/right.svg"
              alt="right.svg"
            />
            <p className="text-gray-50 absolute top-6 left-6">next</p>
          </div>
          <div
            onClick={slideLeft}
            className="relative active:transform active:translate-y-4 cursor-pointer z-30"
          >
            <img
              className="w-[5rem] h-[5rem]"
              src="/vectors/left.svg"
              alt="left.svg"
            />
            <p className="text-gray-50 absolute top-6 left-6">prev</p>
          </div>
          <img
            className="absolute left-0 top-0"
            src="/vectors/blob2.svg"
            alt="blob.svg"
          />
        </div>
        <div
          id="project-container"
          className="lg:w-[70%] w-full flex flex-row space-x-4 overflow-x-scroll py-4"
        >
          <img
            className="w-full shadow-xl"
            src="/images/dakshyanepal.svg"
            alt="dakshyanepal.svg"
          />
          <img
            className="w-full shadow-xl"
            src="/images/dakshyanepal.svg"
            alt="dakshyanepal.svg"
          />
          <img
            className="w-full shadow-xl"
            src="/images/dakshyanepal.svg"
            alt="dakshyanepal.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
