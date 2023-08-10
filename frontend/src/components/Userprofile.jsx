import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineUser } from "react-icons/ai";
import { BiUserX } from "react-icons/bi";
const Userprofile = () => {
  let [userName, setuserName] = useState("");
  let [userEmail, setuserEmail] = useState("");
  let [auth, setauth] = useState("hidden");
  let [unauth, setunauth] = useState("hidden");
  const userapi = async () => {
    try {
      const token = Cookies.get("jwt");
      console.log(token);
      const res = await axios.get(process.env.REACT_APP_API + "profile", {
        withCredentials: true,
      });
      let { name, email } = res.data;
      setuserName(`User Name:${name}`);
      setuserEmail(`User Email:${email}`);
      setauth("");
      console.log(unauth);
    } catch (e) {
      setunauth("");
      console.log(e);
    }
  };
  useEffect(() => {
    userapi();
  }, []);
  return (
    <div className="user-details w-fit  h-96 border-4 border-black mx-auto mt-20">
      <AiOutlineUser className={"w-32 h-32 ml-36 mt-16 mb-3 " + auth} />
      <BiUserX className={"w-32 h-32 ml-40 mt-16 mb-3 " + unauth} />
      <p className="font-semibold md:text-xl text-lg mb-3  ml-8">{userName}</p>
      <p className="font-semibold md:text-xl text-lg ml-8">{userEmail}</p>
      <p className={"font-semibold text-4xl ml-28  mr-20 " + unauth}>
        unauthorized
      </p>
    </div>
  );
};

export default Userprofile;
