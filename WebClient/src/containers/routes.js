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

//DISTANCE
const Distance = Loadable({
  loader: () => import('./pages/Distance/Index'),
  loading: Loading,
});
const DistanceUpdate = Loadable({
  loader: () => import('./pages/Distance/Update'),
  loading: Loading,
});

//DRIVER
const Driver = Loadable({
  loader: () => import('./pages/Driver/Index'),
  loading: Loading,
});
const DriverUpdate = Loadable({
  loader: () => import('./pages/Driver/Update'),
  loading: Loading,
});

//PRICE
const Price = Loadable({
  loader: () => import('./pages/Price/Index'),
  loading: Loading,
});
const PriceUpdate = Loadable({
  loader: () => import('./pages/Price/Update'),
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

  { path: '/distance/:id', name: 'Update', component: DistanceUpdate },
  { path: '/distance', name: 'Distance', component: Distance },
  
  { path: '/driver/:id', name: 'Update', component: DriverUpdate },
  { path: '/driver', name: 'Driver', component: Driver },

  { path: '/price/:id', name: 'Update', component: PriceUpdate },
  { path: '/price', name: 'Price', component: Price },  
 
];
export default routes;