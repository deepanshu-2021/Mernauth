import { Outlet } from "react-router";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
const Bar = () => {
  return (
    <>
      <nav className="p-1 pt-0 m-0">
        <ul className="flex flex-row border-b-2 justify-between">
          <Link to="/">
            <li className="font-bold text-6xl">mern auth</li>
          </Link>
          <li>
            <Link to="/signin">
              <button className="font-serif bg-purple-600 text-white p-2 border rounded-md w-20  mt-2 hover:bg-purple-700 ">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="ml-3 font-serif bg-purple-600 text-white p-2 border rounded-md w-20  mt-2 hover:bg-purple-700 ">
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
