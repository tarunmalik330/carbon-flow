import React from "react";
import { CARBON_TIMER_CARDSLIST } from "../utils/helper";

const CarbonTimer = () => {
  return (
    <div className="bg-white pt-[100px]">
      <div className="container xl:max-w-[1164px] mx-auto px-4">
        <div className="flex flex-row flex-wrap">
          <div className="w-4/12">
            {CARBON_TIMER_CARDSLIST.map((obj, i) => (
              <div className="pt-[20px] px-7 max-w-[364px] w-full" key={i}>
                <span>{obj.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonTimer;
