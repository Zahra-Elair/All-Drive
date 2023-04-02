import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import AddDrive from "./pages/AddDrive";

const PATHS = {
  app: {
    root: "/",
    about: "/about",
    contact: "/contact",
    myFolders: "/my-folders",
    myFiles: "/my-files",
    myProfile: "/my-profile",
    mySettings: "/my-settings",
    addDrive: "/add-drive",
  },
  auth: {
    root: "/auth",
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
};

const router = createBrowserRouter([
  {
    path: PATHS.app.root,
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: PATHS.app.addDrive, element: <AddDrive /> },
    ],
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
