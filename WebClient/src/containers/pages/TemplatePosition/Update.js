import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdTemplatePositionAction, addTemplatePositionAction, editTemplatePositionAction } from '../../../actions/templatePosition';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
class TemplatePositionUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            //Detail fields
            new InputField("Name", ControlType.Text, '', true),
            new InputField("Order", ControlType.Number, 1, true),
            new InputField("Status", ControlType.ReactSelect, 1, true, null, null, null,{}),
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
      //Sau khi render hàm này sẽ chạy
    }
    requestAction = (nextProps) => {
      //Khi có action phát đi thì hàm này sẽ handle
    }
    responseAction = (nextProps) => {
      //Khi api trả dữ liệu về thì hàm này sẽ handle
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
                        keyFields={key.templatePosition} 
                        tableName="TEMPLATEPOSITION" 
                        fields={this.state.fields}
                        {...this.props}
                    />
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdTemplatePositionReducer,
    addModel: state.addTemplatePositionReducer,
    editModel: state.editTemplatePositionReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdTemplatePositionAction,
    addAction: addTemplatePositionAction,
    editAction: editTemplatePositionAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(TemplatePositionUpdate));