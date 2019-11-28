import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdDriverAction, addDriverAction, editDriverAction } from '../../../actions/driver';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { DriverType } from '../../../contants/staticData';

class DriverUpdate extends Component {
    constructor(props) {
        super(props);
        let driverTypeOptions = [
            {
                value : DriverType.Primary,
                label : 'Tài xế'    
            },
            {
                value : DriverType.Secondary,
                label : 'Phụ xe'    
            },
        ];
        let fields = [
            //Detail fields
            new InputField("Name", ControlType.Text, '', true),
            new InputField("Phone1", ControlType.Text, '', true),
            new InputField("Phone2", ControlType.Text, '', false),
            new InputField("Address", ControlType.Text, '', true),
            new InputField("DriverTypeId", ControlType.ReactSelect, '', true, false,false,null,{
                options : driverTypeOptions
            }),
            new InputField("Note", ControlType.Text, '', false),
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

    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }


    render() {
        const { t, addModel, editModel, getByIdModel } = this.props;
        let loading = addModel.isLoading || editModel.isLoading || getByIdModel.isLoading;

        // loadingDataWhenFirstIn is true, khi muon dang tai data
        let loadingDataWhenFirstIn = getByIdModel.isLoading;
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
                        keyFields={key.driver}
                        tableName="DRIVER"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdDriverReducer,
    addModel: state.addDriverReducer,
    editModel: state.editDriverReducer,

});
const mapDispatchToProps = {
    getByIdAction: getByIdDriverAction,
    addAction: addDriverAction,
    editAction: editDriverAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(DriverUpdate));