import React from "react";
import moment from "moment";

export const getColumns = () => [
  {
    dataField: "createdAt",
    text: "Inquery Date",
    headerClasses: "table-header priority",
    formatter: (cell, row) => <span>{moment(row.createdAt).format("L")}</span>,
  },
  {
    dataField: "memberName",
    text: "Name",
    headerClasses: "table-header priority",
  },
  {
    dataField: "aadhaarNo",
    text: "Aadhar No",
    headerClasses: "table-header priority",
  },
];
