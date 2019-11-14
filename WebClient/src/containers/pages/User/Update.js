import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdUserAction, addUserAction, editUserAction, checkValidUserNameAction, checkValidEmailAction } from '../../../actions/user';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { commonConstant } from '../../../contants/common';
import { handleErrorBasic } from '../../../utilities/handler';
import { formatString } from '../../../utilities/format';

var _currentUserAction = null;
class UserUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //name, type, value, required, isReadOnly, isDefaultField, regex, dataSelect, DuplicateConfig
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            //Detail fields
            new InputField("FirstName", ControlType.Text, '', true),
            new InputField("LastName", ControlType.Text, '', true),
            new InputField("UserName", ControlType.DuplicateText, '', true, null, null, null, null, { QueryString: '?username=' }),
            new InputField("Email", ControlType.DuplicateText, '', true, null, null, null, null, { QueryString: '?email=' }),
            new InputField("Password", ControlType.Password, '', true),
            new InputField("PhoneNumber", ControlType.Text, '', false),
            new InputField("PictureUrl", ControlType.Text, '', false),
            new InputField("UserType", ControlType.Text, '', false),
            new InputField("FacebookId", ControlType.Text, 0, false),
            new InputField("Status", ControlType.ReactSelect, 1, true, null, null, null, []),
            //Default fields
            new InputField("CreatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("CreatedBy", ControlType.Text, null, false, true, true),
            new InputField("UpdatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("UpdatedBy", ControlType.Text, null, false, true, true),
        ];

        this.state = {
            fields: fields,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy
    }
    shouldComponentUpdate(nextProps) {
        const { checkValidUserNameModel, checkValidEmailModel } = nextProps;
        return !(checkValidUserNameModel.isLoading || checkValidEmailModel.isLoading);
    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle     
        const { checkValidUserNameModel, checkValidEmailModel } = nextProps;

        let isUserName = checkValidUserNameModel && checkValidUserNameModel.isLoading;
        let isEmail = checkValidEmailModel && checkValidEmailModel.isLoading;

        if (isUserName || isEmail) {
            _currentUserAction = commonConstant.CHECK_DUPLICATE;
            return false;
        }
    }

    handleDuplicate = (model, t, fields, queryString, fieldName) => {
        if (!model || !model.responseData ||
            handleErrorBasic(model.responseData.status, t(key.user.EditTitle), t)) return;
        fields && fields.map((field) => {
            if (field.DuplicateConfig.QueryString === queryString) {
                let errorSMS = formatString(t(key.common.fieldCanNotDuplicateMsg), fieldName);
                field.DuplicateConfig.ErrorMessage = model.responseData.Success ? null : errorSMS;
            }
            return field;
        });
        this.setState({ fields });
    }

    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        const { t, checkValidUserNameModel, checkValidEmailModel } = nextProps;
        const { fields } = this.state;
        switch (_currentUserAction) {
            //CHECK DUPLICATE
            case (commonConstant.CHECK_DUPLICATE):
                this.handleDuplicate(checkValidUserNameModel, t, fields, '?username=', t(key.user.UserName));
                this.handleDuplicate(checkValidEmailModel, t, fields, '?email=', t(key.user.Email));
                break;
            //DEFAULT    
            default:
                break;
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    checkDuplicateAction(field, query) {
        if (field === 'UserName') {
            this.checkValidUserNameAction(query);
        } else {
            this.checkValidEmailAction(query);
        }
    }
    render() {
        const { t, addModel, editModel, getByIdModel } = this.props;
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading} spinner
                    text={getByIdModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading ? '' : 'overlayFullScreen'}>
                    <AddOrEdit
                        keyFields={key.user}
                        tableName="USER"
                        fields={this.state.fields}
                        callbackCheckDuplicateAction={this.checkDuplicateAction}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdUserReducer,
    addModel: state.addUserReducer,
    editModel: state.editUserReducer,
    checkValidUserNameModel: state.checkValidUserNameReducer,
    checkValidEmailModel: state.checkValidEmailReducer,
});

const mapDispatchToProps = {
    getByIdAction: getByIdUserAction,
    addAction: addUserAction,
    editAction: editUserAction,
    checkValidUserNameAction,
    checkValidEmailAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(UserUpdate));