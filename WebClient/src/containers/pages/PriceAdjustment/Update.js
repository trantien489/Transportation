import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdPriceAdjustmentAction, addPriceAdjustmentAction, editPriceAdjustmentAction } from '../../../actions/priceAdjustment';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { handleErrorBasic } from '../../../utilities/handler';
import { capacityGetAllSelectAction } from '../../../actions/capacity';
import { CAPACITY } from "../../../actionTypes/capacity";
import { companyGetAllSelectAction } from '../../../actions/company';
import { COMPANY } from "../../../actionTypes/company";

class PriceAdjustmentUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("CompanyId", ControlType.ReactSelect, 0, true),
            new InputField("CapacityId", ControlType.ReactSelect, 0, true),
            new InputField("UpPrice", ControlType.Money, 0, true),
            new InputField("DownPrice", ControlType.Money, 0, true),
        ]
        this.state = {
            fields: fields,
            currentAction: []
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.capacityGetAllSelectAction();
        this.props.companyGetAllSelectAction();

    }
    requestAction = (nextProps) => {
        let { capacityGetAllSelectReducer, companyGetAllSelectReducer } = nextProps;
        const { currentAction } = this.state;
        let result = false;

        if (capacityGetAllSelectReducer.isLoading && !isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {
            addAction(currentAction, CAPACITY.GETALL_SELECT)
            result = true;
        }
        if (companyGetAllSelectReducer.isLoading && !isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            addAction(currentAction, COMPANY.GETALL_SELECT)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        const { capacityGetAllSelectReducer, t, companyGetAllSelectReducer } = nextProps;
        const { fields, currentAction } = this.state;

        //Capacity Get All Select => Dropdown List
        if (!capacityGetAllSelectReducer.isLoading && isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {
            if (!capacityGetAllSelectReducer.responseData ||
                handleErrorBasic(capacityGetAllSelectReducer.responseData.status, 'Tải danh thể tích xe', t)) return;

            let capacityIdField = fields.find(obj => obj.Name === "CapacityId");
            capacityIdField.SelectConfig.options = capacityGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: item.Type
                }
            });
            this.setState({ currentAction: removeAction(currentAction, CAPACITY.GETALL_SELECT) });
        }
        
        //Company Get All Select => Dropdown List
        if (!companyGetAllSelectReducer.isLoading && isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            if (!companyGetAllSelectReducer.responseData ||
                handleErrorBasic(companyGetAllSelectReducer.responseData.status, 'Tải danh công ty', t)) return;

            let companyIdField = fields.find(obj => obj.Name === "CompanyId");
            companyIdField.SelectConfig.options = companyGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: `${item.Code} - ${item.Name}`
                }
            });
            this.setState({ currentAction: removeAction(currentAction, COMPANY.GETALL_SELECT) });
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }


    render() {
        const { t, addModel, editModel, getByIdModel, capacityGetAllSelectReducer } = this.props;
        const { currentAction } = this.state;

        let loading = currentAction.length > 0 || addModel.isLoading || editModel.isLoading;

        // loadingDataWhenFirstIn is true, khi muon dang tai data
        let loadingDataWhenFirstIn = getByIdModel.isLoading || capacityGetAllSelectReducer.isLoading ;
        let loadingText = '', loadingClass = '';

        if (loading) {
            loadingText = loadingDataWhenFirstIn ? t(key.common.loadingSpinner) : t(key.common.processingSpinner);
            //loadingClass = loadingDataWhenFirstIn ? '' : 'overlayFullScreen';
        }

        return (
            <div className="animated fadeIn">
                <LoadingOverlay 
                    active={loading} 
                    spinner
                    text={loadingText}
                    className={loadingClass}>
                    <AddOrEdit
                        keyFields={key.priceAdjustment}
                        tableName="PRICEADJUSTMENT"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdPriceAdjustmentReducer,
    addModel: state.addPriceAdjustmentReducer,
    editModel: state.editPriceAdjustmentReducer,
    capacityGetAllSelectReducer : state.capacityGetAllSelectReducer,
    companyGetAllSelectReducer : state.companyGetAllSelectReducer,

});
const mapDispatchToProps = {
    getByIdAction: getByIdPriceAdjustmentAction,
    addAction: addPriceAdjustmentAction,
    editAction: editPriceAdjustmentAction,
    capacityGetAllSelectAction,
    companyGetAllSelectAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(PriceAdjustmentUpdate));