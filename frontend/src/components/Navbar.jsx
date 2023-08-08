import { Outlet } from "react-router";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
const Bar = () => {
  return (
    <>
      <nav className="p-1 pt-0 m-0 ">
        <ul className="flex flex-row border-b-2 justify-between">
          <Link to="/">
            <li className="font-bold md:text-6xl text-3xl  ">mern auth</li>
          </Link>
          <li>
            <Link to="/signin">
              <button className="font-serif bg-gray-700 text-white p-2 border rounded-md w-20  mt-2 hover:bg-gray-500 ">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="ml-3 font-serif bg-gray-700 text-white p-2 border rounded-md w-20  mt-2 hover:bg-gray-500 ">
                Sign up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Bar;
