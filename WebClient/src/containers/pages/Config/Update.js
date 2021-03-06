import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdConfigAction, addConfigAction, editConfigAction } from '../../../actions/config';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
class ConfigUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            //Detail fields
            new InputField("Key", ControlType.Text, '', true),
            new InputField("Value", ControlType.Text, '', true),
            new InputField("Description", ControlType.Text, '', true),
            new InputField("ConfigTypeId", ControlType.ReactSelect, '', true, null, null, null, {}),
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

    }
    requestAction = (nextProps) => {
       
    }
    responseAction = (nextProps) => {
        const { configTypeGetAllModel } = nextProps;
        const { fields } = this.state;
        var ConfigTypeIdField = fields.find(obj => obj.Name === "ConfigTypeId");
        if (!configTypeGetAllModel.isLoading && !ConfigTypeIdField.SelectConfig.options) {
            const { Data } = configTypeGetAllModel.responseData;
            if (Data) {
                ConfigTypeIdField.SelectConfig.options = Data.Records.map(item => {
                    return {
                        value: item.Id,
                        label: item.Key
                    }
                });

            }
        }
       
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }


    render() {
        const { t, addModel, editModel, getByIdModel, configTypeGetAllModel } = this.props;
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading || configTypeGetAllModel.isLoading} spinner
                    text={getByIdModel.isLoading || configTypeGetAllModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading || configTypeGetAllModel.isLoading ? '' : 'overlayFullScreen'}>
                    <AddOrEdit
                        keyFields={key.config}
                        tableName="CONFIG"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdConfigReducer,
    addModel: state.addConfigReducer,
    editModel: state.editConfigReducer,

});
const mapDispatchToProps = {
    getByIdAction: getByIdConfigAction,
    addAction: addConfigAction,
    editAction: editConfigAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(ConfigUpdate));