import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdContactAction, addContactAction, editContactAction } from '../../../actions/contact';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { statusModels } from '../../../contants/staticData';
class ContactUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            //Detail fields
            new InputField("Name", ControlType.Text, '', true),
            new InputField("Company", ControlType.Text, '', true),
            new InputField("Address", ControlType.Text, '', true),
            new InputField("Mobile", ControlType.Text, '', true),
            new InputField("Mail", ControlType.Text, '', true),
            new InputField("Detail", ControlType.Text, '', true),
            new InputField("Status", ControlType.Select, 1, false, null, null, null, statusModels),
            //Default fields
            new InputField("CreatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("CreatedBy", ControlType.Text, null, false, true, true),
            new InputField("UpdatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("UpdatedBy", ControlType.Text, null, false, true, true),
        ]
        this.state = {
           fields: fields,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
    }
    requestAction = () => {
    }
    responseAction = () => {
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    
    render() {
        const { t, addModel, editModel, getByIdModel } = this.props;
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading} spinner
                    text={getByIdModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading ? '' : 'overlayFullScreen'}>
                    <AddOrEdit 
                        keyFields={key.contact} 
                        tableName="CONTACT" 
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdContactReducer,
    addModel: state.addContactReducer,
    editModel: state.editContactReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdContactAction,
    addAction: addContactAction,
    editAction: editContactAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(ContactUpdate));