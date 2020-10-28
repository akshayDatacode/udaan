import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import EMICalculator from "../../emi_calculator/EMICalculator";
import Home from "../../home_page/Home";
import Dashboard from "../../dashboard/components/Dashboard";
import ApplicantsList from "../../dashboard/components/ApplicantsList";
import LoanApplicantsList from "../../dashboard/components/LoanApplicantsList"
import ApplyLoanForm3 from "../../applicant/component/LoanApplyForm/LoanApplyForm3"
import ApplyLoanForm4 from "../../applicant/component/LoanApplyForm/LoanApplyForm4"
import ApplyLoanForm5 from "../../applicant/component/LoanApplyForm/LoanApplyForm5"
// import DashboardAgent from '../../agent/agentDashboard/components/Dashboard'
import MembersList from "../../members/component/memberList";
import MemberForm1 from "../../members/component/memberForm";
import MemberForm2 from "../../members/component/memberForm/MemberForm2";
import MemberDetailsPage from "../../members/component/memberDetails/MemberDetailsPage";
import Signup from "../../user/component/Signup";
import LoanApplicantDetails from "../../dashboard/components/LoanApplicantsList/LoanApplicantDetails";

const AppRoutes = (props) => {
  return (

    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members_list" component={MembersList} />
        <Route exact path="/calculate_emi" component={EMICalculator} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/applicants_list" component={ApplicantsList} />
        <Route exact path="/loan_applicants_list" component={LoanApplicantsList} />
        <Route exact path="/loan_applicant_details/:loanId" component={LoanApplicantDetails} />        
        <Route exact path="/member_form" component={MemberForm1} />
        <Route exact path="/member_form_2" component={MemberForm2} />
        <Route exact path="/member_details/:memberId" component={MemberDetailsPage} />
        <Route exact path="/finance_product_details/:memberId" component={ApplyLoanForm3} />
        <Route exact path="/cheque_details" component={ApplyLoanForm4} />
        <Route exact path="/guarantor_details" component={ApplyLoanForm5} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(AppRoutes);
