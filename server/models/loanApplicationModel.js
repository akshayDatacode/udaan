const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanApplicationSchema = new Schema(
  {
    // Applicant  Information
    applicantName: { type: String },
    agentId: { type: String },
    adhaarNo: { type: Number },
    poaType: { type: String },
    poaNo: { type: String },
    phoneNo: { type: Number },
    // Address
    houseNo: { type: String },
    street: { type : String},
    landmark: { type : String},
    pinCode: { type : String},
    city: { type : String},
    state: { type : String},
    // Finance Product Details
    loanAmount: { type: Number },
    invoiceNo: { type: String },
    modelNo: { type : String},
    noOfInstallment: { type: Number },
    // Cheque Details
    chequeNo1: { type : Number},
    chequeNo2: { type : Number},
    bankName: { type : String},
    accountNo: { type : Number},
    IFCSCode: { type : String},
    // Gaurantor Details
    gaurantorName: { type : String},
    gaurantorPhoneNo: { type : Number},
    gaurantorAddress: { type : String},
  },
  {
    timestamps: [{ createdAt: "created_at" }],
  }
);

module.exports = mongoose.model("LoanApplication", loanApplicationSchema);
