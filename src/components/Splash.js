import React from "react";
import stargate from "../images/stargate.png";
import { Link } from "react-router-dom";
import "./LoginStyles.css";
import SplashLoading from "./SplashLoading";

console.log(stargate);

function Splash() {
  
  return (
    <div>
      <div className="h-100 d-flex align-items-center justify-content-center mt-5 p-5">
        <Link to="/login">
          <img
            src={stargate}
            alt="stargate"
            className="mt-5 pt-5"
            style={{ width: "250px" }}
          ></img>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SplashLoading />
      </div>
    </div>
  );
}

export default Splash;
