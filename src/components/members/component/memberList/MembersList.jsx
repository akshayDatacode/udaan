import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Table from "../../../../services/Table";
import { getColumns } from "./helpers";

let columns = getColumns();

class MembersList extends React.Component {
  state = {
    membersData: [],
  };
  
  componentDidMount() {
    this.props.fetchMembers().then((res) => {
      if (res && res.success) {
        this.setState({ membersData: res.data.members });
      }
    })
  }

  render() {
    const {
      state: { membersData },
    } = this;

    return (
      <>
        <Helmet>
          <title>Udann</title>
        </Helmet>
        <div className="row">
          <div className="col">
            <h2 className="mt-5 mb-4">Members List</h2>
            <Table tableData={membersData} columns={columns}/>
          </div>
        </div>
      </>
    );
  }
}

MembersList.defaultProps = {
  members: {},
};

MembersList.propTypes = {
  members: PropTypes.object,
};

export default MembersList;
