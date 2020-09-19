import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PropTypes from "prop-types";

const Table = ({ tableData, columns }) => {
  
  return (
    <div>
      <div className="bootstrap-table">
        <BootstrapTable
          striped
          keyField="_id"
          data={tableData}
          columns={columns}
        />
      </div>
      <div>
        {tableData.length === 0 && (
          <div className="text-center archive">No search related to this</div>
        )}
      </div>
    </div>
  );
};

Table.defaultProps = {
  tableData: [],
};

Table.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default Table;
