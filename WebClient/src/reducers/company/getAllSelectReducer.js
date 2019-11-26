import { handleActions } from "redux-actions";
import { COMPANY } from "../../actionTypes/company";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [COMPANY.GETALL_SELECT]: () => ({
    isLoading: true,
  }),
  [COMPANY.GETALL_SELECT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [COMPANY.GETALL_SELECT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);