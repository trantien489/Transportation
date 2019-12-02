import { handleActions } from "redux-actions";
import { DISTANCE } from "../../actionTypes/distance";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DISTANCE.GETALL_SELECT]: () => ({
    isLoading: true,
  }),
  [DISTANCE.GETALL_SELECT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DISTANCE.GETALL_SELECT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);