import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CATEGORY } from '../actionTypes/category';
import { 
    getAllCategoriesSuccessAction, 
    getByIdCategorySuccessAction, 
    changeStatusCategorySuccessAction, 
    deleteCategorySuccessAction, 
    addCategorySuccessAction, 
    editCategorySuccessAction } from '../actions/category';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/Delete/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/Category/Update';
// GETALL
const getAllCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllCategoriesSuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.GETALL_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// GETBYID
const getByIdCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdCategorySuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.GETBYID_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// CHANGE STATUS
const changeStatusCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, null, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusCategorySuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.CHANGE_STATUS_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// DELETE
const deleteCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteCategorySuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.DELETE_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// ADD
const addCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addCategorySuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.ADD_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
// EDIT
const editCategoryEpic = action$ => action$.pipe(
    ofType(CATEGORY.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editCategorySuccessAction(response)),
            catchError(error => of({
                type: CATEGORY.EDIT_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
export { getAllCategoryEpic, getByIdCategoryEpic, changeStatusCategoryEpic, deleteCategoryEpic, addCategoryEpic, editCategoryEpic };