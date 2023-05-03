import React from "react";
import Image from "next/image";
const Divider = () => {
  return (
    <>
      <div className=" h-fit w-full px-5 flex flex-col items-center justify-center">
        <div className="h-[2px]  w-full  bg-lightGrey border-0 relative top-1/2 "></div>
        <div className="bg-purple  rounded-full w-12 h-12 flex justify-center relative  ">
          <Image
            src="/icon-arrow.svg"
            width={20}
            height={20}
            className="self-center rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Divider;
