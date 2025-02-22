import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routerConfig } from "./config/router";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {<RouterProvider router={router} />}
    </ThemeProvider>
  );
}

export default App;
