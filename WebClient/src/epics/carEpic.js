import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  CAR } from '../actionTypes/car';
import {
    getAllCarSuccessAction,
    getAllCarFailureAction,
    getByIdCarSuccessAction,
    getByIdCarFailureAction,
    changeStatusCarSuccessAction,
    changeStatusCarFailureAction,
    deleteCarSuccessAction,
    deleteCarFailureAction,
    addCarSuccessAction,
    addCarFailureAction,
    editCarSuccessAction,
    editCarFailureAction,
    carGetAllSelectSuccessAction,
    carGetAllSelectFailureAction
} from '../actions/car';
import API_SERVICES from '../services';
import {status} from '../contants/staticData';

const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/Update';
const API_GETALL_SELECT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Car/GetAll?Status=' + status.Active ;

// GETALL
const getAllCarEpic = action$ => action$.pipe(
    ofType(CAR.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllCarSuccessAction(response)),
            catchError(error => of(getAllCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdCarEpic = action$ => action$.pipe(
    ofType(CAR.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdCarSuccessAction(response)),
            catchError(error => of(getByIdCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusCarEpic = action$ => action$.pipe(
    ofType(CAR.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusCarSuccessAction(response)),
            catchError(error => of(changeStatusCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteCarEpic = action$ => action$.pipe(
    ofType(CAR.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deleteCarSuccessAction(response)),
            catchError(error => of(deleteCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addCarEpic = action$ => action$.pipe(
    ofType(CAR.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addCarSuccessAction(response)),
            catchError(error => of(addCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editCarEpic = action$ => action$.pipe(
    ofType(CAR.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editCarSuccessAction(response)),
            catchError(error => of(editCarFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETALL_SELECT
const carGetAllSelectEpic = action$ => action$.pipe(
    ofType(CAR.GETALL_SELECT),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL_SELECT, API_SERVICES.HEADERS()).pipe(
            map(response => carGetAllSelectSuccessAction(response)),
            catchError(error => of(carGetAllSelectFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllCarEpic, getByIdCarEpic, changeStatusCarEpic, deleteCarEpic, addCarEpic, editCarEpic, carGetAllSelectEpic };