import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { toastr } from 'react-redux-toastr';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdPermissionAction, addPermissionAction, editPermissionAction } from '../../../actions/permission';
import { commonConstant } from '../../../contants/common';
import { setSessionStorage } from '../../../utilities/storage';
import { cloneObject } from '../../../utilities/format';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { handleErrorBasic, handleParameter } from '../../../utilities/handler';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
var _currentAction = null;
var _model = {}
class PermissionUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: _model,
            fieldInfos: [
                //Default fields
                new InputField("Id", ControlType.Text, false, true, true),
                //Detail fields
                new InputField("ControllerName", ControlType.Text, true),
                new InputField("ActionName", ControlType.Text, true),
                new InputField("HttpMethod", ControlType.Text, true),
                new InputField("Status", ControlType.Select, true),
                //Default fields
                new InputField("CreatedDate", ControlType.DateTime, false, true, true),
                new InputField("CreatedBy", ControlType.Text, false, true, true),
                new InputField("UpdatedDate", ControlType.DateTime, false, true, true),
                new InputField("UpdatedBy", ControlType.Text, false, true, true),
            ],
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        let { match } = this.props;
        if (handleParameter(match) !== commonConstant.ParamAdd) {
            const strQuery = '?id=' + handleParameter(match);
            this.props.getByIdPermissionAction(strQuery);
        }
    }
    requestAction = (nextProps) => {
        let { getByIdModel, addModel, editModel } = nextProps;
        if (getByIdModel && getByIdModel.isLoading) {
            _currentAction = commonConstant.GET_BY_ID;
            return false;
        }
        if (addModel && addModel.isLoading) {
            _currentAction = commonConstant.ADD;
            return false;
        }
        if (editModel && editModel.isLoading) {
            _currentAction = commonConstant.EDIT;
            return false;
        }
    }
    responseAction = (nextProps) => {
        const { t, addModel, editModel, getByIdModel } = nextProps;
        switch (_currentAction) {
            //ADD
            case (commonConstant.ADD):
                if (!addModel || !addModel.responseData ||
                    handleErrorBasic(addModel.responseData.status, t(key.permission.permissionAddTitle), t)) return;
                const result = addModel.responseData;
                if (result.Success) {
                    toastr.success(t(key.permission.permissionAddTitle), t(key.common.addDataSuccess));
                    this.setState({
                        fields: _model,
                    });
                } else if (result.Data && result.Data.Code === commonConstant.ERROR_MSG_EXISTED) {
                    toastr.error(t(key.permission.permissionAddTitle), t(key.permission.permissionAddExistErrorMsg));
                } else {
                    toastr.error(t(key.permission.permissionAddTitle), t(key.common.addDataFail));
                }
                break;
            //EDIT
            case (commonConstant.EDIT):
                if (!editModel || !editModel.responseData ||
                    handleErrorBasic(editModel.responseData.status, t(key.permission.permissionEditTitle), t)) return;
                if (editModel.responseData.Success) {
                    setSessionStorage(commonConstant.KEY_EDIT, this.state.fields.Key);
                    toastr.success(t(key.permission.permissionEditTitle), t(key.common.editDataSuccess));
                }
                else {
                    toastr.error(t(key.permission.permissionEditTitle), t(key.common.editDataFail));
                }
                break;
            //GETBYID
            case (commonConstant.GET_BY_ID):
                if (!getByIdModel || !getByIdModel.responseData ||
                    handleErrorBasic(getByIdModel.responseData.status, t(key.permission.permissionGetByIdTitle), t)) return;
                if (getByIdModel.responseData.Success) {
                    const { Data } = getByIdModel.responseData;
                    if (Data) {
                        this.setState({
                            fields: cloneObject(Data),
                        });
                    }
                } else {
                    toastr.error(t(key.permission.permissionGetByIdTitle), t(key.common.errorGetByIdAPI));
                }
                break;
            //DEFAULT    
            default:
                break;
        }
        _currentAction = null;
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    addOrEditAction = (fields) => {
        const { match } = this.props;
        if (handleParameter(match) === commonConstant.ParamAdd) {
            this.props.addPermissionAction(fields);
        }
        else {
            this.props.editPermissionAction(fields);
        }
    }
    setStateFields = (fields) => {
        this.setState({
            ...this.state,
            fields: fields,
        });
    }
    render() {
        const { t, match, addModel, editModel, getByIdModel, history } = this.props;
        let isCaseAdd = handleParameter(match) === commonConstant.ParamAdd;
        let title = handleParameter(match) === commonConstant.ParamAdd ? t(key.permission.permissionAddTitle) : t(key.permission.permissionEditTitle);
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading} spinner
                    text={getByIdModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading ? '' : 'overlayFullScreen'}>
                    <AddOrEdit t={t} keyFields={key.permission} keyCommonFields={key.common}
                        tableName="PERMISSION" title={title} isCaseAdd={isCaseAdd}
                        history={history} fields={this.state.fields}
                        callbackAddOrEditAction={this.addOrEditAction}
                        callbackSetStateFields={this.setStateFields}
                        fieldInfos={this.state.fieldInfos}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdPermissionReducer,
    addModel: state.addPermissionReducer,
    editModel: state.editPermissionReducer,
});
const mapDispatchToProps = {
    getByIdPermissionAction,
    addPermissionAction,
    editPermissionAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(PermissionUpdate));