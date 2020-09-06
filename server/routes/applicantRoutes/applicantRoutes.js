const express = require("express");

const applicantControllers = require("../../controllers/applicantControllers/applicantControllers");

const router = express.Router();

router.post(
  "/add_applicant", applicantControllers.addApplicant
)

router.put("/edit_applicant/:id", applicantControllers.editApplicant);

router.get("/get_applicants", applicantControllers.getApplicants);

module.exports = router;
