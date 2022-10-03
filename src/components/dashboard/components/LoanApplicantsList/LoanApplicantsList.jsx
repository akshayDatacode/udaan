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
    this.props.fetchLoanApplicants().then((res) => {
      if (res && res.success) {
        this.setState({ loanApplicantsData: res.data.loanApplications });
      }
    })
  }

  render() {
    const {
      state: { loanApplicantsData },
    } = this;
    console.log("state", this.state)
    return (
      <>
        <Helmet>
          <title>Udann</title>
        </Helmet>
        <div className="row">
          <div className="col">
            <h2 className="p-4 border-bottom shadow">Loan Applications List</h2>
            <div className="px-3 mt-5">
              <Table tableData={loanApplicantsData} columns={columns} />
            </div>
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
