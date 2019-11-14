import React, { Component } from "react";
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Card, CardBody, CardHeader, CardFooter, Col, Row, FormGroup, Label, Button, Input } from "reactstrap";
import Select from 'react-select';
import { reactSelectCustomStyles, reactSelectInputChange } from '../../../utilities/reactSelect';
import key from '../../../i18n/key';
import { searchControllerByNameAction, searchAction, saveAction } from '../../../actions/permission';
import { getAllRolesAction } from '../../../actions/role';
import LoadingOverlay from 'react-loading-overlay';
import ReactTable from "react-table";
import { toastr } from 'react-redux-toastr';
import { isNullOrEmptyObject } from '../../../utilities/validate';
import { commonConstant } from '../../../contants/common';

class PermissionRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            controllerSelectConfig: {
                options: [],
                isLoading: false,
            },
            roleSelectConfig: {
                options: [],
            },
            searchModel: {
                controllerName: '',
                roleIds: []
            },
            saveModel: []
        };
    }

    componentDidMount() {
        this.props.searchControllerByNameAction('?searchKey=');
        this.props.getAllRolesAction();
    }

    searchControllerCallback = (text) => {
        this.props.searchControllerByNameAction('?searchKey=' + text);
    }

    handleChangeFields(event, field) {
        const { searchModel } = this.state;
        if (field === 'Roles') {
            if (!event) {
                searchModel.roleIds = [];
            } else {
                searchModel.roleIds = event.map(item => { return item.value })
            }
        }
        else if (!event) {
            return;
        }
        else if (field === 'ControllerName') {
            searchModel.controllerName = event.label;
        }

        this.search();
    }

    search = () => {
        const { searchModel } = this.state;
        this.props.searchAction(searchModel);
    }

    componentWillReceiveProps(nextProps) {

        if (this.requestAction(nextProps)) return;
        //response action
        this.responseAction(nextProps);
    }

    requestAction = (nextProps) => {
        const { searchControllerModel, getAllRolesModel, searchPermissionModel, savePermissionModel } = nextProps;
        let { controllerSelectConfig } = this.state;
        if (searchControllerModel.isLoading) {
            controllerSelectConfig.isLoading = true;
            this.setState({
                ...this.state,
                controllerSelectConfig: controllerSelectConfig
            });
            return true;
        }

        if (getAllRolesModel.isLoading) {
            this.setState({
                ...this.state,
                isLoading: true
            });
            return true;
        }

        if (searchPermissionModel.isLoading || savePermissionModel.isLoading) {
            return true;
        }
    }

    responseAction = (nextProps) => {
        const { t, searchControllerModel, getAllRolesModel, searchPermissionModel } = nextProps;
        let { savePermissionModel } = nextProps;
        let { controllerSelectConfig, roleSelectConfig } = this.state;

        if (searchControllerModel.responseData && searchControllerModel.responseData.Data) {
            let tempId = 0;
            controllerSelectConfig.isLoading = false;
            controllerSelectConfig.options = searchControllerModel.responseData.Data.map(item => {
                return { label: item, value: ++tempId }
            })
            this.setState({
                ...this.state,
                controllerSelectConfig: controllerSelectConfig
            });
        }

        if (getAllRolesModel.responseData && getAllRolesModel.responseData.Data && getAllRolesModel.responseData.Data.Records.length > 0 && roleSelectConfig.options.length === 0) {
            roleSelectConfig.options = getAllRolesModel.responseData.Data.Records.map(item => {
                return { label: item.Name, value: item.Id }
            })
            this.setState({
                ...this.state,
                isLoading: false
            });
        }

        if (searchPermissionModel.responseData.Data && searchPermissionModel.responseData.Data.length > 0) {
            this.setState({
                ...this.state,
                saveModel: searchPermissionModel.responseData.Data.map(item => {
                    return {
                        id: item.Id,
                        roleIds: item.RoleIds
                    }
                })
            });
        }

        if (!isNullOrEmptyObject(savePermissionModel.responseData)) {
            if (savePermissionModel.responseData.Success === true) {
                toastr.success(t(key.permission.EditTitle), t(key.common.editDataSuccess));
                this.search();
            } else if (savePermissionModel.responseData.Success === false) {
                toastr.error(key.permission.EditTitle, t(key.common.editDataFail));
            }
            savePermissionModel.responseData = null;
        }
    }

    renderGrid = () => {
        const { searchPermissionModel } = this.props;
        if (!searchPermissionModel.isLoading && searchPermissionModel.responseData.Data && searchPermissionModel.responseData.Data.length > 0) {
            var data = searchPermissionModel.responseData.Data;
            let defaultPageSize = commonConstant.PAGE_SIZE;
            let pageSize = (data.length > defaultPageSize) ? defaultPageSize : data.length;
            let showPagination = (data.length > defaultPageSize) ? true : false;

            const propsOfTable = {
                data: data,
                columns: [],
                filterable: false,
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
                SubComponent: this.renderSubComponent,
                defaultPageSize: pageSize,
                showPagination: showPagination,
                freezeWhenExpanded: true,
                minRows: 0
            }
            propsOfTable.columns = Object.keys(data[0]).map((keyName, id) => {
                var column = {
                    Header: keyName,
                    headerClassName: 'header-table text-left',
                    accessor: keyName,
                    show: (keyName === 'Id' || keyName === 'RoleIds' || keyName === 'Status') ? false : true,
                    minWidth: id === 0 ? 150 : 100,
                    className: 'text-left',
                    minResizeWidth: 50
                };
                return column;
            });
            propsOfTable.columns.unshift({
                Header: '#',
                headerClassName: 'header-table',
                accessor: 'identifierNumber',
                Cell: (row) => { return <span>{row.index + 1}</span> },
                minWidth: 20,
                className: 'text-center',
                minResizeWidth: 50,
            });

            return <ReactTable {...propsOfTable} />;
        }
        else {
            return <><p style={{ height: '450px' }}></p></>;
        }
    }

    renderSubComponent = (row) => {
        const { getAllRolesModel } = this.props;
        return (
            getAllRolesModel.responseData && getAllRolesModel.responseData.Data &&
            <Row style={{ borderTop: '1px solid rgba(0, 0, 0, 0.15)' }}>
                <Col md="1">
                </Col>
                <Col md="11">
                    <Row>
                        {
                            getAllRolesModel.responseData && getAllRolesModel.responseData.Data.Records.map((item) => {
                                return (
                                    <Col md="4" key={item.Id}>
                                        <Input className="form-check-input" type="checkbox"
                                            value={item.Id}
                                            onChange={(item) => this.handleChecboxOnChange(item, row.row.Id)}
                                            defaultChecked={row.row.RoleIds.indexOf(item.Id) >= 0 ? true : false}
                                        />
                                        <Label check className="form-check-label" >{item.Name}</Label>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>

            </Row>
        );
    }

    handleChecboxOnChange = (item, permissionId) => {
        let { saveModel } = this.state;
        const checked = item.target.checked;
        const roleId = item.target.value;

        let permission = saveModel.find(item => item.id === permissionId);
        if (permission) {
            permission.state = "modified";
            if (checked) {
                permission.roleIds.push(roleId);
            } else {
                permission.roleIds = permission.roleIds.filter(item => item !== roleId);
            }
        }
        console.log(saveModel);
    }

    save = () => {
        let { saveModel } = this.state;
        this.props.saveAction(saveModel.filter(item => item.state === 'modified'));
    }

    render() {
        const { t, searchPermissionModel, savePermissionModel } = this.props;
        const { isLoading, controllerSelectConfig, roleSelectConfig } = this.state;
        let isShowBtnSave = searchPermissionModel && searchPermissionModel.responseData && searchPermissionModel.responseData.Data && searchPermissionModel.responseData.Data.length > 0;
        if (isLoading) {
            return <LoadingOverlay active spinner text={t(key.common.loadingSpinner)} />
        } else {
            return (
                <LoadingOverlay active={savePermissionModel.isLoading}
                    text={t(key.common.processingSpinner)}
                    spinner
                    className='overlayFullScreen'
                >
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i><strong>Giao dien phan quyen tu 1 list click vao</strong>
                                    <div className="card-header-actions">
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label>Controller: </Label>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    styles={reactSelectCustomStyles(true)}
                                                    options={controllerSelectConfig.options}
                                                    onInputChange={(text, action) => reactSelectInputChange(text, action, this.searchControllerCallback, this)}
                                                    isLoading={controllerSelectConfig.isLoading}
                                                    filterOption={false}
                                                    onChange={(event) => this.handleChangeFields(event, 'ControllerName')}
                                                    placeholder={t(key.common.pleaseSearch) + '...'}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup>
                                                <Label>Roles: </Label>
                                                <Select
                                                    isMulti
                                                    styles={reactSelectCustomStyles(true)}
                                                    options={roleSelectConfig.options}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    onChange={(event) => this.handleChangeFields(event, 'Roles')}
                                                    placeholder={t(key.common.pleaseSelect) + '...'}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <LoadingOverlay active={searchPermissionModel.isLoading} spinner
                                        text={t(key.common.processingSpinner)}                                    >
                                        {this.renderGrid()}
                                    </LoadingOverlay>
                                </CardBody>
                                {isShowBtnSave && <CardFooter>
                                    <FormGroup>
                                        <Button type="submit" size="sm" color="primary" onClick={this.save}>
                                            <i className="fa fa-dot-circle-o"></i> {t(key.common.btnSubmit)}
                                        </Button>{' '}
                                        <Button type="reset" size="sm" color="danger" onClick={this.handleBackList}>
                                            <i className="fa fa-ban"></i> {t(key.common.btnBackList)}
                                        </Button>
                                    </FormGroup>
                                </CardFooter>}
                            </Card>
                        </Col>
                    </Row>
                </LoadingOverlay>
            )
        }

    }

}
const mapStateToProps = state => ({
    searchControllerModel: state.searchControllerByNameReducer,
    getAllRolesModel: state.getAllRolesReducer,
    searchPermissionModel: state.searchPermissionReducer,
    savePermissionModel: state.savePermissionReducer,
});
const mapDispatchToProps = {
    searchControllerByNameAction,
    getAllRolesAction,
    searchAction,
    saveAction
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(PermissionRoles));