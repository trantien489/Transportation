import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [USER.GETALL]: () => ({
    isLoading: true,
  }),
  [USER.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [USER.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);