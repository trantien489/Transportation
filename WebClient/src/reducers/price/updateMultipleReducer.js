import { handleActions } from "redux-actions";
import { PRICE } from "../../actionTypes/price";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICE.UPDATE_MULTIPLE]: () => ({
    isLoading: true,
  }),
  [PRICE.UPDATE_MULTIPLE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PRICE.UPDATE_MULTIPLE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);