import { handleActions } from "redux-actions";
import { SUPPORT } from "../../actionTypes/support";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [SUPPORT.GETALL]: () => ({
    isLoading: true,
  }),
  [SUPPORT.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [SUPPORT.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);