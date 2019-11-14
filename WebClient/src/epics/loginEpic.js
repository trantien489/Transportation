import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LOGIN } from '../actionTypes/login';
import { loginSuccess } from '../actions/login';
import API_SERVICES from '../services';
const API_LOGIN = API_SERVICES.HOST + API_SERVICES.VERSION + '/Auth/Login';
// LOGIN
const loginEpic = action$ => action$.pipe(
    ofType(LOGIN.LOGIN),
    mergeMap((action) => {
        return ajax.post(API_LOGIN, action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => loginSuccess(response)),
            catchError(error => of({
                type: LOGIN.LOGIN_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
export { loginEpic };