const HttpResponse = require("../../models/http-response");
const ApplicantModel = require("../../models/applicantModel");

const { validationResult } = require("express-validator");

//========add Applicant ===============================================================

const addApplicant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpResponse("Invalid inputs passed, please check your data.", 422),
      console.log(errors)
    );
  }

  console.log(req.body);
  const { title, price, quantity, discount } = req.body;

  const createdApplicant = new ApplicantModel({
    title,
    price,
    quantity,
    discount,
    userQuantity: 1,
  });

  try {
    const addApplicant = await createdApplicant.save();
    res.send({ addApplicant: addApplicant, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  const { applicantName, agentId, adhaarNo, panNo, phoneNo, invoiceAmount, installmentNo } = createdApplicant
   
  res.status(201).json({
    applicantName,
    agentId,
    adhaarNo,
    panNo,
    phoneNo,
    invoiceAmount,
    installmentNo,
  });
};

// fetchApplicants=====================================================================

const getApplicants = async (req, res) => {
  try {
    const applicant = await ApplicantModel.find({}).sort({ createdAt: -1 });
    res.send({ applicant: applicant, success: true });
  } catch (error) {
    console.error(error);
    res.send({ success: false });
  }
};

// editApplicant=====================================================================

const editApplicant = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedApplicant = await ApplicantModel.findByIdAndUpdate(id, data);
    res.send({ success: "ture", updatedApplicant: updatedApplicant });
  } catch (error) {
    console.error(error);
    res.send({ success: false });
  }
};

exports.addApplicant = addApplicant;
exports.editApplicant = editApplicant;
exports.getApplicants = getApplicants;
