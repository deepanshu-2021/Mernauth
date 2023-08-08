import Jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import { User } from "../user/User.js";
const protect = AsyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decode = Jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decode.userid);
      req.user = user;
      next();
    } catch {
      res.status(401);
      throw new Error("invaild token!");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized,no token");
  }
});
export { protect };
