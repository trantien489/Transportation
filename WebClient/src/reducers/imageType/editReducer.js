import { handleActions } from "redux-actions";
import { IMAGETYPE } from "../../actionTypes/imageType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGETYPE.EDIT]: () => ({
    isLoading: true,
  }),
  [IMAGETYPE.EDIT_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [IMAGETYPE.EDIT_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);