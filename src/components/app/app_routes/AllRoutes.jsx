import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../home_page";
import Home from "../../home_page/Home";
import Dashboard from "../../dashboard/components/Dashboard";
import LoanApplyForm from "../../applicant/component/LoanApplyForm";
import ApplicantsList from "../../dashboard/components/ApplicantsList";
import LoanApplicantsList from "../../dashboard/components/LoanApplicantsList";

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
      </Switch>
    </>
  );
};

export default AppRoutes;
