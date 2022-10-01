import React from "react";
import moment from "moment";

export const getColumns = () => [
  {
    dataField: "createdAt",
    text: "Inquery Date",
    headerClasses: "table-header priority",
    formatter: (cell, row) => <span>{moment(row.createdAt).format("LL")}</span>,
  },
  {
    dataField: "applicantName",
    text: "Name",
    headerClasses: "table-header priority",
  },
  {
    dataField: "panNo",
    text: "PAN No",
    headerClasses: "table-header priority",
  },
  {
    dataField: "adhaarNo",
    text: "Aadhar No",
    headerClasses: "table-header priority",
  },
  {
    dataField: "invoiceAmount",
    text: "Invoice Amount",
    headerClasses: "table-header priority",
  },
  {
    dataField: "noOfInstallment",
    text: "No of Installments",
    headerClasses: "table-header priority",
  },
];
