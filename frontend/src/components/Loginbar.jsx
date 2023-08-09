import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
const Loginbar = () => {
  const navigate = useNavigate();
  let [hidden, sethidden] = useState("hidden");
  const logout = async () => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_API + "logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      navigate("/logout");
    } catch (e) {
      console.log(e);
    }
  };
  const deleteUser = async () => {
    try {
      let res = await axios.delete(import.meta.env.VITE_API + "delete", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <nav className="p-1 pt-0 m-0 w-full">
        <ul className="flex flex-row border-b-2 justify-between relative">
          <Link to="/">
            <li className="font-bold md:text-6xl text-3xl  ">mern auth</li>
          </Link>
          <li>
            <button
              className="border circle w-10 h-10 mt-2 md:mr-20 mr-10"
              onClick={() => {
                if (hidden === "hidden") sethidden("");
                else sethidden("hidden");
              }}
            >
              <AiOutlineUser className="w-9 h-9" />
            </button>
            <ul
              className={`${hidden} absolute md:w-28 w-16 md:text-base text-sm bg-white md:mr-10 mr-5  border border-black rounded-md`}
            >
              <li
                className="  border-black  border-b pl-1 "
                onClick={() => {
                  sethidden("hidden");
                  navigate("/users/profile");
                }}
              >
                <button>user profile</button>
              </li>
              <li>
                <button
                  className="flex justify-start  border-black  border-b pl-1 w-full "
                  onClick={() => {
                    sethidden("hidden");
                    logout();
                  }}
                >
                  logout
                </button>
              </li>
              <li>
                <button
                  className="pl-1  border-black  border-b flex justify-start w-full"
                  onClick={() => {
                    sethidden("hidden");
                    deleteUser();
                    navigate("/users/delete");
                  }}
                >
                  delete profile
                </button>
              </li>
              <li>
                <button
                  className=" p-1 "
                  onClick={() => {
                    sethidden("hidden");
                    navigate("/users/update");
                  }}
                >
                  Update profile
                </button>
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
