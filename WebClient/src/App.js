import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import DefaultLayout from './containers/layout';
import Login from './containers/pages/Login/Login';
import { Page404, Page500, Register } from './containers/views/Pages';
class App extends Component {
  render() {
    const urlBase = process.env.REACT_APP_URL_BASE;
    return (
      <BrowserRouter basename={urlBase}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
