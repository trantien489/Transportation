import { handleActions } from "redux-actions";
import { COMPANY } from "../../actionTypes/company";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [COMPANY.GETBYID]: () => ({
    isLoading: true,
  }),
  [COMPANY.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [COMPANY.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);