import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  COMPANY } from '../actionTypes/company';
import {
    getAllCompanySuccessAction,
    getAllCompanyFailureAction,
    getByIdCompanySuccessAction,
    getByIdCompanyFailureAction,
    changeStatusCompanySuccessAction,
    changeStatusCompanyFailureAction,
    deleteCompanySuccessAction,
    deleteCompanyFailureAction,
    addCompanySuccessAction,
    addCompanyFailureAction,
    editCompanySuccessAction,
    editCompanyFailureAction,
    companyGetAllSelectSuccessAction,
    companyGetAllSelectFailureAction
} from '../actions/company';
import API_SERVICES from '../services';
import {status} from '../contants/staticData';

const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/Update';
const API_GETALL_SELECT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Company/GetAll?Status=' + status.Active ;

// GETALL
const getAllCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllCompanySuccessAction(response)),
            catchError(error => of(getAllCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdCompanySuccessAction(response)),
            catchError(error => of(getByIdCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusCompanySuccessAction(response)),
            catchError(error => of(changeStatusCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteCompanySuccessAction(response)),
            catchError(error => of(deleteCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addCompanySuccessAction(response)),
            catchError(error => of(addCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editCompanyEpic = action$ => action$.pipe(
    ofType(COMPANY.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editCompanySuccessAction(response)),
            catchError(error => of(editCompanyFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETALL_SELECT
const companyGetAllSelectEpic = action$ => action$.pipe(
    ofType(COMPANY.GETALL_SELECT),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL_SELECT, API_SERVICES.HEADERS()).pipe(
            map(response => companyGetAllSelectSuccessAction(response)),
            catchError(error => of(companyGetAllSelectFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllCompanyEpic, getByIdCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, companyGetAllSelectEpic };