import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import key from '../../../i18n/key';
import { Col, Row, FormGroup, Label, Card, CardBody, Button } from "reactstrap";
import LoadingOverlay from 'react-loading-overlay';
import { ErrorAlert } from '../../../components/alerts/errorAlert';
import { applyCheckAuthorized } from '../../../utilities/validate';
import DateTimePicker from 'react-datetime-picker';
import { formatDateTimeToString } from "../../../utilities/format";
import { reportBangkeAction, reportCheckBangkeAction } from '../../../actions/report';
import { REPORT } from "../../../actionTypes/report";
import { addAction, isExistAction, removeAction } from '../../../utilities/currrentActionHelper';
import { toastr } from 'react-redux-toastr';

class Report extends Component {
    constructor(props) {
        super(props);
        applyCheckAuthorized();
        let currentDateTime = new Date(formatDateTimeToString(new Date().setHours(0, 0, 0, 0)));
        this.state = {
            currentAction: [],
            date: currentDateTime,
            currentDateTime: currentDateTime,
        };
    }
    componentDidMount() {
        //Sau khi render hàm này sẽ chạy

    }
    requestAction = (nextProps) => {
        //Khi có action phát đi thì hàm này sẽ handle
        let { bangkeModel, checkBangkeModel } = nextProps;
        const { currentAction } = this.state;
        let result = false;

        if (bangkeModel.isLoading && !isExistAction(currentAction, REPORT.BANGKE)) {
            addAction(currentAction, REPORT.BANGKE)
            result = true;
        }

        if (checkBangkeModel.isLoading && !isExistAction(currentAction, REPORT.CHECK_BANGKE)) {
            addAction(currentAction, REPORT.CHECK_BANGKE)
            result = true;
        }

        return result;
    }
    responseAction = (nextProps) => {
        //Khi api trả dữ liệu về thì hàm này sẽ handle
        let { checkBangkeModel, bangkeModel } = nextProps;
        const { currentAction, date, currentDateTime } = this.state;

        if (!checkBangkeModel.isLoading && isExistAction(currentAction, REPORT.CHECK_BANGKE)) {

            let result = checkBangkeModel.responseData;
          
            this.setState({
                currentAction: removeAction(currentAction, REPORT.CHECK_BANGKE)
            });

            if (!result.Success) {
                toastr.error('Xuất Bảng Kê',result.Message);
                return;
            }

            let request = {
                queryString: `?date=${formatDateTimeToString(date)}`,
                monthReport: date.getMonth() + 1,
                yearReport: date.getFullYear(),
    
                day: currentDateTime.getDate(),
                month: currentDateTime.getMonth() + 1,
                year: currentDateTime.getFullYear(),
            };
            this.props.reportBangkeAction(request);

        }

        if (!bangkeModel.isLoading && isExistAction(currentAction, REPORT.BANGKE)) {
            this.setState({
                currentAction: removeAction(currentAction, REPORT.BANGKE)
            });
            if(bangkeModel.isError){
            }else{
                toastr.success('Xuất Bảng Kê','Download thành công');
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    handleChangeFields(event, field) {
        if (field === 'Date') {
            this.setState({
                date: event
            });
        }

    }
    exportBangke = () => {
        const { date } = this.state;
        this.props.reportCheckBangkeAction(`?date=${formatDateTimeToString(date)}`);
    }

    render() {
        const { t, bangkeModel } = this.props;
        const { currentAction } = this.state;

        let loading = currentAction.length > 0;

        if (bangkeModel.isError) {
            return <ErrorAlert responseData={bangkeModel.responseData}
                msgErrorGetAPI={t(key.common.errorGetAllAPI)} t={this.props.t}
                msgRedirectToLogin={t(key.common.redirectToLogin)} />
        } else {
            return (
                <Card>
                    <LoadingOverlay active={loading} spinner text={t(key.common.processingSpinner)} className="overlayFullScreen" />

                    <CardBody>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>Xuất bảng kê cho tháng</Label>
                                    <DateTimePicker
                                        value={this.state.date}
                                        onChange={(event) => this.handleChangeFields(event, 'Date')}
                                        className='form-control'
                                        format="M/y"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <p>&nbsp;</p>
                                    <Button size="sm" color="success" onClick={this.exportBangke}>
                                        <i className="fa fa-file-excel-o"></i> Xuất Excel
                                </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>


                </Card>
            )

        }

    }
}
//Nhận dữ liệu trả về từ reducer (reducer thì lấy data từ api)
const mapStateToProps = state => ({
    bangkeModel: state.reportBangkeReducer,
    checkBangkeModel: state.reportCheckBangkeReducer,


});
//Phát đi tính hiệu thông qua action (để lấy data từ api)
const mapDispatchToProps = {
    reportBangkeAction,
    reportCheckBangkeAction,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Report));