import { handleActions } from "redux-actions";
import { SUPPORT } from "../../actionTypes/support";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [SUPPORT.ADD]: () => ({
    isLoading: true,
  }),
  [SUPPORT.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [SUPPORT.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);