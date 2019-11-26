import { handleActions } from "redux-actions";
import { DRIVER } from "../../actionTypes/driver";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DRIVER.GETALL]: () => ({
    isLoading: true,
  }),
  [DRIVER.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DRIVER.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);