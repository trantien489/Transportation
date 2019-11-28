
import config from './config';
import login from './login';
import capacity from './capacity';
import transportation from './transportation';
import car from './car';
import company from './company';

const common = {
        languageName: 'Vietnames(vi)',
        filterTitle: 'Bộ lọc',
        filterDesc: 'Bộ lọc',
        systemAside: 'Hệ thống',
        reportsAside: 'Báo cáo',
        applicationsAside: 'Ứng dụng',
        btnOk: 'Đồng ý',
        btnCancel: 'Hủy bỏ',
        btnLogin: 'Đăng nhập',
        btnRegister: 'Đăng ký ngay!',
        btnSubmit: 'Lưu',
        btnBackList: 'Bỏ qua',
        // API
        errorGetAllAPI: 'Có lỗi xảy ra trong khi tải danh sách từ máy chủ.',
        errorGetByIdAPI: 'Có lỗi xảy ra từ máy chủ.',
        error400GetAPI: 'Lỗi 400: Yêu cầu truy cập trang này thì chưa hợp lệ.',
        error401GetAPI: 'Lỗi 401: Không được phép truy cập trang này.',
        error403GetAPI: 'Lỗi 403: Bị cấm truy cập trang này.',
        error404GetAPI: 'Lỗi 401: Không tìm thấy trang này.',
        redirectToLogin: 'Chuyển hướng đến trang đăng nhập ...',
        noDataFound: 'Không tìm thấy dữ liệu nào.',
        addDataSuccess: 'Thêm mới dữ liệu thành công.',
        addDataFail: 'Thêm mới dữ liệu thất bại.',
        editDataSuccess: 'Chỉnh sửa dữ liệu thành công.',
        editDataFail: 'Chỉnh sửa dữ liệu thất bại.',
        // MODAL CONFIRM
        infoTitleConfirmModal: 'Xác nhận thông tin',
        switchStatusConfirmModal: 'Bạn có chắc chắn muốn chuyển trạng thái không?',
        switchStatusInfo: 'Thay đổi trạng thái',
        switchStatusSuccessInfo: 'Thay đổi trạng thái thành công.',
        switchStatusErrorInfo: 'Đã xảy ra lỗi trong khi thay đổi trạng thái!',
        deleteConfirmModal: 'Bạn có chắc chắn muốn xóa không?',
        deleteInfo: 'Xóa',
        deleteSuccessInfo: 'Xóa thành công.',
        deleteErrorInfo: 'Đã xảy ra lỗi trong khi đang xóa!',
        // REGISTER
        registerTitle: 'Đăng Ký',
        registerSubTitle: 'Nếu bạn chưa có tài khoản, bạn có thể click vào button bên dưới để tạo một tài khoản cá nhân. Sau khi tạo thành công bạn có thể đăng nhập để đi đến trang quản trị website.',
        //FORGET PW
        forgetPwTitle: 'Quên mật khẩu',
        forgotPwLink: 'Quên mật khẩu?',
        // STATUS
        active: 'Kích hoạt',
        inActive: 'Chưa kích hoạt',
        yes: 'Có',
        no: 'Không',
        deleted: 'Đã xóa',
        pending: 'Đang chờ xử lý',
        // SPINNER
        processingSpinner: 'Đang xử lý...',
        loadingSpinner: 'Đang tải dữ liệu...',
        //VALIDATE
        fieldCanNotEmptyErrorMsg: '{} không thể rỗng!',
        fieldCanNotDuplicateMsg: '{} bị trùng!',
        fieldEmailInvalidErrorMsg: 'Email không có giá trị!',
        fieldPhoneNumberInvalidErrorMsg: '{} không hợp lệ!',
        status: 'Trạng thái',
        isdefault: 'Mặc định',
        update: 'Chỉnh sửa',
        pleaseSelect: 'Vui lòng chọn',
        dashBoard: 'Trang chủ',
        upload: 'Tải lên',
        chooseFile: 'Chọn một tệp',
        crop: 'Cắt',
        pleaseSearch: 'Vui lòng tìm kiếm',
        //Model default
        Id: 'Id',
        CreatedDate: 'Ngày tạo',
        UpdatedDate: 'Ngày chỉnh sửa',
        CreatedBy: 'Người tạo',
        UpdatedBy: 'Người chỉnh sửa',
        Status: 'Trạng thái',
        IsDefault: 'Mặc định',
        //Model status
        Active: 'Kích hoạt',
        InActive: 'Chưa kích hoạt',
        //Model isdefault
        Yes: 'Có',
        No: 'Không',
}
export default { 
        common, 
        login, 
        config, 
        capacity,
        transportation,
        car,
        company,
        };
