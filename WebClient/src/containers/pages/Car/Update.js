import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdCarAction, addCarAction, editCarAction } from '../../../actions/car';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { capacityGetAllSelectAction } from '../../../actions/capacity';
import { CAPACITY } from "../../../actionTypes/capacity";
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { handleErrorBasic } from '../../../utilities/handler';

class CarUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("CarNumber", ControlType.Text, '', true),
            new InputField("CapacityId", ControlType.ReactSelect, 0, true),
            new InputField("Length", ControlType.Number, '', true),
            new InputField("Width", ControlType.Number, '', true),
            new InputField("Height", ControlType.Number, '', true),
            new InputField("Note", ControlType.Text, '', false),

        ]
        this.state = {
            fields: fields,
            currentAction: []
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.capacityGetAllSelectAction();
    }
    requestAction = (nextProps) => {
        let { capacityGetAllSelectReducer } = nextProps;
        const { currentAction } = this.state;
        let result = false;
        if (capacityGetAllSelectReducer.isLoading && !isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {
            addAction(currentAction, CAPACITY.GETALL_SELECT)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        const { capacityGetAllSelectReducer, t } = nextProps;
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
            // loadingClass = loadingDataWhenFirstIn ? '' : 'overlayFullScreen';
        }

        return (
            <div className="animated fadeIn">
                <LoadingOverlay 
                    active={loading} 
                    spinner
                    text={loadingText}
                    className={loadingClass}>
                    <AddOrEdit
                        keyFields={key.car}
                        tableName="CAR"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdCarReducer,
    addModel: state.addCarReducer,
    editModel: state.editCarReducer,
    capacityGetAllSelectReducer : state.capacityGetAllSelectReducer
});
const mapDispatchToProps = {
    getByIdAction: getByIdCarAction,
    addAction: addCarAction,
    editAction: editCarAction,
    capacityGetAllSelectAction
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(CarUpdate));