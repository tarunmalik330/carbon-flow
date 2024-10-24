import React from "react";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="preloader-container fixed inset-0 flex justify-center items-center bg-green z-50"
    >
      <svg
        viewBox="0 0 847 808"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100px] h-[100px] stroke-animation fill-animation"
      >
        <g clipPath="url(#clipShape)">
          <path
            d="M315.817 565.282V383.022L157.909 291.892L0 383.022V565.282L131.323 641.032V754.811H44.8746L4.95131 808H184.539V473.127L231.153 500.1V614.147L315.817 565.282Z"
            fill="transparent"
            stroke="white"
            strokeWidth="8"
          />
          <path
            d="M838.032 565.282V383.022L680.102 291.892L522.26 383.022V565.282L653.572 641.032V808H846.281L806.419 754.811H706.765L706.631 466.038L753.315 493.011V614.147L838.032 565.282Z"
            fill="transparent"
            stroke="white"
            strokeWidth="8"
          />
          <path
            d="M445.877 168.723L492.528 195.648V323.316L579.011 273.39V91.1151L421.238 0L263.509 91.1151V273.39L392.722 348.012V754.82H239.939V808H601.557V754.82H445.877V168.723Z"
            fill="transparent"
            stroke="white"
            strokeWidth="8"
          />
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
