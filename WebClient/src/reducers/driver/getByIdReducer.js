import { handleActions } from "redux-actions";
import { DRIVER } from "../../actionTypes/driver";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DRIVER.GETBYID]: () => ({
    isLoading: true,
  }),
  [DRIVER.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DRIVER.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);