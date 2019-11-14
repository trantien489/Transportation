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
// SYSTEM
const Role = Loadable({
  loader: () => import('./pages/Role/Index'),
  loading: Loading,
});
const RoleUpdate = Loadable({
  loader: () => import('./pages/Role/Update'),
  loading: Loading,
});
const User = Loadable({
  loader: () => import('./pages/User/Index'),
  loading: Loading,
});
const UserUpdate = Loadable({
  loader: () => import('./pages/User/Update'),
  loading: Loading,
});
//CONFIGTYPE
const ConfigType = Loadable({
  loader: () => import('./pages/ConfigType/Index'),
  loading: Loading,
});
const ConfigTypeUpdate = Loadable({
  loader: () => import('./pages/ConfigType/Update'),
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
//IMAGETYPE
const ImageType = Loadable({
  loader: () => import('./pages/ImageType/Index'),
  loading: Loading,
});
const ImageTypeUpdate = Loadable({
  loader: () => import('./pages/ImageType/Update'),
  loading: Loading,
});
//ADVERTISE
const Advertise = Loadable({
  loader: () => import('./pages/Advertise/Index'),
  loading: Loading,
});
const AdvertiseUpdate = Loadable({
  loader: () => import('./pages/Advertise/Update'),
  loading: Loading,
});
//TEMPLATEPOSITION
const TemplatePosition = Loadable({
  loader: () => import('./pages/TemplatePosition/Index'),
  loading: Loading,
});
const TemplatePositionUpdate = Loadable({
  loader: () => import('./pages/TemplatePosition/Update'),
  loading: Loading,
});
//CATEGORY
const Category = Loadable({
  loader: () => import('./pages/Category/Index'),
  loading: Loading,
});
const CategoryUpdate = Loadable({
  loader: () => import('./pages/Category/Update'),
  loading: Loading,
});
//PERMISSION
const Permission = Loadable({
  loader: () => import('./pages/Permission/Index'),
  loading: Loading,
});
const PermissionUpdate = Loadable({
  loader: () => import('./pages/Permission/Update'),
  loading: Loading,
});
const PermissionRoles = Loadable({
  loader: () => import('./pages/PermissionRoles/Index'),
  loading: Loading,
});
//SUPPORT
const Support = Loadable({
  loader: () => import('./pages/Support/Index'),
  loading: Loading,
});
const SupportUpdate = Loadable({
  loader: () => import('./pages/Support/Update'),
  loading: Loading,
});
//CONTACT
const Contact = Loadable({
  loader: () => import('./pages/Contact/Index'),
  loading: Loading,
});
const ContactUpdate = Loadable({
  loader: () => import('./pages/Contact/Update'),
  loading: Loading,
});
//PROMOTION
const Promotion = Loadable({
  loader: () => import('./pages/Promotion/Index'),
  loading: Loading,
});
const PromotionUpdate = Loadable({
  loader: () => import('./pages/Promotion/Update'),
  loading: Loading,
});
//LANGUAGE
const Language = Loadable({
  loader: () => import('./pages/Language/Index'),
  loading: Loading,
});
const LanguageUpdate = Loadable({
  loader: () => import('./pages/Language/Update'),
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
  // SYSTEM
  { path: '/role/:id', name: 'Update', component: RoleUpdate },
  { path: '/role', name: 'Role', component: Role },
  { path: '/user/:id', name: 'Update', component: UserUpdate },
  { path: '/user', name: 'User', component: User },
  // APPLICATIONS
  { path: '/configtype/:id', name: 'Update', component: ConfigTypeUpdate },
  { path: '/configtype', name: 'ConfigType', component: ConfigType },
  { path: '/config/:id', name: 'Update', component: ConfigUpdate },
  { path: '/config', name: 'Config', component: Config },
  { path: '/imagetype/:id', name: 'Update', component: ImageTypeUpdate },
  { path: '/imagetype', name: 'ImageType', component: ImageType },
  { path: '/advertise/:id', name: 'Update', component: AdvertiseUpdate },
  { path: '/advertise', name: 'Advertise', component: Advertise },
  { path: '/templateposition/:id', name: 'Update', component: TemplatePositionUpdate },
  { path: '/templateposition', name: 'TemplatePosition', component: TemplatePosition },
  { path: '/category/:id', name: 'Update', component: CategoryUpdate },
  { path: '/category', name: 'Category', component: Category },
  { path: '/permission/:id', name: 'Update', component: PermissionUpdate },
  { path: '/permission', name: 'Permission', component: Permission },
  { path: '/permission-roles', name: 'Grant Permission', component: PermissionRoles },
  { path: '/support/:id', name: 'Update', component: SupportUpdate },
  { path: '/support', name: 'Support', component: Support },
  { path: '/language/:id', name: 'Update', component: LanguageUpdate },
  { path: '/language', name: 'Language', component: Language },
  { path: '/contact/:id', name: 'Update', component: ContactUpdate },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/promotion/:id', name: 'Update', component: PromotionUpdate },
  { path: '/promotion', name: 'Promotion', component: Promotion },
  { path: '/company/:id', name: 'Update', component: CompanyUpdate },
  { path: '/company', name: 'company', component: Company },
];
export default routes;