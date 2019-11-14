import {
  handleActions
} from "redux-actions";
import {
  COMPANY
} from "../../actionTypes/company";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [COMPANY.DELETE]: () => ({
    isLoading: true,
  }),
  [COMPANY.DELETE_SUCCESS]: (state, {
    payload: responseData
  }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [COMPANY.DELETE_FAILURE]: (state, {
    payload: responseData
  }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);