import { handleActions } from "redux-actions";
import { ADVERTISE } from "../../actionTypes/advertise";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [ADVERTISE.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [ADVERTISE.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ADVERTISE.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);