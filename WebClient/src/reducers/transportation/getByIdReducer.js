import { handleActions } from "redux-actions";
import { TRANSPORTATION } from "../../actionTypes/transportation";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TRANSPORTATION.GETBYID]: () => ({
    isLoading: true,
  }),
  [TRANSPORTATION.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [TRANSPORTATION.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);