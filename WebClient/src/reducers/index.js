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

//CAPACITY
import getAllCapacityReducer from './capacity/getAllReducer';
import getByIdCapacityReducer from './capacity/getByIdReducer';
import changeStatusCapacityReducer from './capacity/changeStatusReducer';
import deleteCapacityReducer from './capacity/deleteReducer';
import addCapacityReducer from './capacity/addReducer';
import editCapacityReducer from './capacity/editReducer';
import capacityGetAllSelectReducer from './capacity/getAllSelectReducer';


//TRANSPORTATION
import getAllTransportationReducer from './transportation/getAllReducer';
import getByIdTransportationReducer from './transportation/getByIdReducer';
import changeStatusTransportationReducer from './transportation/changeStatusReducer';
import deleteTransportationReducer from './transportation/deleteReducer';
import addTransportationReducer from './transportation/addReducer';
import editTransportationReducer from './transportation/editReducer';
import generateMoneyTransportationReducer from './transportation/generateMoneyAllReducer';


//CAR
import getAllCarReducer from './car/getAllReducer';
import getByIdCarReducer from './car/getByIdReducer';
import changeStatusCarReducer from './car/changeStatusReducer';
import deleteCarReducer from './car/deleteReducer';
import addCarReducer from './car/addReducer';
import editCarReducer from './car/editReducer';
import carGetAllSelectReducer from './car/getAllSelectReducer';

//DRIVER
import getAllDriverReducer from './driver/getAllReducer';
import getByIdDriverReducer from './driver/getByIdReducer';
import changeStatusDriverReducer from './driver/changeStatusReducer';
import deleteDriverReducer from './driver/deleteReducer';
import addDriverReducer from './driver/addReducer';
import editDriverReducer from './driver/editReducer';
import driverGetAllSelectReducer from './driver/getAllSelectReducer';

//COMPANY
import getAllCompanyReducer from './company/getAllReducer';
import getByIdCompanyReducer from './company/getByIdReducer';
import changeStatusCompanyReducer from './company/changeStatusReducer';
import deleteCompanyReducer from './company/deleteReducer';
import addCompanyReducer from './company/addReducer';
import editCompanyReducer from './company/editReducer';
import companyGetAllSelectReducer from './company/getAllSelectReducer';

//DISTANCE
import getAllDistanceReducer from './distance/getAllReducer';
import getByIdDistanceReducer from './distance/getByIdReducer';
import changeStatusDistanceReducer from './distance/changeStatusReducer';
import deleteDistanceReducer from './distance/deleteReducer';
import addDistanceReducer from './distance/addReducer';
import editDistanceReducer from './distance/editReducer';

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

    //CAPACITY
    getAllCapacityReducer: getAllCapacityReducer,
    getByIdCapacityReducer: getByIdCapacityReducer,
    changeStatusCapacityReducer: changeStatusCapacityReducer,
    deleteCapacityReducer: deleteCapacityReducer,
    addCapacityReducer: addCapacityReducer,
    editCapacityReducer: editCapacityReducer,
    capacityGetAllSelectReducer: capacityGetAllSelectReducer,

    //TRANSPORTATION
    getAllTransportationReducer: getAllTransportationReducer,
    getByIdTransportationReducer: getByIdTransportationReducer,
    changeStatusTransportationReducer: changeStatusTransportationReducer,
    deleteTransportationReducer: deleteTransportationReducer,
    addTransportationReducer: addTransportationReducer,
    editTransportationReducer: editTransportationReducer,
    generateMoneyTransportationReducer : generateMoneyTransportationReducer,


    //CAR
    getAllCarReducer: getAllCarReducer,
    getByIdCarReducer: getByIdCarReducer,
    changeStatusCarReducer: changeStatusCarReducer,
    deleteCarReducer: deleteCarReducer,
    addCarReducer: addCarReducer,
    editCarReducer: editCarReducer,
    carGetAllSelectReducer: carGetAllSelectReducer,

    //DRIVER
    getAllDriverReducer: getAllDriverReducer,
    getByIdDriverReducer: getByIdDriverReducer,
    changeStatusDriverReducer: changeStatusDriverReducer,
    deleteDriverReducer: deleteDriverReducer,
    addDriverReducer: addDriverReducer,
    editDriverReducer: editDriverReducer,
    driverGetAllSelectReducer: driverGetAllSelectReducer,
 
    //COMPANY
    getAllCompanyReducer: getAllCompanyReducer,
    getByIdCompanyReducer: getByIdCompanyReducer,
    changeStatusCompanyReducer: changeStatusCompanyReducer,
    deleteCompanyReducer: deleteCompanyReducer,
    addCompanyReducer: addCompanyReducer,
    editCompanyReducer: editCompanyReducer,
    companyGetAllSelectReducer: companyGetAllSelectReducer,    

    //DISTANCE
    getAllDistanceReducer: getAllDistanceReducer,
    getByIdDistanceReducer: getByIdDistanceReducer,
    changeStatusDistanceReducer: changeStatusDistanceReducer,
    deleteDistanceReducer: deleteDistanceReducer,
    addDistanceReducer: addDistanceReducer,
    editDistanceReducer: editDistanceReducer,
});