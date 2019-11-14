import { handleActions } from "redux-actions";
import { TEMPLATEPOSITION } from "../../actionTypes/templatePosition";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TEMPLATEPOSITION.SEARCH]: () => ({
    isLoading: true,
  }),
  [TEMPLATEPOSITION.SEARCH_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData,
  }),
  [TEMPLATEPOSITION.SEARCH_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);