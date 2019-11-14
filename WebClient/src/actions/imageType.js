import { createAction } from "redux-actions";
import { IMAGETYPE } from "../actionTypes/imageType";
//GETALL
export const getAllImageTypeAction = createAction(IMAGETYPE.GETALL);
export const getAllImageTypeSuccessAction = createAction(IMAGETYPE.GETALL_SUCCESS);
export const getAllImageTypeFailureAction = createAction(IMAGETYPE.GETALL_FAILURE);
//GETBYID
export const getByIdImageTypeAction = createAction(IMAGETYPE.GETBYID);
export const getByIdImageTypeSuccessAction = createAction(IMAGETYPE.GETBYID_SUCCESS);
export const getByIdImageTypeFailureAction = createAction(IMAGETYPE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusImageTypeAction = createAction(IMAGETYPE.CHANGE_STATUS);
export const changeStatusImageTypeSuccessAction = createAction(IMAGETYPE.CHANGE_STATUS_SUCCESS);
export const changeStatusImageTypeFailureAction = createAction(IMAGETYPE.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteImageTypeAction = createAction(IMAGETYPE.DELETE);
export const deleteImageTypeSuccessAction = createAction(IMAGETYPE.DELETE_SUCCESS);
export const deleteImageTypeFailureAction = createAction(IMAGETYPE.DELETE_FAILURE);
//ADD
export const addImageTypeAction = createAction(IMAGETYPE.ADD);
export const addImageTypeSuccessAction = createAction(IMAGETYPE.ADD_SUCCESS);
export const addImageTypeFailureAction = createAction(IMAGETYPE.ADD_FAILURE);
//EDIT
export const editImageTypeAction = createAction(IMAGETYPE.EDIT);
export const editImageTypeSuccessAction = createAction(IMAGETYPE.EDIT_SUCCESS);
export const editImageTypeFailureAction = createAction(IMAGETYPE.EDIT_FAILURE);