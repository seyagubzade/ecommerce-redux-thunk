import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/router";

const routes = createBrowserRouter(RoutesConfig)
function App() {
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
}

export default App;
