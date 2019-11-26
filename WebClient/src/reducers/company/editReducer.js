import { handleActions } from "redux-actions";
import { COMPANY } from "../../actionTypes/company";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [COMPANY.EDIT]: () => ({
    isLoading: true,
  }),
  [COMPANY.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [COMPANY.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);