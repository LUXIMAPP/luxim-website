import React from 'react';

const NumberBox = ({ num, unit }) => (
  <div className="flex flex-col items-center px-2">
    <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-24 h-24 text-2xl md:text-4xl">
      <div className="rounded-t-xl bg-[white] w-full h-full" />

      <div className="text-5xl absolute text-black z-10 font-bold md:text-7xl">
        {num < 10 ? `0${num}` : num}
      </div>

      <div className=" rounded-b-xl bg-[white] w-full h-full" />

    </div>
    <p className="text-lg mt-2 font-semibold text-[#D3DB22] md:text-lg ">
      {unit}
    </p>
  </div>
);

export default NumberBox;
