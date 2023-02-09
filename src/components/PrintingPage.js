import React, { useState, useEffect} from "react";
import logo from "../images/logo.png";
import touch from "../images/touch.png";
import aadhar from "../images/aadhar.png";
import fingerprint from "../images/fingerprint.png";
import "./LoginStyles.css";
import search from "../images/search.png";
import print from "../images/miniprint.png";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import Pdf from "react-to-pdf";
import { Modal, Spin } from "antd";

console.log(touch);
console.log(aadhar);
console.log(fingerprint);
console.log(search);
console.log(print);

function PrintingPage() {
  function Visibile() {
    document.getElementById("qr").style.visibility = "visible";
  }
  const navigatep = useNavigate();
  const navigateToPrintingPage = () => {
    navigatep("/printpage");
  };

  const navigate = useNavigate();
  const navigateToFingerprintpage = () => {
    navigate("/fingerprint");
  };

  const navigateAadhar = useNavigate();
  const navigateToAadhar = () => {
    navigateAadhar("/aadhar");
  };

  const navigatePlenome = useNavigate();
  const navigateToPlenome = () => {
    navigatePlenome("/plenome");
  };

  const [value, setValue] = useState();

  const ref = React.createRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);
  // const [fileName, setFileName] = useState('sample.pdf');

  // const handleDownload = () => {
  //   const blob = new Blob([ref], { type: 'text/plain;charset=utf-8' });
  //   saveAs(blob, fileName);
  // };

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
                    onClick={navigateToAadhar}
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
                      Manual Authentication
                    </h4>
                  </div>
                  <form>
                    <label className="ms-5 p-2">Patient ID</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Patient ID"
                      className="ms-5 ps-4 mb-2"
                      style={{
                        borderColor: "#05467C",
                        borderRadius: "10px",
                        width: "85%",
                      }}
                      onChange={(e) => setValue(e.target.value)}
                    ></input>
                    <label className="ms-5 p-2">Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Blood group"
                      className="ms-5 ps-4 mb-2"
                      style={{
                        borderColor: "#05467C",
                        borderRadius: "10px",
                        width: "85%",
                      }}
                    ></input>
                    <label className="ms-5 p-2">Blood Group</label>
                    <br />
                    <input
                      type="text"
                      placeholder="xxxxxxxxx"
                      className="ms-5 ps-4 mb-2"
                      style={{
                        borderColor: "#05467C",
                        borderRadius: "10px",
                        width: "85%",
                      }}
                    ></input>
                    <label className="ms-5 p-2">Phone no.</label>
                    <br />
                    <input
                      type="text"
                      placeholder=""
                      className="ms-5 ps-4 mb-3"
                      style={{
                        borderColor: "#05467C",
                        borderRadius: "10px",
                        width: "85%",
                      }}
                    ></input>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginRight: "65px",
                      }}
                      className="mt-1"
                    ></div>
                  </form>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      marginRight: "70px",
                    }}
                  >
                  
                  
                    <Pdf targetRef={ref} filename="Abishek_new.pdf">
                      {({ toPdf }) => (
                        <button
                          className="btn mb-4"
                          style={{
                            backgroundColor: "#05467C",
                            color: "white",
                            width: "190px",
                            height: "55px",
                          }}
                          onClick={function (event) {
                            toPdf();
                            Visibile();
                            setLoading(true);
                          }}
                        >
                          Print
                        </button>
                      )}
                    </Pdf>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}} >
                  <Modal visible={loading} footer={null} style={{marginTop: '200px'}}>
                  <Spin size="large" />
                  </Modal>
                  </div>
                  </div>
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
            <h4 className="fw-bold ms-3 mt-3" style={{ fontFamily: "Mulish" }}>
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
          <div className="container-fluid bg-white" ref={ref}>
            <div className="text-center mt-3">
              <h4 className="pt-3 fw-bold ms-4">Abishek</h4>
              <p
                style={{ textAlign: "justify" }}
                className="mt-4 ms-5 p-4
                "
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
            <div
              id="qr"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                visibility: "hidden",
              }}
              className="container mt-4 p-3"
            >
              {value && (
                <QRCode
                  value={value}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintingPage;
