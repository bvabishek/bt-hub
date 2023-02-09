import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo } from "react";

function CompletedJobs() {

    const rowData = [
        {
          slno: "1.",
          source: "192.168.1.1",
          fname: "New Doc",
          date: "25/01",
          time: "9 P.M",
          status: 'success'
        },
        {
            slno: "2.",
            source: "192.168.1.1",
            fname: "New Doc",
            date: "25/01",
            time: "9 P.M",
            status: 'success'
          },
          {
            slno: "3.",
            source: "192.168.1.1",
            fname: "New Doc",
            date: "25/01",
            time: "9 P.M",
            status: 'success'
          },
          {
            slno: "4.",
            source: "192.168.1.1",
            fname: "New Doc",
            date: "25/01",
            time: "9 P.M",
            status: 'success'
          },
        
    ];

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
            headerName: "Status",
            field: 'status',
            headerClass: 'header-name',
            cellStyle: {color: 'green', fontSize: '15px'}
        }
    ];

    const defaultColDef = useMemo(
        () => ({
          sortable: true,
          filter: true,
          flex: 1,
        }),
        []
      );
    return (
        <div>
            <div
        className="ag-theme-alpine mt-4"
        style={{
          height: 535,
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
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
        </div>
    );
}

export default CompletedJobs;