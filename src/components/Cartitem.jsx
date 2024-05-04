import React from "react";

function Cartitem({ itemName, img ,quantity ,size,price }) {

  return (
    <div className=" py-3 bg-zinc-700 rounded-xl px-12 md:w-1/2">
      <div className="flex items-center justify-between">
        <div className="flex  gap-14">
          <div className="flex items-center">
            <img
              className="rounded-full center object-cover w-28 max-h-20"
              src={img}
              alt="cssc"
            />
          </div>
          <div>
            <div className="text-white text-2xl font-bold">{itemName}</div>
            <div className="text-white mt-2 ">Quanity : {quantity}</div>
            <div className="text-white mt-2 ">Size : {size}</div>
          </div>
          
        </div>
        <div>
            <div className="text-white">Price:</div>
        <div className="text-white text-xl font-semibold">₹{price}/-</div>

        </div>
      </div>
    </div>
  );
}

export default Cartitem;
