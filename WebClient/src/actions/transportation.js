import { createAction } from "redux-actions";
import { TRANSPORTATION } from "../actionTypes/transportation";
//GETALL
export const getAllTransportationAction = createAction(TRANSPORTATION.GETALL);
export const getAllTransportationSuccessAction = createAction(TRANSPORTATION.GETALL_SUCCESS);
export const getAllTransportationFailureAction = createAction(TRANSPORTATION.GETALL_FAILURE);
//GETBYID
export const getByIdTransportationAction = createAction(TRANSPORTATION.GETBYID);
export const getByIdTransportationSuccessAction = createAction(TRANSPORTATION.GETBYID_SUCCESS);
export const getByIdTransportationFailureAction = createAction(TRANSPORTATION.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusTransportationAction = createAction(TRANSPORTATION.CHANGE_STATUS);
export const changeStatusTransportationSuccessAction = createAction(TRANSPORTATION.CHANGE_STATUS_SUCCESS);
export const changeStatusTransportationFailureAction = createAction(TRANSPORTATION.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteTransportationAction = createAction(TRANSPORTATION.DELETE);
export const deleteTransportationSuccessAction = createAction(TRANSPORTATION.DELETE_SUCCESS);
export const deleteTransportationFailureAction = createAction(TRANSPORTATION.DELETE_FAILURE);
//ADD
export const addTransportationAction = createAction(TRANSPORTATION.ADD);
export const addTransportationSuccessAction = createAction(TRANSPORTATION.ADD_SUCCESS);
export const addTransportationFailureAction = createAction(TRANSPORTATION.ADD_FAILURE);
//EDIT
export const editTransportationAction = createAction(TRANSPORTATION.EDIT);
export const editTransportationSuccessAction = createAction(TRANSPORTATION.EDIT_SUCCESS);
export const editTransportationFailureAction = createAction(TRANSPORTATION.EDIT_FAILURE);
//GENERATEMONEY
export const generateMoneyTransportationAction = createAction(TRANSPORTATION.GENERATEMONEY);
export const generateMoneyTransportationSuccessAction = createAction(TRANSPORTATION.GENERATEMONEY_SUCCESS);
export const generateMoneyTransportationFailureAction = createAction(TRANSPORTATION.GENERATEMONEY_FAILURE);

//FILTER
export const transportationFilterAction = createAction(TRANSPORTATION.FILTER);
export const transportationFilterSuccessAction = createAction(TRANSPORTATION.FILTER_SUCCESS);
export const transportationFilterFailureAction = createAction(TRANSPORTATION.FILTER_FAILURE);
