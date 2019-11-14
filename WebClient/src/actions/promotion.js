import { createAction } from "redux-actions";
import { PROMOTION } from "../actionTypes/promotion";
//GETALL
export const getAllPromotionAction = createAction(PROMOTION.GETALL);
export const getAllPromotionSuccessAction = createAction(PROMOTION.GETALL_SUCCESS);
export const getAllPromotionFailureAction = createAction(PROMOTION.GETALL_FAILURE);
//GETBYID
export const getByIdPromotionAction = createAction(PROMOTION.GETBYID);
export const getByIdPromotionSuccessAction = createAction(PROMOTION.GETBYID_SUCCESS);
export const getByIdPromotionFailureAction = createAction(PROMOTION.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusPromotionAction = createAction(PROMOTION.CHANGE_STATUS);
export const changeStatusPromotionSuccessAction = createAction(PROMOTION.CHANGE_STATUS_SUCCESS);
export const changeStatusPromotionFailureAction = createAction(PROMOTION.CHANGE_STATUS_FAILURE);
//DELETE
export const deletePromotionAction = createAction(PROMOTION.DELETE);
export const deletePromotionSuccessAction = createAction(PROMOTION.DELETE_SUCCESS);
export const deletePromotionFailureAction = createAction(PROMOTION.DELETE_FAILURE);
//ADD
export const addPromotionAction = createAction(PROMOTION.ADD);
export const addPromotionSuccessAction = createAction(PROMOTION.ADD_SUCCESS);
export const addPromotionFailureAction = createAction(PROMOTION.ADD_FAILURE);
//EDIT
export const editPromotionAction = createAction(PROMOTION.EDIT);
export const editPromotionSuccessAction = createAction(PROMOTION.EDIT_SUCCESS);
export const editPromotionFailureAction = createAction(PROMOTION.EDIT_FAILURE);