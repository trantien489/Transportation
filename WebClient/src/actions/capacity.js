import { createAction } from "redux-actions";
import { CAPACITY } from "../actionTypes/capacity";
//GETALL
export const getAllCapacityAction = createAction(CAPACITY.GETALL);
export const getAllCapacitySuccessAction = createAction(CAPACITY.GETALL_SUCCESS);
export const getAllCapacityFailureAction = createAction(CAPACITY.GETALL_FAILURE);
//GETBYID
export const getByIdCapacityAction = createAction(CAPACITY.GETBYID);
export const getByIdCapacitySuccessAction = createAction(CAPACITY.GETBYID_SUCCESS);
export const getByIdCapacityFailureAction = createAction(CAPACITY.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusCapacityAction = createAction(CAPACITY.CHANGE_STATUS);
export const changeStatusCapacitySuccessAction = createAction(CAPACITY.CHANGE_STATUS_SUCCESS);
export const changeStatusCapacityFailureAction = createAction(CAPACITY.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteCapacityAction = createAction(CAPACITY.DELETE);
export const deleteCapacitySuccessAction = createAction(CAPACITY.DELETE_SUCCESS);
export const deleteCapacityFailureAction = createAction(CAPACITY.DELETE_FAILURE);
//ADD
export const addCapacityAction = createAction(CAPACITY.ADD);
export const addCapacitySuccessAction = createAction(CAPACITY.ADD_SUCCESS);
export const addCapacityFailureAction = createAction(CAPACITY.ADD_FAILURE);
//EDIT
export const editCapacityAction = createAction(CAPACITY.EDIT);
export const editCapacitySuccessAction = createAction(CAPACITY.EDIT_SUCCESS);
export const editCapacityFailureAction = createAction(CAPACITY.EDIT_FAILURE);