import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { USER } from '../actionTypes/user';
import { 
    getAllUsersSuccessAction,
    getAllUsersFailureAction,
    getByIdUserSuccessAction,
    getByIdUserFailureAction,
    changeStatusUserSuccessAction,
    changeStatusUserFailureAction,
    deleteUserSuccessAction,
    deleteUserFailureAction,
    addUserSuccessAction,
    addUserFailureAction,
    editUserSuccessAction,
    editUserFailureAction,
    checkValidUserNameSuccessAction,
    checkValidUserNameFailureAction,
    checkValidEmailSuccessAction,
    checkValidEmailFailureAction,
    updateRoleForUserSuccessAction,
    updateRoleForUserFailureAction
} from '../actions/user';
import API_SERVICES from '../services';
const API_GETALL = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/GetAll';
const API_GETBYID = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/GetById';
const API_CHANGE_STATUS = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/ChangeStatus/';
const API_DELETE = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/Remove/';
const API_ADD = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/Create/';
const API_EDIT = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/Update';
const API_CHECKVALIDUSERNAME = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/CheckValidUserName';
const API_CHECKVALIDEMAIL = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/CheckValidEmail';
const API_UPDATEROLEFORUSER = API_SERVICES.HOST + API_SERVICES.VERSION + '/User/UpdateRoleForUser';
// GETALL
const getAllUserEpic = action$ => action$.pipe(
    ofType(USER.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, API_SERVICES.HEADERS()).pipe(
            map(response => getAllUsersSuccessAction(response)),
            catchError(error => of(getAllUsersFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// GETBYID
const getByIdUserEpic = action$ => action$.pipe(
    ofType(USER.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => getByIdUserSuccessAction(response)),
            catchError(error => of(getByIdUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHANGE STATUS
const changeStatusUserEpic = action$ => action$.pipe(
    ofType(USER.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => changeStatusUserSuccessAction(response)),
            catchError(error => of(changeStatusUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// DELETE
const deleteUserEpic = action$ => action$.pipe(
    ofType(USER.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => deleteUserSuccessAction(response)),
            catchError(error => of(deleteUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// ADD
const addUserEpic = action$ => action$.pipe(
    ofType(USER.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => addUserSuccessAction(response)),
            catchError(error => of(addUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// EDIT
const editUserEpic = action$ => action$.pipe(
    ofType(USER.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => editUserSuccessAction(response)),
            catchError(error => of(editUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHECKVALIDUSERNAME
const checkValidUserNameEpic = action$ => action$.pipe(
    ofType(USER.CHECKVALIDUSERNAME),
    mergeMap((action) => {
        return ajax.getJSON(API_CHECKVALIDUSERNAME + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => checkValidUserNameSuccessAction(response)),
            catchError(error => of(checkValidUserNameFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// CHECKVALIDEMAIL
const checkValidEmailEpic = action$ => action$.pipe(
    ofType(USER.CHECKVALIDEMAIL),
    mergeMap((action) => {
        return ajax.getJSON(API_CHECKVALIDEMAIL + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => checkValidEmailSuccessAction(response)),
            catchError(error => of(checkValidEmailFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
// UPDATEROLEFORUSER
const updateRoleForUserEpic = action$ => action$.pipe(
    ofType(USER.UPDATEROLEFORUSER),
    mergeMap((action) => {
        return ajax.post(API_UPDATEROLEFORUSER, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => updateRoleForUserSuccessAction(response)),
            catchError(error => of(updateRoleForUserFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);
export { getAllUserEpic, getByIdUserEpic, changeStatusUserEpic, deleteUserEpic, addUserEpic, editUserEpic, checkValidUserNameEpic, checkValidEmailEpic, updateRoleForUserEpic };