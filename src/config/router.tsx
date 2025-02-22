import { RouteObject } from "react-router-dom";
import HomePage from "../pages/homepage";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];
