// import Nav from "./Nav";
// import researchImg from "../assets/images/webp/research-img.webp";
// import bgImg from "../assets/images/png/bg-img.png";
// import { HeroImg, ScrolldownArrow } from "./common/Icons";

// const Hero = () => {
//   return (
//     <div className="2xl:min-h-0 2xl:h-[910px] xl:min-h-screen min-h-[90vh] flex flex-col max-w-[1920px] mx-auto overflow-hidden relative">
//       <a
//         className="absolute font-light group text-sm text-white hidden -rotate-90 bottom-[140px] left-[-56px] uppercase tracking-[11px] xl:flex items-center gap-[17px] z-10"
//         href="/"
//       >
//         <span className="group-hover:-left-[30px] transition-all ease-linear duration-300 top-0 absolute -left-8 rotate-90">
//           <ScrolldownArrow />
//         </span>
//         Scroll Down
//       </a>
//       <Nav />
//       <div className="container mx-auto px-4 max-w-[1164px] flex-grow items-center max-[850px]:justify-center flex relative overflow-x-hidden">
//         <div className="2xl:mt-0 lg:mt-16 md:mt-20 sm:mt-8">
//           <h1 className="text-white xl:text-custom-sm sm:text-6xl text-5xl leading-126 font-normal font-aktiv mb-[15px] min-[850px]:text-start text-center">
//             Direct <span className="text-light-green">Measure,</span> <br />
//             Direct <span className="text-light-green">Matter !</span>
//           </h1>
//           <p className="text-white lg:max-w-[541px] max-w-[440px] font-normal lg:text-base text-sm leading-160 mb-[30px] min-[850px]:text-start text-center">
//             The Most Effective way to Measure Forrest & Farm's Carbon Credits
//             without breaking the bank by using Satellite and Predictive AI.
//             These give unparalleled way to measure carbon credit.
//           </p>
//           <div className="max-w-[270px] border border-solid border-light-green hover:bg-light-green transition-colors ease-linear duration-300 p-3 flex justify-center items-center rounded-full gap-[11px] lg:mb-[38px] mb-6 min-[850px]:mx-0 mx-auto">
//             <p className="text-white font-semibold text-base leading-normal">
//               Start Measure!
//             </p>
//             <p className="text-white opacity-50 text-custom-xs font-semibold leading-normal relative pl-[11px] after:absolute after:w-full after:max-w-[1px] after:h-[18.6px] after:bg-white after:bg-opacity-50 after:left-0 flex items-center">
//               No CC Required
//             </p>
//           </div>
//           <p className="text-white font-bold text-xs italic mb-[9px] min-[850px]:text-start text-center">
//             Based on 5 years research published in
//           </p>
//           <img
//             src={researchImg}
//             alt="researchImg"
//             className="w-100 max-w-[183px] h-[38px] min-[850px]:mx-0 mx-auto"
//           />
//         </div>
//       </div>
//       <div className="overflow-hidden flex justify-center">
//         {/* <div className="min-[850px]:absolute 2xl:right-0 xl:-right-[7%] lg:-right-[6%] right-0 bottom-0 flex justify-center min-[850px]:pt-0 sm:pt-7">
//               <HeroImg
//                 bgImg={bgImg}
//                 className="xl:w-[846px] lg:w-[650px] md:w-[550px] sm:w-[420px] w-[340px] xl:h-[708px] max-w-full scale-animation"
//               />
//             </div> */}
//         <div className="mt-[30px] lg:mt-0 max-lg:translate-y-1 hero-img-clipPath lg:absolute 2xl:right-0 -right-[7%] w-full sm:max-w-[700px] max-w-[400px] xl:max-w-[846px] z-0 bottom-0 xl:-bottom-0">
//           <img className="bg-hero-img" src={bgImg} alt="bgImg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import researchImg from "../assets/images/webp/research-img.webp";
import bgImg from "../assets/images/png/bg-img.png";
import { HeroImg, ScrolldownArrow } from "./common/Icons";

const Hero = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const [imageScaled, setImageScaled] = useState(false);
  const [innerAnimationVisible, setInnerAnimationVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
      const scaleTimer = setTimeout(() => {
        setImageScaled(true);
        const innerAnimationTimer = setTimeout(() => {
          setInnerAnimationVisible(true);
        }, 2000);

        return () => clearTimeout(innerAnimationTimer);
      }, 5000);

      return () => clearTimeout(scaleTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="2xl:min-h-0 2xl:h-[910px] xl:min-h-screen min-h-[90vh] flex flex-col max-w-[1920px] mx-auto overflow-hidden relative">
      <a
        className="absolute font-light group text-sm text-white hidden -rotate-90 bottom-[140px] left-[-56px] uppercase tracking-[11px] xl:flex items-center gap-[17px] z-10"
        href="/"
      >
        <span className="group-hover:-left-[30px] transition-all ease-linear duration-300 top-0 absolute -left-8 rotate-90">
          <ScrolldownArrow />
        </span>
        Scroll Down
      </a>
      <Nav />
      <div className="container mx-auto px-4 max-w-[1164px] flex-grow items-center max-[850px]:justify-center flex relative overflow-x-hidden">
        <div className="2xl:mt-0 lg:mt-16 md:mt-20 sm:mt-8">
          <h1 className="text-white xl:text-custom-sm sm:text-6xl text-5xl leading-126 font-normal font-aktiv mb-[15px] min-[850px]:text-start text-center">
            Direct <span className="text-light-green">Measure,</span> <br />
            Direct <span className="text-light-green">Matter!</span>
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
      <div
        className={`mt-[30px] lg:mt-0 hero-img-clipPath lg:absolute 2xl:right-0 -right-[7%] w-full sm:max-w-[700px] max-w-[400px] xl:max-w-[846px] z-0 bottom-0 xl:-bottom-0 
          ${imageVisible ? "fade-in" : "hidden"}`}
        style={{
          transform: imageScaled ? "scale(2)" : "scale(0.1)",
          opacity: imageVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        <img className="bg-hero-img" src={bgImg} alt="bgImg" />
      </div>
    </div>
  );
};

export default Hero;
