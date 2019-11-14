import { handleActions } from "redux-actions";
import { PERMISSION } from "../../actionTypes/permission";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PERMISSION.GETBYID]: () => ({
    isLoading: true,
  }),
  [PERMISSION.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PERMISSION.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);