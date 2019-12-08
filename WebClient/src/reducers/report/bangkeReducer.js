import { handleActions } from "redux-actions";
import { REPORT } from "../../actionTypes/report";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [REPORT.BANGKE]: () => ({
    isLoading: true,
  }),
  [REPORT.BANGKE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData,
  }),
  [REPORT.BANGKE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);