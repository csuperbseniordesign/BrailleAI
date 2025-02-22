import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routerConfig } from "./config/router";

const router = createBrowserRouter(routerConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
