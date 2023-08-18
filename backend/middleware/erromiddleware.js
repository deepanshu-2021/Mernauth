const notfound = (req, res, next) => {
  const error = new Error(`not found ${req.orignalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //console.log();
  let message = error.message;
  console.log("erromiddleware");
  if (error.name === "CastError" && error.kind === "ObjectId") {
    message = "User already exist!";
    statusCode = 404;
  }
  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
  next();
};
export { notfound, errorHandler };
