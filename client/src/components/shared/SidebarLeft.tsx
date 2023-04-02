import React from "react";
import { Link } from "react-router-dom";
import myDriveIcon from "../../assets/icons/tabs/my-drive.svg";
import AddDriveIcon from "../../assets/icons/tabs/add-drive.svg";
import historyIcon from "../../assets/icons/tabs/history.svg";
import myFoldersIcon from "../../assets/icons/tabs/my-folders.svg";
import sharedFilesIcon from "../../assets/icons/tabs/shared-files.svg";
import recycleBinIcon from "../../assets/icons/tabs/recycle-bin.svg";
import usePathName from "../../libs/hooks/usePathName";

type Tab = {
  label: string;
  path: string;
  icon: string;
};

const tabs: Tab[] = [
  {
    label: "My Drive",
    path: "/",
    icon: myDriveIcon,
  },
  {
    label: "Add Drive",
    path: "/add-drive",
    icon: AddDriveIcon,
  },
  {
    label: "My Folders",
    path: "/my-folders",
    icon: myFoldersIcon,
  },
  {
    label: "History",
    path: "/history",
    icon: historyIcon,
  },
  {
    label: "Shared Files",
    path: "/shaed-files",
    icon: sharedFilesIcon,
  },
  {
    label: "Recycle Bin",
    path: "/recycle-bin",
    icon: recycleBinIcon,
  },
];

const styles = {
  link: "flex gap-6 items-center text-gray-500 hover:text-gray-800",
  linkActive: "!text-blue-500 !hover:text-blue-500",
};

interface Props {
  isOpen: boolean;
}

const SidebarLeft = ({ isOpen }: Props) => {
  const pathname = usePathName();
  return (
    <div className={`bg-white border-r p-12 w-72 ${!isOpen ? "hidden" : ""} xl:!flex`}>
      <div className=" flex flex-col h-full">
        <div className="flex flex-col gap-8">
          {tabs.map((tab) => (
            <Link
              to={tab.path}
              key={tab.path}
              className={`${styles.link} ${pathname == tab.path ? styles.linkActive : ""}`}
            >
              <img src={tab.icon} />
              {tab.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <Link to="/" className={styles.link}>
            <svg width="20" height="16" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.71408 8.1125C7.59933 7.98009 7.54196 7.82996 7.54196 7.66211C7.54196 7.49426 7.59933 7.35411 7.71408 7.24167L8.87197 6.11111H4.38122C4.20389 6.11111 4.05513 6.05244 3.93496 5.93511C3.81479 5.81778 3.75491 5.67274 3.75533 5.5C3.75533 5.32685 3.81542 5.18161 3.93559 5.06428C4.05576 4.94694 4.2043 4.88848 4.38122 4.88889H8.87197L7.71408 3.75833C7.5889 3.63611 7.52631 3.49087 7.52631 3.32261C7.52631 3.15435 7.5889 3.00932 7.71408 2.8875C7.82882 2.76528 7.97236 2.70417 8.14469 2.70417C8.31702 2.70417 8.46034 2.76019 8.57467 2.87222L10.8279 5.07222C10.8905 5.13333 10.9349 5.19954 10.9612 5.27083C10.9875 5.34213 11.0004 5.41852 11 5.5C11 5.58148 10.9871 5.65787 10.9612 5.72917C10.9353 5.80046 10.8909 5.86667 10.8279 5.92778L8.57467 8.12778C8.43906 8.26018 8.29031 8.31885 8.12841 8.30378C7.96652 8.2887 7.8284 8.22494 7.71408 8.1125ZM1.25178 11C0.907539 11 0.612746 10.8802 0.367397 10.6407C0.122049 10.4011 -0.000416196 10.1135 1.06263e-06 9.77778V1.22222C1.06263e-06 0.886112 0.122675 0.598279 0.368023 0.358723C0.613372 0.119168 0.907956 -0.00040637 1.25178 1.03754e-06H5.00711C5.18444 1.03754e-06 5.3332 0.0586678 5.45337 0.176001C5.57354 0.293334 5.63341 0.438371 5.633 0.611112C5.633 0.78426 5.57291 0.929501 5.45274 1.04683C5.33257 1.16417 5.18403 1.22263 5.00711 1.22222H1.25178V9.77778H5.00711C5.18444 9.77778 5.3332 9.83644 5.45337 9.95378C5.57354 10.0711 5.63341 10.2161 5.633 10.3889C5.633 10.562 5.57291 10.7073 5.45274 10.8246C5.33257 10.9419 5.18403 11.0004 5.00711 11H1.25178Z"
                fill="#C5C5C5"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
