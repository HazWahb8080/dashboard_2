import { CashIcon, CreditCardIcon } from "@heroicons/react/outline";
import React from "react";

function RightPart() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full px-12 pt-12 pb-6">
      {/* top section */}
      <div className="flex items-center justify-center w-full space-x-4">
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CashIcon className="w-8 h-8 stroke-1 " />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> On Time </h2>
            <h2 className="font-bold text-xl">$ 120.55 </h2>
          </span>
        </div>
        {/* duplicate above ☝ */}
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Round-Ups </h2>
            <h2 className="font-bold text-xl">$ 200.13 </h2>
          </span>
        </div>
        <div className="bg-[#BFFA00] pt-6 items-center justify-between flex flex-col w-full ">
          <span className="items-center justify-center flex flex-col w-full py-6">
            <h3> Total Amount </h3>
            <h1 className="text-black font-bold text-xl lg:text-3xl">
              $211,478.33
            </h1>
          </span>
          <div className="bg-black items-center justify-center flex text-white w-full py-3 ">
            <h1> Withdraw Earnings </h1>
          </div>
        </div>
      </div>
      {/* chart */}
      {/* bottom part */}
    </div>
  );
}

export default RightPart;
