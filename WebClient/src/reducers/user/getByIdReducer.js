import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [USER.GETBYID]: () => ({
    isLoading: true,
  }),
  [USER.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [USER.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);