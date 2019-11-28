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

//CAPACITY
const Capacity = Loadable({
  loader: () => import('./pages/Capacity/Index'),
  loading: Loading,
});
const CapacityUpdate = Loadable({
  loader: () => import('./pages/Capacity/Update'),
  loading: Loading,
});


//TRANSPORTATION
const Transportation = Loadable({
  loader: () => import('./pages/Transportation/Index'),
  loading: Loading,
});
const TransportationUpdate = Loadable({
  loader: () => import('./pages/Transportation/Update'),
  loading: Loading,
});

//CAR
const Car = Loadable({
  loader: () => import('./pages/Car/Index'),
  loading: Loading,
});
const CarUpdate = Loadable({
  loader: () => import('./pages/Car/Update'),
  loading: Loading,
});

//COMPANY
const Company = Loadable({
  loader: () => import('./pages/Company/Index'),
  loading: Loading,
});
const CompanyUpdate = Loadable({
  loader: () => import('./pages/Company/Update'),
  loading: Loading,
});


const routes = [
  { path: '/dashboard', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
 
  { path: '/config/:id', name: 'Update', component: ConfigUpdate },
  { path: '/config', name: 'Config', component: Config },

  { path: '/capacity/:id', name: 'Update', component: CapacityUpdate },
  { path: '/capacity', name: 'Capacity', component: Capacity },

  { path: '/transportation/:id', name: 'Update', component: TransportationUpdate },
  { path: '/transportation', name: 'Transportation', component: Transportation },

  { path: '/car/:id', name: 'Update', component: CarUpdate },
  { path: '/car', name: 'Car', component: Car },  

  { path: '/company/:id', name: 'Update', component: CompanyUpdate },
  { path: '/company', name: 'Company', component: Company },  
 
];
export default routes;