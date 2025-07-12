import { Suspense } from 'react';
import type { ComponentType, LazyExoticComponent, ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterConfig } from '@/router/Router.config';

import { App } from "@/App";
import { Error } from "@/pages/Error";

const withSuspense = (Component: LazyExoticComponent<ComponentType>, fallback: ReactNode) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: RouterConfig.map(({ path, component, fallback, index }) => {
      return (
        {
          path,
          index,
          element: withSuspense(component, fallback),
        }
      );
    }),
  },
]);
