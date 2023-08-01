import mongoose from "mongoose";
const mongodb = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connect");
    })
    .catch((e) => {
      console.log(e);
    });
};
export default mongodb;
