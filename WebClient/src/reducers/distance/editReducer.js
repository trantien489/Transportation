import { handleActions } from "redux-actions";
import { DISTANCE } from "../../actionTypes/distance";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [DISTANCE.EDIT]: () => ({
    isLoading: true,
  }),
  [DISTANCE.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [DISTANCE.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);