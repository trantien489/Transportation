import { createAction } from "redux-actions";
import { DISTANCE } from "../actionTypes/distance";
//GETALL
export const getAllDistanceAction = createAction(DISTANCE.GETALL);
export const getAllDistanceSuccessAction = createAction(DISTANCE.GETALL_SUCCESS);
export const getAllDistanceFailureAction = createAction(DISTANCE.GETALL_FAILURE);
//GETBYID
export const getByIdDistanceAction = createAction(DISTANCE.GETBYID);
export const getByIdDistanceSuccessAction = createAction(DISTANCE.GETBYID_SUCCESS);
export const getByIdDistanceFailureAction = createAction(DISTANCE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusDistanceAction = createAction(DISTANCE.CHANGE_STATUS);
export const changeStatusDistanceSuccessAction = createAction(DISTANCE.CHANGE_STATUS_SUCCESS);
export const changeStatusDistanceFailureAction = createAction(DISTANCE.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteDistanceAction = createAction(DISTANCE.DELETE);
export const deleteDistanceSuccessAction = createAction(DISTANCE.DELETE_SUCCESS);
export const deleteDistanceFailureAction = createAction(DISTANCE.DELETE_FAILURE);
//ADD
export const addDistanceAction = createAction(DISTANCE.ADD);
export const addDistanceSuccessAction = createAction(DISTANCE.ADD_SUCCESS);
export const addDistanceFailureAction = createAction(DISTANCE.ADD_FAILURE);
//EDIT
export const editDistanceAction = createAction(DISTANCE.EDIT);
export const editDistanceSuccessAction = createAction(DISTANCE.EDIT_SUCCESS);
export const editDistanceFailureAction = createAction(DISTANCE.EDIT_FAILURE);

//GETALL_SELECT
export const distanceGetAllSelectAction = createAction(DISTANCE.GETALL_SELECT);
export const distanceGetAllSelectSuccessAction = createAction(DISTANCE.GETALL_SELECT_SUCCESS);
export const distanceGetAllSelectFailureAction = createAction(DISTANCE.GETALL_SELECT_FAILURE);