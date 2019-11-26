import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  CAPACITY } from '../actionTypes/capacity';
import {
    getAllCapacitySuccessAction,
    getAllCapacityFailureAction,
    getByIdCapacitySuccessAction,
    getByIdCapacityFailureAction,
    changeStatusCapacitySuccessAction,
    changeStatusCapacityFailureAction,
    deleteCapacitySuccessAction,
    deleteCapacityFailureAction,
    addCapacitySuccessAction,
    addCapacityFailureAction,
    editCapacitySuccessAction,
    editCapacityFailureAction
} from '../actions/capacity';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Capacity/Update';
// GETALL
const getAllCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllCapacitySuccessAction(response)),
            catchError(error => of(getAllCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdCapacitySuccessAction(response)),
            catchError(error => of(getByIdCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusCapacitySuccessAction(response)),
            catchError(error => of(changeStatusCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteCapacitySuccessAction(response)),
            catchError(error => of(deleteCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addCapacitySuccessAction(response)),
            catchError(error => of(addCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editCapacityEpic = action$ => action$.pipe(
    ofType(CAPACITY.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editCapacitySuccessAction(response)),
            catchError(error => of(editCapacityFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllCapacityEpic, getByIdCapacityEpic, changeStatusCapacityEpic, deleteCapacityEpic, addCapacityEpic, editCapacityEpic };