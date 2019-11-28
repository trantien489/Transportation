import { handleActions } from "redux-actions";
import { DISTANCE } from "../../actionTypes/distance";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DISTANCE.GETBYID]: () => ({
    isLoading: true,
  }),
  [DISTANCE.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [DISTANCE.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);