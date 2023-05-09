import React from "react";
import Image from "next/image";
const Divider = () => {
  return (
    <>
      <div className=" h-fit w-full px-5 flex flex-col items-center justify-center">
        <div className="h-[2px]  w-full  bg-lightGrey border-0 relative top-6 "></div>
        <button className="" type="submit">
        <div className="bg-purple rounded-full w-12 h-12 flex justify-center relative hover:bg-offBlack ">
          <Image
            src="/icon-arrow.svg"
            alt="arrow picutre for button"
            width={20}
            height={20}
            className="self-center rounded-full"
          />
        </div>
        </button>
        
      </div>
    </>
  );
};

export default Divider;
