import { createAction } from "redux-actions";
import { TEMPLATEPOSITION } from "../actionTypes/templatePosition";
//GETALL
export const getAllTemplatePositionAction = createAction(TEMPLATEPOSITION.GETALL);
export const getAllTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.GETALL_SUCCESS);
export const getAllTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.GETALL_FAILURE);
//GETBYID
export const getByIdTemplatePositionAction = createAction(TEMPLATEPOSITION.GETBYID);
export const getByIdTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.GETBYID_SUCCESS);
export const getByIdTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusTemplatePositionAction = createAction(TEMPLATEPOSITION.CHANGE_STATUS);
export const changeStatusTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.CHANGE_STATUS_SUCCESS);
export const changeStatusTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteTemplatePositionAction = createAction(TEMPLATEPOSITION.DELETE);
export const deleteTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.DELETE_SUCCESS);
export const deleteTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.DELETE_FAILURE);
//ADD
export const addTemplatePositionAction = createAction(TEMPLATEPOSITION.ADD);
export const addTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.ADD_SUCCESS);
export const addTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.ADD_FAILURE);
//EDIT
export const editTemplatePositionAction = createAction(TEMPLATEPOSITION.EDIT);
export const editTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.EDIT_SUCCESS);
export const editTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.EDIT_FAILURE);
//SEARCH
export const searchTemplatePositionAction = createAction(TEMPLATEPOSITION.SEARCH);
export const searchTemplatePositionSuccessAction = createAction(TEMPLATEPOSITION.SEARCH_SUCCESS);
export const searchTemplatePositionFailureAction = createAction(TEMPLATEPOSITION.SEARCH_FAILURE);