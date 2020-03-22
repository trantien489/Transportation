import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { PRICEADJUSTMENT } from '../actionTypes/priceAdjustment';
import {
    getAllPriceAdjustmentSuccessAction,
    getAllPriceAdjustmentFailureAction,
    getByIdPriceAdjustmentSuccessAction,
    getByIdPriceAdjustmentFailureAction,
    changeStatusPriceAdjustmentSuccessAction,
    changeStatusPriceAdjustmentFailureAction,
    deletePriceAdjustmentSuccessAction,
    deletePriceAdjustmentFailureAction,
    addPriceAdjustmentSuccessAction,
    addPriceAdjustmentFailureAction,
    editPriceAdjustmentSuccessAction,
    editPriceAdjustmentFailureAction,
} from '../actions/priceAdjustment';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/PriceAdjustment/Update';

// GETALL
const getAllPriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllPriceAdjustmentSuccessAction(response)),
            catchError(error => of(getAllPriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdPriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdPriceAdjustmentSuccessAction(response)),
            catchError(error => of(getByIdPriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusPriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusPriceAdjustmentSuccessAction(response)),
            catchError(error => of(changeStatusPriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deletePriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => deletePriceAdjustmentSuccessAction(response)),
            catchError(error => of(deletePriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addPriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addPriceAdjustmentSuccessAction(response)),
            catchError(error => of(addPriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editPriceAdjustmentEpic = action$ => action$.pipe(
    ofType(PRICEADJUSTMENT.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editPriceAdjustmentSuccessAction(response)),
            catchError(error => of(editPriceAdjustmentFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllPriceAdjustmentEpic, getByIdPriceAdjustmentEpic, changeStatusPriceAdjustmentEpic, deletePriceAdjustmentEpic, addPriceAdjustmentEpic, editPriceAdjustmentEpic };