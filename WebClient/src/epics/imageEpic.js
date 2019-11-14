import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { IMAGE } from '../actionTypes/image';
import {  getByIdImageSuccess,  deleteImageSuccess, addImageSuccess } from '../actions/image';
import API_SERVICES from '../services';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Image/GetById';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Image/Remove/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Image/Create/';
// GETBYID
const getByIdImageEpic = action$ => action$.pipe(
    ofType(IMAGE.IMAGE_GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdImageSuccess(response)),
            catchError(error => of({
                type: IMAGE.IMAGE_GETBYID_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// DELETE
const deleteImageEpic = action$ => action$.pipe(
    ofType(IMAGE.IMAGE_DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteImageSuccess(response)),
            catchError(error => of({
                type: IMAGE.IMAGE_DELETE_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// ADD
const addImageEpic = action$ => action$.pipe(
    ofType(IMAGE.IMAGE_ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addImageSuccess(response)),
            catchError(error => of({
                type: IMAGE.IMAGE_ADD_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
export { getByIdImageEpic,  deleteImageEpic, addImageEpic };