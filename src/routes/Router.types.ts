import type { ReactElement } from "react";

export const Routes = {
    Default: "/",
    Home: "/home",
    Auth: "/auth"
} as const;

type Route = typeof Routes[keyof typeof Routes];

export type routeType = {
    path: Route,
    element: ReactElement
};

export type routesType = routeType[];