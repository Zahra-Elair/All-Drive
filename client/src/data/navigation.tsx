import { AiOutlineFolderAdd } from 'react-icons/ai';
import { PATHS } from '../router';
import { ReactNode } from 'react';
import { GiRecycle } from 'react-icons/gi';
import {
  MdFolderOpen,
  MdFolderCopy,
  MdHistory,
  MdOutlineFolderShared,
} from 'react-icons/md';
type TabType = {
  label: string;
  path: string;
  icon: ReactNode;
};
export const GetTabs = () => {
  const TABS: TabType[] = [
    {
      label: 'My Drive',
      path: PATHS.app.root,
      icon: <MdFolderOpen />,
    },
    {
      label: 'Add Drive',
      path: PATHS.app.addDrive,
      icon: <AiOutlineFolderAdd />,
    },
    {
      label: 'My Folders',
      path: PATHS.app.myFolders,
      icon: <MdFolderCopy />,
    },
    {
      label: 'History',
      path: PATHS.app.history,
      icon: <MdHistory />,
    },
    {
      label: 'Shared Files',
      path: PATHS.app.sharedFiles,
      icon: <MdOutlineFolderShared />,
    },
    {
      label: 'Recycle Bin',
      path: PATHS.app.recycleBin,
      icon: <GiRecycle />,
    },
  ];
  return TABS;
};

export type { TabType };
