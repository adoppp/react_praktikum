import type { ReactElement } from "react";

export const Routes = {
    Home: "/",
    Classes: "/classes",
    Auth: "/auth"
} as const;

type Route = typeof Routes[keyof typeof Routes];

export type routeType = {
    path: Route,
    element: ReactElement
};

export type routesType = routeType[];