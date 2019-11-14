import { handleActions } from "redux-actions";
import { IMAGETYPE } from "../../actionTypes/imageType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGETYPE.GETBYID]: () => ({
    isLoading: true,
  }),
  [IMAGETYPE.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [IMAGETYPE.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);