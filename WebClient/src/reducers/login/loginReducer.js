import { handleActions } from "redux-actions";
import { LOGIN } from "../../actionTypes/login";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [LOGIN.LOGIN]: () => ({
    isLoading: true,
  }),
  [LOGIN.LOGIN_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [LOGIN.LOGIN_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);