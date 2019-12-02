import { handleActions } from "redux-actions";
import { PRICE } from "../../actionTypes/price";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICE.FILTER]: () => ({
    isLoading: true,
  }),
  [PRICE.FILTER_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PRICE.FILTER_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);