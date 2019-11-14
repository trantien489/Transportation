import { createAction } from "redux-actions";
import { COMPANY } from "../actionTypes/company";
//GETALL
export const getAllCompanyAction = createAction(COMPANY.GETALL);
export const getAllCompanySuccessAction = createAction(COMPANY.GETALL_SUCCESS);
export const getAllCompanyFailureAction = createAction(COMPANY.GETALL_FAILURE);
//GETBYID
export const getByIdCompanyAction = createAction(COMPANY.GETBYID);
export const getByIdCompanySuccessAction = createAction(COMPANY.GETBYID_SUCCESS);
export const getByIdCompanyFailureAction = createAction(COMPANY.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusCompanyAction = createAction(COMPANY.CHANGE_STATUS);
export const changeStatusCompanySuccessAction = createAction(COMPANY.CHANGE_STATUS_SUCCESS);
export const changeStatusCompanyFailureAction = createAction(COMPANY.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteCompanyAction = createAction(COMPANY.DELETE);
export const deleteCompanySuccessAction = createAction(COMPANY.DELETE_SUCCESS);
export const deleteCompanyFailureAction = createAction(COMPANY.DELETE_FAILURE);
//ADD
export const addCompanyAction = createAction(COMPANY.ADD);
export const addCompanySuccessAction = createAction(COMPANY.ADD_SUCCESS);
export const addCompanyFailureAction = createAction(COMPANY.ADD_FAILURE);
//EDIT
export const editCompanyAction = createAction(COMPANY.EDIT);
export const editCompanySuccessAction = createAction(COMPANY.EDIT_SUCCESS);
export const editCompanyFailureAction = createAction(COMPANY.EDIT_FAILURE);