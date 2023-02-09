import React from "react";
import "./LoginStyles.css";
import logo from "../images/logo.png";
import wifi from "../images/wifi.png";
import battery from "../images/battery.png";
import setting from "../images/setting.png";
import arrow from "../images/arrow.png";
import hims from "../images/hims.png";
import printc from "../images/printc.png";
import printq from "../images/printq.png";


console.log(logo);
console.log(wifi);
console.log(battery);
console.log(setting);
console.log(arrow);
console.log(hims);
console.log(printc);
console.log(printq);

function Mainpage() {
  return (
    <div className="Main">
      <div
        className="row d-flex justify-content-center p-5 "
      >
        <div
          className="card m-5"
          style={{
            width: "17rem",
            backgroundColor: " #CEEDFF",
            opacity: "0.9",
            borderRadius: '20px'
          }}
        >
        <a href="http://localhost:3001/account/login" style={{textDecoration: 'none'}}>
          <img
            className="card-img-top m-5"
            src={hims}
            alt="hims"
            style={{ width: "150px", height: "160px" }}
          ></img>
          <p className="fw-bold fs-4 text-center" style={{}}>HIMS</p>
          </a> 
        </div>
    
        <div
          className="card m-5"
          style={{
            width: "17rem",
            backgroundColor: " #CEEDFF",
            opacity: "0.9",
            borderRadius: '20px'
          }}
        >
        <a href="/completedjobs" style={{textDecoration: 'none'}}>
          <img
            className="card-img-top m-5"
            src={printc}
            alt="printc"
            style={{ width: "150px", height: "160px" }}
          ></img>
          <p className=" fw-bold fs-4 text-center">Completed Jobs</p>
          </a>
        </div>
        <div
          className="card m-5"
          style={{
            width: "17rem",
            backgroundColor: " #CEEDFF",
            opacity: "0.9",
            borderRadius: '20px'
          }}
        >
        <a href="/printqueue" style={{textDecoration: 'none'}}>
          <img
            className="card-img-top m-5"
            src={printq}
            alt="printq"
            style={{ width: "150px", height: "160px" }}
          ></img>
          <p className="fw-bold fs-4 text-center">Print Queue</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
