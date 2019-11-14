import { createAction } from "redux-actions";
import { ADVERTISE } from "../actionTypes/advertise";
//GETALL
export const getAllAdvertiseAction = createAction(ADVERTISE.GETALL);
export const getAllAdvertiseSuccessAction = createAction(ADVERTISE.GETALL_SUCCESS);
export const getAllAdvertiseFailureAction = createAction(ADVERTISE.GETALL_FAILURE);
//GETBYID
export const getByIdAdvertiseAction = createAction(ADVERTISE.GETBYID);
export const getByIdAdvertiseSuccessAction = createAction(ADVERTISE.GETBYID_SUCCESS);
export const getByIdAdvertiseFailureAction = createAction(ADVERTISE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusAdvertiseAction = createAction(ADVERTISE.CHANGE_STATUS);
export const changeStatusAdvertiseSuccessAction = createAction(ADVERTISE.CHANGE_STATUS_SUCCESS);
export const changeStatusAdvertiseFailureAction = createAction(ADVERTISE.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteAdvertiseAction = createAction(ADVERTISE.DELETE);
export const deleteAdvertiseSuccessAction = createAction(ADVERTISE.DELETE_SUCCESS);
export const deleteAdvertiseFailureAction = createAction(ADVERTISE.DELETE_FAILURE);
//ADD
export const addAdvertiseAction = createAction(ADVERTISE.ADD);
export const addAdvertiseSuccessAction = createAction(ADVERTISE.ADD_SUCCESS);
export const addAdvertiseFailureAction = createAction(ADVERTISE.ADD_FAILURE);
//EDIT
export const editAdvertiseAction = createAction(ADVERTISE.EDIT);
export const editAdvertiseSuccessAction = createAction(ADVERTISE.EDIT_SUCCESS);
export const editAdvertiseFailureAction = createAction(ADVERTISE.EDIT_FAILURE);