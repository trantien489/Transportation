import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
//ROLES
import getAllRolesReducer from './role/getAllReducer';
import getByIdRolesReducer from './role/getByIdReducer';
import changeStatusRoleReducer from './role/changeStatusReducer';
import deleteRoleReducer from './role/deleteReducer';
import addRoleReducer from './role/addReducer';
import editRoleReducer from './role/editReducer';
//USERS
import getAllUsersReducer from './user/getAllReducer';
import getByIdUserReducer from './user/getByIdReducer';
import changeStatusUserReducer from './user/changeStatusReducer';
import deleteUserReducer from './user/deleteReducer';
import addUserReducer from './user/addReducer';
import editUserReducer from './user/editReducer';
import checkValidUserNameReducer from './user/checkValidUserNameReducer';
import checkValidEmailReducer from './user/checkValidEmailReducer';
import updateRoleForUserReducer from '../reducers/user/updateRoleForUserReducer';
import loginReducer from '../reducers/login/loginReducer';
//PERMISSION
import getControllersActionsMethodsReducer from './permission/getControllersActionsMethodsReducer';
import getAllPermissionReducer from './permission/getAllReducer';
import getByIdPermissionReducer from './permission/getByIdReducer';
import changeStatusPermissionReducer from './permission/changeStatusReducer';
import deletePermissionReducer from './permission/deleteReducer';
import addPermissionReducer from './permission/addReducer';
import editPermissionReducer from './permission/editReducer';
import searchControllerByNameReducer from './permission/searchControllerByNameReducer';
import searchPermissionReducer from './permission/searchReducer';
import savePermissionReducer from './permission/saveReducer';

//CONFIGTYPE
import getAllConfigTypeReducer from './configType/getAllReducer';
import getByIdConfigTypeReducer from './configType/getByIdReducer';
import changeStatusConfigTypeReducer from './configType/changeStatusReducer';
import deleteConfigTypeReducer from './configType/deleteReducer';
import addConfigTypeReducer from './configType/addReducer';
import editConfigTypeReducer from './configType/editReducer';
//CONFIG
import getAllConfigReducer from './config/getAllReducer';
import getByIdConfigReducer from './config/getByIdReducer';
import changeStatusConfigReducer from './config/changeStatusReducer';
import deleteConfigReducer from './config/deleteReducer';
import addConfigReducer from './config/addReducer';
import editConfigReducer from './config/editReducer';
//IMAGETYPE
import getAllImageTypeReducer from '../reducers/imageType/getAllReducer';
import getByIdImageTypeReducer from '../reducers/imageType/getByIdReducer';
import changeStatusImageTypeReducer from '../reducers/imageType/changeStatusReducer';
import deleteImageTypeReducer from '../reducers/imageType/deleteReducer';
import addImageTypeReducer from '../reducers/imageType/addReducer';
import editImageTypeReducer from '../reducers/imageType/editReducer';
//IMAGE
import getByIdImageReducer from '../reducers/image/getByIdImageReducer';
import deleteImageReducer from '../reducers/image/deleteImageReducer';
import addImageReducer from '../reducers/image/addImageReducer';
//ADVERTISE
import getAllAdvertiseReducer from './advertise/getAllReducer';
import getByIdAdvertiseReducer from './advertise/getByIdReducer';
import changeStatusAdvertiseReducer from './advertise/changeStatusReducer';
import deleteAdvertiseReducer from './advertise/deleteReducer';
import addAdvertiseReducer from './advertise/addReducer';
import editAdvertiseReducer from './advertise/editReducer';
//TEMPLATEPOSITION
import getAllTemplatePositionReducer from './templatePosition/getAllReducer';
import getByIdTemplatePositionReducer from './templatePosition/getByIdReducer';
import changeStatusTemplatePositionReducer from './templatePosition/changeStatusReducer';
import deleteTemplatePositionReducer from './templatePosition/deleteReducer';
import addTemplatePositionReducer from './templatePosition/addReducer';
import editTemplatePositionReducer from './templatePosition/editReducer';
import searchTemplatePositionReducer from '../reducers/templatePosition/searchReducer';
//CATEGORY
import getAllCategoriesReducer from '../reducers/category/getAllReducer';
import getByIdCategoryReducer from '../reducers/category/getByIdReducer';
import changeStatusCategoryReducer from '../reducers/category/changeStatusReducer';
import deleteCategoryReducer from '../reducers/category/deleteReducer';
import addCategoryReducer from '../reducers/category/addReducer';
import editCategoryReducer from '../reducers/category/editReducer';
//SUPPORT
import getAllSupportReducer from './support/getAllReducer';
import getByIdSupportReducer from './support/getByIdReducer';
import changeStatusSupportReducer from './support/changeStatusReducer';
import deleteSupportReducer from './support/deleteReducer';
import addSupportReducer from './support/addReducer';
import editSupportReducer from './support/editReducer';
//LANGUAGE
import getAllLanguageReducer from '../reducers/language/getAllReducer';
import getByIdLanguageReducer from '../reducers/language/getByIdReducer';
import changeStatusLanguageReducer from '../reducers/language/changeStatusReducer';
import deleteLanguageReducer from '../reducers/language/deleteReducer';
import addLanguageReducer from '../reducers/language/addReducer';
import editLanguageReducer from '../reducers/language/editReducer';
import changeIsDefaultLanguageReducer from '../reducers/language/changeIsDefaultReducer';
import checkUniquetLanguageReducer from '../reducers/language/checkUniqueReducer';
//CONTACT
import getAllContactReducer from './contact/getAllReducer';
import getByIdContactReducer from './contact/getByIdReducer';
import changeStatusContactReducer from './contact/changeStatusReducer';
import deleteContactReducer from './contact/deleteReducer';
import addContactReducer from './contact/addReducer';
import editContactReducer from './contact/editReducer';
//PROMOTION
import getAllPromotionReducer from './promotion/getAllReducer';
import getByIdPromotionReducer from './promotion/getByIdReducer';
import changeStatusPromotionReducer from './promotion/changeStatusReducer';
import deletePromotionReducer from './promotion/deleteReducer';
import addPromotionReducer from './promotion/addReducer';
import editPromotionReducer from './promotion/editReducer';
//COMPANY
import getAllCompanyReducer from './company/getAllReducer';
import getByIdCompanyReducer from './company/getByIdReducer';
import changeStatusCompanyReducer from './company/changeStatusReducer';
import deleteCompanyReducer from './company/deleteReducer';
import addCompanyReducer from './company/addReducer';
import editCompanyReducer from './company/editReducer';
export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer,
    // ROLE
    getAllRolesReducer: getAllRolesReducer,
    getByIdRolesReducer: getByIdRolesReducer,
    changeStatusRoleReducer: changeStatusRoleReducer,
    deleteRoleReducer: deleteRoleReducer,
    addRoleReducer: addRoleReducer,
    editRoleReducer: editRoleReducer,
    // USER
    getAllUsersReducer: getAllUsersReducer,
    getByIdUserReducer: getByIdUserReducer,
    changeStatusUserReducer: changeStatusUserReducer,
    deleteUserReducer: deleteUserReducer,
    addUserReducer: addUserReducer,
    editUserReducer: editUserReducer,
    checkValidUserNameReducer: checkValidUserNameReducer,
    checkValidEmailReducer: checkValidEmailReducer,
    updateRoleForUserReducer: updateRoleForUserReducer,    
    // LOGIN
    loginReducer: loginReducer,
    //PERMISSION
    getControllersActionsMethodsReducer: getControllersActionsMethodsReducer,
    getAllPermissionReducer: getAllPermissionReducer,
    getByIdPermissionReducer: getByIdPermissionReducer,
    changeStatusPermissionReducer: changeStatusPermissionReducer,
    deletePermissionReducer: deletePermissionReducer,
    addPermissionReducer: addPermissionReducer,
    editPermissionReducer: editPermissionReducer,
    searchControllerByNameReducer: searchControllerByNameReducer,
    searchPermissionReducer: searchPermissionReducer,
    savePermissionReducer:savePermissionReducer,
    
    //CONFIGTYPE
    getAllConfigTypeReducer: getAllConfigTypeReducer,
    getByIdConfigTypeReducer: getByIdConfigTypeReducer,
    changeStatusConfigTypeReducer: changeStatusConfigTypeReducer,
    deleteConfigTypeReducer: deleteConfigTypeReducer,
    addConfigTypeReducer: addConfigTypeReducer,
    editConfigTypeReducer: editConfigTypeReducer,
    //CONFIG
    getAllConfigReducer: getAllConfigReducer,
    getByIdConfigReducer: getByIdConfigReducer,
    changeStatusConfigReducer: changeStatusConfigReducer,
    deleteConfigReducer: deleteConfigReducer,
    addConfigReducer: addConfigReducer,
    editConfigReducer: editConfigReducer,
    //IMAGETYPE
    getAllImageTypeReducer: getAllImageTypeReducer,
    getByIdImageTypeReducer: getByIdImageTypeReducer,
    changeStatusImageTypeReducer: changeStatusImageTypeReducer,
    deleteImageTypeReducer: deleteImageTypeReducer,
    addImageTypeReducer: addImageTypeReducer,
    editImageTypeReducer: editImageTypeReducer,
    //IMAGE
    getByIdImageReducer: getByIdImageReducer,
    deleteImageReducer: deleteImageReducer,
    addImageReducer: addImageReducer,
    //ADVERTISE
    getAllAdvertiseReducer: getAllAdvertiseReducer,
    getByIdAdvertiseReducer: getByIdAdvertiseReducer,
    changeStatusAdvertiseReducer: changeStatusAdvertiseReducer,
    deleteAdvertiseReducer: deleteAdvertiseReducer,
    addAdvertiseReducer: addAdvertiseReducer,
    editAdvertiseReducer: editAdvertiseReducer,
    //TEMPLATEPOSITION
    getAllTemplatePositionReducer: getAllTemplatePositionReducer,
    getByIdTemplatePositionReducer: getByIdTemplatePositionReducer,
    changeStatusTemplatePositionReducer: changeStatusTemplatePositionReducer,
    deleteTemplatePositionReducer: deleteTemplatePositionReducer,
    addTemplatePositionReducer: addTemplatePositionReducer,
    editTemplatePositionReducer: editTemplatePositionReducer,
    searchTemplatePositionReducer: searchTemplatePositionReducer,
    //CATEGORY
    getAllCategoriesReducer: getAllCategoriesReducer,
    getByIdCategoryReducer: getByIdCategoryReducer,
    changeStatusCategoryReducer: changeStatusCategoryReducer,
    deleteCategoryReducer: deleteCategoryReducer,
    addCategoryReducer: addCategoryReducer,
    editCategoryReducer: editCategoryReducer,
    //SUPPORT
    getAllSupportReducer: getAllSupportReducer,
    getByIdSupportReducer: getByIdSupportReducer,
    changeStatusSupportReducer: changeStatusSupportReducer,
    deleteSupportReducer: deleteSupportReducer,
    addSupportReducer: addSupportReducer,
    editSupportReducer: editSupportReducer,
    //LANGUAGE
    getAllLanguageReducer: getAllLanguageReducer,
    getByIdLanguageReducer: getByIdLanguageReducer,
    changeStatusLanguageReducer: changeStatusLanguageReducer,
    deleteLanguageReducer: deleteLanguageReducer,
    addLanguageReducer: addLanguageReducer,
    editLanguageReducer: editLanguageReducer,
    changeIsDefaultLanguageReducer: changeIsDefaultLanguageReducer,
    checkUniquetLanguageReducer: checkUniquetLanguageReducer,
    //CONTACT
    getAllContactReducer: getAllContactReducer,
    getByIdContactReducer: getByIdContactReducer,
    changeStatusContactReducer: changeStatusContactReducer,
    deleteContactReducer: deleteContactReducer,
    addContactReducer: addContactReducer,
    editContactReducer: editContactReducer,
    //PROMOTION
    getAllPromotionReducer: getAllPromotionReducer,
    getByIdPromotionReducer: getByIdPromotionReducer,
    changeStatusPromotionReducer: changeStatusPromotionReducer,
    deletePromotionReducer: deletePromotionReducer,
    addPromotionReducer: addPromotionReducer,
    editPromotionReducer: editPromotionReducer,
    //COMPANY
    getAllCompanyReducer: getAllCompanyReducer,
    getByIdCompanyReducer: getByIdCompanyReducer,
    changeStatusCompanyReducer: changeStatusCompanyReducer,
    deleteCompanyReducer: deleteCompanyReducer,
    addCompanyReducer: addCompanyReducer,
    editCompanyReducer: editCompanyReducer,
});