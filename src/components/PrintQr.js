import React from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { useMemo } from "react";
import "./LoginStyles.css";
import logo from "../images/logo.png";
import wifi from "../images/wifi.png";
import battery from "../images/battery.png";
import setting from "../images/setting.png";
import arrow from "../images/arrow.png";
import hims from "../images/hims.png";
import printc from "../images/printc.png";
import printq from "../images/printq.png";
import eye from "../images/eye.png";
import filter from "../images/filter.png";
import shape from "../images/Shape.png";
import trash from "../images/trash.png";
import eyes from "../images/eyes.png";
import search from "../images/search.png";
import print from "../images/miniprint.png";
import { useNavigate } from "react-router-dom";


console.log(logo);
console.log(wifi);
console.log(battery);
console.log(setting);
console.log(arrow);
console.log(hims);
console.log(printc);
console.log(print);
console.log(printq);
console.log(eye);
console.log(eyes);
console.log(filter);
console.log(shape);
console.log(trash);
console.log(search);

function PrintQr() {
  const navigate = useNavigate();
  const navigateToPrintpage = () => {
    navigate("/printpage");
  };

  return (
    <div className="row Printqr">
          <div>
            <h4 className="fw-bold ms-4 mt-2" style={{ fontFamily: "Mulish" }}>
              Abishek.Pdf
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: "-40px",
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
              onClick={navigateToPrintpage}
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
          <div className="container-fluid bg-white">
            <div className="text-center mt-3">
              <h4 className="pt-3">Abishek</h4>
              <p
                style={{ textAlign: "justify" }}
                className="mt-4 ms-3 ps-4 mb-2
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
          </div>
        </div>
  );
}

export default PrintQr;
