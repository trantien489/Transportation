import { handleActions } from "redux-actions";
import { SUPPORT } from "../../actionTypes/support";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [SUPPORT.EDIT]: () => ({
    isLoading: true,
  }),
  [SUPPORT.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [SUPPORT.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);