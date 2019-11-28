import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { loginJWT } from '../../../actions/login';
import key from '../../../i18n/key';
import LoadingOverlay from 'react-loading-overlay';
import { toastr } from 'react-redux-toastr';
import { commonConstant } from '../../../contants/common';
import { isNullOrEmptyObject } from '../../../utilities/validate';
import { setSessionStorage } from '../../../utilities/storage';
class LoginForm extends Component {
  formData = {};
  componentWillReceiveProps(nextProps) {
    let { login } = nextProps;
    if (!login) return;
    if (!login.isError && login.responseData && !isNullOrEmptyObject(login.responseData.Data)) {
      const { id, auth_token, expires_in } = login.responseData.Data;
      if (id && auth_token && expires_in) {
        setSessionStorage(commonConstant.AUTH_ID, id);
        setSessionStorage(commonConstant.AUTH_TOKEN, auth_token);
        setSessionStorage(commonConstant.AUTH_EXPIRES_IN, expires_in);
        const { history } = this.props;
        if (history) {
          history.push('/dashboard');
        }
      }
    }
  }
  handleLogin = (event) => {
    if (!event) return;
    event.preventDefault();
    if (!this.validateLogin(this.formData)) return;
    const loginData = {
      UserName: this.formData.username.value,
      Password: this.formData.password.value,
    }
    this.props.loginJWT(loginData);
  }
  validateLogin(formData) {
    if (!formData) return false;
    const { t } = this.props;
    const { username, password } = formData;
    if (!username.value || username.value === '' || username.value.trim() === '') {
      toastr.error(t(key.login.loginTitle), t(key.login.loginErrorMsgUsername));
      return false;
    }
    if (!password.value || password.value === '' || password.value.trim() === '') {
      toastr.error(t(key.login.loginTitle), t(key.login.loginErrorMsgPassword));
      return false;
    }
    return true;
  }
  render() {
    const { t, login } = this.props;
    let classErrorMsg = 'invisible';
    let classAccountInActiveMsg = 'invisible';
    if (login && !isNullOrEmptyObject(login.responseData)) {
      if (login.responseData.message === commonConstant.USER_ACCOUNT_INACTIVE_MSG) classAccountInActiveMsg = 'visible';
      else classErrorMsg = 'visible';
    } else if (login && login.isError) {
      //classErrorMsg = 'visible'; //error connect or db
    }
    return (
      <Form onSubmit={this.handleLogin} ref={el => this.form = el}>
        <h1>{t(key.login.loginTitle)}</h1>
        <p className="text-muted">{t(key.login.loginSubTitle)}</p>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="username" innerRef={(self) => this.formData.username = self} placeholder={t(key.login.loginUsernameOrEmail)} />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" name="password" innerRef={(self) => this.formData.password = self} placeholder={t(key.login.loginPassword)} />
        </InputGroup>
        <Row>
          <Col xs="6">
            <Button type="submit" color="primary" className="px-4" onClick={this.handleLogin}>
              {t(key.common.btnLogin)}
            </Button>
          </Col>
          
          <Col xs="12 mt-2">
            <div className={`text-center text-danger ${classErrorMsg}`}>{t(key.login.loginErrorMessage)}</div>
            <div className={`text-center text-danger ${classAccountInActiveMsg}`}>{t(key.login.loginAccountInActiveMsg)}</div>
          </Col>
        </Row>
      </Form>
    );
  }
}
/*
class RegisterForm extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <h2>{t(key.common.registerTitle)}</h2>
        <p>{t(key.common.registerSubTitle)}</p>
        <Button color="primary" className="mt-3" active>
          {t(key.common.btnRegister)}
        </Button>
      </div>
    );
  }
}
*/
class Login extends Component {
  render() {
    const { t, login } = this.props;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <LoadingOverlay active={login.isLoading} spinner text={t(key.common.processingSpinner)} className="overlayFullScreen" />
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <LoginForm {...this.props} />
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <RegisterForm  {...this.props} />
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  login: state.loginReducer,
});
const mapDispatchToProps = {
  loginJWT,
};
export default translate()(connect(mapStateToProps, mapDispatchToProps)(Login));