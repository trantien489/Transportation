import { handleActions } from "redux-actions";
import { CAR } from "../../actionTypes/car";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CAR.GETALL_SELECT]: () => ({
    isLoading: true,
  }),
  [CAR.GETALL_SELECT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CAR.GETALL_SELECT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);