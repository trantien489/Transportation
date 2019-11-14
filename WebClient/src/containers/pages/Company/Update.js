import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { AddOrEdit } from '../../../components/addOrEdit/addOrEdit';
import { ControlType, InputField } from '../../../contants/ControlType';
import { getByIdCompanyAction, addCompanyAction, editCompanyAction} from '../../../actions/company';
import { getAllLanguageAction } from '../../../actions/language';
class CompanyUpdate extends Component {
    constructor(props) {
        super(props);
        let fields = [
            //Default fields
            new InputField("Id", ControlType.Text, null, false, true, true),
            new InputField("CreatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("CreatedBy", ControlType.Text, null, false, true, true),
            new InputField("UpdatedDate", ControlType.DateTime, null, false, true, true),
            new InputField("UpdatedBy", ControlType.Text, null, false, true, true),
            
            //Detail fields
            new InputField("Name", ControlType.Text, '', true),
            new InputField("ShortName", ControlType.Text, '', true),
            new InputField("Address", ControlType.Text, '', true),
            new InputField("Mobile", ControlType.Text, '', true),
            new InputField("Hotline", ControlType.Text, '', true),
            new InputField("Fax", ControlType.Text, '', true),
            new InputField("Map", ControlType.Text, '', true),
            new InputField("Logo", ControlType.Text, '', true),
            new InputField("SocialNetwork", ControlType.Text, '', true),
            new InputField("LanguageId", ControlType.ReactSelect, '', true, null, null, null,[]),
            new InputField("Status", ControlType.ReactSelect, 1, false, null, null, null,[]),
        ]
        this.state = {
           fields: fields,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
      //Sau khi render hàm này sẽ chạy
      this.props.getAllLanguageAction();
    }
    requestAction = (nextProps) => {
      //Khi có action phát đi thì hàm này sẽ handle
    }
    responseAction = (nextProps) => {
      //Khi api trả dữ liệu về thì hàm này sẽ handle
        const { getAllLanguageModel } = nextProps;
        const { fields } = this.state;
        const LanguageIdField = fields.find(x=>x.Name === 'LanguageId');
        if(!getAllLanguageModel.isLoading){
            const { Data } = getAllLanguageModel.responseData;
            if(Data){
                LanguageIdField.DataSelect = Data.Records.map(item =>{
                    return {
                        value: item.Id,
                        label: item.Name
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
        const { t, addModel, editModel, getByIdModel, getAllLanguageModel } = this.props;
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={addModel.isLoading || editModel.isLoading || getByIdModel.isLoading || getAllLanguageModel.isLoading} spinner
                    text={getByIdModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={getByIdModel.isLoading ? '' : 'overlayFullScreen'}>
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
    getAllLanguageModel: state.getAllLanguageReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdCompanyAction,
    addAction: addCompanyAction,
    editAction: editCompanyAction,
    getAllLanguageAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(CompanyUpdate));