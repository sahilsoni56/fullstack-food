import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import "../components/cards/toast.css"
function Cart() {
  const items = useSelector((state) => state);
  const itemCart = items.Cart;
  // console.log(itemCart)
  const [purchaseStatus, setPurchaseStatus] = useState(null);
  

  useEffect(()=>{
    const time = setTimeout(()=>{
        setPurchaseStatus("error")
    },4000)
  },[purchaseStatus])

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/cart", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
      
        body: JSON.stringify(itemCart),
      });

      if (response.ok) {
        console.log("submitted to database");
        setPurchaseStatus("success");
      } else {
        console.error("error in submition");
        setPurchaseStatus("error");
      }
    } catch (e) {
      console.error("Error submitting to the database:", error.message);
    }
  };
  return (
    <>
      <div className="  md:flex md:flex-col md:items-center md:justify-center m-7">
        {itemCart.map((arrayObject, index) => (
          <Cartitem
            itemName={arrayObject.name}
            img={arrayObject.image}
            size={arrayObject.size}
            quantity={arrayObject.quantity}
            price={arrayObject.price}
          />
        ))}
        <div className="flex justify-end m-7 w-full">
          <button
            onClick={handlesubmit}
            className={`bg-green-700    py-3 px-16 rounded-xl text-white mr-44 text-2xl hover:shadow-2xl hover:border-black hover:scale-105 hover:bg-black hover:text-white transition-all`}
          >
            Checkout
          </button>
        </div>
      </div>
      {purchaseStatus === "success" && (
        <div className="animate-opacity w-full flex items-end justify-end absolute bottom-0    mb-10 z-10">
          <div
            id="toast-success"
            class="flex mr-20 items-center w-full max-w-xs p-4 mb-4 text-white bg-zinc-800 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            
            role="alert"
          >
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white text-black hover:text-white hover:bg-black rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
