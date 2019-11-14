import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdAdvertiseAction, addAdvertiseAction, editAdvertiseAction } from '../../../actions/advertise';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { getAllTemplatePositionAction } from '../../../actions/templatePosition';
class AdvertiseUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            //Detail fields
            new InputField("Name", ControlType.Text, '', true),
            new InputField("Image", ControlType.Text, '', true),
            new InputField("Width", ControlType.Text, '', true),
            new InputField("Height", ControlType.Text, '', true),
            new InputField("Link", ControlType.Text, '', true),
            new InputField("Target", ControlType.Text, '', true),
            new InputField("TemplatePositionId", ControlType.ReactSelect, '', true, null, null, null, {}),
            new InputField("Order", ControlType.Number, 1, true),
            new InputField("Status", ControlType.ReactSelect, 1, true, null, null, null, {}),
            //Default fields
            new InputField("CreatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("CreatedBy", ControlType.Text, null, false, true, true),
            new InputField("UpdatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("UpdatedBy", ControlType.Text, null, false, true, true),
        ]
        this.state = {
            fields: fields
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.getAllTemplatePositionAction();
    }
    requestAction = (nextProps) => {

    }
    responseAction = (nextProps) => {
        const { templatePositionGetAllModel } = nextProps;
        const { fields } = this.state;
        var TemplatePositionIdField = fields.find(obj => obj.Name === "TemplatePositionId");
        if (!templatePositionGetAllModel.isLoading && !TemplatePositionIdField.SelectConfig.options) {
            const { Data } = templatePositionGetAllModel.responseData;
            if (Data) {
                TemplatePositionIdField.SelectConfig.options = Data.Records.map(item => {
                    return {
                        value: item.Id,
                        label: item.Name
                    }
                });

            }
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }

    componentWillReceiveNewProps(newProps) {
        console.log('componentWillReceiveNewProps');
    }

    render() {
        console.log('render');
        const { t, addModel, editModel, getByIdModel, templatePositionGetAllModel } = this.props;
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading || templatePositionGetAllModel.isLoading} spinner
                    text={getByIdModel.isLoading || templatePositionGetAllModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading || templatePositionGetAllModel.isLoading ? '' : 'overlayFullScreen'}>
                    <AddOrEdit
                        keyFields={key.advertise}
                        tableName="ADVERTISE"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdAdvertiseReducer,
    addModel: state.addAdvertiseReducer,
    editModel: state.editAdvertiseReducer,
    templatePositionGetAllModel: state.getAllTemplatePositionReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdAdvertiseAction,
    addAction: addAdvertiseAction,
    editAction: editAdvertiseAction,
    getAllTemplatePositionAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(AdvertiseUpdate));