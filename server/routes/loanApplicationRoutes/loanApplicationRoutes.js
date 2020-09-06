const express = require("express");

const loanApplicationControllers = require("../../controllers/loanApplicationControllers/loanApplicationControllers");

const router = express.Router();

router.post(
  "/add_loan_application", loanApplicationControllers.addLoanApplication
)

router.put("/edit_loan_application/:id", loanApplicationControllers.editLoanApplication);

router.get("/get_loan_applications", loanApplicationControllers.getLoanApplications);

module.exports = router;
