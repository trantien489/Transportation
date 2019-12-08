import { handleActions } from "redux-actions";
import { REPORT } from "../../actionTypes/report";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [REPORT.CHECK_BANGKE]: () => ({
    isLoading: true,
  }),
  [REPORT.CHECK_BANGKE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData,
  }),
  [REPORT.CHECK_BANGKE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);