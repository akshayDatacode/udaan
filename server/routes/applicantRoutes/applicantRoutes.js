const express = require("express");
const { check } = require("express-validator");

const applicantControllers = require("../../controllers/applicantControllers/applicantControllers");

const router = express.Router();

router.post(
  "/add_applicant",
  [
    check("adhaarNo").not().isEmpty().withMessage("Adhar is required"),
    check("panNo").not().isEmpty().withMessage("Pan is Require"),
  ],
  applicantControllers.addApplicant
);

router.put("/edit_applicant/:id", applicantControllers.editApplicant);

router.get("/get_applicants", applicantControllers.getApplicants);

module.exports = router;
