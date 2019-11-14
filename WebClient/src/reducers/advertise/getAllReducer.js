import { handleActions } from "redux-actions";
import { ADVERTISE } from "../../actionTypes/advertise";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [ADVERTISE.GETALL]: () => ({
    isLoading: true,
  }),
  [ADVERTISE.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [ADVERTISE.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);