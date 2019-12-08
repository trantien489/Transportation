import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import key from '../../i18n/key';
import { translate } from 'react-i18next';
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// routes config
import routes from '../routes';
import DefaultAside from './aside/aside';
import DefaultFooter from './footer/footer';
import DefaultHeader from './header/header';
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      nav: this.GetArraySidebar(t)
    };
  }
  GetArraySidebar(t) {
    return {
      items: [
        {
          name: t(key.common.dashBoard), url: '/dashboard', icon: 'icon-home',
          badge: { variant: 'info', text: 'NEW', },
        },
        { title: true, name: 'QUẢN LÝ ĐƠN GIÁ'},
        { name: t(key.capacity.GridTitle), url: '/capacity', icon: 'icon-drop', },
        { name: t(key.distance.GridTitle), url: '/distance', icon: 'icon-map', },
        { name: 'Bảng giá vận chuyển', url: '/price', icon: 'cui-dollar', },

        { title: true, name: 'QUẢN LÝ XE'},
        { name: t(key.car.GridTitle), url: '/car', icon: 'fa fa-truck', },
        { name: t(key.driver.GridTitle), url: '/driver', icon: 'icon-people', },

        { title: true, name: 'QUẢN LÝ VẬN CHUYỂN'},
        { name: t(key.company.GridTitle), url: '/company', icon: 'icon-grid', },
        { name: t(key.transportation.GridTitle), url: '/transportation', icon: 'icon-rocket', },


        { title: true, name: 'XUẤT BÁO CÁO'},
        { name: 'Bảng kê', url: '/report', icon: 'icon-docs', },


      ],
    }
  };
  componentWillReceiveProps() {
    //const { t } = this.props;
    //this.setState({ nav: this.GetArraySidebar(t) });
  }
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={this.state.nav} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch> 
                {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />) : (null);
                })}
                <Redirect from="/" to="/login" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}
export default translate()((DefaultLayout));