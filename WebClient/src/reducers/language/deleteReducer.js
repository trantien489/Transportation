import { handleActions } from "redux-actions";
import { LANGUAGE } from "../../actionTypes/language";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [LANGUAGE.DELETE]: () => ({
    isLoading: true,
  }),
  [LANGUAGE.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [LANGUAGE.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);