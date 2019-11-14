import { createAction } from "redux-actions";
import { CONTACT } from "../actionTypes/contact";
//GETALL
export const getAllContactAction = createAction(CONTACT.GETALL);
export const getAllContactSuccessAction = createAction(CONTACT.GETALL_SUCCESS);
export const getAllContactFailureAction = createAction(CONTACT.GETALL_FAILURE);
//GETBYID
export const getByIdContactAction = createAction(CONTACT.GETBYID);
export const getByIdContactSuccessAction = createAction(CONTACT.GETBYID_SUCCESS);
export const getByIdContactFailureAction = createAction(CONTACT.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusContactAction = createAction(CONTACT.CHANGE_STATUS);
export const changeStatusContactSuccessAction = createAction(CONTACT.CHANGE_STATUS_SUCCESS);
export const changeStatusContactFailureAction = createAction(CONTACT.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteContactAction = createAction(CONTACT.DELETE);
export const deleteContactSuccessAction = createAction(CONTACT.DELETE_SUCCESS);
export const deleteContactFailureAction = createAction(CONTACT.DELETE_FAILURE);
//ADD
export const addContactAction = createAction(CONTACT.ADD);
export const addContactSuccessAction = createAction(CONTACT.ADD_SUCCESS);
export const addContactFailureAction = createAction(CONTACT.ADD_FAILURE);
//EDIT
export const editContactAction = createAction(CONTACT.EDIT);
export const editContactSuccessAction = createAction(CONTACT.EDIT_SUCCESS);
export const editContactFailureAction = createAction(CONTACT.EDIT_FAILURE);