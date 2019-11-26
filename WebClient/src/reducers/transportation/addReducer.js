import { handleActions } from "redux-actions";
import { TRANSPORTATION } from "../../actionTypes/transportation";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TRANSPORTATION.ADD]: () => ({
    isLoading: true,
  }),
  [TRANSPORTATION.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [TRANSPORTATION.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);