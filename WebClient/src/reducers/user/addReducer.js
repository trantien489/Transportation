import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [USER.ADD]: () => ({
    isLoading: true,
  }),
  [USER.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [USER.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);