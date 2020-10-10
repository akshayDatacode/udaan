import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Table from "../../../../services/Table";
import { getColumns } from "./helpers";

let columns = getColumns();

class LoanApplicantsList extends React.Component {
  state = {
    loanApplicantsData: [],
  };
  
  componentDidMount() {
    this.props.getLoanApplicants().then((res) => {
      if (res && res.success) {
        this.setState({ loanApplicantsData: res.data.loanApplications });
      }
    })
  }

  render() {
    const {
      state: { loanApplicantsData },
    } = this;

    return (
      <>
        <Helmet>
          <title>Udann</title>
        </Helmet>
        <div className="row">
          <div className="col">
            <h2 className="mt-5 mb-4">Loan Applications List</h2>
            <Table tableData={loanApplicantsData} columns={columns}/>
          </div>
        </div>
      </>
    );
  }
}

LoanApplicantsList.defaultProps = {
  loanApplicants: {},
};

LoanApplicantsList.propTypes = {
  loanApplicants: PropTypes.object,
};

export default LoanApplicantsList;
