import { handleActions } from "redux-actions";
import { PERMISSION } from "../../actionTypes/permission";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PERMISSION.GETALL]: () => ({
    isLoading: true,
  }),
  [PERMISSION.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PERMISSION.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);