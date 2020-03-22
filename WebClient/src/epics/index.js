import { combineEpics } from 'redux-observable';
import { loginEpic } from '../epics/loginEpic';
import { getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic } from '../epics/configEpic';
import { getAllCapacityEpic, changeStatusCapacityEpic, deleteCapacityEpic, addCapacityEpic, editCapacityEpic, getByIdCapacityEpic,capacityGetAllSelectEpic } from '../epics/capacityEpic';
import { getAllTransportationEpic, changeStatusTransportationEpic, deleteTransportationEpic, addTransportationEpic, editTransportationEpic, getByIdTransportationEpic, generateMoneyTransportationEpic, transportationFilterEpic } from '../epics/transportationEpic';
import { getAllCarEpic, changeStatusCarEpic, deleteCarEpic, addCarEpic, editCarEpic, getByIdCarEpic, carGetAllSelectEpic  } from '../epics/carEpic';
import { getAllDriverEpic, changeStatusDriverEpic, deleteDriverEpic, addDriverEpic, editDriverEpic, getByIdDriverEpic, driverGetAllSelectEpic  } from '../epics/driverEpic';
import { getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic, companyGetAllSelectEpic  } from '../epics/companyEpic';
import { getAllDistanceEpic, changeStatusDistanceEpic, deleteDistanceEpic, addDistanceEpic, editDistanceEpic, getByIdDistanceEpic, distanceGetAllSelectEpic } from '../epics/distanceEpic';
import { getAllPriceEpic, changeStatusPriceEpic, deletePriceEpic, addPriceEpic, editPriceEpic, getByIdPriceEpic, priceFilterEpic } from '../epics/priceEpic';
import { reportBangkeEpic, reportCheckBangkeEpic } from '../epics/reportEpic';

import { getAllPriceAdjustmentEpic, changeStatusPriceAdjustmentEpic, deletePriceAdjustmentEpic, addPriceAdjustmentEpic, editPriceAdjustmentEpic, getByIdPriceAdjustmentEpic } from '../epics/priceAdjustmentEpic';


const rootEpic = combineEpics(
    loginEpic, 
    
    getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic,

    getAllCapacityEpic, changeStatusCapacityEpic, deleteCapacityEpic, addCapacityEpic, editCapacityEpic, getByIdCapacityEpic, capacityGetAllSelectEpic,

    getAllTransportationEpic, changeStatusTransportationEpic, deleteTransportationEpic, addTransportationEpic, editTransportationEpic, getByIdTransportationEpic, generateMoneyTransportationEpic, transportationFilterEpic,

    getAllCarEpic, changeStatusCarEpic, deleteCarEpic, addCarEpic, editCarEpic, getByIdCarEpic, carGetAllSelectEpic,

    getAllDriverEpic, changeStatusDriverEpic, deleteDriverEpic, addDriverEpic, editDriverEpic, getByIdDriverEpic, driverGetAllSelectEpic,

    getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic, companyGetAllSelectEpic,

    getAllDistanceEpic, changeStatusDistanceEpic, deleteDistanceEpic, addDistanceEpic, editDistanceEpic, getByIdDistanceEpic, distanceGetAllSelectEpic,

    getAllPriceEpic, changeStatusPriceEpic, deletePriceEpic, addPriceEpic, editPriceEpic, getByIdPriceEpic,priceFilterEpic,
    
    reportBangkeEpic, reportCheckBangkeEpic,

    getAllPriceAdjustmentEpic, changeStatusPriceAdjustmentEpic, deletePriceAdjustmentEpic, addPriceAdjustmentEpic, editPriceAdjustmentEpic, getByIdPriceAdjustmentEpic

);
export default rootEpic;