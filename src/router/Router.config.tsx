import { lazy } from 'react';
import type { ReactNode, LazyExoticComponent, ComponentType } from 'react';
import { Loader } from '@/components/Loader';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Auth = lazy(() => import('@/pages/Auth'));
const Profile = lazy(() => import('@/pages/Profile'));

export interface RouteItem {
  path?: string;
  index?: boolean;
  component: LazyExoticComponent<ComponentType>;
  fallback: ReactNode;
};

export const RouterConfig: RouteItem[] = [
  {
    index: true,
    component: Dashboard,
    fallback: <Loader />
  },
  {
    path: 'profile',
    component: Profile,
    fallback: <Loader />
  },
  {
    path: 'auth',
    component: Auth,
    fallback: <Loader />
  },
];