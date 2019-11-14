import { handleActions } from "redux-actions";
import { IMAGETYPE } from "../../actionTypes/imageType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGETYPE.GETALL]: () => ({
    isLoading: true,
  }),
  [IMAGETYPE.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [IMAGETYPE.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);