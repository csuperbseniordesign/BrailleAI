import GeneratedParagraphPage from "@/pages/GeneratedParagraphPage";
import HomePage from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },

  { path: "/response", element: <GeneratedParagraphPage /> },
];
