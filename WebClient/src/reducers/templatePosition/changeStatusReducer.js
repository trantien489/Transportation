import { handleActions } from "redux-actions";
import { TEMPLATEPOSITION } from "../../actionTypes/templatePosition";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [TEMPLATEPOSITION.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [TEMPLATEPOSITION.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [TEMPLATEPOSITION.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);