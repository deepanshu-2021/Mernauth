import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MyContext } from "../contex/authcontext";
const Signupbox = () => {
  let navigate = useNavigate();
  let [wrong, setwrong] = useState("");
  let [Password, setPassword] = useState("");
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [namewaring, setnamewaring] = useState("");
  let [passwordwaring, setpasswordwaring] = useState("");
  let [emailwaring, setemailwaring] = useState("");
  let [seepassword, setseepassword] = useState("password");
  let [auth, setauth] = useContext(MyContext);
  const senddetails = async () => {
    if (Password.length < 8) {
      return;
    }
    let details = { name: Name, email: Email, password: Password };
    try {
      let res = await axios.post(process.env.REACT_APP_API, details, {
        withCredentials: true,
      });
      setauth(true);
      navigate("/users/login");
    } catch (e) {
      if (e.response.data.message === "user already exist!")
        setwrong("*user already exist!");
      console.log(e.message);
    }
  };
  return (
    <>
      <div className=" md:mt-28 mt-10 border border-black p-5 md:w-1/3 ml-auto mr-auto  sm:w-2/4 w-3/5 ">
        <p className="md:text-2xl text-lg text-red-500">{wrong}</p>
        <p className="md:text-4xl text-2xl font-bold mb-3 ">SING UP</p>
        <form
          action="/signin"
          onSbu
          className="flex flex-col space-y-2  font-serif md:text-xl sm:text-xs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="p-2 border border-black "
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value === "") setnamewaring("*this is required");
              if (e.target.value != "") setnamewaring("");
            }}
          />
          <p className="text-sm text-red-500">{namewaring}</p>
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

export default Signupbox;
