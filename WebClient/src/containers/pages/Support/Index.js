import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { toastr } from 'react-redux-toastr';
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { commonConstant } from '../../../contants/common';
import { hasRecordsActionReducer, isNullActionReducer, removeItemFromItems, changeStatusItemFromItems, applyCheckAuthorized } from '../../../utilities/validate';
import { getSessionStorage } from '../../../utilities/storage';
import { getAllSupportAction, changeStatusSupportAction, deleteSupportAction } from '../../../actions/support';
import { GridView } from '../../../components/gridView/gridView';
var _handleItem = null;
var _currentAction = null;
class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnableFilter: getSessionStorage(commonConstant.FILTER_SUPPORT) === 'true' ? true : false,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.getAllSupportAction();
    }
    requestAction = (nextProps) => {
        let { deleteModel, changeStatusModel } = nextProps;
        if (deleteModel && deleteModel.isLoading) {
            _currentAction = commonConstant.DELETE;
            return true;
        }
        if (changeStatusModel && changeStatusModel.isLoading) {
            _currentAction = commonConstant.CHANGE_STATUS;
            return true;
        }
    }
    responseAction = (nextProps) => {
        let { t, getAllModel, deleteModel, changeStatusModel } = nextProps;
        let hasData = hasRecordsActionReducer(getAllModel);
        if (hasData) {
            let records = getAllModel.responseData.Data.Records;
            switch (_currentAction && true) {
                //DELETE
                case (commonConstant.DELETE && !isNullActionReducer(deleteModel)):
                    if (deleteModel.isError) {
                        toastr.error(t(key.common.deleteInfo), t(key.common.deleteErrorInfo));
                    } else {
                        getAllModel.responseData.Data.Records = removeItemFromItems(_handleItem, records);
                        toastr.success(t(key.common.deleteInfo), t(key.common.deleteSuccessInfo));
                    }
                    break;
                //CHANGE_STATUS
                case (commonConstant.CHANGE_STATUS && !isNullActionReducer(changeStatusModel)):
                    if (changeStatusModel.isError) {
                        toastr.error(t(key.common.switchStatusInfo), t(key.common.switchStatusErrorInfo));
                    } else {
                        getAllModel.responseData.Data.Records = changeStatusItemFromItems(_handleItem, records);
                        toastr.success(t(key.common.switchStatusInfo), t(key.common.switchStatusSuccessInfo));
                    }
                    break;
                //DEFAULT    
                default:
                    break;
            }
            _currentAction = null;
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    changeStatusAction = (item) => {
        _handleItem = item;
        this.props.changeStatusSupportAction(item.Id);
    }
    deleteAction = (item) => {
        _handleItem = item;
        this.props.deleteSupportAction(item.Id);
    }
    editAction = (item) => {
        const { history } = this.props;
        if (history) {
            history.push('support/' + item.Id);
        }
    }
    render() {
        const { t, changeStatusModel, deleteModel, getAllModel } = this.props;
        let disableColumns = [];//['Id','Status'];
        if (!getAllModel || !changeStatusModel || !deleteModel) return;
        const isLoadingOver = changeStatusModel.isLoading || deleteModel.isLoading;
        if (getAllModel.isLoading) {
            return <LoadingOverlay active spinner text={t(key.common.loadingSpinner)} />
        } else if (getAllModel.isError) {
            return <ErrorAlert responseData={getAllModel.responseData}
                msgErrorGetAPI={t(key.common.errorGetAllAPI)} t={this.props.t}
                msgRedirectToLogin={t(key.common.redirectToLogin)} />
        } else {
            if (hasRecordsActionReducer(getAllModel)) {
                return <GridView records={getAllModel.responseData.Data.Records} t={t} isLoadingOver={isLoadingOver}
                    keyFields={key.support} tableName="SUPPORT"
                    callbackChangeStatusAction={this.changeStatusAction} 
                    callbackDeleteAction={this.deleteAction} 
                    callbackEditAction={this.editAction} 
                    disableColumns={disableColumns}
                    />
            } else {
                return <div className="animated fadeIn"><Row><Col xs="12" lg="12">{t(key.common.noDataFound)}</Col></Row></div>;
            }
        }
    }
}
//Nhận dữ liệu trả về từ reducer (reducer thì lấy data từ api)
const mapStateToProps = state => ({
    getAllModel: state.getAllSupportReducer,
    changeStatusModel: state.changeStatusSupportReducer,
    deleteModel: state.deleteSupportReducer,
});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    getAllSupportAction,
    changeStatusSupportAction,
    deleteSupportAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Support));