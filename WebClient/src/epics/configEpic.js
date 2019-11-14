import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  CONFIG } from '../actionTypes/config';
import {
    getAllConfigSuccessAction,
    getAllConfigFailureAction,
    getByIdConfigSuccessAction,
    getByIdConfigFailureAction,
    changeStatusConfigSuccessAction,
    changeStatusConfigFailureAction,
    deleteConfigSuccessAction,
    deleteConfigFailureAction,
    addConfigSuccessAction,
    addConfigFailureAction,
    editConfigSuccessAction,
    editConfigFailureAction
} from '../actions/config';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Config/Update';
// GETALL
const getAllConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllConfigSuccessAction(response)),
            catchError(error => of(getAllConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdConfigSuccessAction(response)),
            catchError(error => of(getByIdConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusConfigSuccessAction(response)),
            catchError(error => of(changeStatusConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteConfigSuccessAction(response)),
            catchError(error => of(deleteConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addConfigSuccessAction(response)),
            catchError(error => of(addConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editConfigEpic = action$ => action$.pipe(
    ofType(CONFIG.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editConfigSuccessAction(response)),
            catchError(error => of(editConfigFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllConfigEpic, getByIdConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic };