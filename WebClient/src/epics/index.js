import { combineEpics } from 'redux-observable';
import { loginEpic } from '../epics/loginEpic';
import { getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic } from '../epics/configEpic';
const rootEpic = combineEpics(
    loginEpic, 
    getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic
);
export default rootEpic;