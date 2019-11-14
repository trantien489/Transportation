import role from './role';
import user from './user';
import login from './login';
import permission from './permission';
import configType from './configType';
import config from './config';
import imageType from './imageType';
import advertise from './advertise';
import templatePosition from './templatePosition';
import category from './category';
import support from './support';
import contact from './contact';
import promotion from './promotion';
import language from './language';
import company from './company';
const common = {
        languageName: 'common:languageName',
        filterTitle: 'common:filterTitle',
        filterDesc: 'common:filterDesc',
        systemAside: 'common:systemAside',
        reportsAside: 'common:reportsAside',
        applicationsAside: 'common:applicationsAside',
        btnOk: 'common:btnOk',
        btnCancel: 'common:btnCancel',
        btnLogin: 'common:btnLogin',
        btnRegister: 'common:btnRegister',
        btnSubmit: 'common:btnSubmit',
        btnBackList: 'common:btnBackList',
        // API
        errorGetAllAPI: 'common:errorGetAllAPI',
        errorGetByIdAPI: 'common:errorGetByIdAPI',
        error400GetAPI: 'common:error400GetAPI',
        error401GetAPI: 'common:error401GetAPI',
        error403GetAPI: 'common:error403GetAPI',
        error404GetAPI: 'common:error404GetAPI',
        redirectToLogin: 'common:redirectToLogin',
        noDataFound: 'common:noDataFound',
        addDataSuccess: 'common:addDataSuccess',
        addDataFail: 'common:addDataFail',
        editDataSuccess: 'common:editDataSuccess',
        editDataFail: 'common:editDataFail',
        // MODAL CONFIRM
        infoTitleConfirmModal: 'common:infoTitleConfirmModal',
        switchStatusConfirmModal: 'common:switchStatusConfirmModal',
        switchStatusInfo: 'common:switchStatusInfo',
        switchStatusSuccessInfo: 'common:switchStatusSuccessInfo',
        switchStatusErrorInfo: 'common:switchStatusErrorInfo',
        deleteConfirmModal: 'common:deleteConfirmModal',
        deleteInfo: 'common:deleteInfo',
        deleteSuccessInfo: 'common:deleteSuccessInfo',
        deleteErrorInfo: 'common:deleteErrorInfo',
        // REGISTER
        registerTitle: 'common:registerTitle',
        registerSubTitle: 'common:registerSubTitle',
        //FORGET PW
        forgetPwTitle: 'common:forgetPwTitle',
        forgotPwLink: 'common:forgotPwLink',
        // STATUS
        active: 'common:active',
        inActive: 'common:inActive',
        yes: 'common:yes',
        no: 'common:no',
        deleted: 'common:deleted',
        pending: 'common:pending',
        // SPINNER
        processingSpinner: 'common:processingSpinner',
        loadingSpinner: 'common:loadingSpinner',
        //VALIDATE
        fieldCanNotEmptyErrorMsg: 'common:fieldCanNotEmptyErrorMsg',
        fieldCanNotDuplicateMsg: 'common:fieldCanNotDuplicateMsg',
        fieldEmailInvalidErrorMsg: 'common:fieldEmailInvalidErrorMsg',
        fieldPhoneNumberInvalidErrorMsg: 'common:fieldPhoneNumberInvalidErrorMsg',
        status: 'common:status',
        isdefault: 'common:isdefault',
        update: 'common:update',
        pleaseSelect: 'common:pleaseSelect',
        dashBoard: 'common:dashBoard',
        upload: 'common:upload',
        chooseFile: 'common:chooseFile',
        crop: 'common:crop',
        pleaseSearch: 'common:pleaseSearch',
        //Model default
        Id: 'common:Id',
        CreatedDate: 'common:CreatedDate',
        UpdatedDate: 'common:UpdatedDate',
        CreatedBy: 'common:CreatedBy',
        UpdatedBy: 'common:UpdatedBy',
        Status: 'common:Status',
        IsDefault: 'common:IsDefault',
        //Model status
        Active: 'common:Active',
        InActive: 'common:InActive',
        //Model isdefault
        Yes: 'common:Yes',
        No: 'common:No',
};
export default {
        common,
        role,
        user,
        login,
        configType,
        permission,
        config,
        imageType,
        advertise,
        templatePosition,
        category,
        support,
        contact,
        promotion,
        language,
        company
};