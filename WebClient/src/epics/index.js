import { combineEpics } from 'redux-observable';
import { getAllRoleEpic, getByIdRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic } from '../epics/roleEpic';
import { getAllUserEpic, changeStatusUserEpic, deleteUserEpic, addUserEpic, editUserEpic, getByIdUserEpic, checkValidUserNameEpic, checkValidEmailEpic, updateRoleForUserEpic } from '../epics/userEpic';
import { loginEpic } from '../epics/loginEpic';
import { getControllersActionsMethodsEpic, getAllPermissionEpic, changeStatusPermissionEpic, deletePermissionEpic, addPermissionEpic, editPermissionEpic, getByIdPermissionEpic, searchControllerByNameEpic, searchPermissionEpic, savePermissionEpic } from '../epics/permissionEpic';
import { getAllConfigTypeEpic, changeStatusConfigTypeEpic, deleteConfigTypeEpic, addConfigTypeEpic, editConfigTypeEpic, getByIdConfigTypeEpic } from '../epics/configTypeEpic';
import { getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic } from '../epics/configEpic';
import { getAllImageTypeEpic, changeStatusImageTypeEpic, deleteImageTypeEpic, addImageTypeEpic, editImageTypeEpic, getByIdImageTypeEpic } from '../epics/imageTypeEpic';
import { deleteImageEpic, getByIdImageEpic, addImageEpic } from '../epics/imageEpic';
import { getAllAdvertiseEpic, changeStatusAdvertiseEpic, deleteAdvertiseEpic, addAdvertiseEpic, editAdvertiseEpic, getByIdAdvertiseEpic } from '../epics/advertiseEpic';
import { getAllTemplatePositionEpic, changeStatusTemplatePositionEpic, deleteTemplatePositionEpic, addTemplatePositionEpic, editTemplatePositionEpic, getByIdTemplatePositionEpic } from '../epics/templatePositionEpic';
import { getAllCategoryEpic, changeStatusCategoryEpic, deleteCategoryEpic, addCategoryEpic, editCategoryEpic, getByIdCategoryEpic } from '../epics/categoryEpic';
import { getAllContactEpic, changeStatusContactEpic, deleteContactEpic, addContactEpic, editContactEpic, getByIdContactEpic } from '../epics/contactEpic';
import { getAllSupportEpic, changeStatusSupportEpic, deleteSupportEpic, addSupportEpic, editSupportEpic, getByIdSupportEpic } from '../epics/supportEpic';
import { getAllLanguageEpic, changeStatusLanguageEpic, deleteLanguageEpic, addLanguageEpic, editLanguageEpic, getByIdLanguageEpic, changeIsDefaultLanguageEpic, checkUniqueLanguageEpic } from '../epics/languageEpic';
import { getAllPromotionEpic, changeStatusPromotionEpic, deletePromotionEpic, addPromotionEpic, editPromotionEpic, getByIdPromotionEpic } from '../epics/promotionEpic';
import { getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic } from '../epics/companyEpic';
const rootEpic = combineEpics(
    getAllRoleEpic, getByIdRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic,
    getAllUserEpic, changeStatusUserEpic, deleteUserEpic, addUserEpic, editUserEpic, getByIdUserEpic,
    loginEpic, checkValidUserNameEpic, checkValidEmailEpic, updateRoleForUserEpic,
    getControllersActionsMethodsEpic, getAllPermissionEpic, changeStatusPermissionEpic, deletePermissionEpic, addPermissionEpic, editPermissionEpic, getByIdPermissionEpic, searchControllerByNameEpic, searchPermissionEpic, savePermissionEpic,
    getAllConfigTypeEpic, changeStatusConfigTypeEpic, deleteConfigTypeEpic, addConfigTypeEpic, editConfigTypeEpic, getByIdConfigTypeEpic,
    getAllConfigEpic, changeStatusConfigEpic, deleteConfigEpic, addConfigEpic, editConfigEpic, getByIdConfigEpic,
    getAllImageTypeEpic, changeStatusImageTypeEpic, deleteImageTypeEpic, addImageTypeEpic, editImageTypeEpic, getByIdImageTypeEpic,
    deleteImageEpic, getByIdImageEpic, addImageEpic, getAllAdvertiseEpic, changeStatusAdvertiseEpic, deleteAdvertiseEpic, addAdvertiseEpic, editAdvertiseEpic, getByIdAdvertiseEpic,
    getAllTemplatePositionEpic, changeStatusTemplatePositionEpic, deleteTemplatePositionEpic, addTemplatePositionEpic, editTemplatePositionEpic, getByIdTemplatePositionEpic, getAllCategoryEpic, changeStatusCategoryEpic, deleteCategoryEpic, addCategoryEpic, editCategoryEpic, getByIdCategoryEpic,
    getAllSupportEpic, changeStatusSupportEpic, deleteSupportEpic, addSupportEpic, editSupportEpic, getByIdSupportEpic,
    getAllLanguageEpic, changeStatusLanguageEpic, deleteLanguageEpic, addLanguageEpic, editLanguageEpic, getByIdLanguageEpic, changeIsDefaultLanguageEpic, checkUniqueLanguageEpic,
    getAllContactEpic, changeStatusContactEpic, deleteContactEpic, addContactEpic, editContactEpic, getByIdContactEpic,    
    getAllPromotionEpic, changeStatusPromotionEpic, deletePromotionEpic, addPromotionEpic, editPromotionEpic, getByIdPromotionEpic,
    getAllCompanyEpic, changeStatusCompanyEpic, deleteCompanyEpic, addCompanyEpic, editCompanyEpic, getByIdCompanyEpic,
    getAllCategoryEpic, changeStatusCategoryEpic, deleteCategoryEpic, addCategoryEpic, editCategoryEpic, getByIdCategoryEpic, 
);
export default rootEpic;