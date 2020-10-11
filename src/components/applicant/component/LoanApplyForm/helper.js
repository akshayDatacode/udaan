export const validateForm1 = (data) => {
    const error = {}
    if (!data.aadharNo) {
        error.aadharNo = "adhaar no. required"
    } else if (data.aadharNo.length !== 12) {
        error.aadharNo = "Wrong adhaar no."
    }
    if (!data.agentId) {
        error.agentId = "AgentId required"
    }
    if (!data.applicantName) {
        error.applicantName = "Name required"
    }
    if (!data.poaType) {
        error.poaType = "poaType required"
    }
    if (!data.poaNo) {
        error.poaNo = "poa no. required"
    }
    if (!data.poaImg) {
        error.poaImg = "poaImg required"
    }
    if (!data.phoneNo) {
        error.phoneNo = "phoneNo required"
    }
    if (!data.phoneNo) {
        error.phoneNo = "phoneNo required"
    } else if (data.phoneNo.length !== 10) {
        error.phoneNo = "Wrong phoneNo"
    }
    if (!data.userProfileImg) {
        error.userProfileImg = "userProfileImg required"
    }
    return error
}

export const validateForm2 = (data) => {
    const error = {}
    if (!data.houseNo) {
        error.houseNo = "adhaar no. required"
    }
    if (!data.street) {
        error.street = "address required"
    }
    if (!data.pinCode) {
        error.pinCode = "pincode required"
    } else {
        if (data.pinCode.length !== 6) {
            error.pinCode = "pincode must be 6 digits"
        }
        if (!isPinCode(data.pinCode)) {
            error.pinCode = "pincode must be in numerical"
        }
    }
    if (!data.city) {
        error.city = "city required"
    }
    if (!data.state) {
        error.state = "state required"
    }
    return error
}

function isPinCode(n) { return /^-?[\d]+(?:e-?\d+)?$/.test(n); }
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

export const validateForm3 = (data) => {
    const error = {}
    if (!data.loanAmount) {
        error.loanAmount = "loanAmount required"
    } else {
        if (data.loanAmount == 0) {
            error.loanAmount = "loanAmount can't be 0"
        } if (!isNumber(data.loanAmount)) {
            error.loanAmount = "loan amount must be in numerical"
        }
    }
    if (!data.invoiceNo) {
        error.invoiceNo = "invoiceNo required"
    }
    if (!data.modelNo) {
        error.modelNo = "modelNo required"
    }
    if (!data.noOfInstallment) {
        error.noOfInstallment = "no Of Installments required"
    } else if (data.noOfInstallment == 0) {
        error.noOfInstallment = "no Of Installment can't be 0"
    }
    return error
}

export const validateForm4 = (data) => {
    const error = {}
    if (!data.chequeNo1) {
        error.chequeNo1 = "chequeNo1 required"
    }
    if (!data.chequeNo1Img) {
        error.chequeNo1Img = "chequeNo1Img required"
    }
    if (!data.chequeNo2) {
        error.chequeNo2 = "chequeNo2 required"
    }
    if (!data.chequeNo2Img) {
        error.chequeNo2Img = "chequeNo2Img required"
    }
    if (!data.bankName) {
        error.bankName = "bankName required"
    }
    if (!data.accountNo) {
        error.accountNo = "accountNo required"
    }
    if (!data.IFCSCode) {
        error.IFCSCode = "IFCSCode required"
    }
    return error
}

export const validateForm5 = (data) => {
    const error = {}
    if (!data.gaurantorName) {
        error.gaurantorName = "gaurantorName required"
    }
    if (!data.gaurantorPhoneNo) {
        error.gaurantorPhoneNo = "gaurantorPhoneNo required"
    }
    if (!data.gaurantorAddress) {
        error.gaurantorAddress = "gaurantorAddress required"
    }
    return error
}