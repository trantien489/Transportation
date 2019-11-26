import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  DRIVER } from '../actionTypes/driver';
import {
    getAllDriverSuccessAction,
    getAllDriverFailureAction,
    getByIdDriverSuccessAction,
    getByIdDriverFailureAction,
    changeStatusDriverSuccessAction,
    changeStatusDriverFailureAction,
    deleteDriverSuccessAction,
    deleteDriverFailureAction,
    addDriverSuccessAction,
    addDriverFailureAction,
    editDriverSuccessAction,
    editDriverFailureAction,
    driverGetAllSelectSuccessAction,
    driverGetAllSelectFailureAction
} from '../actions/driver';
import API_SERVICES from '../services';
import {status} from '../contants/staticData';

const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/Update';
const API_GETALL_SELECT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Driver/GetAll?Status=' + status.Active ;

// GETALL
const getAllDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllDriverSuccessAction(response)),
            catchError(error => of(getAllDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdDriverSuccessAction(response)),
            catchError(error => of(getByIdDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusDriverSuccessAction(response)),
            catchError(error => of(changeStatusDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteDriverSuccessAction(response)),
            catchError(error => of(deleteDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addDriverSuccessAction(response)),
            catchError(error => of(addDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editDriverEpic = action$ => action$.pipe(
    ofType(DRIVER.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editDriverSuccessAction(response)),
            catchError(error => of(editDriverFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETALL_SELECT
const driverGetAllSelectEpic = action$ => action$.pipe(
    ofType(DRIVER.GETALL_SELECT),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL_SELECT, API_SERVICES.HEADERS()).pipe(
            map(response => driverGetAllSelectSuccessAction(response)),
            catchError(error => of(driverGetAllSelectFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllDriverEpic, getByIdDriverEpic, changeStatusDriverEpic, deleteDriverEpic, addDriverEpic, editDriverEpic, driverGetAllSelectEpic };