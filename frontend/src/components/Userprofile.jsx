import axios from "axios";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Userprofile = () => {
  const userapi = () => {
    const token = Cookies.get("jwt");
    console.log(token);
    // const res = axios.get("http://localhost:3000/api/users/profile");
    // console.log(res);
  };
  useEffect(() => {
    userapi();
  });
  return <div>Userprofile</div>;
};

export default Userprofile;
