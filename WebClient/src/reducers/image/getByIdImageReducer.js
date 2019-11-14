import { handleActions } from "redux-actions";
import { IMAGE } from "../../actionTypes/image";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGE.IMAGE_GETBYID]: () => ({
    isLoading: true,
  }),
  [IMAGE.IMAGE_GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [IMAGE.IMAGE_GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);