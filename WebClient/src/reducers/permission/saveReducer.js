import { handleActions } from "redux-actions";
import { PERMISSION } from "../../actionTypes/permission";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PERMISSION.SAVE]: () => ({
    isLoading: true,
  }),
  [PERMISSION.SAVE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PERMISSION.SAVE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);