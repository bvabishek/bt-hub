import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo } from "react";
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
import PrintQr from "./PrintQr";

console.log(logo);
console.log(wifi);
console.log(battery);
console.log(setting);
console.log(arrow);
console.log(hims);
console.log(printc);
console.log(printq);
console.log(eye);
console.log(eyes);
console.log(filter);
console.log(shape);
console.log(trash);

function PrintQueue() {
  // const navigate = useNavigate();
  // const navigateToPrintQr = () => {
  //   navigate("/printqr");
  // };

  const ChildComponent1 = () => (
    <div>
      <div
        className="ag-theme-alpine"
        style={{
          height: 700,
          width: "95%",
          marginLeft: "38px",
          fontSize: "1rem",
          fontFamily: "Mulish",
          fontWeight: "700",
          border: "1px solid #05467C",
          borderRadius: "10px",
        }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData.slice(0, rowsToDisplay).filter(isDataMatching)}
          pagination={true}
          paginationPageSize={rowsToDisplay}
          defaultColDef={defaultColDef}
          enableSorting={true}
          enableFilter={true}
          floatingFilter={true}
        />
      </div>
    </div>
  );

  const ChildComponent2 = () => (
    <div>
      <PrintQr />
    </div>
  );

  const [rowsToDisplay, setRowsToDisplay] = useState(30);

  const [searchText, setSearchText] = useState("");

  const handleSelect = (selectedOption) => {
    setRowsToDisplay(selectedOption);
  };

  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick = () => {
    setShowComponent2(!showComponent2);
  };

  const [rowData] = useState([
    {
      slno: "1.",
      source: "192.168.1.1",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "2.",
      source: "192.168.1.2",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "3.",
      source: "192.168.1.3",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "4.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "5.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "6.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "7.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "8.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "9.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "10.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "11.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "12.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "13.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "14.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "15.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "16.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "17.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "18.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "19.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "20.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "21.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "22.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "23.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "24.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "25.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "26.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "27.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "28.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "29.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "30.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "31.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "32.",
      source: "192.168.1.5",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "33.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "34.",
      source: "192.168.1.6",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
    {
      slno: "35.",
      source: "192.168.1.4",
      fname: "New Doc",
      date: "25/01",
      time: "9 P.M",
    },
  ]);

  const columnDefs = [
    {
      headerName: "Sl. no",
      field: "slno",
      editable: true,
      headerClass: "header-name",
      cellStyle: { color: "#05467C" },
    },
    {
      headerName: "Source",
      field: "source",
      editable: true,
      headerClass: "header-name",
      cellStyle: { color: "#05467C" },
    },
    {
      headerName: "File Name",
      field: "fname",
      editable: true,
      headerClass: "header-name",
      cellStyle: { color: "#05467C" },
    },
    {
      headerName: "Date",
      field: "date",
      editable: true,
      headerClass: "header-name",
      cellStyle: { color: "#05467C" },
    },
    {
      headerName: "Time",
      field: "time",
      editable: true,
      headerClass: "header-name",
      cellStyle: { color: "#05467C" },
    },
    {
      headerName: "Actions",
      field: "id",
      headerClass: "header-name",
      cellRendererFramework: (params) => (
        <div>
          <button className="btn btn-danger btn-sm">
            <img src={trash} alt="del"></img>
          </button>
          <button className="btn btn-primary btn-sm ms-2" onClick={handleClick}>
            <img src={eyes} alt="eyes"></img>
          </button>
        </div>
      ),
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  const onQuickFilterText = (e) => {
    setSearchText(e.target.value);
  };

  const isDataMatching = ({ slno, fname, source, date, time }) =>
    slno.toString().includes(searchText) ||
    fname.toLowerCase().includes(searchText.toLowerCase()) ||
    source.toString().includes(searchText) ||
    date.toString().includes(searchText) ||
    time.toString().includes(searchText);

  // const gridApi = useRef(null);

  // const handleNextPage = () => {
  //   gridApi.current.paginationGoToNextPage();
  // };
  // const onShowDataClick = () => {
  //   setRowData(rowData.slice(0, 10));
  //   gridApi.api.onFilterChanged();
  // };

  return (
    <div className="Printq">
      <div className="ms-4">
        <select
          className="m-3"
          style={{
            width: "88px",
            height: "48px",
            borderRadius: "8px",
            border: "1px solid #05467C",
            marginTop: "6px",
          }}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button
          className="btn"
          style={{
            border: "1px solid #05467C",
            width: "88px",
            height: "48px",
            marginTop: "-4px",
          }}
        >
          <img src={eye} alt="eye"></img>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="m-3"
          onInput={onQuickFilterText}
          value={searchText}
          style={{
            width: "1140px",
            height: "49px",
            borderRadius: "8px",
            border: "1px solid #05467C",
            textAlign: "center",
          }}
        ></input>
        <button
          className="btn"
          style={{
            border: "1px solid #05467C",
            width: "80px",
            height: "48px",
            marginTop: "-4px",
          }}
        >
          <img src={filter} alt="filter"></img>
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", height: "100vh" }}>
          <ChildComponent1 />
        </div>
        {showComponent2 && (
          <div style={{ width: "90%", height: "40vh" }}>
            <ChildComponent2 />
          </div>
        )}
      </div>
    </div>
  );
}

export default PrintQueue;
