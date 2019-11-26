import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  TRANSPORTATION } from '../actionTypes/transportation';
import {
    getAllTransportationSuccessAction,
    getAllTransportationFailureAction,
    getByIdTransportationSuccessAction,
    getByIdTransportationFailureAction,
    changeStatusTransportationSuccessAction,
    changeStatusTransportationFailureAction,
    deleteTransportationSuccessAction,
    deleteTransportationFailureAction,
    addTransportationSuccessAction,
    addTransportationFailureAction,
    editTransportationSuccessAction,
    editTransportationFailureAction,
    generateMoneyTransportationSuccessAction,
    generateMoneyTransportationFailureAction
} from '../actions/transportation';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Transportation/Update';
const API_GENERATEMONEY = API_SERVICES.HOST + API_SERVICES.VERSION + '/transportation/generatemoney';


// GETALL
const getAllTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllTransportationSuccessAction(response)),
            catchError(error => of(getAllTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdTransportationSuccessAction(response)),
            catchError(error => of(getByIdTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusTransportationSuccessAction(response)),
            catchError(error => of(changeStatusTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteTransportationSuccessAction(response)),
            catchError(error => of(deleteTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addTransportationSuccessAction(response)),
            catchError(error => of(addTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editTransportationSuccessAction(response)),
            catchError(error => of(editTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GENERATEMONEY
const generateMoneyTransportationEpic = action$ => action$.pipe(
    ofType(TRANSPORTATION.GENERATEMONEY),
    mergeMap((action) => {
        return ajax.getJSON(API_GENERATEMONEY + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => generateMoneyTransportationSuccessAction(response)),
            catchError(error => of(generateMoneyTransportationFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllTransportationEpic, getByIdTransportationEpic, changeStatusTransportationEpic,
     deleteTransportationEpic, addTransportationEpic, editTransportationEpic, generateMoneyTransportationEpic };