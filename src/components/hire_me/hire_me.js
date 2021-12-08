import React from "react";

const Hireme = () => {
  return (
    <div className="py-4 container mx-auto">
      <div className="flex lg:flex-row flex-col space-y-8  justify-between">
        <div className="lg:w-[50%] w-full relative">
          <img
            src="/vectors/hireme.svg"
            alt="hireme.svg"
            className="object-contain w-[80%] h-[80%]"
          />
          <img
            src="/ckt.jpg"
            alt="hireme.svg"
            className="object-contain absolute top-0  w-[80%] h-[80%]"
          />
          <img
            src="/images/react_3d.svg"
            alt="react_3d.svg"
            className="object-contain w-[5rem] h-[5rem] absolute bottom-0 left-0"
          />
          <img
            src="/images/love_emoji_3d.svg"
            alt="love_emoji_3d.svg"
            className="object-contain w-[5rem] h-[5rem] absolute top-0 right-0"
          />
        </div>
        <div className="text-gray-600 lg:w-[50%] w-full">
          <h1 className="text-5xl font-semibold">
            <span className="text-yellow-400">Why Hire</span> <br /> Me ??
          </h1>
          <p className="text-sm font-semibold py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, eu
            diam, nibh proin. Volutpat, odio sed egestas purus fringilla est.
            Lectus ullamcorper eu egestas cursus lorem vitae enim.
          </p>
          <div className="px-4">
            <ul id="why-hire-me" className="font-semibold text-xl">
              <li>
                <span className="text-yellow-400">Robust</span> and Reusable
                code.
              </li>
              <li>
                <span className="text-yellow-400">Expericenced </span>field
                knowledge.
              </li>
              <li>
                <span className="text-yellow-400">Best architecture </span>
                practices.
              </li>
              <li>
                Best with dev to{" "}
                <span className="text-yellow-400">deployment</span>
              </li>
              <li>
                Can code any design with{" "}
                <span className="text-yellow-400">best architecture</span>{" "}
                present currently.
              </li>
              <li>
                Great{" "}
                <span className="text-yellow-400">colaboration with teams</span>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hireme;
