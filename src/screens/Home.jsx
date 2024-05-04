import React, { useEffect, useState } from "react";
import { FaCartFlatbed } from "react-icons/fa6";
import Card from "../components/cards/Card";
import {useSelector} from 'react-redux'
import { useCallback } from "react";
function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search, setsearch] = useState("");
  const [opac, setopac] = useState(0);
  const items = useSelector((state) => state);

  
  const loadData = async () => {
    let response = await fetch("http://localhost:3000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <div className="bg-white p-10  items-center justify-center text-zinc-900 min-h-screen w-full dark:text-white dark:bg-zinc-800 relative ">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>
        {foodcat.length > 0
          ? foodcat.map((data) => {
              return (
                <>
                  <div className=" text-center text-3xl mb-2 ">
                    {data.CategoryName}
                  </div>
                  <hr className="mx-3" />
                  <div className="md:flex md:flex-row md:flex-wrap md:items-center md:justify-center">
                    {fooditem.length > 0
                      ? fooditem
                          .filter(
                            (fooditem) =>
                              fooditem.CategoryName === data.CategoryName &&
                              fooditem.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                          )
                          .map((filteritem) => {
                            return (
                              <Card
                                img={filteritem.img}
                                desc={filteritem.description}
                                name={filteritem.name}
                                options={filteritem.options[0]}
                              />
                            );
                          })
                      : null}
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Home;
