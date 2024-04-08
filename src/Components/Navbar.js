import React, { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { LuNewspaper } from "react-icons/lu";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "business", link: "/business" },
    { name: "entertainment", link: "/entertainment" },
    { name: "health", link: "/health" },
    { name: "science", link: "/science" },
    { name: "sports", link: "/sports" },
    { name: "technology", link: "/technology" },
  ];
  let [isopen, setisopen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full z-50  fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white ">
          {/* logo */}
          <NavLink to={"/"}>
            <div className="flex gap-2 text-2xl cursor-pointer items-center">
              <LuNewspaper className="w-7 h-7 text-blue-600 " />
              <span className="font-bold">Latest News</span>
            </div>
          </NavLink>
          {/* menu icon toggeler */}
          <div
            onClick={() => setisopen(!isopen)}
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden "
          >
            {isopen ? (
              <HiXMark className="w-5 h-5" />
            ) : (
              <HiBars3BottomRight className="w-5 h-5" />
            )}
          </div>

          {/* nav links here */}
          <ul
            className={`md:flex gap-2 pl-5 md:pl-0 md:items-center md:pb-0 pb-12
             absolute md:z-auto z-[-1] left-0 w-full text-center
            md:static md:w-auto  transition-all bg-white duration-500 ease-in ${
              isopen ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((item, index) => (
              <li key={index} className="my-7 md:my-0 md:ml-8 font-semibold">
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
