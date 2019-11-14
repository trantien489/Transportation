/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { getAllCategoriesAction, changeStatusCategoryAction, deleteCategoryAction } from '../../../actions/category';
import { commonConstant } from '../../../contants/common';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { getSessionStorage } from '../../../utilities/storage';
import { MultiGridView } from "../../../components/multiGridView/multiGridView";
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowStatusConfirmModal: false,
            isShowDeleteConfirmModal: false,
            isEnableFilter: getSessionStorage(commonConstant.FILTER_CATEGORY) === 'true' ? true : false,
        };
        //Add token to header
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.getAllAction();
    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    render() {
        const { t, changeStatusModel, deleteModel, getAllModel } = this.props;
        const disableColumns = ['Order', 'ParentId'];
        const isLoadingOver = changeStatusModel.isLoading || deleteModel.isLoading;
        if (!getAllModel || !changeStatusModel || !deleteModel) return;
        if (getAllModel.isLoading) {
            return <LoadingOverlay active spinner text={t(key.common.loadingSpinner)} />
        } else if (getAllModel.isError) {
            return <ErrorAlert responseData={getAllModel.responseData}
                msgErrorGetAPI={t(key.common.errorGetAllAPI)} t={this.props.t}
                msgRedirectToLogin={t(key.common.redirectToLogin)} />
        } else {
            if (getAllModel.responseData && getAllModel.responseData.Data) {
                return <MultiGridView
                    isLoadingOver={isLoadingOver}
                    records={getAllModel.responseData.Data}
                    keyFields={key.category}
                    tableName="CATEGORY"
                    disableColumns={disableColumns}
                    {...this.props}
                />
            } else {
                return <div className="animated fadeIn"><Row><Col xs="12" lg="12">{t(key.common.noDataFound)}</Col></Row></div>;
            }
        }
    }
}
const mapStateToProps = state => ({
    getAllModel: state.getAllCategoriesReducer,
    changeStatusModel: state.changeStatusCategoryReducer,
    deleteModel: state.deleteCategoryReducer,
});
const mapDispatchToProps = {
    getAllAction: getAllCategoriesAction,
    changeStatusAction: changeStatusCategoryAction,
    deleteAction: deleteCategoryAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Category));