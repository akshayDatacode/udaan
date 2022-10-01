import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Table from "../../../../services/Table";
import { getColumns } from "./helpers";

let columns = getColumns();

class ApplicantsList extends React.Component {
  state = {
    applicantsData: [],
  };

  componentDidMount() {
    this.props.getapplicants().then((res) => {
      if (res && res.success) {
        console.log(res.data);
        this.setState({ applicantsData: res.data.applicant });
      }
    });
  }

  render() {
    const {
      state: { applicantsData },
    } = this;

    return (
      <>
        <Helmet>
          <title>Udann</title>
        </Helmet>
        <div className="row mx-0">
          <div className="col-12 p-0">
            <h2 className="p-4 border-bottom shadow">Applicants List</h2>
            <div className="px-3 mt-5">
              <Table tableData={applicantsData} columns={columns} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

ApplicantsList.defaultProps = {
  applicants: {},
};

ApplicantsList.propTypes = {
  applicants: PropTypes.object,
};

export default ApplicantsList;
