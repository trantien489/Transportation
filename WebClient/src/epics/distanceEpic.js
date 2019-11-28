import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  DISTANCE } from '../actionTypes/distance';
import {
    getAllDistanceSuccessAction,
    getAllDistanceFailureAction,
    getByIdDistanceSuccessAction,
    getByIdDistanceFailureAction,
    changeStatusDistanceSuccessAction,
    changeStatusDistanceFailureAction,
    deleteDistanceSuccessAction,
    deleteDistanceFailureAction,
    addDistanceSuccessAction,
    addDistanceFailureAction,
    editDistanceSuccessAction,
    editDistanceFailureAction
} from '../actions/distance';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Distance/Update';
// GETALL
const getAllDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllDistanceSuccessAction(response)),
            catchError(error => of(getAllDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdDistanceSuccessAction(response)),
            catchError(error => of(getByIdDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusDistanceSuccessAction(response)),
            catchError(error => of(changeStatusDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteDistanceSuccessAction(response)),
            catchError(error => of(deleteDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addDistanceSuccessAction(response)),
            catchError(error => of(addDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editDistanceEpic = action$ => action$.pipe(
    ofType(DISTANCE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editDistanceSuccessAction(response)),
            catchError(error => of(editDistanceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllDistanceEpic, getByIdDistanceEpic, changeStatusDistanceEpic, deleteDistanceEpic, addDistanceEpic, editDistanceEpic };