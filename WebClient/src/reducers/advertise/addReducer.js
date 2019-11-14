import { handleActions } from "redux-actions";
import { ADVERTISE } from "../../actionTypes/advertise";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [ADVERTISE.ADD]: () => ({
    isLoading: true,
  }),
  [ADVERTISE.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ADVERTISE.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);