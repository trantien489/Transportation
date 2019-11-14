import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LANGUAGE } from '../actionTypes/language';
import {
    getAllLanguageSuccessAction,
    getAllLanguageFailureAction,
    getByIdLanguageSuccessAction,
    getByIdLanguageFailureAction,
    changeStatusLanguageSuccessAction,
    changeStatusLanguageFailureAction,
    deleteLanguageSuccessAction,
    deleteLanguageFailureAction,
    addLanguageSuccessAction,
    addLanguageFailureAction,
    editLanguageSuccessAction,
    editLanguageFailureAction,
    changeIsDefaultLanguageSuccessAction,
    changeIsDefaultLanguageFailureAction,
    checkUniqueLanguageSuccessAction,
    checkUniqueLanguageFailureAction,
} from '../actions/language';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/Update';
const API_CHANGE_ISDEFAULT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/ChangeIsDefault/';
const API_CHECK_UNIQUE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Language/CheckUnique';
// GETALL
const getAllLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllLanguageSuccessAction(response)),
            catchError(error => of(getAllLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdLanguageSuccessAction(response)),
            catchError(error => of(getByIdLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusLanguageSuccessAction(response)),
            catchError(error => of(changeStatusLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE ISDEFAULT
const changeIsDefaultLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.CHANGE_ISDEFAULT),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_ISDEFAULT + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeIsDefaultLanguageSuccessAction(response)),
            catchError(error => of(changeIsDefaultLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteLanguageSuccessAction(response)),
            catchError(error => of(deleteLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addLanguageSuccessAction(response)),
            catchError(error => of(addLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editLanguageSuccessAction(response)),
            catchError(error => of(editLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHECK UNIQUE
const checkUniqueLanguageEpic = action$ => action$.pipe(
    ofType(LANGUAGE.CHECK_UNIQUE),
    mergeMap((action) => {
        return ajax.put(API_CHECK_UNIQUE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => checkUniqueLanguageSuccessAction(response)),
            catchError(error => of(checkUniqueLanguageFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllLanguageEpic, getByIdLanguageEpic, changeStatusLanguageEpic, deleteLanguageEpic, addLanguageEpic, editLanguageEpic, changeIsDefaultLanguageEpic, checkUniqueLanguageEpic };