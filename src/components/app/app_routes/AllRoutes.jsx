import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../home_page";
import Home from "../../home_page/Home";
import Dashboard from "../../dashboard/components/Dashboard";
import LoanApplyForm from "../../applicant/component/LoanApplyForm";
import ApplicantsList from "../../dashboard/components/ApplicantsList";
import LoanApplicantsList from "../../dashboard/components/LoanApplicantsList";
import ApplyLoanForm1 from "../../applicant/component/LoanApplyForm/LoanApplyForm1"
import ApplyLoanForm2 from "../../applicant/component/LoanApplyForm/LoanApplyForm2"
import ApplyLoanForm3 from "../../applicant/component/LoanApplyForm/LoanApplyForm3"
import ApplyLoanForm4 from "../../applicant/component/LoanApplyForm/LoanApplyForm4"
import ApplyLoanForm5 from "../../applicant/component/LoanApplyForm/LoanApplyForm5"
// s
const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home_page" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/apply_for_loan" component={LoanApplyForm} />
        <Route exact path="/applicants_list" component={ApplicantsList} />
        <Route exact path="/loan_applicants_list" component={LoanApplicantsList} />
        <Route exact path="/personal_details" component={ApplyLoanForm1} />
        <Route exact path="/address_details" component={ApplyLoanForm2} />
        <Route exact path="/finance_product_details" component={ApplyLoanForm3} />
        <Route exact path="/cheque_details" component={ApplyLoanForm4} />
        <Route exact path="/guarantor_details" component={ApplyLoanForm5} />
      </Switch>
    </>
  );
};

export default AppRoutes;
