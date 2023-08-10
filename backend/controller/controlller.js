import AsyncHandler from "express-async-handler";
import Jwt from "jsonwebtoken";
import { User } from "../user/User.js";
import gentratingtoken from "../util/tokengenration.js";
import mongoose, { Mongoose } from "mongoose";
const userAuth = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    gentratingtoken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "invaild password or email" });
  }
});
const userReg = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const Userexist = await User.findOne({ email });
  if (Userexist) {
    res.status(401);
    throw new Error("user already exist!");
  } else {
    const user = await User.create({ name, email, password });
    gentratingtoken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }
});
const userProfile = AsyncHandler(async (req, res) => {
  let token = req.cookies.jwt;
  let decode = Jwt.verify(token, process.env.SECRET_KEY);
  let user = await User.findById(decode.userid);
  res.status(201).json({
    name: user.name,
    email: user.email,
  });
});
const userLogout = AsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(201).json({ message: "logout" });
});
const userUpdate = AsyncHandler(async (req, res) => {
  console.log(req.user);
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateduser = await user.save();
    res.status(201).json({
      _id: updateduser._id,
      name: updateduser.name,
      email: updateduser.email,
    });
  } else {
    res.status(401);
    throw new Error("invaild details!");
  }
});

const userDel = AsyncHandler(async (req, res) => {
  let token = req.cookies.jwt;
  if (token) {
    let decode = Jwt.decode(token, process.env.SECRET_KEY);
    console.log(decode);
    let result = await User.deleteOne({ _id: decode.userid });
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(201).json({
      message: "delete user",
    });
  } else {
    console.log("delete");
    throw Error("user nahi hai");
  }
});
export { userAuth, userLogout, userProfile, userReg, userUpdate, userDel };
