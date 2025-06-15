import { type routesType } from '@/routes/Router.types';
import { Routes } from '@/routes/Router.config';
import { Auth, Dashboard, Profile } from '@/pages';

export const routes: routesType = [
  {
    path: Routes.Default,
    element: <Dashboard />,
  },
  {
    path: Routes.Dashboard,
    element: <Dashboard />,
  },
  {
    path: Routes.Auth,
    element: <Auth />,
  },
  {
    path: Routes.Profile,
    element: <Profile />,
  },
];