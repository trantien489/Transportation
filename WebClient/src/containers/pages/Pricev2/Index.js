import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Card, CardBody, Button, CardFooter, CardHeader, Row, Col, FormGroup, Label } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { isNumber, applyCheckAuthorized } from '../../../utilities/validate';
import { priceGetAllSelectAction, priceUpdateMultipleSelectAction } from '../../../actions/price';
import { capacityGetAllSelectAction } from '../../../actions/capacity';
import { distanceGetAllSelectAction } from '../../../actions/distance';
import { transportationUpdateMoneyAction } from '../../../actions/transportation';
import { PRICE } from "../../../actionTypes/price";
import { CAPACITY } from "../../../actionTypes/capacity";
import { DISTANCE } from "../../../actionTypes/distance";
import { TRANSPORTATION } from "../../../actionTypes/transportation";
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import ReactTable from "react-table";
import price from "../../../i18n/key/price";
import { toastr } from 'react-redux-toastr';
import { toCurrency, currencyToNumber, formatDateTimeToString, gridViewFormatDateTimeToString } from '../../../utilities/format';
import { AppSwitch } from '@coreui/react';
import { getSessionStorage, setSessionStorage } from '../../../utilities/storage';
import { commonConstant } from '../../../contants/common';
import DateTimePicker from 'react-datetime-picker';
import { ConfirmModal } from '../../../components/modals/confirmModal';


class Price extends Component {
    constructor(props) {
        super(props);
        applyCheckAuthorized();
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.state = {
            currentAction: [],
            distances: [],
            capacities: [],
            prices: [],
            records: [],
            isEnableFilter: getSessionStorage(commonConstant.FILTER + 'pricev2') === 'true' ? true : false,
            fromDate: firstDay,
            toDate: lastDay,
            modal: {
                content: "Bạn có chắc chắn cập nhập giá",
                active: false
            }
        };
        this.renderEditable = this.renderEditable.bind(this);
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy
        this.props.capacityGetAllSelectAction();
        this.props.distanceGetAllSelectAction();
        this.props.priceGetAllSelectAction();

    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
        const { capacityGetAllSelectReducer, distanceGetAllSelectReducer, priceGetAllSelectReducer, priceUpdateMultipletReducer, transportationUpdateMoneyReducer } = nextProps;
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

        if (priceGetAllSelectReducer.isLoading && !isExistAction(currentAction, PRICE.GETALL_SELECT)) {
            addAction(currentAction, PRICE.GETALL_SELECT)
            result = true;
        }

        if (priceUpdateMultipletReducer.isLoading && !isExistAction(currentAction, PRICE.UPDATE_MULTIPLE)) {
            addAction(currentAction, PRICE.UPDATE_MULTIPLE)
            result = true;
        }

        if (transportationUpdateMoneyReducer.isLoading && !isExistAction(currentAction, TRANSPORTATION.UPDATE_MONEY)) {
            addAction(currentAction, TRANSPORTATION.UPDATE_MONEY)
            result = true;
        }

        return result;
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        const { t, capacityGetAllSelectReducer, distanceGetAllSelectReducer, priceGetAllSelectReducer, priceUpdateMultipletReducer, transportationUpdateMoneyReducer } = nextProps;
        const { currentAction } = this.state;

        if (!capacityGetAllSelectReducer.isLoading && isExistAction(currentAction, CAPACITY.GETALL_SELECT)) {

            let result = capacityGetAllSelectReducer.responseData;
            if (!result.Success) {
                toastr.error(t(price.GridTitle), result.Message);
            }

            this.setState({
                currentAction: removeAction(currentAction, CAPACITY.GETALL_SELECT),
                capacities: result.Data.Records
            });
        }

        if (!distanceGetAllSelectReducer.isLoading && isExistAction(currentAction, DISTANCE.GETALL_SELECT)) {

            let result = distanceGetAllSelectReducer.responseData;
            if (!result.Success) {
                toastr.error(t(price.GridTitle), result.Message);
            }

            this.setState({
                currentAction: removeAction(currentAction, DISTANCE.GETALL_SELECT),
                distances: result.Data.Records
            });
        }

        if (!priceGetAllSelectReducer.isLoading && isExistAction(currentAction, PRICE.GETALL_SELECT)) {

            let result = priceGetAllSelectReducer.responseData;
            if (!result.Success) {
                toastr.error(t(price.GridTitle), result.Message);
            }

            this.setState({
                currentAction: removeAction(currentAction, PRICE.GETALL_SELECT),
                prices: result.Data.Records
            });
        }

        if (!priceUpdateMultipletReducer.isLoading && isExistAction(currentAction, PRICE.UPDATE_MULTIPLE)) {

            let result = priceUpdateMultipletReducer.responseData;
            if (!result.Success) {
                toastr.error(t(price.GridTitle), result.Message);
            } else {
                toastr.success(t(price.GridTitle), result.Message);
            }

            this.setState({
                currentAction: removeAction(currentAction, PRICE.UPDATE_MULTIPLE)
            });
        }

        if (!transportationUpdateMoneyReducer.isLoading && isExistAction(currentAction, TRANSPORTATION.UPDATE_MONEY)) {

            let result = transportationUpdateMoneyReducer.responseData;
            if (!result.Success) {
                toastr.error(t(price.GridTitle), result.Message);
            } else {
                toastr.success(t(price.GridTitle), result.Message);
            }

            this.setState({
                currentAction: removeAction(currentAction, TRANSPORTATION.UPDATE_MONEY)
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }

    createGridData = () => {
        let { records, prices, distances, capacities } = this.state;
        distances.forEach(distance => {
            let item = {};
            item.Distance = {
                id: distance.Id,
                value: distance.Description
            };
            capacities.forEach(capacity => {
                let foundPrice = prices.filter(x => x.DistanceId === distance.Id && x.CapacityId === capacity.Id)[0];
                let propertyName = capacity.Type.replace(/\s/g, '');
                item[propertyName] = {
                    id: foundPrice.Id,
                    value: foundPrice.Money
                }
            });
            records.push(item);
        });
    }

    save = () => {
        const { t } = this.props;
        let { records } = this.state;
        let request = [];
        records.forEach(item => {
            Object.keys(item).map((keyName, id) => {
                if (item[keyName].isEdit === true) {
                    request.push({
                        priceId: item[keyName].id,
                        money: item[keyName].value,
                    });
                    item[keyName].isEdit = false;
                }
                return id;
            });
        });
        if (request.length > 0) {
            this.props.priceUpdateMultipleSelectAction(request);
        } else {
            toastr.error(t(price.GridTitle), 'Không phát hiện chỉnh sửa');
        }

    }
    renderEditable(cellInfo) {
        if (cellInfo.column.Header.includes('m3')) {
            return (
                <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => {
                        const records = [...this.state.records];
                        let item = records[cellInfo.index][cellInfo.column.id];
                        let newValue = currencyToNumber(e.target.innerHTML);
                        if (item.value !== newValue) {
                            item.value = newValue;
                            item.isEdit = true;
                            this.setState({ records });
                        }
                    }}
                    onKeyPress={e => {
                        if (!isNumber(e.key)) {
                            e.preventDefault()
                        }
                    }}
                    dangerouslySetInnerHTML={{
                        __html: toCurrency(cellInfo.value.value)
                    }}
                />
            );
        } else {
            return (
                <div
                    dangerouslySetInnerHTML={{
                        __html: cellInfo.value.value
                    }}
                />
            );
        }
    }

    handleSwitchFilter = () => {
        setSessionStorage(commonConstant.FILTER + 'pricev2', !this.state.isEnableFilter)
        this.setState({
            isEnableFilter: !this.state.isEnableFilter,
        });
    }
    handleChangeFields(event, field) {
        if (field === 'fromDate') {
            this.setState({
                fromDate: event
            });
        } else if (field === 'toDate') {
            this.setState({
                toDate: event
            });
        }
    }

    openConfirmModal = () => {
        const { modal, fromDate, toDate } = this.state;
        modal.active = true;
        modal.content = `Cập nhập giá vận chuyển từ ngày ${gridViewFormatDateTimeToString(fromDate)} đến ngày ${gridViewFormatDateTimeToString(toDate)}`;
        this.setState({ modal: modal });
    }
    //TOGGLE MODAL
    handleToggleModal = (isSelected) => {
        const { modal } = this.state;
        if(isSelected){
            this.updatePrice();
        } 
        modal.active = false;
        this.setState({ modal: modal });
    }

    updatePrice = () => {
        const { fromDate, toDate } = this.state;
        let api = `fromDate=${formatDateTimeToString(fromDate)}&toDate=${formatDateTimeToString(toDate)}`;
        this.props.transportationUpdateMoneyAction('?' + encodeURI(api));
    }

    render() {
        const { currentAction, records, distances, capacities, prices, isEnableFilter, modal } = this.state;
        const { t } = this.props;
        let keyFields = key.price;
        const isLoadingPrice = isExistAction(currentAction, PRICE.UPDATE_MULTIPLE);
        const isLoadingMoney = isExistAction(currentAction, TRANSPORTATION.UPDATE_MONEY);

        if (distances.length > 0 && capacities.length > 0 && prices.length > 0 && records.length === 0) {
            this.createGridData();
        }
        const propsOfTable = {
            data: records,
            columns: [],
            pageSize: records.length,
            showPagination: false,
            filterable: isEnableFilter,
            defaultFilterMethod: (filter, row) => {
                let filterValue = filter.value.toLowerCase();
                const id = filter.pivotId || filter.id;
                if (id === 'identifierNumber') {
                    return (row._index + 1) === parseInt(filter.value);
                } else if (row[id] !== undefined) {
                    let cellValue = String(row[id].value).toLowerCase();
                    return cellValue.includes(filterValue);
                }
            },
        }
        if (records.length > 0) {
            let columns = Object.keys(records[0]).map((keyName, id) => {
                var column = {
                    Header: keyName.includes('m3') ? keyName : t(keyFields[keyName]),
                    //Header: keyName,
                    headerClassName: 'header-table text-left',
                    accessor: keyName,
                    show: (keyName === 'Id' || keyName === 'Status') ? false : true,
                    minWidth: 100,
                    className: 'text-left',
                    minResizeWidth: 50,
                    Cell: this.renderEditable
                };
                return column;
            });
            columns.unshift({
                Header: '#',
                headerClassName: 'header-table',
                accessor: 'identifierNumber',
                Cell: (row) => { return <span>{row.index + 1}</span> },
                minWidth: 20,
                className: 'text-center',
                minResizeWidth: 50,
            });
            propsOfTable.columns = columns;
        }

        return (
            <LoadingOverlay active={records.length === 0} spinner text={t(key.common.loadingSpinner)} className="overlayFullScreen" >
                <ConfirmModal isOpenModal={modal.active}
                    toggleModal={() => this.handleToggleModal(false)}
                    selectedYes={() => this.handleToggleModal(true)}
                    className="warning" sizeModal="md" backdropModal="static"
                    headerTitle={t(key.common.infoTitleConfirmModal)}
                    bodyContent={modal.content}
                    textBtnYes={t(key.common.btnOk)}
                    textBtnNo={t(key.common.btnCancel)}
                />
                {
                    records.length > 0
                    &&
                    <div>
                        <LoadingOverlay active={isLoadingPrice} spinner text={t(key.common.processingSpinner)} className="" >
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" className={'text-right'} title="Enables or disables records filtering of columns in the table.">
                                            {t(key.common.filterTitle)}
                                            <AppSwitch className={'float-right mx-1'} variant={'pill'} color={'primary'}
                                                onChange={this.handleSwitchFilter} checked={this.state.isEnableFilter} />
                                        </Col>
                                    </Row>
                                </CardHeader>

                                <CardBody>
                                    <ReactTable {...propsOfTable} />
                                </CardBody>
                                <CardFooter>
                                    <Button type="reset" size="sm" color="primary" onClick={this.save}>
                                        <i className="fa fa-save"></i> {t(key.common.btnSubmit)}
                                    </Button>{' '}
                                    <Button type="reset" size="sm" color="danger" >
                                        <i className="fa fa-refresh"></i> Làm lại
                            </Button>
                                </CardFooter>
                            </Card>
                        </LoadingOverlay>

                        <LoadingOverlay active={isLoadingMoney} spinner text={t(key.common.processingSpinner)} className="" >
                            <Card>
                                <CardHeader>
                                    <span style={{ fontWeight: 'bold' }}>CẬP NHẬP GIÁ VẬN CHUYỂN</span>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Từ ngày</Label>
                                                <DateTimePicker
                                                    value={this.state.fromDate}
                                                    onChange={(event) => this.handleChangeFields(event, 'fromDate')}
                                                    className='form-control'
                                                    format="d/M/y"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Đến ngày</Label>
                                                <DateTimePicker
                                                    value={this.state.toDate}
                                                    onChange={(event) => this.handleChangeFields(event, 'toDate')}
                                                    className='form-control'
                                                    format="d/M/y"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Button size="sm" color="success" onClick={this.openConfirmModal}>
                                        <i className="fa fa-refresh"></i> Điều chỉnh
                        </Button>
                                </CardFooter>
                            </Card>
                        </LoadingOverlay>
                    </div>
                }
            </LoadingOverlay>
        );

    }
}
//Nhận dữ liệu trả về từ reducer (reducer thì lấy data từ api)
const mapStateToProps = state => ({
    capacityGetAllSelectReducer: state.capacityGetAllSelectReducer,
    distanceGetAllSelectReducer: state.distanceGetAllSelectReducer,
    priceGetAllSelectReducer: state.priceGetAllSelectReducer,
    priceUpdateMultipletReducer: state.priceUpdateMultipletReducer,
    transportationUpdateMoneyReducer: state.transportationUpdateMoneyReducer
});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    capacityGetAllSelectAction,
    distanceGetAllSelectAction,
    priceGetAllSelectAction,
    priceUpdateMultipleSelectAction,
    transportationUpdateMoneyAction
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Price));