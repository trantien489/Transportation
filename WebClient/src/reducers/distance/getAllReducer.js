import { handleActions } from "redux-actions";
import { DISTANCE } from "../../actionTypes/distance";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DISTANCE.GETALL]: () => ({
    isLoading: true,
  }),
  [DISTANCE.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DISTANCE.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);