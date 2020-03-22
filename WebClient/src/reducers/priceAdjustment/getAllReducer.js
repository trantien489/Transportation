import { handleActions } from "redux-actions";
import { PRICEADJUSTMENT } from "../../actionTypes/priceAdjustment";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICEADJUSTMENT.GETALL]: () => ({
    isLoading: true,
  }),
  [PRICEADJUSTMENT.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PRICEADJUSTMENT.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);