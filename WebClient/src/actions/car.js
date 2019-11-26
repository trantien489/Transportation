import { createAction } from "redux-actions";
import { CAR } from "../actionTypes/car";
//GETALL
export const getAllCarAction = createAction(CAR.GETALL);
export const getAllCarSuccessAction = createAction(CAR.GETALL_SUCCESS);
export const getAllCarFailureAction = createAction(CAR.GETALL_FAILURE);
//GETBYID
export const getByIdCarAction = createAction(CAR.GETBYID);
export const getByIdCarSuccessAction = createAction(CAR.GETBYID_SUCCESS);
export const getByIdCarFailureAction = createAction(CAR.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusCarAction = createAction(CAR.CHANGE_STATUS);
export const changeStatusCarSuccessAction = createAction(CAR.CHANGE_STATUS_SUCCESS);
export const changeStatusCarFailureAction = createAction(CAR.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteCarAction = createAction(CAR.DELETE);
export const deleteCarSuccessAction = createAction(CAR.DELETE_SUCCESS);
export const deleteCarFailureAction = createAction(CAR.DELETE_FAILURE);
//ADD
export const addCarAction = createAction(CAR.ADD);
export const addCarSuccessAction = createAction(CAR.ADD_SUCCESS);
export const addCarFailureAction = createAction(CAR.ADD_FAILURE);
//EDIT
export const editCarAction = createAction(CAR.EDIT);
export const editCarSuccessAction = createAction(CAR.EDIT_SUCCESS);
export const editCarFailureAction = createAction(CAR.EDIT_FAILURE);

//GETALL_SELECT
export const carGetAllSelectAction = createAction(CAR.GETALL_SELECT);
export const carGetAllSelectSuccessAction = createAction(CAR.GETALL_SELECT_SUCCESS);
export const carGetAllSelectFailureAction = createAction(CAR.GETALL_SELECT_FAILURE);