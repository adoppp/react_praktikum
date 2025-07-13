import { lazy } from 'react';
import type { LazyExoticComponent, ComponentType } from 'react';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Auth = lazy(() => import('@/pages/Auth'));
const Profile = lazy(() => import('@/pages/Profile'));

export interface RouteItem {
  path?: string;
  index?: boolean;
  component: LazyExoticComponent<ComponentType>;
};

export const RouterConfig: RouteItem[] = [
  {
    index: true,
    component: Dashboard,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'auth',
    component: Auth,
  },
];