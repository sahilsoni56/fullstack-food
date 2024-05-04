import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
function Navbar() {
  const totalitems = useSelector((state) => state)
  return (
    <ul className="flex bg-zinc-700 text-white py-6 px-6 justify-between items-center ">
      <div className="flex items-center gap-9">
        <li className="mr-6">
          <Link
            to="/"
            className=" hover:text-blue-500 text-3xl font-extrabold italic"
          >
            GoFood
          </Link>
        </li>

        <li className="mr-6">
          <Link to="/" className="hover:text-blue-500 text-1xl font-bold">
            Home
          </Link>
        </li>
      </div>
      <div className="flex items-center">
          <li>
            <Link
              to="/login"
              className="hover:text-blue-500 text-1xl font-bold bg-red-700 px-4 py-3 rounded-lg"
            >
              Login
            </Link>
          </li>
          <div className="mx-2 text-3xl">/</div>
          <li >
            <Link
              to="/signup"
              className="hover:text-blue-500 text-1xl font-bold bg-red-700 px-4 py-3 rounded-lg"
            >
              Signup
            </Link>
          </li>
          <div className="mx-2 text-3xl">/</div>
          <li className="mr-6 relative">
            <h6 className="bg-red-800 absolute text-sm  flex left-[85%] top-[-80%] rounded-full p-1 ">{totalitems ? totalitems.Cart.length : 0}</h6>
            <Link
              to="/cart"
              className=" text-1xl font-bold bg-green-700 px-4 py-3 rounded-lg hover:bg-black hover:text-white transition-all"
            >
              Cart
            </Link>
          </li>
        </div>
    </ul>
  );
}

export default Navbar;
