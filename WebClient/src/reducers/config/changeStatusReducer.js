import { handleActions } from "redux-actions";
import { CONFIG } from "../../actionTypes/config";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONFIG.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [CONFIG.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CONFIG.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);