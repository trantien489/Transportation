import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row, FormGroup, Label, Card, CardBody, Form, Button } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { hasRecordsActionReducer, applyCheckAuthorized } from '../../../utilities/validate';
import { getAllPriceAction, changeStatusPriceAction, deletePriceAction, filterPriceAction } from '../../../actions/price';
import { GridView } from '../../../components/gridView/gridView';
import { PRICE } from "../../../actionTypes/price";
import { toCurrency } from "../../../utilities/format";
import { handleErrorBasic } from '../../../utilities/handler';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import Select from 'react-select';
import { capacityGetAllSelectAction } from '../../../actions/capacity';
import { CAPACITY } from "../../../actionTypes/capacity";
import { distanceGetAllSelectAction } from '../../../actions/distance';
import { DISTANCE } from "../../../actionTypes/distance";
import { reactSelectCustomStyles, reactSelectGetCurrentValue } from '../../../utilities/reactSelect';

class Price extends Component {
    constructor(props) {
        super(props);
        applyCheckAuthorized();
        this.state = {
            distanceOptions: [],
            distanceId: 0,
            capacityOptions: [],
            capacityId: 0,
            currentAction: [],

        };
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy
        //this.props.getAllAction();
        this.props.capacityGetAllSelectAction();
        this.props.distanceGetAllSelectAction();
    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
        let { capacityGetAllSelectReducer, distanceGetAllSelectReducer, getAllModel } = nextProps;
        const { currentAction } = this.state;
        let result = false;

        if (capacityGetAllSelectReducer.isLoading && !isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {
            addAction(currentAction, CAPACITY.GETALL_SELECT)
            result = true;
        }
        if (distanceGetAllSelectReducer.isLoading && !isExistAction(currentAction, DISTANCE.GETALL_SELECT)) {
            addAction(currentAction, DISTANCE.GETALL_SELECT)
            result = true;
        }
        if (getAllModel.isLoading && !isExistAction(currentAction, PRICE.FILTER)) {
            addAction(currentAction, PRICE.FILTER)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        const { capacityGetAllSelectReducer, t, distanceGetAllSelectReducer, getAllModel } = nextProps;
        const { currentAction } = this.state;

        //Capacity Get All Select => Dropdown List
        if (!capacityGetAllSelectReducer.isLoading && isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {
            if (!capacityGetAllSelectReducer.responseData ||
                handleErrorBasic(capacityGetAllSelectReducer.responseData.status, 'Tải danh thể tích xe', t)) return;

            let capacityOptions = capacityGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: item.Type
                }
            });
            this.setState({
                capacityOptions: capacityOptions,
                capacityId: capacityOptions[0].value,
                currentAction: removeAction(currentAction, CAPACITY.GETALL_SELECT)
            });

            if (this.state.distanceId > 0) {
                this.props.filterPriceAction(`?distanceId=${this.state.distanceId}&capacityId=${capacityOptions[0].value}`);
            }
        }

        //Distance Get All Select => Dropdown List
        if (!distanceGetAllSelectReducer.isLoading && isExistAction(currentAction, DISTANCE.GETALL_SELECT)) {
            if (!distanceGetAllSelectReducer.responseData ||
                handleErrorBasic(distanceGetAllSelectReducer.responseData.status, 'Tải danh khoảng cách', t)) return;

            let distanceOptions = distanceGetAllSelectReducer.responseData.Data.Records.map(item => {
                return {
                    value: item.Id,
                    label: item.Description
                }
            });
            this.setState({
                distanceOptions: distanceOptions,
                distanceId: distanceOptions[0].value,
                currentAction: removeAction(currentAction, DISTANCE.GETALL_SELECT)
            });

            if (this.state.capacityId > 0) {
                this.props.filterPriceAction(`?distanceId=${distanceOptions[0].value}&capacityId=${this.state.capacityId}`);
            }
        }

        if (!getAllModel.isLoading && isExistAction(currentAction, PRICE.FILTER)) {
            this.setState({
                currentAction: removeAction(currentAction, PRICE.FILTER)
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

        if (field == 'DistanceId') {
            this.setState({
                distanceId: event.value
            });
        } else if (field == 'CapacityId') {
            this.setState({
                capacityId: event.value
            });
        }
    }
    filter = () => {
        this.props.filterPriceAction(`?distanceId=${this.state.distanceId}&capacityId=${this.state.capacityId}`);
    }

    render() {
        console.log(this.state);
        const { currentAction } = this.state;
        const { t, changeStatusModel, deleteModel, getAllModel, capacityGetAllSelectReducer, distanceGetAllSelectReducer } = this.props;
        let disableColumns = ['DistanceId', 'CapacityId', 'Money'];//['Id','Status'];

        const isLoadingOver = currentAction.length > 0 || changeStatusModel.isLoading || deleteModel.isLoading;

        let loading = capacityGetAllSelectReducer.isLoading || distanceGetAllSelectReducer.isLoading;

        if (loading) {
            return <LoadingOverlay active spinner text={t(key.common.loadingSpinner)} />
        } else if (getAllModel.isError) {
            return <ErrorAlert responseData={getAllModel.responseData}
                msgErrorGetAPI={t(key.common.errorGetAllAPI)} t={this.props.t}
                msgRedirectToLogin={t(key.common.redirectToLogin)} />
        } else {
            return (
                <Card>
                    <CardBody>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>{t(key.price.DistanceId)}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        styles={reactSelectCustomStyles(true)}
                                        options={this.state.distanceOptions}
                                        value={reactSelectGetCurrentValue(this.state.distanceOptions, this.state.distanceId)}
                                        onChange={(event) => this.handleChangeFields(event, 'DistanceId')}
                                        placeholder={t(key.common.pleaseSelect) + '...'}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label>{t(key.price.CapacityId)}</Label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        styles={reactSelectCustomStyles(true)}
                                        options={this.state.capacityOptions}
                                        value={reactSelectGetCurrentValue(this.state.capacityOptions, this.state.capacityId)}
                                        onChange={(event) => this.handleChangeFields(event, 'CapacityId')}
                                        placeholder={t(key.common.pleaseSelect) + '...'}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <p>&nbsp;</p>
                                    <Button type="submit" size="sm" color="primary" onClick={this.filter}>
                                        <i className="fa fa-filter"></i> Lọc
                                </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    {
                        hasRecordsActionReducer(getAllModel)
                        &&
                        <GridView
                            isLoadingOver={isLoadingOver}
                            records={getAllModel.responseData.Data.Records}
                            keyFields={key.price}
                            tableName="PRICE"
                            disableColumns={disableColumns}
                            {...this.props}
                        />
                    }

                </Card>
            )

        }




    }
}
//Nhận dữ liệu trả về từ reducer (reducer thì lấy data từ api)
const mapStateToProps = state => ({
    //getAllModel: state.getAllPriceReducer,
    changeStatusModel: state.changeStatusPriceReducer,
    deleteModel: state.deletePriceReducer,
    capacityGetAllSelectReducer: state.capacityGetAllSelectReducer,
    distanceGetAllSelectReducer: state.distanceGetAllSelectReducer,
    getAllModel: state.priceFilterReducer,
});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    getAllAction: getAllPriceAction,
    changeStatusAction: changeStatusPriceAction,
    deleteAction: deletePriceAction,
    capacityGetAllSelectAction,
    distanceGetAllSelectAction,
    filterPriceAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Price));