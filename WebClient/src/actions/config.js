import { createAction } from "redux-actions";
import { CONFIG } from "../actionTypes/config";
//GETALL
export const getAllConfigAction = createAction(CONFIG.GETALL);
export const getAllConfigSuccessAction = createAction(CONFIG.GETALL_SUCCESS);
export const getAllConfigFailureAction = createAction(CONFIG.GETALL_FAILURE);
//GETBYID
export const getByIdConfigAction = createAction(CONFIG.GETBYID);
export const getByIdConfigSuccessAction = createAction(CONFIG.GETBYID_SUCCESS);
export const getByIdConfigFailureAction = createAction(CONFIG.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusConfigAction = createAction(CONFIG.CHANGE_STATUS);
export const changeStatusConfigSuccessAction = createAction(CONFIG.CHANGE_STATUS_SUCCESS);
export const changeStatusConfigFailureAction = createAction(CONFIG.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteConfigAction = createAction(CONFIG.DELETE);
export const deleteConfigSuccessAction = createAction(CONFIG.DELETE_SUCCESS);
export const deleteConfigFailureAction = createAction(CONFIG.DELETE_FAILURE);
//ADD
export const addConfigAction = createAction(CONFIG.ADD);
export const addConfigSuccessAction = createAction(CONFIG.ADD_SUCCESS);
export const addConfigFailureAction = createAction(CONFIG.ADD_FAILURE);
//EDIT
export const editConfigAction = createAction(CONFIG.EDIT);
export const editConfigSuccessAction = createAction(CONFIG.EDIT_SUCCESS);
export const editConfigFailureAction = createAction(CONFIG.EDIT_FAILURE);