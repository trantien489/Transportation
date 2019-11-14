import { createAction } from "redux-actions";
import { PERMISSION } from "../actionTypes/permission";
//GETALL
export const getAllPermissionAction = createAction(PERMISSION.GETALL);
export const getAllPermissionSuccessAction = createAction(PERMISSION.GETALL_SUCCESS);
export const getAllPermissionFailureAction = createAction(PERMISSION.GETALL_FAILURE);
//GETBYID
export const getByIdPermissionAction = createAction(PERMISSION.GETBYID);
export const getByIdPermissionSuccessAction = createAction(PERMISSION.GETBYID_SUCCESS);
export const getByIdPermissionFailureAction = createAction(PERMISSION.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusPermissionAction = createAction(PERMISSION.CHANGE_STATUS);
export const changeStatusPermissionSuccessAction = createAction(PERMISSION.CHANGE_STATUS_SUCCESS);
export const changeStatusPermissionFailureAction = createAction(PERMISSION.CHANGE_STATUS_FAILURE);
//DELETE
export const deletePermissionAction = createAction(PERMISSION.DELETE);
export const deletePermissionSuccessAction = createAction(PERMISSION.DELETE_SUCCESS);
export const deletePermissionFailureAction = createAction(PERMISSION.DELETE_FAILURE);
//ADD
export const addPermissionAction = createAction(PERMISSION.ADD);
export const addPermissionSuccessAction = createAction(PERMISSION.ADD_SUCCESS);
export const addPermissionFailureAction = createAction(PERMISSION.ADD_FAILURE);
//EDIT
export const editPermissionAction = createAction(PERMISSION.EDIT);
export const editPermissionSuccessAction = createAction(PERMISSION.EDIT_SUCCESS);
export const editPermissionFailureAction = createAction(PERMISSION.EDIT_FAILURE);
//GETCONTROLLERSACTIONSMETHODS
export const getControllersActionsMethodsPermissionAction = createAction(PERMISSION.GETCONTROLLERSACTIONSMETHODS);
export const getControllersActionsMethodsPermissionSuccessAction = createAction(PERMISSION.GETCONTROLLERSACTIONSMETHODS_SUCCESS);
export const getControllersActionsMethodsPermissionFailureAction = createAction(PERMISSION.GETCONTROLLERSACTIONSMETHODS_FAILURE);

//SEARCHCONTROLLERBYNAME
export const searchControllerByNameAction = createAction(PERMISSION.SEARCHCONTROLLERBYNAME);
export const searchControllerByNameSuccessAction = createAction(PERMISSION.SEARCHCONTROLLERBYNAME_SUCCESS);
export const searchControllerByNameFailureAction = createAction(PERMISSION.SEARCHCONTROLLERBYNAME_FAILURE);

//SEARCH
export const searchAction = createAction(PERMISSION.SEARCH);
export const searchSuccessAction = createAction(PERMISSION.SEARCH_SUCCESS);
export const searchFailureAction = createAction(PERMISSION.SEARCH_FAILURE);

//SAVE
export const saveAction = createAction(PERMISSION.SAVE);
export const saveSuccessAction = createAction(PERMISSION.SAVE_SUCCESS);
export const saveFailureAction = createAction(PERMISSION.SAVE_FAILURE);