import { createAction } from "redux-actions";
import { PRICEADJUSTMENT } from "../actionTypes/priceAdjustment";
//GETALL
export const getAllPriceAdjustmentAction = createAction(PRICEADJUSTMENT.GETALL);
export const getAllPriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.GETALL_SUCCESS);
export const getAllPriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.GETALL_FAILURE);
//GETBYID
export const getByIdPriceAdjustmentAction = createAction(PRICEADJUSTMENT.GETBYID);
export const getByIdPriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.GETBYID_SUCCESS);
export const getByIdPriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusPriceAdjustmentAction = createAction(PRICEADJUSTMENT.CHANGE_STATUS);
export const changeStatusPriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.CHANGE_STATUS_SUCCESS);
export const changeStatusPriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.CHANGE_STATUS_FAILURE);
//DELETE
export const deletePriceAdjustmentAction = createAction(PRICEADJUSTMENT.DELETE);
export const deletePriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.DELETE_SUCCESS);
export const deletePriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.DELETE_FAILURE);
//ADD
export const addPriceAdjustmentAction = createAction(PRICEADJUSTMENT.ADD);
export const addPriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.ADD_SUCCESS);
export const addPriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.ADD_FAILURE);
//EDIT
export const editPriceAdjustmentAction = createAction(PRICEADJUSTMENT.EDIT);
export const editPriceAdjustmentSuccessAction = createAction(PRICEADJUSTMENT.EDIT_SUCCESS);
export const editPriceAdjustmentFailureAction = createAction(PRICEADJUSTMENT.EDIT_FAILURE);