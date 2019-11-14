import { handleActions } from "redux-actions";
import { PROMOTION } from "../../actionTypes/promotion";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PROMOTION.EDIT]: () => ({
    isLoading: true,
  }),
  [PROMOTION.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PROMOTION.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);