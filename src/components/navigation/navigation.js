import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { themesupplier } from "../../contexts/themecontexts";

const Navigation = () => {
  const [cross, setCross] = useState(false);
  const [myTheme, setMytheme] = useState("");
  const { toggleTheme, isDark } = useContext(themesupplier);
  
  const openNav = () => {
    document.getElementById('mysidebar').style.width = '35rem';
    document.getElementById('mysidebar').style.height = '35rem';
    document.getElementById('mysidebar-wrapper').style.width = '100%';
    document.getElementById('mysidebar-wrapper').style.height = '100%';
  }
  const closeNav = () => {
    document.getElementById('mysidebar').style.width = '0rem';
    document.getElementById('mysidebar').style.height = '0rem';
    document.getElementById('mysidebar-wrapper').style.width = '0rem';
    document.getElementById('mysidebar-wrapper').style.height = '0rem';
  }

  const toggle_animate = () => {
    if (!cross) {
      setCross(true);
      openNav();
    } else {
      closeNav();
      setCross(false);
    }
  };
  useEffect(() => {
    const theme =
      localStorage.getItem("isDark") &&
      JSON.parse(localStorage.getItem("isDark"));
    setMytheme(theme);
  }, [isDark]);

  return (
    <div
      className={
        myTheme
          ? "bg-black  transition-all duration-700"
          : "bg-white  transition-all duration-700"
      }
    >
      <div className="container  mx-auto lg:px-0 px-4  ">
        <div className="flex flex-row justify-between items-center py-6 px-2">
          <div>
            <p className="lg:text-4xl text-2xl border-2 border-gray-600 rounded-full text-gray-600 px-4 py-2 font-semibold font-serif">
              CHAN<span className="text-red-600">DAN</span>
            </p>
          </div>
          <div
            onClick={() => {
              toggle_animate();
            }}
            className="lg:hidden"
          >
            <div className={cross ? "change bar1" : "bar1"}></div>
            <div className={cross ? "change bar2" : "bar2"}></div>
            <div className={cross ? "change bar3" : "bar3"}></div>
          </div>
          <nav className=" text-gray-600  lg:block hidden font-semibold">
            <ul>
              <li className="inline-block">
                <Link className="nav-item mr-8" to="/">
                  Home
                </Link>
              </li>
              <li className="inline-block">
                <Link  className="nav-item mr-8" to="/">
                  About
                </Link>
              </li>
              <li className="inline-block">
                <Link className="nav-item mr-8" to="/page_not_found">
                  Skills
                </Link>
              </li>
              <li className="inline-block">
                <Link className="nav-item1 mr-8" to="/page_not_found">
                  Tech-Blogs
                </Link>
              </li>
              <li
                onClick={toggleTheme}
                className="inline-block mr-7 active:transform active:translate-y-4"
              >
                {!myTheme ? (
                  <i className="fas fa-moon text-xl hover:transform hover:scale-150 transition-all duration-500"></i>
                ) : (
                  <i className="fas fa-sun text-xl hover:transform hover:scale-150 transition-all duration-500"></i>
                )}
              </li>
              <li className="inline-block">
                <Link
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-100 px-8 py-2 border-2 border-gray-100 shadow-lg transition-all duration-500 rounded-full"
                  to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    <div onClick={closeNav} id="mysidebar-wrapper" className="sidebar-wrapper">
    <div id="mysidebar" className="sidebar">
           <ul className="text-2xl font-semibold text-white mt-20 mr-16">
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li>menu list</li>
             <li
                onClick={toggleTheme}
                className="inline-block mr-7 active:transform active:translate-y-4"
              >
                {!myTheme ? (
                  <i className="fas fa-moon text-xl hover:transform hover:scale-150 transition-all duration-500"></i>
                ) : (
                  <i className="fas fa-sun text-xl hover:transform hover:scale-150 transition-all duration-500"></i>
                )}
              </li>
           </ul>
      </div>
    </div>
     
    </div>
  );
};

export default Navigation;
