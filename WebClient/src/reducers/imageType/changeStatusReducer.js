import { handleActions } from "redux-actions";
import { IMAGETYPE } from "../../actionTypes/imageType";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [IMAGETYPE.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [IMAGETYPE.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [IMAGETYPE.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);