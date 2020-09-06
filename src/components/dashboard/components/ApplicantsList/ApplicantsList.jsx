import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import ApplicantsTable from "./ApplicantsTable";

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
        <div className="row">
          <div className="col">
            <h2>Applicants List</h2>
            <ApplicantsTable applicantsData={applicantsData} />
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
