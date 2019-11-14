import { handleActions } from "redux-actions";
import { PROMOTION } from "../../actionTypes/promotion";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PROMOTION.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [PROMOTION.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PROMOTION.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);