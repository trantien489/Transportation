import { handleActions } from "redux-actions";
import { TEMPLATEPOSITION } from "../../actionTypes/templatePosition";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TEMPLATEPOSITION.GETBYID]: () => ({
    isLoading: true,
  }),
  [TEMPLATEPOSITION.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [TEMPLATEPOSITION.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);