import { createAction } from "redux-actions";
import { COMMON } from "../actionTypes/common";
//GETALL
export const getAllCommonAction = createAction(COMMON.GETALL);
export const getAllCommonSuccessAction = createAction(COMMON.GETALL_SUCCESS);
export const getAllCommonFailureAction = createAction(COMMON.GETALL_FAILURE);
//GETBYID
export const getByIdCommonAction = createAction(COMMON.GETBYID);
export const getByIdCommonSuccessAction = createAction(COMMON.GETBYID_SUCCESS);
export const getByIdCommonFailureAction = createAction(COMMON.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusCommonAction = createAction(COMMON.CHANGE_STATUS);
export const changeStatusCommonSuccessAction = createAction(COMMON.CHANGE_STATUS_SUCCESS);
export const changeStatusCommonFailureAction = createAction(COMMON.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteCommonAction = createAction(COMMON.DELETE);
export const deleteCommonSuccessAction = createAction(COMMON.DELETE_SUCCESS);
export const deleteCommonFailureAction = createAction(COMMON.DELETE_FAILURE);
//ADD
export const addCommonAction = createAction(COMMON.ADD);
export const addCommonSuccessAction = createAction(COMMON.ADD_SUCCESS);
export const addCommonFailureAction = createAction(COMMON.ADD_FAILURE);
//EDIT
export const editCommonAction = createAction(COMMON.EDIT);
export const editCommonSuccessAction = createAction(COMMON.EDIT_SUCCESS);
export const editCommonFailureAction = createAction(COMMON.EDIT_FAILURE);