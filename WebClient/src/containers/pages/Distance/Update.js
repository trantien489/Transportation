import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdDistanceAction, addDistanceAction, editDistanceAction } from '../../../actions/distance';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
class DistanceUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Detail fields
            new InputField("Decripstion", ControlType.Text, '', true)
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
                        keyFields={key.distance}
                        tableName="DISTANCE"
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdDistanceReducer,
    addModel: state.addDistanceReducer,
    editModel: state.editDistanceReducer,

});
const mapDispatchToProps = {
    getByIdAction: getByIdDistanceAction,
    addAction: addDistanceAction,
    editAction: editDistanceAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(DistanceUpdate));