import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { BiUserX } from "react-icons/bi";
import { useNavigate } from "react-router";
import { MyContext } from "../contex/authcontext";
const Deleteuser = () => {
  const navigate = useNavigate();
  const [auth, setauth] = useContext(MyContext);
  setauth(false);
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <>
      <div className="w-96 h-96 border-4 border-black mx-auto mt-20">
        <BiUserX className="w-32 h-32 ml-32 mt-16 mb-3" />
        <p className="font-bold text-4xl  ml-20">User Deleted</p>
      </div>
    </>
  );
};

export default Deleteuser;
