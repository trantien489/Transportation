import React from 'react';
import Loadable from 'react-loadable';
import DefaultLayout from './layout';
import LoadingOverlay from 'react-loading-overlay';
function Loading() {
  return <LoadingOverlay active spinner />
}
const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard/Dashboard'),
  loading: Loading,
});
//CONFIG
const Config = Loadable({
  loader: () => import('./pages/Config/Index'),
  loading: Loading,
});
const ConfigUpdate = Loadable({
  loader: () => import('./pages/Config/Update'),
  loading: Loading,
});
const routes = [
  { path: '/dashboard', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
 
  { path: '/config/:id', name: 'Update', component: ConfigUpdate },
  { path: '/config', name: 'Config', component: Config },
 
];
export default routes;