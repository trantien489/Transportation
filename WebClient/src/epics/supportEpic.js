import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { SUPPORT } from '../actionTypes/support';
import {
    getAllSupportSuccessAction,
    getAllSupportFailureAction,
    getByIdSupportSuccessAction,
    getByIdSupportFailureAction,
    changeStatusSupportSuccessAction,
    changeStatusSupportFailureAction,
    deleteSupportSuccessAction,
    deleteSupportFailureAction,
    addSupportSuccessAction,
    addSupportFailureAction,
    editSupportSuccessAction,
    editSupportFailureAction
} from '../actions/support';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Support/Update';
// GETALL
const getAllSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllSupportSuccessAction(response)),
            catchError(error => of(getAllSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdSupportSuccessAction(response)),
            catchError(error => of(getByIdSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusSupportSuccessAction(response)),
            catchError(error => of(changeStatusSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteSupportSuccessAction(response)),
            catchError(error => of(deleteSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addSupportSuccessAction(response)),
            catchError(error => of(addSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editSupportEpic = action$ => action$.pipe(
    ofType(SUPPORT.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editSupportSuccessAction(response)),
            catchError(error => of(editSupportFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllSupportEpic, getByIdSupportEpic, changeStatusSupportEpic, deleteSupportEpic, addSupportEpic, editSupportEpic };