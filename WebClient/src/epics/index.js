import { combineEpics } from 'redux-observable';
import { loginEpic } from '../epics/loginEpic';
import { getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic } from '../epics/configEpic';
import { getAllCapacityEpic, changeStatusCapacityEpic, deleteCapacityEpic, addCapacityEpic, editCapacityEpic, getByIdCapacityEpic } from '../epics/capacityEpic';
import { getAllTransportationEpic, changeStatusTransportationEpic, deleteTransportationEpic, addTransportationEpic, editTransportationEpic, getByIdTransportationEpic, generateMoneyTransportationEpic } from '../epics/transportationEpic';
import { getAllCarEpic, changeStatusCarEpic, deleteCarEpic, addCarEpic, editCarEpic, getByIdCarEpic, carGetAllSelectEpic  } from '../epics/carEpic';
import { getAllDriverEpic, changeStatusDriverEpic, deleteDriverEpic, addDriverEpic, editDriverEpic, getByIdDriverEpic, driverGetAllSelectEpic  } from '../epics/driverEpic';
import { getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic, companyGetAllSelectEpic  } from '../epics/companyEpic';

const rootEpic = combineEpics(
    loginEpic, 
    
    getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic,

    getAllCapacityEpic, changeStatusCapacityEpic, deleteCapacityEpic, addCapacityEpic, editCapacityEpic, getByIdCapacityEpic,

    getAllTransportationEpic, changeStatusTransportationEpic, deleteTransportationEpic, addTransportationEpic, editTransportationEpic, getByIdTransportationEpic, generateMoneyTransportationEpic,

    getAllCarEpic, changeStatusCarEpic, deleteCarEpic, addCarEpic, editCarEpic, getByIdCarEpic, carGetAllSelectEpic,

    getAllDriverEpic, changeStatusDriverEpic, deleteDriverEpic, addDriverEpic, editDriverEpic, getByIdDriverEpic, driverGetAllSelectEpic,

    getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic, companyGetAllSelectEpic,

);
export default rootEpic;