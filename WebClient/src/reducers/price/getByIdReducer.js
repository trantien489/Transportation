import { handleActions } from "redux-actions";
import { PRICE } from "../../actionTypes/price";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [PRICE.GETBYID]: () => ({
    isLoading: true,
  }),
  [PRICE.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [PRICE.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);