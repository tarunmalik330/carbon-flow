
import React from "react";
import Nav from "./Nav";
import Preloader from "./Preloader"; // Import Preloader
import researchImg from "../assets/images/webp/research-img.webp";
import bgImg from "../assets/images/png/bg-img.png";
import { HeroImg, ScrolldownArrow } from "./common/Icons";

const Hero = () => {
  return (
    <>
      <Preloader /> {/* Include Preloader component */}
      <div className="bg-green xl:min-h-screen min-h-[90vh] flex flex-col overflow-x-hidden">
        <a
          class="absolute font-light group text-sm text-white hidden -rotate-90 bottom-[140px] left-[-56px] uppercase tracking-[11px] xl:flex items-center gap-[17px] z-10"
          href="/"
        >
          <span class="group-hover:-left-[30px] transition-all ease-linear duration-300 top-0 absolute -left-8 rotate-90">
            <ScrolldownArrow />
          </span>
          Scroll Down
        </a>
        <Nav />
        <div className="container mx-auto px-4 max-w-[1164px] flex-grow items-center max-[850px]:justify-center flex relative overflow-x-hidden">
          <div className="min-[850px]:pt-0 md:pt-10 sm:pt-8">
            <h1 className="text-white xl:text-custom-sm sm:text-6xl text-5xl leading-126 font-normal font-aktiv mb-[15px] min-[850px]:text-start text-center">
              Direct <span className="text-light-green">Measure,</span> <br />
              Direct <span className="text-light-green">Matter !</span>
            </h1>
            <p className="text-white lg:max-w-[541px] max-w-[440px] font-normal lg:text-base text-sm leading-160 mb-[30px] min-[850px]:text-start text-center">
              The Most Effective way to Measure Forrest & Farm's Carbon Credits
              without breaking the bank by using Satellite and Predictive AI.
              These give unparalleled way to measure carbon credit.
            </p>
            <div className="max-w-[270px] border border-solid border-light-green hover:bg-light-green transition-colors ease-linear duration-300 p-3 flex justify-center items-center rounded-full gap-[11px] lg:mb-[38px] mb-6 min-[850px]:mx-0 mx-auto">
              <p className="text-white font-semibold text-base leading-normal">
                Start Measure!
              </p>
              <p className="text-white opacity-50 text-custom-xs font-semibold leading-normal relative pl-[11px] after:absolute after:w-full after:max-w-[1px] after:h-[18.6px] after:bg-white after:bg-opacity-50 after:left-0 flex items-center">
                No CC Required
              </p>
            </div>
            <p className="text-white font-bold text-xs italic mb-[9px] min-[850px]:text-start text-center">
              Based on 5 years research published in
            </p>
            <img
              src={researchImg}
              alt="researchImg"
              className="w-100 max-w-[183px] h-[38px] min-[850px]:mx-0 mx-auto"
            />
          </div>
        </div>
        <div className="min-[850px]:absolute right-0 xl:bottom-0 bottom-[10%] flex justify-center min-[850px]:pt-0 sm:pt-7">
          <HeroImg
            bgImg={bgImg}
            className="xl:w-[846px] lg:w-[650px] md:w-[550px] sm:w-[420px] w-[340px] xl:h-[708px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
