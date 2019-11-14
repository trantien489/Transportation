import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { PROMOTION } from '../actionTypes/promotion';
import {
    getAllPromotionSuccessAction,
    getAllPromotionFailureAction,
    getByIdPromotionSuccessAction,
    getByIdPromotionFailureAction,
    changeStatusPromotionSuccessAction,
    changeStatusPromotionFailureAction,
    deletePromotionSuccessAction,
    deletePromotionFailureAction,
    addPromotionSuccessAction,
    addPromotionFailureAction,
    editPromotionSuccessAction,
    editPromotionFailureAction
} from '../actions/promotion';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Promotion/Update';
// GETALL
const getAllPromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllPromotionSuccessAction(response)),
            catchError(error => of(getAllPromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdPromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdPromotionSuccessAction(response)),
            catchError(error => of(getByIdPromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusPromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusPromotionSuccessAction(response)),
            catchError(error => of(changeStatusPromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deletePromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deletePromotionSuccessAction(response)),
            catchError(error => of(deletePromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addPromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addPromotionSuccessAction(response)),
            catchError(error => of(addPromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editPromotionEpic = action$ => action$.pipe(
    ofType(PROMOTION.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editPromotionSuccessAction(response)),
            catchError(error => of(editPromotionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllPromotionEpic, getByIdPromotionEpic, changeStatusPromotionEpic, deletePromotionEpic, addPromotionEpic, editPromotionEpic };