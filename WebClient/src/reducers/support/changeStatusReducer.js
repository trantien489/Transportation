import { handleActions } from "redux-actions";
import { SUPPORT } from "../../actionTypes/support";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [SUPPORT.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [SUPPORT.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [SUPPORT.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);