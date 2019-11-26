import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdCapacityAction, addCapacityAction, editCapacityAction } from '../../../actions/capacity';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
class CapacityUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("Type", ControlType.Text, '', true)
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
                        keyFields={key.capacity}
                        tableName="CAPACITY"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdCapacityReducer,
    addModel: state.addCapacityReducer,
    editModel: state.editCapacityReducer,

});
const mapDispatchToProps = {
    getByIdAction: getByIdCapacityAction,
    addAction: addCapacityAction,
    editAction: editCapacityAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(CapacityUpdate));