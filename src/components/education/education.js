import React from "react";

const Education = () => {
  return (
    <div>
      <section>
        <div className=" text-gray-600 py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3  mt-2 md:mt-12 lg:px-8 px-0">
              <h1 className="text-5xl ml-2 text-gray-600 tracking-loose font-semibold">
                <span className="text-yellow-400">Education</span> <br />I
                Acquired
              </h1>
              <img
                className="mx-auto  object-contain mt-6 w-[100%]"
                src="/images/education.svg"
                alt="acbd"
              />
              <p className="text-sm font-semibold text-gray-600 mb-4 py-3">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
              </p>
              <span className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now
              </span>
            </div>
            <div className="ml-0 sticky">
              <div className="w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-400 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-400 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 ">
                      <p className="mb-3 text-base text-yellow-300">
                        1-6 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Registration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                        Pick your favourite event(s) and register in that event
                        by filling the form corresponding to that event. Its
                        that easy :)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        6-9 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        {" "}
                        10 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">
                        12 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                        The winners will be contacted by our team for their
                        addresses and the winning goodies will be sent at their
                        addresses.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="acbd"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;