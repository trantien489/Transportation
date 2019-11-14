import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ROLE } from '../actionTypes/role';
import { 
    getAllRolesSuccessAction,
    getAllRolesFailureAction,
    getByIdRoleSuccessAction,
    getByIdRoleFailureAction,
    changeStatusRoleSuccessAction,
    changeStatusRoleFailureAction,
    deleteRoleSuccessAction,
    deleteRoleFailureAction,
    addRoleSuccessAction,
    addRoleFailureAction,
    editRoleSuccessAction,
    editRoleFailureAction
} from '../actions/role';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/Create';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Role/Update';
// GETALL
const getAllRoleEpic = action$ => action$.pipe(
    ofType(ROLE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllRolesSuccessAction(response)),
            catchError(error => of(getAllRolesFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdRoleEpic = action$ => action$.pipe(
    ofType(ROLE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdRoleSuccessAction(response)),
            catchError(error => of(getByIdRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusRoleEpic = action$ => action$.pipe(
    ofType(ROLE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusRoleSuccessAction(response)),
            catchError(error => of(changeStatusRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteRoleEpic = action$ => action$.pipe(
    ofType(ROLE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteRoleSuccessAction(response)),
            catchError(error => of(deleteRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addRoleEpic = action$ => action$.pipe(
    ofType(ROLE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addRoleSuccessAction(response)),
            catchError(error => of(addRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editRoleEpic = action$ => action$.pipe(
    ofType(ROLE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editRoleSuccessAction(response)),
            catchError(error => of(editRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic, getByIdRoleEpic };