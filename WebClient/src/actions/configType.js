import { createAction } from "redux-actions";
import { CONFIGTYPE } from "../actionTypes/configType";
//GETALL
export const getAllConfigTypeAction = createAction(CONFIGTYPE.GETALL);
export const getAllConfigTypeSuccessAction = createAction(CONFIGTYPE.GETALL_SUCCESS);
export const getAllConfigTypeFailureAction = createAction(CONFIGTYPE.GETALL_FAILURE);
//GETBYID
export const getByIdConfigTypeAction = createAction(CONFIGTYPE.GETBYID);
export const getByIdConfigTypeSuccessAction = createAction(CONFIGTYPE.GETBYID_SUCCESS);
export const getByIdConfigTypeFailureAction = createAction(CONFIGTYPE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusConfigTypeAction = createAction(CONFIGTYPE.CHANGE_STATUS);
export const changeStatusConfigTypeSuccessAction = createAction(CONFIGTYPE.CHANGE_STATUS_SUCCESS);
export const changeStatusConfigTypeFailureAction = createAction(CONFIGTYPE.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteConfigTypeAction = createAction(CONFIGTYPE.DELETE);
export const deleteConfigTypeSuccessAction = createAction(CONFIGTYPE.DELETE_SUCCESS);
export const deleteConfigTypeFailureAction = createAction(CONFIGTYPE.DELETE_FAILURE);
//ADD
export const addConfigTypeAction = createAction(CONFIGTYPE.ADD);
export const addConfigTypeSuccessAction = createAction(CONFIGTYPE.ADD_SUCCESS);
export const addConfigTypeFailureAction = createAction(CONFIGTYPE.ADD_FAILURE);
//EDIT
export const editConfigTypeAction = createAction(CONFIGTYPE.EDIT);
export const editConfigTypeSuccessAction = createAction(CONFIGTYPE.EDIT_SUCCESS);
export const editConfigTypeFailureAction = createAction(CONFIGTYPE.EDIT_FAILURE);
