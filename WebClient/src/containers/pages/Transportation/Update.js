import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdTransportationAction, addTransportationAction, editTransportationAction } from '../../../actions/transportation';
import { carGetAllSelectAction } from '../../../actions/car';
import { applyCheckAuthorized } from '../../../utilities/validate'; 
import { formatDateTimeToString, toCurrency } from '../../../utilities/format'; 
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { DriverType } from '../../../contants/staticData';
import { driverGetAllSelectAction } from '../../../actions/driver';
import { companyGetAllSelectAction } from '../../../actions/company';
import { generateMoneyTransportationAction } from '../../../actions/transportation';
import { handleErrorBasic } from '../../../utilities/handler';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { COMPANY } from "../../../actionTypes/company";
import { DRIVER } from "../../../actionTypes/driver";
import { CAR } from "../../../actionTypes/car";
import { TRANSPORTATION } from "../../../actionTypes/transportation";

class TransportationUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("TransportDate", ControlType.DateTime, formatDateTimeToString(new Date().setHours(0,0,0,0)), true),
            new InputField("CarId", ControlType.ReactSelect, 0, true),
            new InputField("CompanyId", ControlType.ReactSelect, 0, true),
            new InputField("DocumentNumber", ControlType.Text, '', true),
            new InputField("Report", ControlType.Text, '', false),
            new InputField("Money", ControlType.Money, '', true),
            new InputField("Note", ControlType.Text, '', false),
            new InputField("DriverPrimaryId", ControlType.ReactSelect, 0, true),
            new InputField("DriverSecondaryId", ControlType.ReactSelect, null, false),
        ]
        this.state = {
            fields: fields,
            currentAction: []
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.carGetAllSelectAction();
        this.props.driverGetAllSelectAction();
        this.props.companyGetAllSelectAction();
    }
    requestAction = (nextProps) => {
        let { carGetAllSelectReducer, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer } = nextProps;
        const { currentAction } = this.state;
        let result = false;
        if (carGetAllSelectReducer.isLoading && !isExistAction(currentAction, CAR.GETALL_SELECT)) {
            addAction(currentAction, CAR.GETALL_SELECT)
            result = true;
        }

        if (driverGetAllSelectReducer.isLoading && !isExistAction(currentAction, DRIVER.GETALL_SELECT)) {
            addAction(currentAction, DRIVER.GETALL_SELECT)
            result = true;
        }

        if (companyGetAllSelectReducer.isLoading && !isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            addAction(currentAction, COMPANY.GETALL_SELECT)
            result = true;
        }

        if (generateMoneyTransportationReducer.isLoading && !isExistAction(currentAction, TRANSPORTATION.GENERATEMONEY)) {
            addAction(currentAction, TRANSPORTATION.GENERATEMONEY)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        const { carGetAllSelectReducer, t, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer } = nextProps;
        const { fields, currentAction } = this.state;

        //Car Get All Select => Dropdown List
        if (!carGetAllSelectReducer.isLoading && isExistAction(currentAction, CAR.GETALL_SELECT)) {
            if (!carGetAllSelectReducer.responseData ||
                handleErrorBasic(carGetAllSelectReducer.responseData.status, 'Tải danh sách Xe', t)) return;

            let carIdField = fields.find(obj => obj.Name === "CarId");
            carIdField.SelectConfig.options = carGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: `${item.CarNumber} | ${item.CapacityType}`
                }
            });
            this.setState({ currentAction: removeAction(currentAction, CAR.GETALL_SELECT) });
        }

        //Driver Get All Select => Dropdown List
        if (!driverGetAllSelectReducer.isLoading && isExistAction(currentAction, DRIVER.GETALL_SELECT)) {
            if ( !driverGetAllSelectReducer.responseData ||
                handleErrorBasic(driverGetAllSelectReducer.responseData.status, 'Tải danh sách Xe', t)) return;

            const data = driverGetAllSelectReducer.responseData.Data.Records;

            let DriverPrimaryIdField = fields.find(obj => obj.Name === "DriverPrimaryId");
            let DriverSecondaryIdField = fields.find(obj => obj.Name === "DriverSecondaryId");


            DriverPrimaryIdField.SelectConfig.options = data.filter((item) => {
                return item.DriverTypeId === DriverType.Primary
            }).map(item => {
                return {
                    value: item.Id,
                    label: item.Name
                }
            });
            DriverSecondaryIdField.SelectConfig.options = data.filter((item) => {
                return item.DriverTypeId === DriverType.Secondary
            }).map(item => {
                return {
                    value: item.Id,
                    label: item.Name
                }
            });

            this.setState({ currentAction: removeAction(currentAction, DRIVER.GETALL_SELECT) });
        }

        //Company Get All Select => Dropdown List
        if (!companyGetAllSelectReducer.isLoading && isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            if (!companyGetAllSelectReducer.responseData ||
                handleErrorBasic(companyGetAllSelectReducer.responseData.status, 'Tải danh sách Xe', t)) return;

            let CompanyIdField = fields.find(obj => obj.Name === "CompanyId");
            CompanyIdField.SelectConfig.options = companyGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: `${item.Code} | ${item.Name}`
                }
            });
            this.setState({ currentAction: removeAction(currentAction, COMPANY.GETALL_SELECT) });
        }

        //Generate Money
        if (!generateMoneyTransportationReducer.isLoading && isExistAction(currentAction, TRANSPORTATION.GENERATEMONEY)) {
            if (!generateMoneyTransportationReducer.responseData ||
                handleErrorBasic(generateMoneyTransportationReducer.responseData.status, 'Loading thành tiền', t)) return;

            this.setState({ currentAction: removeAction(currentAction, TRANSPORTATION.GENERATEMONEY)});
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }

    handleChangeFieldsCallBack = (previousModel, nextModel) => {
       if(nextModel.CompanyId !== 0 && nextModel.CarId !== 0 ){
            if(nextModel.CompanyId !== previousModel.CompanyId || nextModel.CarId !== previousModel.CarId){
                this.props.generateMoneyTransportationAction(`?companyid=${nextModel.CompanyId}&carid=${nextModel.CarId}`);
            }
       }
    }

    renderCallback = (model) => {
        const { generateMoneyTransportationReducer } = this.props;

        if(generateMoneyTransportationReducer.responseData && generateMoneyTransportationReducer.responseData.Data >= 0){
            let money = generateMoneyTransportationReducer.responseData.Data;
            model.Money = money === 0 ? 0 : toCurrency(money);
            delete generateMoneyTransportationReducer.responseData;
        }
    }


    render() {
        const { t, addModel, editModel, getByIdModel, carGetAllSelectReducer, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer } = this.props;
        const { currentAction } = this.state;

        let loading = currentAction.length > 0 || addModel.isLoading || editModel.isLoading;

        // loadingDataWhenFirstIn is true, khi muon dang tai data
        let loadingDataWhenFirstIn = getByIdModel.isLoading || carGetAllSelectReducer.isLoading || driverGetAllSelectReducer.isLoading || companyGetAllSelectReducer.isLoading || generateMoneyTransportationReducer.isLoading;
        let loadingText = '', loadingClass = '';

        if (loading) {
            loadingText = loadingDataWhenFirstIn ? t(key.common.loadingSpinner) : t(key.common.processingSpinner);
            loadingClass = loadingDataWhenFirstIn ? '' : 'overlayFullScreen';
        }

        return (
            <div className="animated fadeIn">
                <LoadingOverlay
                    active={loading}
                    spinner
                    text={loadingText}
                    className={loadingClass}
                >
                    <AddOrEdit
                        keyFields={key.transportation}
                        tableName="TRANSPORTATION"
                        fields={this.state.fields}
                        handleChangeFieldsCallBack={this.handleChangeFieldsCallBack}
                        renderCallback={this.renderCallback}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdTransportationReducer,
    addModel: state.addTransportationReducer,
    editModel: state.editTransportationReducer,
    carGetAllSelectReducer: state.carGetAllSelectReducer,
    driverGetAllSelectReducer: state.driverGetAllSelectReducer,
    companyGetAllSelectReducer: state.companyGetAllSelectReducer,
    generateMoneyTransportationReducer: state.generateMoneyTransportationReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdTransportationAction,
    addAction: addTransportationAction,
    editAction: editTransportationAction,
    carGetAllSelectAction,
    driverGetAllSelectAction,
    companyGetAllSelectAction,
    generateMoneyTransportationAction,

};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(TransportationUpdate));