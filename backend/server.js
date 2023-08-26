import express, { json } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongodb from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config("");
import { notfound, errorHandler } from "./middleware/erromiddleware.js";
import { router } from "./router/router.js";
//console.log(process.env.PORT);
let port = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
mongodb();
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", router);
app.get("/", (req, res) => {
  res.send("hi mom");
});
app.use(notfound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`port on ${port}`);
});
