import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { StoredXss } from './pages/labs/stored-xss/stored-xss';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Labs } from './pages/labs/labs';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Search } from './pages/search/search';
import { Reports} from './pages/report/report';
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
        path:'dashboard',
        component:Dashboard,
        canActivate:[authGuard]
    },
      {
  path: 'recon',
  component: Search,
  canActivate: [authGuard],
},
{
  path: 'targets',
  component: Search,
  canActivate: [authGuard],
},
{
  path: 'scans',
  component: Admin,
  canActivate: [authGuard],
},
{
  path: 'reports',
  component: Reports,
  canActivate: [authGuard],
},
{
  path: 'labs',
  component: Labs,
  canActivate: [authGuard],
},
{
    path: 'labs/stored-xss',
    component: StoredXss,
    canActivate: [authGuard],
},
{
  path: 'labs/profile/:id',
  component: Profile,
  canActivate: [authGuard],
},
      {
        path: 'settings',
        component: Settings,
        canActivate: [authGuard],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];