import { type routesType } from '@/routes/Router.types';
import { Routes } from '@/routes/Router.config';
import { Auth, Home, Shop, Profile, Cart, Favorites } from '@/pages';

export const routes: routesType = [
  {
    path: Routes.Default,
    element: <Home />,
  },
  {
    path: Routes.Home,
    element: <Home />,
  },
  {
    path: Routes.Shop,
    element: <Shop />,
  },
  {
    path: Routes.Auth,
    element: <Auth />,
  },
  {
    path: Routes.Profile,
    element: <Profile />,
  },
  {
    path: Routes.Cart,
    element: <Cart />,
  },
  {
    path: Routes.Favorites,
    element: <Favorites />,
  },
];