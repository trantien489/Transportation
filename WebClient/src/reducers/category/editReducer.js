import { handleActions } from "redux-actions";
import { CATEGORY } from "../../actionTypes/category";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CATEGORY.EDIT]: () => ({
    isLoading: true,
  }),
  [CATEGORY.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CATEGORY.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);