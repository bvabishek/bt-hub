import React from "react";
import polygon from "../images/polygon.png";
import "./LoginStyles.css";
import { Link } from "react-router-dom";

console.log(polygon);

function Login() {
  return (
    <div className="Login">
      <div className="pt-4">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <img src={polygon} alt="polygon" className="mt-5 "></img>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p
            style={{
              fontFamily: "Mulish",
              color: "#05467C",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "36px",
            }}
          >
            Welcome
          </p>
        </div>
        <div>
          <Link to="/auth" style={{textDecoration: 'none'}}>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-3">
                <div
                  className="card p-2"
                  style={{ border: "1px solid  #05467C", marginTop: "-10px" }}
                >
                  <h5
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "700",
                      fontFamily: "Mulish",
                      color: "#05467C",
                    }}
                  >
                    Username@stargate
                  </h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
