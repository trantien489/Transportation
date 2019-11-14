import { handleActions } from "redux-actions";
import { CONTACT } from "../../actionTypes/contact";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [CONTACT.GETBYID]: () => ({
    isLoading: true,
  }),
  [CONTACT.GETBYID_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [CONTACT.GETBYID_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);