import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row, FormGroup, Label, Card, CardBody,  Button } from "reactstrap";
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { hasRecordsActionReducer, applyCheckAuthorized } from '../../../utilities/validate';
import { getAllTransportationAction, changeStatusTransportationAction, deleteTransportationAction, transportationFilterAction } from '../../../actions/transportation';
import { GridView } from '../../../components/gridView/gridView';
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { TRANSPORTATION } from "../../../actionTypes/transportation";
import {  formatDateTimeToString } from "../../../utilities/format";
import DateTimePicker from 'react-datetime-picker';
import { toastr } from 'react-redux-toastr';
import transportation from "../../../i18n/key/transportation";


class Transportation extends Component {
    constructor(props) {
        super(props);
        let currentDateTime = new Date(formatDateTimeToString(new Date().setHours(0, 0, 0, 0)));
        this.state = {
            currentAction: [],
            fromDate: currentDateTime,
            toDate: currentDateTime,
        };
        applyCheckAuthorized();
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy
        // this.props.getAllAction();
        this.props.transportationFilterAction(`?fromDate=${formatDateTimeToString(this.state.fromDate)}&toDate=${formatDateTimeToString(this.state.toDate)}`);
    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
        let { getAllModel } = nextProps;
        const { currentAction } = this.state;
        let result = false;

        if (getAllModel.isLoading && !isExistAction(currentAction, TRANSPORTATION.FILTER)) {
            addAction(currentAction, TRANSPORTATION.FILTER)
            result = true;
        }
        return result;
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        let { getAllModel, t } = nextProps;
        const { currentAction } = this.state;

        if (!getAllModel.isLoading && isExistAction(currentAction, TRANSPORTATION.FILTER)) {

            let result = getAllModel.responseData;
            if (!result.Success) {
                toastr.error(t(transportation.GridTitle),result.Message);
            }


            this.setState({
                currentAction: removeAction(currentAction, TRANSPORTATION.FILTER)
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

    filter = () => {
        this.props.transportationFilterAction(`?fromDate=${formatDateTimeToString(this.state.fromDate)}&toDate=${formatDateTimeToString(this.state.toDate)}`);
    }

    render() {
        const { t, changeStatusModel, deleteModel, getAllModel } = this.props;
        const { currentAction } = this.state;

        let disableColumns = [''];//['Id','Status'];

        if (!getAllModel || !changeStatusModel || !deleteModel) return;

        const isLoadingOver = currentAction.length > 0 || changeStatusModel.isLoading || deleteModel.isLoading;

        if (getAllModel.isError) {
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
                            <Col md="4">
                                <FormGroup>
                                    <p>&nbsp;</p>
                                    <Button size="sm" color="primary" onClick={this.filter}>
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
                            keyFields={key.transportation}
                            tableName="TRANSPORTATION"
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
    //getAllModel: state.getAllTransportationReducer,
    changeStatusModel: state.changeStatusTransportationReducer,
    deleteModel: state.deleteTransportationReducer,
    getAllModel: state.transportationFilterReducer,
});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    getAllAction: getAllTransportationAction,
    changeStatusAction: changeStatusTransportationAction,
    deleteAction: deleteTransportationAction,
    transportationFilterAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Transportation));