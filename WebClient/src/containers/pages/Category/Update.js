/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Button, Label, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, FormFeedback, Input, Row, Col } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { toastr } from 'react-redux-toastr';
import { getByIdCategoryAction, addCategoryAction, editCategoryAction } from '../../../actions/category';
import { commonConstant } from '../../../contants/common';
import { setSessionStorage } from '../../../utilities/storage';
import { formatString, cloneObject, formatDateTimeToString } from '../../../utilities/format';
import { applyCheckAuthorized } from '../../../utilities/validate';
import { handleErrorBasic } from '../../../utilities/handler';
import UploadImage from '../../../components/uploads/uploadImage';
import queryString from 'query-string';
var _currentCategoryUpdateAction = null;
var _parentId;
class CategoryUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        };
        //Add token to header
        applyCheckAuthorized();
    }
    inputs = {};
    componentDidMount() {
        this.inputs['Name'].focus();
        const result = this.handleParameter();
        if (result[0] !== 'add') {
            const strQuery = '?id=' + this.handleParameter();
            this.props.getByIdCategory(strQuery);
        } else {
            if (result[1]) {
                this._parentId = result[1];
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        const { t, addModel, editModel, getByIdModel } = nextProps;
        if (this.props.lng !== nextProps.lng) {
            if (Object.keys(this.state.errors).length === 0) {
                return;
            }
            this.handleValidation();
            return;
        }
        if (getByIdModel && getByIdModel.isLoading) {
            _currentCategoryUpdateAction = commonConstant.GET_BY_ID;
            return;
        }
        if (addModel && addModel.isLoading) {
            _currentCategoryUpdateAction = commonConstant.ADD;
            return;
        }
        if (editModel && editModel.isLoading) {
            _currentCategoryUpdateAction = commonConstant.EDIT;
            return;
        }
        if (!_currentCategoryUpdateAction) {
            this.handleValidation();
            return;
        }
        if (this.handleParameter() === commonConstant.ParamAdd && _currentCategoryUpdateAction === commonConstant.ParamAdd) {
            
            if (!addModel || !addModel.responseData ||
                handleErrorBasic(addModel.responseData.status, t(key.category.categoryAddTitle), t)) return;
            const result = addModel.responseData;
            if (result.success) {
                toastr.success(t(key.category.categoryAddTitle), t(key.common.addDataSuccess));
                this.setState({
                    fields: {},
                    errors: {},
                });
            } else if (result.data && result.data.Code === commonConstant.IMAGETYPE_ERROR_MSG_EXISTED) {
                toastr.error(t(key.category.categoryAddTitle), t(key.category.categoryAddExistErrorMsg));
            } else {
                toastr.error(t(key.category.categoryAddTitle), t(key.common.addDataFail));
            }
        } else {
            // GETBYID
            if (_currentCategoryUpdateAction === commonConstant.GET_BY_ID) {
                if (!getByIdModel || !getByIdModel.responseData ||
                    handleErrorBasic(getByIdModel.responseData.status, t(key.category.categoryGetByIdTitle), t)) return;
                if (getByIdModel.responseData.success) {
                    const { data } = getByIdModel.responseData;
                    if (data) {
                        this.setState({
                            fields: cloneObject(data),
                        });
                    }
                } else {
                    toastr.error(t(key.category.categoryGetByIdTitle), t(key.common.errorGetByIdAPI));
                }
            }
            // UPDATE            
            else if (_currentCategoryUpdateAction === commonConstant.EDIT) {
                if (!editModel || !editModel.responseData ||
                    handleErrorBasic(editModel.responseData.status, t(key.category.categoryEditTitle), t)) return;
                if (editModel.responseData.success) {
                    setSessionStorage(commonConstant.IMAGETYPE_KEY_EDIT, this.state.fields.Ten);
                    toastr.success(t(key.category.categoryEditTitle), t(key.common.addDataSuccess));
                }
                else if (editModel.responseData.Data &&
                    editModel.responseData.Data.Code === commonConstant.IMAGETYPE_ERROR_MSG_EXISTED) {
                    toastr.error(t(key.category.categoryEditTitle), t(key.category.categoryAddExistErrorMsg));
                }
                else {
                    toastr.error(t(key.category.categoryEditTitle), t(key.common.addDataFail));
                }
            }
        }
        _currentCategoryUpdateAction = null;
    }
    handleSubmitForm = (event) => {
        if (!event) return;
        event.preventDefault();
        if (!this.handleValidation()) return;
        const id = this.handleParameter()[0];
        if (id === commonConstant.ParamAdd) {
            let fields = this.state.fields;
            if (this._parentId) {                
                fields["ParentId"] = this._parentId;                
            } else {
                fields["ParentId"] = null;
            }
            this.setState({ fields });
            this.props.addCategory(this.state.fields);
        }
        else {
            this.props.editCategory(this.state.fields);
        }
    }
    handleBackList = () => {
        const { history } = this.props;
        if (history) {
            history.goBack();
        }
    }
    handleValidation() {
        const { t } = this.props;
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;
        //Name
        if (!fields["Name"]) {
            formIsValid = false;
            errors["Name"] = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.category.Name));
        }
        //Image
        // if (!fields["Image"]) {
        //     formIsValid = false;
        //     errors["Image"] = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.category.Image));
        // }
        //LanguageId
        if (!fields["LanguageId"] || fields["LanguageId"] === 0) {
            formIsValid = false;
            errors["LanguageId"] = formatString(t(key.common.fieldCanNotEmptyErrorMsg), t(key.category.Order));
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    handleChangeFields(field, e) {
        if (!e || !e.target) return;
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    handleChangeDateTimePickers(field, dateValue) {
        let fields = this.state.fields;
        fields[field] = formatDateTimeToString(dateValue);
        this.setState({ fields });
    }
    handleParameter() {
        const { match } = this.props;
        const { search } = this.props.history.location;
        let result = [];
        if (match && match.params && match.params.id) {
            if (match.params.id > 0) {
                result.push(parseInt(match.params.id));
            } else {
                result.push(match.params.id);
                if (search) {
                    const parsed = queryString.parse(search);
                    result.push(parsed.id);
                }
            }
        }
        return result;
    }
    callbackUpload = (arrayImage) => {
        let { fields } = this.state;
        if (arrayImage && arrayImage.length > 0) {
            fields['Image'] = arrayImage[0];
        } else { // Remove current picture
            fields['Image'] = null;
        }
        this.setState({ fields });
    }
    render() {
        const classAnimated = 'animated fadeIn';
        const { t, addModel, editModel, getByIdModel } = this.props;
        const { fields, errors } = this.state;
        const isAdd = this.handleParameter()[0];
        let titleCategoryUpdate = t(key.category.categoryEditTitle);
        if (isAdd === commonConstant.ParamAdd) {
            titleCategoryUpdate = t(key.category.categoryAddTitle);
        }
        let isActive = addModel.isLoading || editModel.isLoading || getByIdModel.isLoading;
        let isShowOverlay = getByIdModel.isLoading ? '' : 'overlayFullScreen';
        return (
            <div className={classAnimated}>
                <LoadingOverlay active={isActive} spinner
                    text={getByIdModel.isLoading ? t(key.common.loadingSpinner) : t(key.common.processingSpinner)}
                    className={isShowOverlay}>
                    <Form onSubmit={this.handleSubmitForm}>
                        <Card>
                            <CardHeader>
                                <strong>{titleCategoryUpdate}</strong>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="Name">{t(key.category.Name)} <sup>*</sup></Label>
                                            <Input id="Name" type="text" invalid={errors['Name'] ? true : null}
                                                innerRef={(self) => { this.inputs['Name'] = self; }}
                                                value={fields['Name'] ? fields['Name'] : ''}
                                                onChange={this.handleChangeFields.bind(this, 'Name')}
                                            />
                                            <FormFeedback>
                                                {this.state.errors["Name"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="LanguageId">{t(key.category.LanguageId)} <sup>*</sup></Label>
                                            <Input id="LanguageId" name="LanguageId" type="select"
                                                value={fields["LanguageId"] ? fields["LanguageId"] : 0}
                                                onChange={this.handleChangeFields.bind(this, 'LanguageId')}
                                                invalid={errors['LanguageId'] ? true : null}>
                                                <option value="0">{t(key.common.pleaseSelect)}</option>
                                                <option value="1">English</option>
                                                <option value="2">Việt Nam</option>
                                            </Input>
                                            <FormFeedback>
                                                {this.state.errors["LanguageId"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="Image">{t(key.category.Image)}</Label>
                                            <UploadImage value={fields['Image'] ? [fields['Image']] : []} quantity="1" callback={this.callbackUpload} width={500} height={500} />
                                            <FormFeedback>
                                                {this.state.errors["Image"]}
                                            </FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary">
                                    <i className="fa fa-dot-circle-o"></i> {t(key.common.btnSubmit)}
                                </Button>{' '}
                                <Button type="reset" size="sm" color="danger" onClick={this.handleBackList}>
                                    <i className="fa fa-ban"></i> {t(key.common.btnBackList)}
                                </Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </LoadingOverlay>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    getByIdModel: state.getByIdCategoryReducer,
    addModel: state.addCategoryReducer,
    editModel: state.editCategoryReducer
});
const mapDispatchToProps = {
    getByIdAction: getByIdCategoryAction,
    addAction: addCategoryAction,
    editAction: editCategoryAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(CategoryUpdate));