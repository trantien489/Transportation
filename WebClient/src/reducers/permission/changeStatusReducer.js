import { handleActions } from "redux-actions";
import { PERMISSION } from "../../actionTypes/permission";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PERMISSION.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [PERMISSION.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PERMISSION.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);