import { handleActions } from "redux-actions";
import { CAPACITY } from "../../actionTypes/capacity";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CAPACITY.EDIT]: () => ({
    isLoading: true,
  }),
  [CAPACITY.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CAPACITY.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);