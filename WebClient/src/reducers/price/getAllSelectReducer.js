import { handleActions } from "redux-actions";
import { PRICE } from "../../actionTypes/price";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICE.GETALL_SELECT]: () => ({
    isLoading: true,
  }),
  [PRICE.GETALL_SELECT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PRICE.GETALL_SELECT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);