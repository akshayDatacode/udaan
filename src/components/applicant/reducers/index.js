import {getApplicantDataHandlers} from './getApplicantData'
import { createReducer } from "../../../core/reduxUtils";


const initialState = {
    personalData:{},
    address:{},
    financeProductDetails:{},
    chequeDetails:{},
    guarantorDetails:{}
}

const handlers = {
    ...getApplicantDataHandlers
}

const applicantReducer = createReducer(initialState, handlers);

export default applicantReducer
