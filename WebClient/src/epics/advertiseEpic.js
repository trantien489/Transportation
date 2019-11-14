import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ADVERTISE } from '../actionTypes/advertise';
import {
    getAllAdvertiseSuccessAction,
    getAllAdvertiseFailureAction,
    getByIdAdvertiseSuccessAction,
    getByIdAdvertiseFailureAction,
    changeStatusAdvertiseSuccessAction,
    changeStatusAdvertiseFailureAction,
    deleteAdvertiseSuccessAction,
    deleteAdvertiseFailureAction,
    addAdvertiseSuccessAction,
    addAdvertiseFailureAction,
    editAdvertiseSuccessAction,
    editAdvertiseFailureAction
} from '../actions/advertise';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Advertise/Update';
// GETALL
const getAllAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllAdvertiseSuccessAction(response)),
            catchError(error => of(getAllAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdAdvertiseSuccessAction(response)),
            catchError(error => of(getByIdAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusAdvertiseSuccessAction(response)),
            catchError(error => of(changeStatusAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteAdvertiseSuccessAction(response)),
            catchError(error => of(deleteAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addAdvertiseSuccessAction(response)),
            catchError(error => of(addAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editAdvertiseEpic = action$ => action$.pipe(
    ofType(ADVERTISE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editAdvertiseSuccessAction(response)),
            catchError(error => of(editAdvertiseFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllAdvertiseEpic, getByIdAdvertiseEpic, changeStatusAdvertiseEpic, deleteAdvertiseEpic, addAdvertiseEpic, editAdvertiseEpic };