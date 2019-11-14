import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { PERMISSION } from '../actionTypes/permission';
import {
    getControllersActionsMethodsPermissionSuccessAction,
    getControllersActionsMethodsPermissionFailureAction,
    getAllPermissionSuccessAction,
    getAllPermissionFailureAction,
    getByIdPermissionSuccessAction,
    getByIdPermissionFailureAction,
    changeStatusPermissionSuccessAction,
    changeStatusPermissionFailureAction,
    deletePermissionSuccessAction,
    deletePermissionFailureAction,
    addPermissionSuccessAction,
    addPermissionFailureAction,
    editPermissionSuccessAction,
    editPermissionFailureAction,
    searchControllerByNameFailureAction,
    searchControllerByNameSuccessAction,
    searchFailureAction,
    searchSuccessAction,
    saveFailureAction,
    saveSuccessAction,
} from '../actions/permission';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/Update';
const API_GETCONTROLLERSACTIONSMETHODS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/GETCONTROLLERSACTIONSMETHODS';
const API_SEARCHCONTROLLERBYNAME = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/SearchControllerByName';
const API_SEARCH = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/Search';
const API_SAVE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Permission/Save';

// GETCONTROLLERSACTIONSMETHODS
const getControllersActionsMethodsEpic = action$ => action$.pipe(
    ofType(PERMISSION.GETCONTROLLERSACTIONSMETHODS),
    mergeMap(() => {
        return ajax.getJSON(API_GETCONTROLLERSACTIONSMETHODS, API_SERVICES.HEADERS()).pipe(
            map(response => getControllersActionsMethodsPermissionSuccessAction(response)),
            catchError(error => of(getControllersActionsMethodsPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETALL
const getAllPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllPermissionSuccessAction(response)),
            catchError(error => of(getAllPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdPermissionSuccessAction(response)),
            catchError(error => of(getByIdPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusPermissionSuccessAction(response)),
            catchError(error => of(changeStatusPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deletePermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deletePermissionSuccessAction(response)),
            catchError(error => of(deletePermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addPermissionSuccessAction(response)),
            catchError(error => of(addPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editPermissionSuccessAction(response)),
            catchError(error => of(editPermissionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// SearchControllerByName
const searchControllerByNameEpic = action$ => action$.pipe(
    ofType(PERMISSION.SEARCHCONTROLLERBYNAME),
    mergeMap((action) => {
        return ajax.getJSON(API_SEARCHCONTROLLERBYNAME + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => searchControllerByNameSuccessAction(response)),
            catchError(error => of(searchControllerByNameFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// Search
const searchPermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.SEARCH),
    mergeMap((action) => {
        return ajax.post(API_SEARCH, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => searchSuccessAction(response)),
            catchError(error => of(searchFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// Save
const savePermissionEpic = action$ => action$.pipe(
    ofType(PERMISSION.SAVE),
    mergeMap((action) => {
        return ajax.post(API_SAVE, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => saveSuccessAction(response)),
            catchError(error => of(saveFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getControllersActionsMethodsEpic, getAllPermissionEpic, getByIdPermissionEpic, changeStatusPermissionEpic, deletePermissionEpic, addPermissionEpic, editPermissionEpic, searchControllerByNameEpic, searchPermissionEpic, savePermissionEpic };