
import login from './login';
import config from './config';
import capacity from './capacity';
import transportation from './transportation';


let common = {
        languageName: 'English(en)',
        filterTitle: 'Filter',
        filterDesc: 'Bật hoặc tắt lọc dữ liệu của các cột trong bảng.',
        systemAside: 'System',
        reportsAside: 'Reports',
        applicationsAside: 'Applications',
        btnOk: 'OK',
        btnCancel: 'Cancel',
        btnLogin: 'Login',
        btnRegister: 'Register Now!',
        btnSubmit: 'Submit',
        btnBackList: 'Back',
        // API
        errorGetAllAPI: 'An error occurred while loading the list from the server.',
        errorGetByIdAPI: 'An error occurred from the server.',
        error400GetAPI: 'Error 400: Access to this page is bad request.',
        error401GetAPI: 'Error 401: Access to this page is unauthorized.',
        error403GetAPI: 'Error 403: Access to this page is forbidden.',
        error404GetAPI: 'Error 404: Access to this page is not found.',
        redirectToLogin: 'Redirect to login page ...',
        noDataFound: 'No data found.',
        addDataSuccess: 'Add new data successfully.',
        addDataFail: 'Add new data failed.',
        editDataSuccess: 'Edit data successfully.',
        editDataFail: 'Edit data failed.',
        // MODAL CONFIRM
        infoTitleConfirmModal: 'Information confirm',
        switchStatusConfirmModal: 'Are you sure want to switch status?',
        switchStatusInfo: 'Change status',
        switchStatusSuccessInfo: 'Status change successful.',
        switchStatusErrorInfo: 'An error occurred while changing status!',
        deleteConfirmModal: 'Are you sure want to delete?',
        deleteInfo: 'Delete',
        deleteSuccessInfo: 'Delete successfully.',
        deleteErrorInfo: 'An error occurred while deleting!',
        // REGISTER
        registerTitle: 'Sign up',
        registerSubTitle: 'If you do not have an account, you can click the button below to create a personal account. Once created successfully you can login to go to the site administration.',
        // FORGET PW
        forgetPwTitle: 'Forget Password',
        forgotPwLink: 'Forgot password?',
        // STATUS
        active: 'Active',
        inActive: 'InActive',
        yes: 'Yes',
        no: 'No',
        deleted: 'Deleted',
        pending: 'Pending',
        // SPINNER
        processingSpinner: 'Processing...',
        loadingSpinner: 'Loading...',
        // VALIDATE
        fieldCanNotEmptyErrorMsg: '{} can not empty!',
        fieldCanNotDuplicateMsg: '{} duplicated!',
        fieldEmailInvalidErrorMsg: 'Email is not valid!',
        fieldPhoneNumberInvalidErrorMsg: '{} is invalid!',
        status: 'Status',
        isdefault: 'IsDefault',
        update: 'Update',
        pleaseSelect: 'Please select',
        dashBoard: 'DashBoard',
        upload: 'Upload',
        chooseFile: 'Choose a file',
        crop: 'Crop',
        pleaseSearch: 'Please Search',
        //Model default
        Id: 'Id',
        CreatedDate: 'CreatedDate',
        UpdatedDate: 'UpdatedDate',
        CreatedBy: 'CreatedBy',
        UpdatedBy: 'UpdatedBy',
        Status: 'Status',
        IsDefault: 'IsDefault',
        //Model status
        Active: 'Active',
        InActive: 'InActive',
        //Model isdefault
        Yes: 'Yes',
        No: 'No',
}
export default { 
        common, 
        login, 
        config, 
        capacity,
        transportation
};
