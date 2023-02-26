import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import MyDrive from "./pages/MyDrive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <MyDrive /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
