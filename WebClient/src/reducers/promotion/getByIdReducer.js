import { handleActions } from "redux-actions";
import { PROMOTION } from "../../actionTypes/promotion";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PROMOTION.GETBYID]: () => ({
    isLoading: true,
  }),
  [PROMOTION.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PROMOTION.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);