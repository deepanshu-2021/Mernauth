import { React, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../contex/authcontext";
const RouteProtection = ({ Component }) => {
  const navigate = useNavigate();
  let [auth, setauth] = useContext(MyContext);
  console.log(auth);
  useEffect(() => {
    if (!auth) {
      navigate("/signin");
    }
  });
  return <Component />;
};

export default RouteProtection;
