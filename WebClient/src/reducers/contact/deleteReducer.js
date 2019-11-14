import { handleActions } from "redux-actions";
import { CONTACT } from "../../actionTypes/contact";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONTACT.DELETE]: () => ({
    isLoading: true,
  }),
  [CONTACT.DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [CONTACT.DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);