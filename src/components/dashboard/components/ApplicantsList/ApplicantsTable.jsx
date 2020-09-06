import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PropTypes from "prop-types";

import { getColumns } from "./helpers";

const ApplicantsTable = ({ applicantsData }) => {
  let columns = getColumns();
  return (
    <div>
      <div className="bootstrap-table">
        <BootstrapTable
          striped
          keyField="_id"
          data={applicantsData}
          columns={columns}
        />
      </div>
      <div>
        {applicantsData.length === 0 && (
          <div className="text-center archive">No search related to this</div>
        )}
      </div>
    </div>
  );
};

ApplicantsTable.defaultProps = {
  applicantsData: [],
};

ApplicantsTable.propTypes = {
  applicantsData: PropTypes.array.isRequired,
};

export default ApplicantsTable;
