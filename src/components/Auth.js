import React from "react";
import polygon from "../images/polygon.png";
import "./LoginStyles.css";
import fill from "../images/Fill.png";
import { useNavigate } from "react-router-dom";

console.log(fill);
console.log(polygon);

function Auth() {
    const navigate = useNavigate();
    const navigateToMainpage = () => {
        navigate('/mainpage');
      };
  
    return (
    <div className="Auth">
      <div className="row d-flex justify-content-center mt-2 pt-4">
        <div className="col-lg-6 mt-5 pt-5">
          <div
            className="card"
            style={{
              border: "2px solid #0788D8",
              borderRadius: "25px",
              backgroundColor: " #CEEDFF",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginTop: "-150px" }}
            >
              <img src={polygon} alt="polygon" className="mt-5" style={{width: '200px',height: '208px'}}></img>
            </div>

            <div>
              <div className="row d-flex justify-content-center">
                <div className="col mt-3 ms-5">
                  <label
                    className="text-dark"
                    style={{ fontFamily: "Mulish", fontSize: "20px" }}
                  >
                    Username
                  </label>
                </div>
              </div>
              <div
                className="row d-flex justify-content-center"
                style={{ marginTop: "-12px" }}
              >
                <div className="col mt-3 d-grid m-5">
                  <input
                    className="p-3 text-center"
                    type="text"
                    placeholder="Username"
                    style={{
                      height: "60px",
                      borderRadius: "7px",
                      border: "2px solid #0788D8",
                      background: "#9FAFCE",
                      fontFamily: "Mulish",
                      fontSize: "20px",
                      color: "#05467C",
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div
              className="row d-flex justify-content-center"
              style={{ marginTop: "-30px" }}
            >
              <div className="col ms-5">
                <label
                  className="text-dark"
                  style={{ fontFamily: "Mulish", fontSize: "20px" }}
                >
                  Password
                </label>
              </div>
            </div>
            <div
              className="row d-flex justify-content-center"
              style={{ marginTop: "-12px" }}
            >
              <div className="col mt-3 d-grid m-5">
                <input
                  className="p-3 text-center"
                  type="password"
                  placeholder=""
                  style={{
                    height: "60px",
                    borderRadius: "7px",
                    border: "2px solid #0788D8",
                    fontFamily: "Mulish",
                    fontSize: "20px",
                    color: "#05467C",
                  }}
                ></input>
              </div>
            </div>
            <div
              className="row d-flex justify-content-center"
              style={{ marginTop: "-10px" }}
            >
              <a
                href="/"
                className="text-center"
                style={{
                  fontFamily: "Mulish",
                  fontStyle: "italic",
                  fontWeight: "600",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Forgot Password?
              </a>
            </div>
            <div className="row mt-5 m-5">
              <div className="col-lg-5 d-grid ms-3" >
                <button className="btn btn-lg" style={{backgroundColor: '#05467C', color: 'white'}}>Swap Roles</button>
              </div>
              <div className="col-md-1">
                <button className="btn btn-lg" style={{backgroundColor: '#05467C', color: 'white'}}>
                  <span className="material-symbols-outlined mt-2" style={{fontSize: '25px', fontWeight:'bold'}}>fingerprint</span>
                </button>
              </div>
              <div className="col-lg-5 d-grid ms-4">
                <button className="btn btn-primary btn-lg" style={{backgroundColor: '#05467C', color: 'white'}} onClick={navigateToMainpage}>Sign in</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
