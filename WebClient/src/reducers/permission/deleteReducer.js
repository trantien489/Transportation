import { handleActions } from "redux-actions";
import { PERMISSION } from "../../actionTypes/permission";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PERMISSION.DELETE]: () => ({
    isLoading: true,
  }),
  [PERMISSION.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PERMISSION.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);