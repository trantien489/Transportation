import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

//LOGIN
import loginReducer from '../reducers/login/loginReducer';
//CONFIG
import getAllConfigReducer from './config/getAllReducer';
import getByIdConfigReducer from './config/getByIdReducer';
import changeStatusConfigReducer from './config/changeStatusReducer';
import deleteConfigReducer from './config/deleteReducer';
import addConfigReducer from './config/addReducer';
import editConfigReducer from './config/editReducer';
export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer, 
    // LOGIN
    loginReducer: loginReducer,
    
    //CONFIG
    getAllConfigReducer: getAllConfigReducer,
    getByIdConfigReducer: getByIdConfigReducer,
    changeStatusConfigReducer: changeStatusConfigReducer,
    deleteConfigReducer: deleteConfigReducer,
    addConfigReducer: addConfigReducer,
    editConfigReducer: editConfigReducer,
    
});