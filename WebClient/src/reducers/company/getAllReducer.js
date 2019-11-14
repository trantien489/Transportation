import {handleActions} from "redux-actions";
import {COMPANY} from "../../actionTypes/company";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [COMPANY.GETALL]: () => ({
    isLoading: true,
  }),
  [COMPANY.GETALL_SUCCESS]: (state, {
    payload: responseData
  }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [COMPANY.GETALL_FAILURE]: (state, {
    payload: responseData
  }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);