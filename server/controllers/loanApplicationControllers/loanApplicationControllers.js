const HttpResponse = require("../../models/http-response");
const LoanModel = require("../../models/loanApplicationModel");

//========add Loan Application ===============================================================

const addLoanApplication = async (req, res, next) => {
  console.log(req.body);
  const {
    applicantName,
    agentId,
    adhaarNo,
    poaType,
    poaNo,
    phoneNo,
    // Address
    houseNo,
    street,
    landmark,
    pinCode,
    city,
    state,
    // Finance Product Details
    loanAmount,
    invoiceNo,
    modelNo,
    noOfInstallment,
    // Cheque Details
    chequeNo1,
    chequeNo2,
    bankName,
    accountNo,
    IFCSCode,
    // Gaurantor Details
    gaurantorName,
    gaurantorPhoneNo,
    gaurantorAddress,
  } = req.body;

  const createdLoanApplication = new LoanModel({
    applicantName,
    agentId,
    adhaarNo,
    poaType,
    poaNo,
    phoneNo,
    // Address
    houseNo,
    street,
    landmark,
    pinCode,
    city,
    state,
    // Finance Product Details
    loanAmount,
    invoiceNo,
    modelNo,
    noOfInstallment,
    // Cheque Details
    chequeNo1,
    chequeNo2,
    bankName,
    accountNo,
    IFCSCode,
    // Gaurantor Details
    gaurantorName,
    gaurantorPhoneNo,
    gaurantorAddress,
  });

  try {
    const addLoanApplication = await createdLoanApplication.save();
    res.send({ addLoanApplication: addLoanApplication, success: true });
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

// fetchLoanApplication=====================================================================

const getLoanApplications = async (req, res) => {
  try {
    const loanApplications = await LoanModel.find({}).sort({ createdAt: -1 });
    return res.send({ loanApplications: loanApplications, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

// editLoanApplication=====================================================================

const editLoanApplication = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedLoanApplication = await LoanModel.findByIdAndUpdate(id, data);
    return res.send({ success: true, updatedLoanApplication: updatedLoanApplication });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addLoanApplication = addLoanApplication;
exports.editLoanApplication = editLoanApplication;
exports.getLoanApplications = getLoanApplications;
