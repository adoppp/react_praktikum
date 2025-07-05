import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";
import { Error } from "@/pages/Error";

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Auth = lazy(() => import('@/pages/Auth'));
const Profile = lazy(() => import('@/pages/Profile'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Dashboard ...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<div>Loading Profile ...</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: 'auth',
        element: (
          <Suspense fallback={<div>Loading Auth ...</div>}>
            <Auth />
          </Suspense>
        ),
      },
    ],
  },
]);
