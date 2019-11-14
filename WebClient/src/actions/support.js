import { createAction } from "redux-actions";
import { SUPPORT } from "../actionTypes/support";
//GETALL
export const getAllSupportAction = createAction(SUPPORT.GETALL);
export const getAllSupportSuccessAction = createAction(SUPPORT.GETALL_SUCCESS);
export const getAllSupportFailureAction = createAction(SUPPORT.GETALL_FAILURE);
//GETBYID
export const getByIdSupportAction = createAction(SUPPORT.GETBYID);
export const getByIdSupportSuccessAction = createAction(SUPPORT.GETBYID_SUCCESS);
export const getByIdSupportFailureAction = createAction(SUPPORT.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusSupportAction = createAction(SUPPORT.CHANGE_STATUS);
export const changeStatusSupportSuccessAction = createAction(SUPPORT.CHANGE_STATUS_SUCCESS);
export const changeStatusSupportFailureAction = createAction(SUPPORT.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteSupportAction = createAction(SUPPORT.DELETE);
export const deleteSupportSuccessAction = createAction(SUPPORT.DELETE_SUCCESS);
export const deleteSupportFailureAction = createAction(SUPPORT.DELETE_FAILURE);
//ADD
export const addSupportAction = createAction(SUPPORT.ADD);
export const addSupportSuccessAction = createAction(SUPPORT.ADD_SUCCESS);
export const addSupportFailureAction = createAction(SUPPORT.ADD_FAILURE);
//EDIT
export const editSupportAction = createAction(SUPPORT.EDIT);
export const editSupportSuccessAction = createAction(SUPPORT.EDIT_SUCCESS);
export const editSupportFailureAction = createAction(SUPPORT.EDIT_FAILURE);