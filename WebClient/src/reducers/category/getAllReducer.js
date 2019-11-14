import { handleActions } from "redux-actions";
import { CATEGORY } from "../../actionTypes/category";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CATEGORY.GETALL]: () => ({
    isLoading: true,
  }),
  [CATEGORY.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CATEGORY.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);