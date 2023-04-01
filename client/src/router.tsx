import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PATHS = {
  app: {
    root: '/',
    about: '/about',
    contact: '/contact',
    myFolders: '/my-folders',
    myFiles: '/my-files',
    myProfile: '/my-profile',
    mySettings: '/my-settings',
  },
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
};

const router = createBrowserRouter([
  {
    path: PATHS.app.root,
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
