import { createAction } from "redux-actions";
import { LOGIN } from "../actionTypes/login";
export const loginJWT = createAction(LOGIN.LOGIN);
export const loginSuccess = createAction(LOGIN.LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN.LOGIN_FAILURE);