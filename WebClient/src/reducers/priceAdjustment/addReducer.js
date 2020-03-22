import { handleActions } from "redux-actions";
import { PRICEADJUSTMENT } from "../../actionTypes/priceAdjustment";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICEADJUSTMENT.ADD]: () => ({
    isLoading: true,
  }),
  [PRICEADJUSTMENT.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PRICEADJUSTMENT.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);