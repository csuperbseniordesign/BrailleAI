import HomePage from "@/pages/homepage";
import { RouteObject } from "react-router-dom";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];
