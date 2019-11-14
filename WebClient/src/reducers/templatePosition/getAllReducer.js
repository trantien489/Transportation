import { handleActions } from "redux-actions";
import { TEMPLATEPOSITION } from "../../actionTypes/templatePosition";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TEMPLATEPOSITION.GETALL]: () => ({
    isLoading: true,
  }),
  [TEMPLATEPOSITION.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [TEMPLATEPOSITION.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);