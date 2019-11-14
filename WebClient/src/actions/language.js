import { createAction } from "redux-actions";
import { LANGUAGE } from "../actionTypes/language";
//GETALL
export const getAllLanguageAction = createAction(LANGUAGE.GETALL);
export const getAllLanguageSuccessAction = createAction(LANGUAGE.GETALL_SUCCESS);
export const getAllLanguageFailureAction = createAction(LANGUAGE.GETALL_FAILURE);
//GETBYID
export const getByIdLanguageAction = createAction(LANGUAGE.GETBYID);
export const getByIdLanguageSuccessAction = createAction(LANGUAGE.GETBYID_SUCCESS);
export const getByIdLanguageFailureAction = createAction(LANGUAGE.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusLanguageAction = createAction(LANGUAGE.CHANGE_STATUS);
export const changeStatusLanguageSuccessAction = createAction(LANGUAGE.CHANGE_STATUS_SUCCESS);
export const changeStatusLanguageFailureAction = createAction(LANGUAGE.CHANGE_STATUS_FAILURE);
//DELETE
export const deleteLanguageAction = createAction(LANGUAGE.DELETE);
export const deleteLanguageSuccessAction = createAction(LANGUAGE.DELETE_SUCCESS);
export const deleteLanguageFailureAction = createAction(LANGUAGE.DELETE_FAILURE);
//ADD
export const addLanguageAction = createAction(LANGUAGE.ADD);
export const addLanguageSuccessAction = createAction(LANGUAGE.ADD_SUCCESS);
export const addLanguageFailureAction = createAction(LANGUAGE.ADD_FAILURE);
//EDIT
export const editLanguageAction = createAction(LANGUAGE.EDIT);
export const editLanguageSuccessAction = createAction(LANGUAGE.EDIT_SUCCESS);
export const editLanguageFailureAction = createAction(LANGUAGE.EDIT_FAILURE);
//CHANGE_ISDEFAULT
export const changeIsDefaultLanguageAction = createAction(LANGUAGE.CHANGE_ISDEFAULT);
export const changeIsDefaultLanguageSuccessAction = createAction(LANGUAGE.CHANGE_ISDEFAULT_SUCCESS);
export const changeIsDefaultLanguageFailureAction = createAction(LANGUAGE.CHANGE_ISDEFAULT_FAILURE);
// CHECK_UNIQUE 
export const checkUniqueLanguageAction = createAction(LANGUAGE.CHECK_UNIQUE);
export const checkUniqueLanguageSuccessAction = createAction(LANGUAGE.CHECK_UNIQUE_SUCCESS);
export const checkUniqueLanguageFailureAction = createAction(LANGUAGE.CHECK_UNIQUE_FAILURE);