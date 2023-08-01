import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { set } from "mongoose";
const Loginbar = () => {
  let [hidden, sethidden] = useState("hidden");
  return (
    <>
      <nav className="p-1 pt-0 m-0">
        <ul className="flex flex-row border-b-2 justify-between relative">
          <Link to="/">
            <li className="font-bold text-6xl">mern auth</li>
          </Link>
          <li>
            <button
              className="border circle w-10 h-10 mt-2 mr-20 "
              onClick={() => {
                if (hidden === "hidden") sethidden("");
                else sethidden("hidden");
              }}
            >
              <AiOutlineUser className="w-9 h-9" />
            </button>
            <ul
              className={`${hidden} absolute w-28 bg-white mr-10  border border-black rounded-md`}
            >
              <li className="  border-black  border-b pl-1 ">
                <button>user profile</button>
              </li>
              <li>
                <button className="pl-1">logout</button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Loginbar;
