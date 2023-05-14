import React from "react";
import Image from "next/image";
const Divider = () => {
  return (
    <>
      <div className=" h-fit w-full px-4 flex flex-col items-center justify-center xl:px-8">
        <div className="h-[2px] w-full bg-lightGrey border-0 relative top-6 xl:top-8"></div>
        <button className="xl:self-end" type="submit">
          <div
            className="bg-purple rounded-full w-12 h-12 flex justify-center relative hover:bg-offBlack
        xl:w-14 xl:h-14"
          >
            <Image
              src="/icon-arrow.svg"
              alt="arrow picutre for button"
              width={20}
              height={20}
              className="self-center rounded-full xl:hidden"
            />
            <Image
              src="/icon-arrow.svg"
              alt="arrow picutre for button"
              width={32}
              height={32}
              className="hidden xl:block xl:self-center xl:rounded-full"
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default Divider;
