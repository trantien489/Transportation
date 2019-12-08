import { createAction } from "redux-actions";
import { REPORT } from "../actionTypes/report";
//BANGKE
export const reportBangkeAction = createAction(REPORT.BANGKE);
export const reportBangkeSuccessAction = createAction(REPORT.BANGKE_SUCCESS);
export const reportBangkeFailureAction = createAction(REPORT.BANGKE_FAILURE);

//CHECK_BANGKE
export const reportCheckBangkeAction = createAction(REPORT.CHECK_BANGKE);
export const reportCheckBangkeSuccessAction = createAction(REPORT.CHECK_BANGKE_SUCCESS);
export const reportCheckBangkeFailureAction = createAction(REPORT.CHECK_BANGKE_FAILURE);