import React, { useEffect } from "react";
import axios from "axios";
import "./index.css";
function Mainbox() {
  const logout = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_API + "logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    logout();
  }, []);
  return (
    <>
      <div className="m-auto   h-60 md:text-xl text-lg pt-3 pl-5 tracking-wide mb-4 mr-7">
        <p className="mr-3 ml-3">
          The MERN Authentication Project is a web application built using the
          MERN stack, which stands for MongoDB, Express.js, React, and Node.js.
          This project aims to demonstrate a simple yet effective user
          authentication system, allowing users to sign up, log in, and securely
          access protected routes.
          <br /> Key Features:
          <br />
          1.User Registration: Users can create new accounts by providing their
          email address and password. Passwords are securely hashed before being
          stored in the database.
          <br />
          2.User Login: Registered users can log in with their credentials to
          access the application's protected areas. JWT (JSON Web Tokens): JSON
          Web Tokens are used to manage user authentication and maintain session
          information securely.
          <br /> 3.Password Encryption: Passwords are encrypted using modern
          encryption techniques to ensure data security. Protected Routes:
          Certain routes within the application are protected, and only
          authenticated users can access them. Error Handling: Comprehensive
          error handling is implemented to provide users with helpful feedback
          in case of any issues during the authentication process.
          <br /> 4.Responsive User Interface: The front-end is built using
          React, providing a responsive and user-friendly experience across
          various devices.
          <br />
          5.MongoDB Database: User data, including account details, is stored in
          a MongoDB database, ensuring scalability and data persistence.
          <br />
          6.Express.js Backend: The backend is developed using Express.js,
          providing a robust and scalable server architecture. Node.js: The
          project utilizes Node.js as the runtime environment, allowing for
          efficient server-side operations.
        </p>
      </div>
    </>
  );
}

export default Mainbox;
