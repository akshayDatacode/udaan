const HttpResponse = require("../../models/http-response");
const ApplicantModel = require("../../models/applicantModel");

//========add Applicant ===============================================================

const addApplicant = async (req, res, next) => {
  console.log(req.body);
  const {
    applicantName,
    agentId,
    adhaarNo,
    panNo,
    phoneNo,
    invoiceAmount,
    noOfInstallment,
  } = req.body;

  const createdApplicant = new ApplicantModel({
    applicantName,
    agentId,
    adhaarNo,
    panNo,
    phoneNo,
    invoiceAmount,
    noOfInstallment,
  });

  try {
    const addApplicant = await createdApplicant.save();
    res.send({ addApplicant: addApplicant, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  return res.status(201).json({
    applicantName,
    agentId,
    adhaarNo,
    panNo,
    phoneNo,
    invoiceAmount,
    noOfInstallment,
  });
};

// fetchApplicants=====================================================================

const getApplicants = async (req, res) => {
  try {
    const applicant = await ApplicantModel.find({}).sort({ createdAt: -1 });
    return res.send({ applicant: applicant, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

// editApplicant=====================================================================

const editApplicant = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedApplicant = await ApplicantModel.findByIdAndUpdate(id, data);
    return res.send({ success: "ture", updatedApplicant: updatedApplicant });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addApplicant = addApplicant;
exports.editApplicant = editApplicant;
exports.getApplicants = getApplicants;
