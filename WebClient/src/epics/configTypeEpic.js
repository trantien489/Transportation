import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CONFIGTYPE } from '../actionTypes/configType';
import {
    getAllConfigTypeSuccessAction,
    getAllConfigTypeFailureAction,
    getByIdConfigTypeSuccessAction,
    getByIdConfigTypeFailureAction,
    changeStatusConfigTypeSuccessAction,
    changeStatusConfigTypeFailureAction,
    deleteConfigTypeSuccessAction,
    deleteConfigTypeFailureAction,
    addConfigTypeSuccessAction,
    addConfigTypeFailureAction,
    editConfigTypeSuccessAction,
    editConfigTypeFailureAction,
} from '../actions/configType';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/ConfigType/Update';
// GETALL
const getAllConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllConfigTypeSuccessAction(response)),
            catchError(error => of(getAllConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdConfigTypeSuccessAction(response)),
            catchError(error => of(getByIdConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusConfigTypeSuccessAction(response)),
            catchError(error => of(changeStatusConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteConfigTypeSuccessAction(response)),
            catchError(error => of(deleteConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addConfigTypeSuccessAction(response)),
            catchError(error => of(addConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editConfigTypeEpic = action$ => action$.pipe(
    ofType(CONFIGTYPE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editConfigTypeSuccessAction(response)),
            catchError(error => of(editConfigTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);


export { getAllConfigTypeEpic, getByIdConfigTypeEpic, changeStatusConfigTypeEpic, deleteConfigTypeEpic, addConfigTypeEpic, editConfigTypeEpic };
