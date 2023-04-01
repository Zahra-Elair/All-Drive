import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
