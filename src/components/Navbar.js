import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import wifi from "../images/wifi.png";
import battery from "../images/battery.png";
import setting from "../images/setting.png";
import arrow from "../images/arrow.png";
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";

console.log(logo);
console.log(wifi);
console.log(battery);
console.log(setting);
console.log(arrow);

function Navbar() {
  var [date, setDate] = useState(new Date());
  // const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  

  const navigate = useNavigate();
  const navigateToSettings = () => {
    navigate("/settings");
  };

  const [background, setBackground] = useState("#05467C");
  const [color, setColor] = useState("#fff");

  const [backgroundSetting, setBackgroundSetting] = useState("#05467C");
  const [colorSetting, setColorSetting] = useState("#fff");

  const [backgroundBattery, setBackgroundBattery] = useState("#05467C");
  const [colorBattery, setColorBattery] = useState("#fff");

  const handleClick = () => {
    setBackground(background === "#05467C" ? "#CEEDFF" : "#05467C");
    setColor(color === "#fff" ? "#05467C" : "#fff");
  };

  const handleClickSettings = () => {
    setBackgroundSetting(backgroundSetting === "#05467C" ? "#CEEDFF" : "#05467C");
    setColorSetting(colorSetting === "#fff" ? "#05467C" : "#fff");
  };

  const handleClickBattery = () => {
    setBackgroundBattery(backgroundBattery === "#05467C" ? "#CEEDFF" : "#05467C");
    setColorBattery(colorBattery === "#fff" ? "#05467C" : "#fff");
  };

  const navigateP = useNavigate();
  const navigateToPlenomeMain = () => {
    navigateP("/plenomemain");
  };

  const [batteryPercent, setBatteryPercent] = useState(null);
  const [showBatteryPercent, setShowBatteryPercent] = useState();

  useEffect(() => {
    if ("getBattery" in navigator) {
      const getBatteryPercent = async () => {
        const battery = await navigator.getBattery();
        setBatteryPercent((battery.level * 100).toFixed(2));
      };
      getBatteryPercent();
    } else {
      console.log("Battery API not supported.");
    }
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  // useEffect(() => {
  //   navigator.getBattery().then((battery) => {
  //     setBatteryLevel(Math.floor(battery.level * 100) + "%");
  //     battery.addEventListener("levelchange", () => {
  //       setBatteryLevel(Math.floor(battery.level * 100) + "%");
  //     });
  //   });
  // }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ height: "70px", backgroundColor: "#05467C" }}
      >
        <button className="btn" onClick={navigateToPlenomeMain}>
          <img src={logo} alt="logo"></img>
        </button>
        <ul className="navbar-nav navbar-center mt-3">
          <li className="nav-item">
            <p className="text-white">
              {date.toLocaleTimeString()}&nbsp;:&nbsp;
              {date.toLocaleDateString()}
            </p>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button
              className="btn"
              style={{ width: "55px", height: "55px", background: background}}
              onClick={()=>{toggleDropdown(); handleClick();}}
            >
              <i className="fas fa-angle-down fa-lg mt-2" style={{fontSize: '35px', color: color}}></i>
            </button>
          </li>
          {dropdownOpen && (
            <ul className="dropdown-list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          )}
          <li className="nav-item">
            <button className="btn" style={{ width: "55px", height: "55px" }}>
            <i className="fas fa-wifi fa-lg mt-1" style={{fontSize: '23px', color: 'white'}}></i>
            </button>
          </li>
          <li className="nav-item">
            <button
            className="btn"
              onClick={() => {setShowBatteryPercent(!showBatteryPercent); handleClickBattery();}}
              style={{
                width: "55px",
                height: "55px",
                background: backgroundBattery,
                border: "1px solid #05467C",
              }}
            >
            <i className="fas fa-battery-three-quarters fa-lg mt-1" style={{fontSize: '26px', color: colorBattery}}></i>
            </button>
            
              {showBatteryPercent && batteryPercent !== null ? (
                <div
                  style={{
                    position: "fixed",
                    top: "10%",
                    right: "0%",
                    backgroundColor: "#05467C",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "220px",
                    height: "150px",
                    zIndex: '999'
                  }}
                >
                  <div
                    className="container-fluid"
                    style={{ backgroundColor: "#0788D8", zIndex: "999"}}
                  >
                    <h5 className="text-white fw-bold">Battery</h5>
                  </div>
                  <i className="fas fa-battery-three-quarters fa-lg p-2" style={{color: 'white', fontSize: '38px', marginTop: '10px'}}></i>
                  <p style={{ color: "white" }} className="mt-3 fs-5 ms-2">
                    {batteryPercent}%
                  </p>
                </div>
              ) : null}
            
          </li>

          <li className="nav-item">
            <button
              className="btn"
              style={{ width: "55px", height: "55px",background: backgroundSetting }}
              onClick={()=>{navigateToSettings(); handleClickSettings();}}
            >
              <i className="fas fa-cog"  style={{fontSize: '26px', color: colorSetting}}></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
