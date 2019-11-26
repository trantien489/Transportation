import { handleActions } from "redux-actions";
import { CAPACITY } from "../../actionTypes/capacity";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CAPACITY.GETBYID]: () => ({
    isLoading: true,
  }),
  [CAPACITY.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CAPACITY.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);