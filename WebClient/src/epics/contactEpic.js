import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CONTACT } from '../actionTypes/contact';
import {
    getAllContactSuccessAction,
    getAllContactFailureAction,
    getByIdContactSuccessAction,
    getByIdContactFailureAction,
    changeStatusContactSuccessAction,
    changeStatusContactFailureAction,
    deleteContactSuccessAction,
    deleteContactFailureAction,
    addContactSuccessAction,
    addContactFailureAction,
    editContactSuccessAction,
    editContactFailureAction
} from '../actions/contact';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Contact/Update';
// GETALL
const getAllContactEpic = action$ => action$.pipe(
    ofType(CONTACT.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllContactSuccessAction(response)),
            catchError(error => of(getAllContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdContactEpic = action$ => action$.pipe(
    ofType(CONTACT.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdContactSuccessAction(response)),
            catchError(error => of(getByIdContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusContactEpic = action$ => action$.pipe(
    ofType(CONTACT.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusContactSuccessAction(response)),
            catchError(error => of(changeStatusContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteContactEpic = action$ => action$.pipe(
    ofType(CONTACT.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteContactSuccessAction(response)),
            catchError(error => of(deleteContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addContactEpic = action$ => action$.pipe(
    ofType(CONTACT.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addContactSuccessAction(response)),
            catchError(error => of(addContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editContactEpic = action$ => action$.pipe(
    ofType(CONTACT.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editContactSuccessAction(response)),
            catchError(error => of(editContactFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllContactEpic, getByIdContactEpic, changeStatusContactEpic, deleteContactEpic, addContactEpic, editContactEpic };