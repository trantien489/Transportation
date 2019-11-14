import { createAction } from "redux-actions";
import { PERMISSIONROLES } from "../actionTypes/permissionRoles";
//GETALL
export const getAllPermissionRoless = createAction(PERMISSIONROLES.GETALL);
export const getAllPermissionRolessSuccess = createAction(PERMISSIONROLES.GETALL_SUCCESS);
export const getAllPermissionRolessFailure = createAction(PERMISSIONROLES.GETALL_FAILURE);
//GETBYID
export const getByIdPermissionRoles = createAction(PERMISSIONROLES.GETBYID);
export const getByIdPermissionRolesSuccess = createAction(PERMISSIONROLES.GETBYID_SUCCESS);
export const getByIdPermissionRolesFailure = createAction(PERMISSIONROLES.GETBYID_FAILURE);
//CHANGE_STATUS
export const changeStatusPermissionRoles = createAction(PERMISSIONROLES.CHANGE_STATUS);
export const changeStatusPermissionRolesSuccess = createAction(PERMISSIONROLES.CHANGE_STATUS_SUCCESS);
export const changeStatusPermissionRolesFailure = createAction(PERMISSIONROLES.CHANGE_STATUS_FAILURE);
//DELETE
export const deletePermissionRoles = createAction(PERMISSIONROLES.DELETE);
export const deletePermissionRolesSuccess = createAction(PERMISSIONROLES.DELETE_SUCCESS);
export const deletePermissionRolesFailure = createAction(PERMISSIONROLES.DELETE_FAILURE);
//ADD
export const addPermissionRoles = createAction(PERMISSIONROLES.ADD);
export const addPermissionRolesSuccess = createAction(PERMISSIONROLES.ADD_SUCCESS);
export const addPermissionRolesFailure = createAction(PERMISSIONROLES.ADD_FAILURE);
//EDIT
export const editPermissionRoles = createAction(PERMISSIONROLES.EDIT);
export const editPermissionRolesSuccess = createAction(PERMISSIONROLES.EDIT_SUCCESS);
export const editPermissionRolesFailure = createAction(PERMISSIONROLES.EDIT_FAILURE);
