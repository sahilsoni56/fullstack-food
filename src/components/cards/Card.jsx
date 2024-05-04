import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../../redux/Cartslice";
function Card({ name, img, desc, options }) {

  const [qty, setqty] = useState(1);
  const [size,setsize] = useState(Object.keys(options)[0])
  const dispatch = useDispatch();
 
  var finalprice = 0
  finalprice = qty * parseInt(options[size]);
  
  return (
    <div className="px-6 py-4">
      <div className="max-w-sm rounded overflow-hidden hover:shadow-xl hover:scale-110 ">
        <img
          className="w-full h-64 object-cover"
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="font-bold text-xl mb-2 dark:text-white dark:bg-zinc-800 m-2">
          {name}
        </div>
        <p className="text-gray-700 text-base dark:text-white dark:bg-zinc-800 m-2">
          {desc}
        </p>
        <div className="w-full h-ful flex items-center justify-center">
          <select
            id="numberSelector"
            className="bg-zinc-700 w-[50%] h-full m-4 text-white text-center rounded-lg"
            onChange={(e)=>{setqty(e.target.value)}}
            value={qty}
          >
            {[1, 2, 3, 4, 5, 6, 8].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <select
            id="sizeSelector"
            className="bg-zinc-700 w-[92%] h-full m-4 text-white text-center rounded-lg"
            value={size}
            onChange={(e)=>{setsize(e.target.value)}}
          >
            {Object.keys(options).map((object, index) => {
              return <option value={object}>{object}</option>;
            })}

            {/* <option value="full">Full</option> */}
          </select>
          <div className="w-full text-2xl">₹{finalprice}/-</div>
        </div>
        <hr />
        <button
          onClick={() =>
            dispatch(
              additem({ name: name, image: img, size : size , quantity : qty  , price: finalprice})
            )
          }
          className="py-3 mx-2 px-12 text-white bg-green-700 text-1xl my-3 rounded-lg"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
