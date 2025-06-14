import type { ReactElement } from 'react';
import { Routes } from './Router.config';

type Route = typeof Routes[keyof typeof Routes];

export type routeType = {
    path: Route,
    element: ReactElement
};

export type routesType = routeType[];