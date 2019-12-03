import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import key from '../../i18n/key';
import { Card, CardBody, CardHeader, Col, Row, Badge, Button } from "reactstrap";
import { AppSwitch } from '@coreui/react';
import LoadingOverlay from 'react-loading-overlay';
import { ConfirmModal } from '../modals/confirmModal';
import { commonConstant } from '../../contants/common';
import { getSessionStorage, setSessionStorage } from '../../utilities/storage';
import { hasRecordsActionReducer, isNullActionReducer, removeItemFromItems, changeStatusItemFromItems, changeIsDefaultItemFromItems } from '../../utilities/validate';
import { toastr } from 'react-redux-toastr';
import { gridViewFormatDateTimeToString } from '../../utilities/format';

var _handleItem = null;
var _currentAction = null;
export class GridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowStatusConfirmModal: false,
            isShowDeleteConfirmModal: false,
            isShowIsDefaultConfirmModal: false,
            isEnableFilter: getSessionStorage(commonConstant.FILTER + this.props.tableName) === 'true' ? true : false,
        };
    }
    //CHANGESTATUS
    openModalChangeStatus = (item) => {
        _handleItem = item;
        this.handleToggleModal(commonConstant.CHANGE_STATUS, null);
    }
    //DELETE
    openModalDelete = (item) => {
        _handleItem = item;
        this.handleToggleModal(commonConstant.DELETE, null);
    }
    //CHANGEISDEFAULT
    openModalChangeIsDefault = (item) => {
        _handleItem = item;
        this.handleToggleModal(commonConstant.CHANGE_ISDEFAULT, null);
    }
    //TOGGLE MODAL
    handleToggleModal = (actionName, isSelected = false) => {
        if (isSelected && actionName === commonConstant.CHANGE_STATUS) {
            if (_handleItem && _handleItem.Id) {
                this.props.changeStatusAction(_handleItem.Id);
            }
        }
        else if (isSelected && actionName === commonConstant.DELETE) {
            if (_handleItem && _handleItem.Id) {
                this.props.deleteAction(_handleItem.Id);
            }
        }
        else if (isSelected && actionName === commonConstant.CHANGE_ISDEFAULT) {
            if (_handleItem && _handleItem.Id) {
                this.props.changeIsDefaultAction(_handleItem.Id);
            }
        }
        this.setState({
            isShowStatusConfirmModal: actionName === commonConstant.CHANGE_STATUS ? !this.state.isShowStatusConfirmModal : false,
            isShowDeleteConfirmModal: actionName === commonConstant.DELETE ? !this.state.isShowDeleteConfirmModal : false,
            isShowIsDefaultConfirmModal: actionName === commonConstant.CHANGE_ISDEFAULT ? !this.state.isShowDeleteConfirmModal : false,
        });
    }
    //FILTER
    handleSwitchFilter = () => {
        setSessionStorage(commonConstant.FILTER + this.props.tableName, !this.state.isEnableFilter)
        this.setState({
            isEnableFilter: !this.state.isEnableFilter,
        });
    }
    //EDIT
    handleEditAction = (item) => {
        if (item && item.Id) {
            const { history, tableName } = this.props;
            if (history) {
                history.push(tableName.toLowerCase() + '/' + item.Id);
            }
        }
    }
    requestAction = (nextProps) => {
        let { deleteModel, changeStatusModel, changeIsDefaultModel } = nextProps;
        if (deleteModel && deleteModel.isLoading) {
            _currentAction = commonConstant.DELETE;
            return true;
        }
        if (changeStatusModel && changeStatusModel.isLoading) {
            _currentAction = commonConstant.CHANGE_STATUS;
            return true;
        }
        if (changeIsDefaultModel && changeIsDefaultModel.isLoading) {
            _currentAction = commonConstant.CHANGE_ISDEFAULT;
            return true;
        }
    }
    responseAction = (nextProps) => {
        let { t, getAllModel, deleteModel, changeStatusModel, changeIsDefaultModel } = nextProps;
        let hasData = hasRecordsActionReducer(getAllModel);
        if (hasData) {
            let records = getAllModel.responseData.Data.Records;
            switch (_currentAction && true) {
                //DELETE
                case (commonConstant.DELETE && !isNullActionReducer(deleteModel)):
                    if (deleteModel.isError) {
                        toastr.error(t(key.common.deleteInfo), t(key.common.deleteErrorInfo));
                    } else {
                        getAllModel.responseData.Data.Records = removeItemFromItems(_handleItem, records);
                        toastr.success(t(key.common.deleteInfo), t(key.common.deleteSuccessInfo));
                    }
                    break;
                //CHANGE_STATUS
                case (commonConstant.CHANGE_STATUS && !isNullActionReducer(changeStatusModel)):
                    if (changeStatusModel.isError) {
                        toastr.error(t(key.common.switchStatusInfo), t(key.common.switchStatusErrorInfo));
                    } else {
                        getAllModel.responseData.Data.Records = changeStatusItemFromItems(_handleItem, records);
                        toastr.success(t(key.common.switchStatusInfo), t(key.common.switchStatusSuccessInfo));
                    }
                    break;
                //CHANGE_ISDEFAULT
                case (commonConstant.CHANGE_ISDEFAULT && !isNullActionReducer(changeIsDefaultModel)):
                    if (changeIsDefaultModel.isError) {
                        toastr.error(t(key.common.switchStatusInfo), t(key.common.switchStatusErrorInfo));
                    } else {
                        getAllModel.responseData.Data.Records = changeIsDefaultItemFromItems(_handleItem, records);
                        toastr.success(t(key.common.switchStatusInfo), t(key.common.switchStatusSuccessInfo));
                    }
                    break;
                //DEFAULT    
                default:
                    break;
            }
            _currentAction = null;
        }
    }
    componentWillReceiveProps(nextProps) {
        //request action
        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }
    //RENDER CONTENT
    render() {
        let { records, t, isLoadingOver, keyFields, disableColumns, tableName } = this.props;
        const directLink = tableName ? tableName.toLowerCase() : '';
        if (!records || records.length === 0) {
            return (
                <div className="animated fadeIn">
                    <Card>
                        <Row>
                            <Col xs="6">
                                <Link to={'/' + directLink + '/add'}>
                                    <Button size="sm" className="btn-dropbox btn-brand icon mr-1 mb-1">
                                        <i className="fa fa-plus"></i>
                                    </Button>
                                </Link>
                                <strong>{t(keyFields.GridTitleList)}</strong>
                            </Col>
                        </Row>
                    </Card>
                </div>
            )
        }
        let defaultPageSize = commonConstant.PAGE_SIZE;
        let pageSize = (records.length > defaultPageSize) ? defaultPageSize : records.length;
        let showPagination = (records.length > defaultPageSize) ? true : false;

        // Handle Disable Columns    
        if (disableColumns && disableColumns.length > 0) {
            records = records.map(item => {
                disableColumns.forEach(function (column) {
                    delete item[column];
                })
                return item;
            })
        }

        //Handel Datetime
        if (records.length > 0) {
            let tempModel = records[0];
            let datePropertyName = [];
            let regex = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/g;
            for (var propertyName in tempModel) {
                if (propertyName.toLowerCase().includes('date')) {
                    datePropertyName.push(propertyName);
                }
            }

            if (datePropertyName.length > 0) {
                records.forEach((item) => {
                    datePropertyName.forEach((propertyName) => {
                        if (!regex.test(item[propertyName])) {
                            item[propertyName] = gridViewFormatDateTimeToString(item[propertyName])
                        }
                    });
                });
            }
        }

        const propsOfTable = {
            data: records,
            columns: [],
            //pageSize: pageSize,
            defaultPageSize: pageSize,
            showPagination: showPagination,
            filterable: this.state.isEnableFilter,
            defaultFilterMethod: (filter, row) => {
                let filterValue = filter.value.toLowerCase();
                const id = filter.pivotId || filter.id;
                if (id === 'identifierNumber') {
                    return (row._index + 1) === parseInt(filter.value);
                } else if (row[id] !== undefined) {
                    let cellValue = String(row[id]).toLowerCase();
                    return cellValue.includes(filterValue);
                }
            },
        }
        if (records.length <= defaultPageSize) propsOfTable.pageSize = pageSize;
        if (records && records.length > 0) {
            let columns = Object.keys(records[0]).map((keyName, id) => {
                var column = {
                    Header: t(keyFields[keyName]),
                    headerClassName: 'header-table text-left',
                    accessor: keyName,
                    show: (keyName === 'Id' || keyName === 'Status') ? false : true,
                    minWidth: id === 0 ? 150 : 100,
                    className: 'text-left',
                    minResizeWidth: 50
                };
                if (typeof records[0][keyName] === "boolean") {
                    column.Cell = row => (
                        <input type="checkbox" checked={row.original[keyName] ? true : false} disabled />
                    );
                    column.className = 'text-center'
                }
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
            columns.push({
                Header: t(key.common.status),
                headerClassName: 'header-table',
                accessor: 'status',
                filterable: false,
                Cell: row => {
                    const titleStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? key.common.active :
                        (row.original.Status === 'InActive' || row.original.Status === 0) ? key.common.inActive : key.common.deleted;
                    const colorStatus = (row.original.Status === 'Active' || row.original.Status === 1) ? 'success' :
                        (row.original.Status === 'InActive' || row.original.Status === 0) ? 'danger' : 'secondary';
                    return (
                        <Badge className="label-status" onClick={() => this.openModalChangeStatus(row.original)}
                            color={colorStatus}>
                            {t(titleStatus)}
                        </Badge>
                    )
                },
                width: 100,
                className: 'text-center handle-pointer',
                minResizeWidth: 50,
            });
            columns.push({
                Header: t(key.common.update),
                headerClassName: 'header-table',
                accessor: 'update',
                filterable: false,
                sortable: false,
                Cell: row => (
                    <>
                        <i onClick={() => this.handleEditAction(row.original)} className="handle-pointer fa fa-edit fa-lg"></i> &nbsp;
                        <i onClick={() => this.openModalDelete(row.original)} className="handle-pointer fa fa-trash-o fa-lg"></i>
                    </>
                ),
                width: 80,
                className: 'text-center',
                minResizeWidth: 50,
            });
            propsOfTable.columns = columns;
        }
        return (
            <div className="animated fadeIn">
                <LoadingOverlay active={isLoadingOver} spinner text={t(key.common.processingSpinner)} className="overlayFullScreen" />
                <Card>
                    <CardHeader>
                        <Row>
                            <Col xs="6">
                                <Link to={'/' + directLink + '/add'}>
                                    <Button size="sm" className="btn-dropbox btn-brand icon mr-1 mb-1">
                                        <i className="fa fa-plus"></i>
                                    </Button>
                                </Link>
                                <strong>{t(keyFields.GridTitleList)}</strong>
                            </Col>
                            <Col xs="6" className={'text-right'} title="Enables or disables records filtering of columns in the table.">
                                {t(key.common.filterTitle)}
                                <AppSwitch className={'float-right mx-1'} variant={'pill'} color={'primary'}
                                    onChange={this.handleSwitchFilter} checked={this.state.isEnableFilter} />
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {
                            records.length > 0 ?
                                <ReactTable {...propsOfTable} /> :
                                <div className="animated fadeIn"><Row><Col xs="12" lg="12">{t(key.common.noDataFound)}</Col></Row></div>
                        }
                        <ConfirmModal isOpenModal={this.state.isShowStatusConfirmModal}
                            toggleModal={() => this.handleToggleModal(commonConstant.CHANGE_STATUS, false)}
                            selectedYes={() => this.handleToggleModal(commonConstant.CHANGE_STATUS, true)}
                            className="warning" sizeModal="md" backdropModal="static"
                            headerTitle={t(key.common.infoTitleConfirmModal)}
                            bodyContent={t(key.common.switchStatusConfirmModal)}
                            textBtnYes={t(key.common.btnOk)}
                            textBtnNo={t(key.common.btnCancel)}
                        />
                        <ConfirmModal isOpenModal={this.state.isShowDeleteConfirmModal}
                            toggleModal={() => this.handleToggleModal(commonConstant.DELETE, false)}
                            selectedYes={() => this.handleToggleModal(commonConstant.DELETE, true)}
                            className="danger" sizeModal="md" backdropModal="static"
                            headerTitle={t(key.common.infoTitleConfirmModal)}
                            bodyContent={t(key.common.deleteConfirmModal)}
                            textBtnYes={t(key.common.btnOk)}
                            textBtnNo={t(key.common.btnCancel)}
                        />
                        <ConfirmModal isOpenModal={this.state.isShowIsDefaultConfirmModal}
                            toggleModal={() => this.handleToggleModal(commonConstant.CHANGE_ISDEFAULT, false)}
                            selectedYes={() => this.handleToggleModal(commonConstant.CHANGE_ISDEFAULT, true)}
                            className="warning" sizeModal="md" backdropModal="static"
                            headerTitle={t(key.common.infoTitleConfirmModal)}
                            bodyContent={t(key.common.switchStatusConfirmModal)}
                            textBtnYes={t(key.common.btnOk)}
                            textBtnNo={t(key.common.btnCancel)}
                        />
                        {/* Option className modal: primary, info, danger, warning,success, 
                  Size modal: sm, md, lg */}
                    </CardBody>
                </Card>
            </div >
        );
    }
}