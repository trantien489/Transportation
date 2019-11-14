import { handleActions } from "redux-actions";
import { IMAGETYPE } from "../../actionTypes/imageType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGETYPE.ADD]: () => ({
    isLoading: true,
  }),
  [IMAGETYPE.ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [IMAGETYPE.ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);