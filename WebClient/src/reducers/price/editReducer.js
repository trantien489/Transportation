import { handleActions } from "redux-actions";
import { PRICE } from "../../actionTypes/price";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICE.EDIT]: () => ({
    isLoading: true,
  }),
  [PRICE.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PRICE.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);