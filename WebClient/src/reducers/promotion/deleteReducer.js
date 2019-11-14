import { handleActions } from "redux-actions";
import { PROMOTION } from "../../actionTypes/promotion";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PROMOTION.DELETE]: () => ({
    isLoading: true,
  }),
  [PROMOTION.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PROMOTION.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);