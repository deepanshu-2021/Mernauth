import React from "react";
import { useContext } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MyContext } from "../contex/Authcontext";
import { set } from "mongoose";

const Logout = () => {
  let [auth, setauth] = useContext(MyContext);
  setauth(false);
  return (
    <>
      <div className="w-96 h-96 border-4 border-black mx-auto mt-20">
        <BsCheck2Circle className="w-32 h-32 ml-32 mt-16 mb-3" />
        <p className="font-bold text-4xl  ml-8">Logout successfully</p>
      </div>
    </>
  );
};

export default Logout;
