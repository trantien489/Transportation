import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { TEMPLATEPOSITION } from '../actionTypes/templatePosition';
import {
    getAllTemplatePositionSuccessAction,
    getAllTemplatePositionFailureAction,
    getByIdTemplatePositionSuccessAction,
    getByIdTemplatePositionFailureAction,
    changeStatusTemplatePositionSuccessAction,
    changeStatusTemplatePositionFailureAction,
    deleteTemplatePositionSuccessAction,
    deleteTemplatePositionFailureAction,
    addTemplatePositionSuccessAction,
    addTemplatePositionFailureAction,
    editTemplatePositionSuccessAction,
    editTemplatePositionFailureAction,
    searchTemplatePositionSuccessAction,
    searchTemplatePositionFailureAction
} from '../actions/templatePosition';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/Update';
const API_SEARCH = API_SERVICES.HOST + API_SERVICES.VERSION + '/TemplatePosition/Search';
// GETALL
const getAllTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllTemplatePositionSuccessAction(response)),
            catchError(error => of(getAllTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdTemplatePositionSuccessAction(response)),
            catchError(error => of(getByIdTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusTemplatePositionSuccessAction(response)),
            catchError(error => of(changeStatusTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteTemplatePositionSuccessAction(response)),
            catchError(error => of(deleteTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addTemplatePositionSuccessAction(response)),
            catchError(error => of(addTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editTemplatePositionSuccessAction(response)),
            catchError(error => of(editTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// SEARCH
const searchTemplatePositionEpic = action$ => action$.pipe(
    ofType(TEMPLATEPOSITION.SEARCH),
    mergeMap((action) => {
        return ajax.getJSON(API_SEARCH + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => 
                searchTemplatePositionSuccessAction(response) 
            ),
            catchError(error => of(searchTemplatePositionFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllTemplatePositionEpic, getByIdTemplatePositionEpic, changeStatusTemplatePositionEpic, deleteTemplatePositionEpic, addTemplatePositionEpic, editTemplatePositionEpic, searchTemplatePositionEpic };