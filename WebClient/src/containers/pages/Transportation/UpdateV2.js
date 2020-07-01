import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { getByIdTransportationAction, addTransportationAction, editTransportationAction } from '../../../actions/transportation';
import { carGetAllSelectAction } from '../../../actions/car';
import { applyCheckAuthorized,isEmptyOrSpace } from '../../../utilities/validate';
import { formatDateTimeToString, toCurrency,  formatString, currencyToNumber, deepCloneObject } from '../../../utilities/format';
import { driverGetAllSelectAction } from '../../../actions/driver';
import { companyGetAllSelectAction } from '../../../actions/company';
import { generateMoneyTransportationAction } from '../../../actions/transportation';
import { handleErrorBasic, handleParameter } from '../../../utilities/handler';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { COMPANY } from "../../../actionTypes/company";
import { DRIVER } from "../../../actionTypes/driver";
import { CAR } from "../../../actionTypes/car";
import { TRANSPORTATION } from "../../../actionTypes/transportation";
import { Button, Label, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, FormFeedback, Input, Row, Col } from "reactstrap";
import { commonConstant } from '../../../contants/common';
import Parser from 'html-react-parser';
import { reactSelectCustomStyles, reactSelectGetCurrentValue, reactSelectCustomFilter } from '../../../utilities/reactSelect';
import Select from 'react-select';
import DateTimePicker from 'react-datetime-picker';
import { toastr } from 'react-redux-toastr';


var _inputs = [];

class TransportationUpdate extends Component {
    constructor(props) {
        super(props);
        let entity = {
            TransportDate: formatDateTimeToString(new Date().setHours(0, 0, 0, 0)),
            CarId: 0,
            CompanyIds: [],
            DocumentNumber: "",
            Report: "",
            Money: "",
            Note: "",
            DriverPrimaryId: "",
            DriverSecondaryId: "",
            DriverThirdId: "",
            DriverJson: []
        };
        this.state = {
            initEntity: deepCloneObject(entity),
            entity: deepCloneObject(entity),
            errors: {},
            currentAction: [],
            companyDropdown: [],
            carDropdown: [],
            driverDropdown: [],
            selectDriverId: 0,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        this.props.carGetAllSelectAction();
        this.props.driverGetAllSelectAction();
        this.props.companyGetAllSelectAction();

        const { match } = this.props;
        if (handleParameter(match) !== commonConstant.ParamAdd) {
            const strQuery = '?id=' + handleParameter(match);
            this.props.getByIdAction(strQuery);
        }
    }
    requestAction = (nextProps) => {
        let { carGetAllSelectReducer, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer, addModel, editModel, getByIdModel } = nextProps;
        const { currentAction } = this.state;
        let result = false;
        if (carGetAllSelectReducer.isLoading && !isExistAction(currentAction, CAR.GETALL_SELECT)) {
            addAction(currentAction, CAR.GETALL_SELECT)
            result = true;
        }

        if (driverGetAllSelectReducer.isLoading && !isExistAction(currentAction, DRIVER.GETALL_SELECT)) {
            addAction(currentAction, DRIVER.GETALL_SELECT)
            result = true;
        }

        if (companyGetAllSelectReducer.isLoading && !isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            addAction(currentAction, COMPANY.GETALL_SELECT)
            result = true;
        }

        if (generateMoneyTransportationReducer.isLoading && !isExistAction(currentAction, TRANSPORTATION.GENERATEMONEY)) {
            addAction(currentAction, TRANSPORTATION.GENERATEMONEY)
            result = true;
        }

        if (addModel.isLoading && !isExistAction(currentAction, TRANSPORTATION.ADD)) {
            addAction(currentAction, TRANSPORTATION.ADD)
            result = true;
        }

        if (editModel.isLoading && !isExistAction(currentAction, TRANSPORTATION.EDIT)) {
            addAction(currentAction, TRANSPORTATION.EDIT)
            result = true;
        }

        if (getByIdModel.isLoading && !isExistAction(currentAction, TRANSPORTATION.GETBYID)) {
            addAction(currentAction, TRANSPORTATION.GETBYID)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        const { carGetAllSelectReducer, t, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer, addModel, editModel, getByIdModel } = nextProps;
        const { currentAction } = this.state;
        //Car Get All Select => Dropdown List
        if (!carGetAllSelectReducer.isLoading && isExistAction(currentAction, CAR.GETALL_SELECT)) {
            if (!carGetAllSelectReducer.responseData ||
                handleErrorBasic(carGetAllSelectReducer.responseData.status, 'Tải danh sách Xe', t)) return;

            let carDropdown = carGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: `${item.CarNumber} | ${item.CapacityType}`
                }
            });
            this.setState({
                carDropdown: carDropdown,
                currentAction: removeAction(currentAction, CAR.GETALL_SELECT)
            });
        }

        //Driver Get All Select => Dropdown List
        if (!driverGetAllSelectReducer.isLoading && isExistAction(currentAction, DRIVER.GETALL_SELECT)) {
            if (!driverGetAllSelectReducer.responseData ||
                handleErrorBasic(driverGetAllSelectReducer.responseData.status, 'Tải danh sách Tài xế', t)) return;

            const data = driverGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: item.Name + ' - ' + item.DriverTypeName,
                    name: item.Name,
                    driverTypeId: item.DriverTypeId
                }
            });
            this.setState({
                currentAction: removeAction(currentAction, DRIVER.GETALL_SELECT),
                driverDropdown: data
            });
        }

        //Company Get All Select => Dropdown List
        if (!companyGetAllSelectReducer.isLoading && isExistAction(currentAction, COMPANY.GETALL_SELECT)) {
            if (!companyGetAllSelectReducer.responseData ||
                handleErrorBasic(companyGetAllSelectReducer.responseData.status, 'Tải danh sách Công ty', t)) return;

            let companyDropdown = companyGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: `${item.Code} | ${item.Name}`
                }
            });
            this.setState({
                companyDropdown: companyDropdown,
                currentAction: removeAction(currentAction, COMPANY.GETALL_SELECT)
            });
        }

        //Generate Money
        if (!generateMoneyTransportationReducer.isLoading && isExistAction(currentAction, TRANSPORTATION.GENERATEMONEY)) {
            if (!generateMoneyTransportationReducer.responseData ||
                handleErrorBasic(generateMoneyTransportationReducer.responseData.status, 'Loading thành tiền', t)) {

                }

            this.setState({ currentAction: removeAction(currentAction, TRANSPORTATION.GENERATEMONEY) });
        }

        // ADD
        if (!addModel.isLoading && isExistAction(currentAction, TRANSPORTATION.ADD)) {
            if (!addModel.responseData || handleErrorBasic(addModel.responseData.status, 'Thêm mới vận chuyển', t)){

            }else {
                const result = addModel.responseData;
                if (result.Success) {
                    toastr.success(t(key.transportation.AddTitle), t(key.common.addDataSuccess));
                } else {
                    toastr.error(t(key.transportation.AddTitle), result.Message);
                }
            }

               
            this.setState({ 
                entity: deepCloneObject(this.state.initEntity),
                currentAction: removeAction(currentAction, TRANSPORTATION.ADD) 
            });
        }
        
        //EDIT
        if (!editModel.isLoading && isExistAction(currentAction, TRANSPORTATION.EDIT)) {
            if (!editModel.responseData || handleErrorBasic(editModel.responseData.status, 'Chỉnh sửa vận chuyển', t)) {

            } else {
                const result = editModel.responseData;
                if (result.Success) {
                    toastr.success(t(key.transportation.EditTitle), t(key.common.editDataSuccess));
                } else {
                    toastr.error(t(key.transportation.EditTitle), result.Message);
                }
            }

            this.setState({ 
                currentAction: removeAction(currentAction, TRANSPORTATION.EDIT) 
            });
        }

        //GET BY ID
        if (!getByIdModel.isLoading && isExistAction(currentAction, TRANSPORTATION.GETBYID)) {
            if (!getByIdModel.responseData || handleErrorBasic(getByIdModel.responseData.status, 'Loading vận chuyển', t)) return;

                const result = getByIdModel.responseData;
                if (result.Success) {
                    //toastr.success(t(key.transportation.GetByIdTitle), t(key.common.editDataSuccess));
                } else {
                    toastr.error(t(key.transportation.GetByIdTitle), result.Message);
                }

            this.setState({ 
                currentAction: removeAction(currentAction, TRANSPORTATION.GETBYID),
                entity: deepCloneObject(result.Data),
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }

    handleChangeFields(event, field) {
        const { entity } = this.state;
        let { selectDriverId } = this.state;

        let previousEntity = deepCloneObject(entity);

        if (field === "CarId" && event.value >= 0) {
            entity[field] = event.value;
        }
        else if (field === "selectDriverId" && event.value >= 0) {
            selectDriverId = event.value;
            const found = entity.DriverJson.some(el => el.Id === event.value);
            if (!found) entity.DriverJson.push({ Id: event.value, Name: event.name, IsDriverPrimary: event.driverTypeId === 1, Money: '' });
        }
        else if (field === "CompanyIds") {
            entity[field] = !event ? [] : event.map(item => item.value);
        }
        else if (field === "TransportDate") {
            entity[field] = formatDateTimeToString(event);
        }
        else if (event.target && field === "Money") {
            let value = event.target ? event.target.value : '';
            let tempValue = value.replace(/,/g, '');
            //Check is all number or not
            var isAllNumber = /^\d+$/.test(tempValue);
            if (value !== '' && !isAllNumber) {
                return;
            }
            entity[field] = value;

        }
        else { // Any thing else is case input type=text
            entity[field] = event.target ? event.target.value : '';
        }

        let nextEntity = deepCloneObject(entity);
        if (nextEntity.CompanyIds.length > 0 && nextEntity.CarId !== 0) {
            if (JSON.stringify(nextEntity.CompanyIds) !== JSON.stringify(previousEntity.CompanyIds) || nextEntity.CarId !== previousEntity.CarId) {
                this.props.generateMoneyTransportationAction({
                    CompanyIds: nextEntity.CompanyIds,
                    CarId: nextEntity.CarId
                });
            }
        }

        this.setState({
            ...this.state,
            entity: entity,
            selectDriverId: selectDriverId
        });
    }

    handleDriverJson(action, Id, field, event) {
        const { entity } = this.state;
        if (action === "remove") {
            entity.DriverJson = entity.DriverJson.filter(item => item.Id !== Id);
        } else if (action === "edit") {
            const found = entity.DriverJson.filter(item => item.Id === Id)[0];
            if (found) {
                if (field === "money") {
                    found.Money = event.target ? parseInt(event.target.value) : 0;
                } else if (field === "IsDriverPrimary") {
                    found.IsDriverPrimary = event.target ? event.target.value === 'true' : false;
                }
            }
        }
        this.setState({
            entity: entity
        });
    }

    moneyOnBlur = (event, fieldName) => {
        const { entity } = this.state;
        let value = event.target ? event.target.value : '';

        entity[fieldName] = toCurrency(value);

        this.setState({
            ...this.state,
            entity: entity
        });
    }

    handleChangeFieldsCallBack = (previousModel, nextModel) => {
        if (nextModel.CompanyIds.length > 0 && nextModel.CarId !== 0) {
            if (JSON.stringify(nextModel.CompanyIds) !== JSON.stringify(previousModel.CompanyIds) || nextModel.CarId !== previousModel.CarId) {
                this.props.generateMoneyTransportationAction({
                    CompanyIds: nextModel.CompanyIds,
                    CarId: nextModel.CarId
                });
            }
        }
    }

    renderCallback = (model) => {
        const { generateMoneyTransportationReducer } = this.props;

        if (generateMoneyTransportationReducer.responseData && generateMoneyTransportationReducer.responseData.Data >= 0) {
            let money = generateMoneyTransportationReducer.responseData.Data;
            model.Money = money === 0 ? 0 : toCurrency(money);
            delete generateMoneyTransportationReducer.responseData;
        }
    }
    handleValidation() {
        const { t } = this.props;
        const { entity } = this.state;
        let isValidForm = true, errors = {};

        if(isEmptyOrSpace(entity.TransportDate)){
            isValidForm = false;
            errors.TransportDate = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.TransportDate));
        }  
        if(entity.CarId === 0){
            isValidForm = false;
            errors.CarId = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.CarId));
        }  
        if(entity.CompanyIds.length === 0){
            isValidForm = false;
            errors.CompanyIds = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.CompanyIds));
        }  
        if(isEmptyOrSpace(entity.DocumentNumber)){
            isValidForm = false;
            errors.DocumentNumber = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.DocumentNumber));
        }  
        if(isEmptyOrSpace(entity.Money)){
            isValidForm = false;
            errors.Money = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.Money));
        }  
        if(entity.DriverJson.length === 0){
            isValidForm = false;
            errors.DriverJson = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.transportation.DriverPrimaryId));
        }

        this.setState({ errors: errors });
        return isValidForm;
    }
    
    addOrEditAction = (model) => {
        const { match } = this.props;
        if (handleParameter(match) === commonConstant.ParamAdd) {
            this.props.addAction(model);
        }
        else {
            this.props.editAction(model);
        }
    }

    handleSubmitForm = (event) => {
        if (!event) return;
        event.preventDefault();
        if (!this.handleValidation()) return;
        const { entity } = this.state;
     
        entity.DocumentNumber = entity.DocumentNumber.trim();
        entity.Money = currencyToNumber(entity.Money);

        this.addOrEditAction(entity);
    }
    
    handleBackList = () => {
        const { history } = this.props;
        if (history) {
            history.goBack();
        }
    }

    render() {
        const { match, t, getByIdModel, carGetAllSelectReducer, driverGetAllSelectReducer, companyGetAllSelectReducer, generateMoneyTransportationReducer } = this.props;
        const { currentAction, entity, companyDropdown, carDropdown, driverDropdown, selectDriverId, errors } = this.state; 
        let loading = currentAction.length > 0;

        //Display money
        this.renderCallback(entity);

        // loadingDataWhenFirstIn is true, khi muon dang tai data
        let loadingDataWhenFirstIn = getByIdModel.isLoading || carGetAllSelectReducer.isLoading || driverGetAllSelectReducer.isLoading || companyGetAllSelectReducer.isLoading || generateMoneyTransportationReducer.isLoading;
        let loadingText = '', loadingClass = '';

        if (loading) {
            loadingText = loadingDataWhenFirstIn ? t(key.common.loadingSpinner) : t(key.common.processingSpinner);
            // loadingClass = loadingDataWhenFirstIn ? '' : 'overlayFullScreen';
        }
        const title = handleParameter(match) === commonConstant.ParamAdd ? t(key.transportation.AddTitle) : t(key.transportation.EditTitle);

        return (
            <div className="animated fadeIn">
                <LoadingOverlay
                    active={loading}
                    spinner
                    text={loadingText}
                    className={loadingClass}
                >
                    <Form onSubmit={this.handleSubmitForm}>
                        <Card>
                            <CardHeader>
                                <strong>{title}</strong>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.TransportDate))}<sup>*</sup></Label>
                                            <DateTimePicker
                                                innerRef={(self) => { if (self) _inputs.push(self); }}
                                                value={new Date(entity.TransportDate)}
                                                onChange={(event) => this.handleChangeFields(event, "TransportDate")}
                                                className={(false ? 'is-readonly' : (errors["TransportDate"] ? 'is-invalid' : '')) + ' form-control'}
                                                readOnly={false}
                                                format="d/M/y"
                                            />
                                            <FormFeedback className=''>
                                                {errors["TransportDate"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.CarId))}<sup>*</sup></Label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                styles={reactSelectCustomStyles(errors["CarId"] ? false : true)}
                                                options={carDropdown}
                                                value={reactSelectGetCurrentValue(carDropdown, entity.CarId)}
                                                onChange={(event) => this.handleChangeFields(event, "CarId")}
                                                placeholder={t(key.common.pleaseSelect) + '...'}
                                            />
                                            <FormFeedback className='react-select'>
                                                {errors["CarId"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.CompanyIds))}<sup>*</sup></Label>
                                            <Select
                                                isMulti
                                                value={companyDropdown.filter(i => entity.CompanyIds.indexOf(i.value) > -1)}
                                                styles={reactSelectCustomStyles(errors["CompanyIds"] ? false : true)}
                                                options={companyDropdown}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                onChange={(event) => this.handleChangeFields(event, "CompanyIds")}
                                                placeholder={t(key.common.pleaseSelect) + '...'}
                                                filterOption={reactSelectCustomFilter}
                                            />
                                            <FormFeedback className='react-select'>
                                                {errors["CompanyIds"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.DocumentNumber))}<sup>*</sup></Label>
                                            <Input type='text'
                                                value={entity.DocumentNumber}
                                                invalid={errors["DocumentNumber"]}
                                                innerRef={(self) => { if (self) _inputs.push(self); }}
                                                onChange={(event) => this.handleChangeFields(event, "DocumentNumber")}
                                                readOnly={false}
                                            />
                                            <FormFeedback className=''>
                                                {errors["DocumentNumber"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.Report))}</Label>
                                            <Input type='text'
                                                value={entity.Report}
                                                invalid={errors["Report"]}
                                                innerRef={(self) => { if (self) _inputs.push(self); }}
                                                onChange={(event) => this.handleChangeFields(event, "Report")}
                                                readOnly={false}
                                            />
                                            <FormFeedback className=''>
                                                {errors["Report"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.Money))}<sup>*</sup></Label>
                                            <Input type='text'
                                                value={entity.Money}
                                                invalid={errors["Money"]}
                                                innerRef={(self) => { if (self) _inputs.push(self); }}
                                                onChange={(event) => this.handleChangeFields(event, "Money")}
                                                readOnly={false}
                                                onBlur={(event) => this.moneyOnBlur(event, "Money")}
                                            />
                                            <FormFeedback className=''>
                                                {errors["Money"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <Label>{Parser("Tài xế & Phụ xe")}<sup>*</sup></Label>
                                                    <Select
                                                        className="basic-single"
                                                        classNamePrefix="select"
                                                        styles={reactSelectCustomStyles(errors["DriverJson"] ? false : true)}
                                                        options={driverDropdown}
                                                        value={reactSelectGetCurrentValue(driverDropdown, selectDriverId)}
                                                        onChange={(event) => this.handleChangeFields(event, "selectDriverId")}
                                                        placeholder={t(key.common.pleaseSelect) + '...'}
                                                    />
                                                    <FormFeedback className='react-select'>
                                                        {errors["DriverJson"]}
                                                    </FormFeedback>
                                                </FormGroup>
                                            </Col>
                                            {
                                                entity.DriverJson.map(item => {
                                                    return (
                                                        <Col md="4" key={item.Id} >
                                                            <Card>
                                                                <CardBody>
                                                                    <FormGroup row>
                                                                        <Col md="12">
                                                                            <p className="form-control-static">{item.Name}</p>
                                                                        </Col>
                                                                        <Col md="12">
                                                                            <FormGroup check inline>
                                                                                <Input type="radio" id={item.Id + "-inline-radio1"} name={item.Id + "-inline-radios"} value={true} defaultChecked={item.IsDriverPrimary} onChange={(event) => this.handleDriverJson("edit", item.Id, "IsDriverPrimary", event)} />
                                                                                <Label check htmlFor={item.Id + "-inline-radio1"}>Tài xế</Label>
                                                                            </FormGroup>
                                                                            <FormGroup check inline>
                                                                                <Input type="radio" id={item.Id + "-inline-radio2"} name={item.Id + "-inline-radios"} value={false} defaultChecked={!item.IsDriverPrimary} onChange={(event) => this.handleDriverJson("edit", item.Id, "IsDriverPrimary", event)} />
                                                                                <Label check htmlFor={item.Id + "-inline-radio2"}>Phụ xe</Label>
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <FormGroup row>
                                                                        <Col md="12">
                                                                            <Input type='text'
                                                                                value={item.Money}
                                                                                placeholder="Tiền công..."
                                                                                onChange={(event) => this.handleDriverJson("edit", item.Id, "money", event)}
                                                                            />
                                                                        </Col>
                                                                    </FormGroup>
                                                                    <i style={{ color: "red", cursor: "pointer", float: "right" }} className="fa fa-trash-o fa-lg" onClick={(event) => this.handleDriverJson("remove", item.Id)}></i>
                                                                </CardBody>
                                                            </Card>

                                                        </Col>
                                                    );
                                                })
                                            }
                                        </Row>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>{Parser(t(key.transportation.Note))}</Label>
                                            <Input type="textarea"
                                                rows="6"
                                                value={entity.Note}
                                                invalid={errors["Note"]}
                                                innerRef={(self) => { if (self) _inputs.push(self); }}
                                                onChange={(event) => this.handleChangeFields(event, "Note")}
                                                readOnly={false}
                                            />
                                            <FormFeedback className=''>
                                                {errors["Note"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary">
                                    <i className="fa fa-save"></i> {t(key.common.btnSubmit)}
                                </Button>{' '}
                                <Button type="reset" size="sm" color="danger" onClick={this.handleBackList}>
                                    <i className="fa fa-ban"></i> {t(key.common.btnBackList)}
                                </Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </LoadingOverlay>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdTransportationReducer,
    addModel: state.addTransportationReducer,
    editModel: state.editTransportationReducer,
    carGetAllSelectReducer: state.carGetAllSelectReducer,
    driverGetAllSelectReducer: state.driverGetAllSelectReducer,
    companyGetAllSelectReducer: state.companyGetAllSelectReducer,
    generateMoneyTransportationReducer: state.generateMoneyTransportationReducer,
});
const mapDispatchToProps = {
    getByIdAction: getByIdTransportationAction,
    addAction: addTransportationAction,
    editAction: editTransportationAction,
    carGetAllSelectAction,
    driverGetAllSelectAction,
    companyGetAllSelectAction,
    generateMoneyTransportationAction,

};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(TransportationUpdate));