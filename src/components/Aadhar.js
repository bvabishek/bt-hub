import React from "react";
import logo from "../images/logo.png";
import touch from "../images/touch.png";
import aadhar from "../images/aadhar.png";
import fingerprint from "../images/fingerprint.png";
import "./LoginStyles.css";
import search from "../images/search.png";
import print from "../images/miniprint.png";
import fgprt from "../images/fgprt.png";
import { useNavigate } from "react-router-dom";

console.log(touch);
console.log(aadhar);
console.log(fingerprint);
console.log(search);
console.log(print);
console.log(fgprt);

function Aadhar() {
  const navigate = useNavigate();
  const navigateToPrintingPage = () => {
    navigate("/printpage");
  };
  const navigatef = useNavigate();
  const navigateToFingerprintpage = () => {
    navigatef("/fingerprint");
  };

  const navigatePlenome = useNavigate();
  const navigateToPlenome = () => {
    navigatePlenome('/plenome')
  }

  return (
    <div className="printpage">
      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="card">
            <div className="row ms-5 mt-2">
              <div className="col-md-5">
                <div className="card">
                  <button
                    className="btn"
                    style={{ backgroundColor: " #05467C", color: "white" }}
                    onClick={navigateToPrintingPage}
                  >
                    <img
                      src={touch}
                      alt="touch"
                      style={{ width: "36px", height: "43px" }}
                      className="m-2"
                    ></img>
                    Manual
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <button
                    className="btn"
                    style={{ backgroundColor: " #05467C", color: "white" }}
                  >
                    <img
                      src={aadhar}
                      alt="aadhar"
                      style={{ width: "43px", height: "43px" }}
                      className="m-2"
                    ></img>
                    aadhar
                  </button>
                </div>
              </div>
            </div>
            <div className="row ms-5 mt-2 mb-3">
              <div className="col-md-5">
                <div className="card">
                  <button
                    className="btn"
                    style={{ backgroundColor: " #05467C", color: "white" }}
                    onClick={navigateToFingerprintpage}
                  >
                    <img
                      src={fingerprint}
                      alt="fingerprint"
                      style={{ width: "36px", height: "42px" }}
                      className="m-2"
                    ></img>
                    fingerprint
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <button
                    className="btn"
                    style={{ backgroundColor: " #05467C", color: "white" }}
                    onClick={navigateToPlenome}
                  >
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: "40px", height: "42px" }}
                      className="m-2"
                    ></img>
                    Plenome card
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-title">
                    <h4
                      className="mt-4 ms-5 ps-2"
                      style={{
                        color: "#05467C",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                    >
                      Aadhar Authentication
                    </h4>
                  </div>
                  <form>
                    <label className="ms-5 p-2" style={{ color: "#05467C" }}>
                      Enter your Aadhar number
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="xxxx xxxx xxxx"
                      className="ms-5  mb-2 p-1"
                      style={{
                        borderColor: "#05467C",
                        borderRadius: "10px",
                        width: "85%",
                      }}
                    ></input>
                    <p
                      className="fs-8 mt-4"
                      style={{
                        color: "#05467C",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Code has been sent to the registered Number
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='mt-4'>
                        <input placeholder="" maxLength='1' style={{width:'48px', height: '45px', borderColor:'#05467C', borderRadius: '5px', marginRight: '10px'}}></input>
                        <input placeholder="" maxLength='1' style={{width:'48px', height: '45px', borderColor:'#05467C', borderRadius: '5px', marginRight: '10px'}}></input>
                        <input placeholder="" maxLength='1' style={{width:'48px', height: '45px', borderColor:'#05467C', borderRadius: '5px', marginRight: '10px'}}></input>
                        <input placeholder="" maxLength='1' style={{width:'48px', height: '45px', borderColor:'#05467C', borderRadius: '5px', marginRight: '10px'}}></input>
    
                    
                    </div>
                    <p className="text-center mt-4" style={{color: '#05467C', fontSize: '15px'}}>Haven't recieved code?&nbsp;<a href="/">Resend</a></p>
                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}} className='m-5'>
                        <button className="btn" style={{backgroundColor: '#05467C', width: '185px', height: '55px', color: 'white', borderRadius: '8px',marginRight: '40px'}}>Queue</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-6 mt-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.2",
            marginTop: "-60px",
            marginLeft: "-12px",
          }}
        >
          <div>
            <h4 className="fw-bold ms-4 mt-3" style={{ fontFamily: "Mulish" }}>
              Abishek.Pdf
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: "-40px",
              marginRight: "25px",
            }}
          >
            <button
              className="btn p-2"
              style={{
                backgroundColor: "#05467C",
                width: "55px",
                height: "55px",
              }}
            >
              <img src={search} alt="search"></img>
            </button>
            <button
              className="btn p-2"
              style={{
                backgroundColor: "#05467C",
                width: "55px",
                height: "55px",
                marginLeft: "10px",
              }}
            >
              <img src={print} alt="print"></img>
            </button>
          </div>
          <div className="row">
            <div className="m-4 col-lg-11 bg-white p-3">
              <h4 className="text-center mb-4">Abishek</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aadhar;
