const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicantSchema = new Schema(
  {
    // Applicant  Information
    applicantName: { type: String },
    agentId: { type: String },
    adhaarNo: { type: Number },
    panNo: { type: String },
    phoneNo: { type: Number },
    invoiceAmount: { type: Number },
    installmentNO: { type: Number }
  },
  {
    timestamps: [{ createdAt: "created_at" }],
  }
);

module.exports = mongoose.model("Applicant", applicantSchema);
