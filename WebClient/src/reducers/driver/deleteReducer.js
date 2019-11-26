import { handleActions } from "redux-actions";
import { DRIVER } from "../../actionTypes/driver";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DRIVER.DELETE]: () => ({
    isLoading: true,
  }),
  [DRIVER.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [DRIVER.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);