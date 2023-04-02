import { DriveTypes } from "../../types/drives";
import googleDriveIcon from "../../assets/icons/drives/google.svg";
import oneDriveIcon from "../../assets/icons/drives/one.svg";
import dropboxIcon from "../../assets/icons/drives/dropbox.svg";
import megaIcon from "../../assets/icons/drives/mega.svg";

export const getDriveCaracteristics = (type: DriveTypes) => {
  switch (type) {
    case "Google Drive":
      return {
        name: "Google Drive",
        icon: googleDriveIcon,
        color: "#1DA361",
      };
    case "One Drive":
      return {
        name: "One Drive",
        icon: oneDriveIcon,
        color: "#007EE5",
      };
    case "Dropbox Files":
      return {
        name: "Dropbox Files",
        icon: dropboxIcon,
        color: "#007EE5",
      };
    case "Mega Drive":
      return {
        name: "Mega Drive",
        icon: megaIcon,
        color: "#D41B01",
      };
    default:
      return {
        name: "Google Drive",
        icon: googleDriveIcon,
        color: "#4285F4",
      };
  }
};
