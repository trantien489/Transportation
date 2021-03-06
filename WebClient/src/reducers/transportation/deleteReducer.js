import { handleActions } from "redux-actions";
import { TRANSPORTATION } from "../../actionTypes/transportation";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TRANSPORTATION.DELETE]: () => ({
    isLoading: true,
  }),
  [TRANSPORTATION.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [TRANSPORTATION.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);