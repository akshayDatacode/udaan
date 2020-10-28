import React from "react";
import moment from "moment";
import {Link} from 'react-router-dom'

const viewOrderFormatter = (cell, row) => (
  <div className="table-control view">
    {console.log(row)}
    <Link to={`loan_applicant_details/${row.loanId}`}>
      <div className="btn btn-primary">View Application</div>
    </Link>
  </div>
);

export const getColumns = () => [
  {
    dataField: "createdAt",
    text: "Inquery Date",
    headerClasses: "table-header priority",
    formatter: (cell, row) => <span>{moment(row.createdAt).format("L")}</span>,
  },
  {
    dataField: "modelNo",
    text: "Model Name",
    headerClasses: "table-header priority",
  },
  {
    dataField: "loanAmount",
    text: "Loan Amount",
    headerClasses: "table-header priority",
  },
  {
    dataField: "noOfInstallment",
    text: "No of Installments",
    headerClasses: "table-header priority",
  },
  {
    dataField: "",
    text: "",
    align: "right",
    headerClasses: "table-header view-order",
    formatter: viewOrderFormatter,
  },
];
