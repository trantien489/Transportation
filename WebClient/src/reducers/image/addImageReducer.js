import { handleActions } from "redux-actions";
import { IMAGE } from "../../actionTypes/image";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGE.IMAGE_ADD]: () => ({
    isLoading: true,
  }),
  [IMAGE.IMAGE_ADD_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [IMAGE.IMAGE_ADD_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);