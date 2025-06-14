import { Routes, type routesType } from "@/routes/Router.types";
import { Auth } from '@/pages/Auth/Auth';
import { Home } from "@/pages/Home";

export const routes: routesType = [
    {
        path: Routes.Default,
        element: <Home/>,
    },
    {
        path: Routes.Home,
        element: <Home/>,
    },
    {
        path: Routes.Auth,
        element: <Auth/>,
    },
];