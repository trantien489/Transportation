import { handleActions } from "redux-actions";
import { CONFIGTYPE } from "../../actionTypes/configType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONFIGTYPE.GETALL]: () => ({
    isLoading: true,
  }),
  [CONFIGTYPE.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CONFIGTYPE.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);