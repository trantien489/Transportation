import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { hasRecordsActionReducer, applyCheckAuthorized } from '../../../utilities/validate';
import { getAllTransportationAction, changeStatusTransportationAction, deleteTransportationAction } from '../../../actions/transportation';
import { GridView } from '../../../components/gridView/gridView';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { TRANSPORTATION } from "../../../actionTypes/transportation";
import { toCurrency } from "../../../utilities/format";
import { handleErrorBasic } from '../../../utilities/handler';

class Transportation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAction: []
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy
        this.props.getAllAction();
    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
        let { getAllModel } = nextProps;
        const { currentAction } = this.state;
        let result = false;
        if (getAllModel.isLoading && !isExistAction(currentAction, TRANSPORTATION.GETALL)) {
            addAction(currentAction, TRANSPORTATION.GETALL)
            result = true;
        }

        return result;
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        let { getAllModel, t } = nextProps;
        const { currentAction } = this.state;

        //Get All Transportation
        if (!getAllModel.isLoading && isExistAction(currentAction, TRANSPORTATION.GETALL)) {
            if (!getAllModel.responseData ||
                handleErrorBasic(getAllModel.responseData.status, 'Tải danh sách Vận chuyển', t)) return;
            
            let records = getAllModel.responseData.Data.Records;
            records.forEach(item => {
                item.Money = toCurrency(item.Money)
            });
           
            this.setState({ currentAction: removeAction(currentAction, TRANSPORTATION.GETALL) });
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    render() {
        const { t, changeStatusModel, deleteModel, getAllModel } = this.props;
        let disableColumns = ['DriverSecondaryName', ];//['Id','Status'];
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
                return <GridView
                    isLoadingOver={isLoadingOver}
                    records={getAllModel.responseData.Data.Records}
                    keyFields={key.transportation}
                    tableName="TRANSPORTATION"
                    disableColumns={disableColumns}
                    {...this.props}
                />
            } else {
                return <div className="animated fadeIn"><Row><Col xs="12" lg="12">{t(key.common.noDataFound)}</Col></Row></div>;
            }
        }
    }
}
//Nhận dữ liệu trả về từ reducer (reducer thì lấy data từ api)
const mapStateToProps = state => ({
    getAllModel: state.getAllTransportationReducer,
    changeStatusModel: state.changeStatusTransportationReducer,
    deleteModel: state.deleteTransportationReducer,
});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    getAllAction: getAllTransportationAction,
    changeStatusAction: changeStatusTransportationAction,
    deleteAction: deleteTransportationAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Transportation));