/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import key from '../../../i18n/key';
import { translate } from 'react-i18next';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../../../assets/common/logo.svg';
import logo from '../../../assets/images/logo/logo_hori.png';
import sygnet from '../../../assets/common/sygnet.svg';
import { setLocalStorage } from '../../../utilities/storage';
import { getLanguageDefault } from '../../../utilities/languageDefault';
import { commonConstant } from '../../../contants/common';
import { clearAllSessionStorage } from '../../../utilities/storage';
const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};
class DefaultHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: getLanguageDefault() };
    //this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }
  handleChangeLanguage = (event) => {
    if (event && event.target && event.target.value) {
      this.setState({ value: event.target.value });
      setLocalStorage(commonConstant.system.TRANSLATION_KEY, event.target.value);
      i18n.changeLanguage(event.target.value);
    }
  }
  handleLogout = () => {
    clearAllSessionStorage();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  }
  render() {
    // eslint-disable-next-line
    const { children, t, ...attributes } = this.props;
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">{t(key.common.dashBoard)}</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="/role">{t(key.role.role)}</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="/user">{t(key.user.user)}</NavLink>
          </NavItem>          
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <Input type="select" name="select" id="select" className="mrTop15"
              value={this.state.value} onChange={(event) => this.handleChangeLanguage(event)}
            >
              <option value="vi">Vietnamese</option>
              <option value="en">English</option>
            </Input>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img id='ava' src={'/assets/images/avatars/noava.jpg'}  onError={e=>e.target.src='/assets/images/avatars/not-available.jpg'} className="img-avatar" alt="user-avatar" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={this.handleLogout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
export default translate()((DefaultHeader));
