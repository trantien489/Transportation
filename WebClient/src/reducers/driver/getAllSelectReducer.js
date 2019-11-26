import { handleActions } from "redux-actions";
import { DRIVER } from "../../actionTypes/driver";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DRIVER.GETALL_SELECT]: () => ({
    isLoading: true,
  }),
  [DRIVER.GETALL_SELECT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DRIVER.GETALL_SELECT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);