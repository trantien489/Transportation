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
          name: t(key.common.dashBoard), url: '/dashboard', icon: 'icon-speedometer',
          badge: { variant: 'info', text: 'NEW', },
        },
        { title: true, name: t(key.common.systemAside), wrapper: { element: '', attributes: {} }, class: '' },
        { name: t(key.role.GridTitle), url: '/role', icon: 'icon-lock', },
        { name: t(key.user.GridTitle), url: '/user', icon: 'icon-people', },
        { name: t(key.permission.GridTitle), url: '/permission', icon: 'icon-tag', },
        { name: 'Permission Roles', url: '/permission-roles', icon: 'icon-tag', },
        { title: true, name: t(key.common.reportsAside), },
        { title: true, name: t(key.common.applicationsAside), wrapper: { element: '', attributes: {}, }, },
        { title: true, name: 'Settings', wrapper: { element: '', attributes: {} }, class: '' },
        { name: t(key.configType.GridTitle), url: '/configtype', icon: 'icon-notebook', },
        { name: t(key.config.GridTitle), url: '/config', icon: 'icon-settings', },
        { name: t(key.imageType.GridTitle), url: '/imagetype', icon: 'icon-picture', },
        { name: t(key.advertise.GridTitle), url: '/advertise', icon: 'icon-tag', },
        { name: t(key.templatePosition.GridTitle), url: '/templateposition', icon: 'icon-pin', },
        { name: t(key.category.category), url: '/category', icon: 'icon-tag', },
        { name: t(key.language.GridTitle), url: '/language', icon: 'icon-picture', },
        { name: t(key.support.GridTitle), url: '/support', icon: 'icon-tag', },        
        { name: t(key.contact.GridTitle), url: '/contact', icon: 'icon-people', },
        { name: t(key.promotion.GridTitle), url: '/promotion', icon: 'icon-tag', },
        { name: t(key.company.GridTitle), url: '/company', icon: 'icon-tag', },
      ],
    }
  };
  componentWillReceiveProps() {
    const { t } = this.props;
    this.setState({ nav: this.GetArraySidebar(t) });
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