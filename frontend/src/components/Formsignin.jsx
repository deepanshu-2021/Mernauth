import React, { useState, useContext } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { useNavigate } from "react-router";
import { MyContext } from "../contex/authcontext";
const Signinbox = () => {
  let navigate = useNavigate();
  let [wrong, setwrong] = useState("");
  let [Password, setPassword] = useState("");
  let [seepassword, setseepassword] = useState("password");
  let [Email, setEmail] = useState("");
  let [passwordwaring, setpasswordwaring] = useState("");
  let [emailwaring, setemailwaring] = useState("");
  let [auth, setauth] = useContext(MyContext);
  const senddetails = async () => {
    if (Password.length < 8) {
      return;
    }
    let details = { email: Email, password: Password };
    try {
      let res = await axios.post(
        "http://localhost:3000/api/users/auth",
        details,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setauth(true);
      navigate("/users/login");
    } catch (e) {
      setwrong("wrong details");
      console.log(e.message);
    }
  };
  return (
    <>
      <div className=" md:mt-28 mt-10 border border-black p-5 md:w-1/3 ml-auto mr-auto  sm:w-2/4 w-3/5 ">
        <p className="md:text-2xl text-lg text-red-500">{wrong}</p>
        <p className="md:text-4xl text-2xl font-bold mb-3 ">SING IN</p>
        <form
          action="/signin"
          onSbu
          className="flex flex-col space-y-2  font-serif md:text-xl sm:text-xs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail."
            className="p-2 border border-black "
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value === "") setemailwaring("*this is required");
              if (e.target.value.search("@") === -1 && e.target.value != "")
                setemailwaring("*must contain @");
              else if (e.target.value != "") setemailwaring("");
            }}
          />
          <p className="text-sm text-red-500">{emailwaring}</p>
          <label for="password">Password:</label>
          <input
            type={seepassword}
            id="password"
            name="password"
            placeholder="password"
            className="p-2 border border-black"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value === "") setpasswordwaring("*this is required");
              else if (e.target.value.length < 8)
                setpasswordwaring("*more than 8 charecter");
              else setpasswordwaring("");
            }}
          />
          <p className="text-sm text-red-500">{passwordwaring}</p>
          <input
            type="submit"
            value="Submit"
            className="font-semibold mt-3  bg-gray-700 text-white border rounded-md  hover:bg-gray-500 p-2 w-32 mx-auto"
            onClick={() => {
              senddetails();
            }}
          />
        </form>
      </div>
    </>
  );
};

export default Signinbox;
