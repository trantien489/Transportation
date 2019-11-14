import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [USER.DELETE]: () => ({
    isLoading: true,
  }),
  [USER.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [USER.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);