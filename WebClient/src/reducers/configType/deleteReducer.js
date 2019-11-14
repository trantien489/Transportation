import { handleActions } from "redux-actions";
import { CONFIGTYPE } from "../../actionTypes/configType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONFIGTYPE.DELETE]: () => ({
    isLoading: true,
  }),
  [CONFIGTYPE.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CONFIGTYPE.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);