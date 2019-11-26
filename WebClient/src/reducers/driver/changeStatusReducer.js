import { handleActions } from "redux-actions";
import { DRIVER } from "../../actionTypes/driver";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DRIVER.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [DRIVER.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [DRIVER.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);