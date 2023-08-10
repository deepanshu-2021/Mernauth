import Jwt from "jsonwebtoken";
const gentratingtoken = (res, userid) => {
  const token = Jwt.sign({ userid }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "none",
    strict: process.env.NODE_ENV !== "development",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
export default gentratingtoken;
