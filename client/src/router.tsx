import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import AddDrive from './pages/AddDrive';
import MyFolders from './pages/MyFolders';
import RecycleBin from './pages/RecycleBin';
import SharedFiles from './pages/SharedFiles';

type PATHSProps = {
  app: {
    root: string;
    about: string;
    contact: string;
    myFolders: string;
    myFiles: string;
    myProfile: string;
    mySettings: string;
    addDrive: string;
    history: string;
    sharedFiles: string;
    recycleBin: string;
  };
  auth: {
    root: string;
    login: string;
    register: string;
    forgotPassword: string;
    resetPassword: string;
  };
};

export const PATHS: PATHSProps = {
  app: {
    root: '/',
    about: '/about',
    contact: '/contact',
    myFolders: '/my-folders',
    myFiles: '/my-files',
    myProfile: '/my-profile',
    mySettings: '/my-settings',
    addDrive: '/add-drive',
    history: '/history',
    sharedFiles: '/shared-files',
    recycleBin: '/recycle-bin',
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
    children: [
      { index: true, element: <Dashboard /> },
      { path: PATHS.app.addDrive, element: <AddDrive /> },
      {
        path: PATHS.app.myFolders,
        element: <MyFolders />,
      },
      { path: PATHS.app.history, element: <AddDrive /> },
      { path: PATHS.app.sharedFiles, element: <SharedFiles /> },
      { path: PATHS.app.recycleBin, element: <RecycleBin /> },
    ],
  },
  {
    path: PATHS.auth.login,
    element: <Login />,
  },
  {
    path: PATHS.auth.register,
    element: <Register />,
  },
]);

export default router;
