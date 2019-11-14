import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { IMAGETYPE } from '../actionTypes/imageType';
import {
    getAllImageTypeSuccessAction,
    getAllImageTypeFailureAction,
    getByIdImageTypeSuccessAction,
    getByIdImageTypeFailureAction,
    changeStatusImageTypeSuccessAction,
    changeStatusImageTypeFailureAction,
    deleteImageTypeSuccessAction,
    deleteImageTypeFailureAction,
    addImageTypeSuccessAction,
    addImageTypeFailureAction,
    editImageTypeSuccessAction,
    editImageTypeFailureAction
} from '../actions/imageType';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/ImageType/Update';
// GETALL
const getAllImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllImageTypeSuccessAction(response)),
            catchError(error => of(getAllImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdImageTypeSuccessAction(response)),
            catchError(error => of(getByIdImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusImageTypeSuccessAction(response)),
            catchError(error => of(changeStatusImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteImageTypeSuccessAction(response)),
            catchError(error => of(deleteImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addImageTypeSuccessAction(response)),
            catchError(error => of(addImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editImageTypeEpic = action$ => action$.pipe(
    ofType(IMAGETYPE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editImageTypeSuccessAction(response)),
            catchError(error => of(editImageTypeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllImageTypeEpic, getByIdImageTypeEpic, changeStatusImageTypeEpic, deleteImageTypeEpic, addImageTypeEpic, editImageTypeEpic };