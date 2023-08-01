import React, { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { Navigate, useNavigate } from "react-router";
const Signinbox = () => {
  let navigate = useNavigate();
  let [wrong, setwrong] = useState("");
  let [Password, setPassword] = useState("");
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [namewaring, setnamewaring] = useState("");
  let [passwordwaring, setpasswordwaring] = useState("");
  let [emailwaring, setemailwaring] = useState("");
  const senddetails = async () => {
    if (Password.length < 8) {
      return;
    }
    let details = { name: Name, email: Email, password: Password };
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
      navigate("/users/login");
    } catch (e) {
      setwrong("wrong details");
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="mt-28 border border-black p-5 w-1/3 ml-auto mr-auto">
        <p className="text-2xl text-red-500 ">{wrong}</p>
        <p className="text-4xl font-bold mb-3 ">SING IN</p>
        <form
          action="/signin"
          onSbu
          className="flex flex-col space-y-2  font-serif text-xl"
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
            className="p-2 border border-black"
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
            className="p-2 border border-black"
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
            type="password"
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
            className="font-semibold mt-3  bg-purple-600 text-white border rounded-md  hover:bg-purple-500 p-2 w-52 mx-auto"
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
