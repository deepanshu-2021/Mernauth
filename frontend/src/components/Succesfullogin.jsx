import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
const Succesfullogin = () => {
  return (
    <>
      <div className="w-96 h-96 border-4 border-black mx-auto mt-20">
        <BsCheck2Circle className="w-32 h-32 ml-32 mt-16 mb-3" />
        <p className="font-bold text-4xl  ml-12">Login successfully</p>
      </div>
    </>
  );
};

export default Succesfullogin;
