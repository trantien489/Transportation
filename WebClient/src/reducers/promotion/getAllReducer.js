import { handleActions } from "redux-actions";
import { PROMOTION } from "../../actionTypes/promotion";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PROMOTION.GETALL]: () => ({
    isLoading: true,
  }),
  [PROMOTION.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PROMOTION.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);