import { handleActions } from "redux-actions";
import { PRICEADJUSTMENT } from "../../actionTypes/priceAdjustment";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICEADJUSTMENT.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [PRICEADJUSTMENT.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [PRICEADJUSTMENT.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);