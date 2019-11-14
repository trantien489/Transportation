import { handleActions } from "redux-actions";
import { ROLE } from "../../actionTypes/role";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [ROLE.GETALL]: () => ({
    isLoading: true,
  }),
  [ROLE.GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [ROLE.GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);