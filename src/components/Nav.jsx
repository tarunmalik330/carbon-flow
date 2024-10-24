import React, { useState } from "react";
import pageLogo from "../assets/images/webp/page-logo.webp";
import { NAV_LINKS_LIST } from "../utils/helper";

const Nav = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div className="py-[14px] bg-white-100">
      <div className="container mx-auto px-4 xl:max-w-[1164px]">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              src={pageLogo}
              alt="pageLogo"
              className="w-100 max-w-[202px] max-h-[34px]"
            />
          </a>
          <div className="flex xl:gap-[53px] gap-7 items-center">
            <ul
              className={`${
                nav ? "left-[-100%]" : "left-0"
              } flex max-lg:fixed max-lg:bg-green max-lg:w-full max-lg:top-0 max-lg:h-full max-lg:z-50 max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col items-center justify-center xl:gap-8 gap-5`}
            >
              {NAV_LINKS_LIST.map((obj, i) => (
                <li onClick={() => setNav(!nav)} key={i}>
                  <a
                    href={obj.url}
                    className="text-white opacity-80 pb-[2px] font-normal text-base leading-normal after:absolute relative hover:after:left-0 xl:after:bottom-0 max-xl:after:top-0 after:w-0 after:left-1/2 after:rounded-[10px] after:h-[2px] after:bg-white hover:after:w-full after:duration-300"
                  >
                    {obj.title}
                  </a>
                </li>
              ))}
              <li className="lg:hidden block">
                <button className="text-white capitalize font-semibold text-base leading-normal py-[14px] px-6 rounded-full border border-solid border-light-green hover:bg-light-green transition-colors ease-linear duration-300">
                  Contact Us
                </button>
              </li>
            </ul>
            <button className="lg:block hidden text-white capitalize font-semibold text-base leading-normal py-[14px] px-6 rounded-full border border-solid border-light-green hover:bg-light-green transition-colors ease-linear duration-300">
              Contact Us
            </button>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[28px] h-[20px] relative z-[55] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
