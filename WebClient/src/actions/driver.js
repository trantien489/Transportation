import { createAction } from "redux-actions";
import { DRIVER } from "../actionTypes/driver";
//GETALL
export const getAllDriverAction = createAction(DRIVER.GETALL);
export const getAllDriverSuccessAction = createAction(DRIVER.GETALL_SUCCESS);
export const getAllDriverFailureAction = createAction(DRIVER.GETALL_FAILURE);
//GETBYID
export const getByIdDriverAction = createAction(DRIVER.GETBYID);
export const getByIdDriverSuccessAction = createAction(DRIVER.GETBYID_SUCCESS);
export const getByIdDriverFailureAction = createAction(DRIVER.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusDriverAction = createAction(DRIVER.CHANGE_STATUS);
export const changeStatusDriverSuccessAction = createAction(DRIVER.CHANGE_STATUS_SUCCESS);
export const changeStatusDriverFailureAction = createAction(DRIVER.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteDriverAction = createAction(DRIVER.DELETE);
export const deleteDriverSuccessAction = createAction(DRIVER.DELETE_SUCCESS);
export const deleteDriverFailureAction = createAction(DRIVER.DELETE_FAILURE);
//ADD
export const addDriverAction = createAction(DRIVER.ADD);
export const addDriverSuccessAction = createAction(DRIVER.ADD_SUCCESS);
export const addDriverFailureAction = createAction(DRIVER.ADD_FAILURE);
//EDIT
export const editDriverAction = createAction(DRIVER.EDIT);
export const editDriverSuccessAction = createAction(DRIVER.EDIT_SUCCESS);
export const editDriverFailureAction = createAction(DRIVER.EDIT_FAILURE);

//GETALL_SELECT
export const driverGetAllSelectAction = createAction(DRIVER.GETALL_SELECT);
export const driverGetAllSelectSuccessAction = createAction(DRIVER.GETALL_SELECT_SUCCESS);
export const driverGetAllSelectFailureAction = createAction(DRIVER.GETALL_SELECT_FAILURE);