import { handleActions } from "redux-actions";
import { CAR } from "../../actionTypes/car";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CAR.DELETE]: () => ({
    isLoading: true,
  }),
  [CAR.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CAR.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);