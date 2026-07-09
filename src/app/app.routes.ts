import { Routes } from '@angular/router';

import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Search } from './pages/search/search';
import { Upload } from './pages/upload/upload';
import { Admin } from './pages/admin/admin';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
    ],
  },

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'search',
        component: Search,
      },
      {
        path: 'upload',
        component: Upload,
      },
      {
        path: 'admin',
        component: Admin,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];