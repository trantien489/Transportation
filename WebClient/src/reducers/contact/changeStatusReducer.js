import { handleActions } from "redux-actions";
import { CONTACT } from "../../actionTypes/contact";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONTACT.CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [CONTACT.CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CONTACT.CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);