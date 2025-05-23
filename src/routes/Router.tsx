import { Routes, type routesType } from "@/routes/Router.types";
import { Auth } from '@/pages/Auth/Auth';
import { Classes } from "@/pages/Classes";

export const routes: routesType = [
    {
        path: Routes.Home,
        element: <Classes/>,
    },
    {
        path: Routes.Classes,
        element: <Classes/>,
    },
    {
        path: Routes.Auth,
        element: <Auth/>,
    },
];