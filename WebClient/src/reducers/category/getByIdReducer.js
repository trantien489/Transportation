import { handleActions } from "redux-actions";
import { CATEGORY } from "../../actionTypes/category";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CATEGORY.GETBYID]: () => ({
    isLoading: true,
  }),
  [CATEGORY.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CATEGORY.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);