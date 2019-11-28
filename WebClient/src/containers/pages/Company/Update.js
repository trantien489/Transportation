import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdCompanyAction, addCompanyAction, editCompanyAction } from '../../../actions/company';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';

class CompanyUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("Code", ControlType.Text, '', true),
            new InputField("Name", ControlType.Text, '', true),
            new InputField("Address", ControlType.Text, '', true),
            new InputField("Distance", ControlType.Number, '', true),
            new InputField("Note", ControlType.Text, '', false),

        ]
        this.state = {
            fields: fields,
            currentAction: []
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
       
    }
    requestAction = (nextProps) => {
       
    }
    responseAction = (nextProps) => {

    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }


    render() {
        const { t, addModel, editModel, getByIdModel } = this.props;
        const { currentAction } = this.state;

        let loading = currentAction.length > 0 || addModel.isLoading || editModel.isLoading;

        // loadingDataWhenFirstIn is true, khi muon dang tai data
        let loadingDataWhenFirstIn = getByIdModel.isLoading  ;
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
                    className={loadingClass}>
                    <AddOrEdit
                        keyFields={key.company}
                        tableName="COMPANY"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdCompanyReducer,
    addModel: state.addCompanyReducer,
    editModel: state.editCompanyReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdCompanyAction,
    addAction: addCompanyAction,
    editAction: editCompanyAction,
   
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(CompanyUpdate));