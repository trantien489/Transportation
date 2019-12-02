import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {  PRICE } from '../actionTypes/price';
import {
    getAllPriceSuccessAction,
    getAllPriceFailureAction,
    getByIdPriceSuccessAction,
    getByIdPriceFailureAction,
    changeStatusPriceSuccessAction,
    changeStatusPriceFailureAction,
    deletePriceSuccessAction,
    deletePriceFailureAction,
    addPriceSuccessAction,
    addPriceFailureAction,
    editPriceSuccessAction,
    editPriceFailureAction,
    filterPriceSuccessAction,
    filterPriceFailureAction,
} from '../actions/price';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/Update';
const API_FILTER = API_SERVICES.HOST + API_SERVICES.VERSION + '/Price/Filter';

// GETALL
const getAllPriceEpic = action$ => action$.pipe(
    ofType(PRICE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllPriceSuccessAction(response)),
            catchError(error => of(getAllPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdPriceEpic = action$ => action$.pipe(
    ofType(PRICE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdPriceSuccessAction(response)),
            catchError(error => of(getByIdPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusPriceEpic = action$ => action$.pipe(
    ofType(PRICE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusPriceSuccessAction(response)),
            catchError(error => of(changeStatusPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deletePriceEpic = action$ => action$.pipe(
    ofType(PRICE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deletePriceSuccessAction(response)),
            catchError(error => of(deletePriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addPriceEpic = action$ => action$.pipe(
    ofType(PRICE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addPriceSuccessAction(response)),
            catchError(error => of(addPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editPriceEpic = action$ => action$.pipe(
    ofType(PRICE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editPriceSuccessAction(response)),
            catchError(error => of(editPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// FILTER
const priceFilterEpic = action$ => action$.pipe(
    ofType(PRICE.FILTER),
    mergeMap((action) => {
        return ajax.getJSON(API_FILTER + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => filterPriceSuccessAction(response)),
            catchError(error => of(filterPriceFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllPriceEpic, getByIdPriceEpic, changeStatusPriceEpic, deletePriceEpic, addPriceEpic, editPriceEpic, priceFilterEpic };