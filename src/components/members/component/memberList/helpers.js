import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const viewOrderFormatter = (cell, row) => (
  <div className="table-control view">
    <Link to={`/member_details/${row.memberId}`}>
      <div className="btn btn-primary">View Member</div>
    </Link>
  </div>
);

export const getColumns = () => [
  {
    dataField: "createdAt",
    text: "Inquery Date",
    headerClasses: "table-header priority",
    formatter: (cell, row) => <span>{moment(row.createdAt).format("LL")}</span>,
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
  {
    dataField: "",
    text: "",
    align: "right",
    headerClasses: "table-header view-order",
    formatter: viewOrderFormatter,
  },
];
