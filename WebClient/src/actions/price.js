import { createAction } from "redux-actions";
import { PRICE } from "../actionTypes/price";
//GETALL
export const getAllPriceAction = createAction(PRICE.GETALL);
export const getAllPriceSuccessAction = createAction(PRICE.GETALL_SUCCESS);
export const getAllPriceFailureAction = createAction(PRICE.GETALL_FAILURE);
//GETBYID
export const getByIdPriceAction = createAction(PRICE.GETBYID);
export const getByIdPriceSuccessAction = createAction(PRICE.GETBYID_SUCCESS);
export const getByIdPriceFailureAction = createAction(PRICE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusPriceAction = createAction(PRICE.CHANGE_STATUS);
export const changeStatusPriceSuccessAction = createAction(PRICE.CHANGE_STATUS_SUCCESS);
export const changeStatusPriceFailureAction = createAction(PRICE.CHANGE_STATUS_FAILURE);
//DELETE
export const deletePriceAction = createAction(PRICE.DELETE);
export const deletePriceSuccessAction = createAction(PRICE.DELETE_SUCCESS);
export const deletePriceFailureAction = createAction(PRICE.DELETE_FAILURE);
//ADD
export const addPriceAction = createAction(PRICE.ADD);
export const addPriceSuccessAction = createAction(PRICE.ADD_SUCCESS);
export const addPriceFailureAction = createAction(PRICE.ADD_FAILURE);
//EDIT
export const editPriceAction = createAction(PRICE.EDIT);
export const editPriceSuccessAction = createAction(PRICE.EDIT_SUCCESS);
export const editPriceFailureAction = createAction(PRICE.EDIT_FAILURE);
//FILTER
export const filterPriceAction = createAction(PRICE.FILTER);
export const filterPriceSuccessAction = createAction(PRICE.FILTER_SUCCESS);
export const filterPriceFailureAction = createAction(PRICE.FILTER_FAILURE);