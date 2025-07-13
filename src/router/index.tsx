import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { RouterConfig } from '@/router/Router.config';

import { App } from '@/App';
import { Error } from '@/pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: RouterConfig.map(({ path, component: Component, index }): RouteObject => {
      return (
        {
          path,
          index,
          element: <Component />
        }
      );
    }),
  },
]);
