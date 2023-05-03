import { ITEM_TYPES } from "../../types/items";
import FolderIcon from "../../assets/icons/file type/folder.svg";
import AudioIcon from "../../assets/icons/file type/audio.svg";
import ImageIcon from "../../assets/icons/file type/image.svg";
import TextIcon from "../../assets/icons/file type/text.svg";
import VideoIcon from "../../assets/icons/file type/video.svg";
import UnkownIcon from "../../assets/icons/file type/unknown.svg";

export const getItemIcon = (type: ITEM_TYPES) => {
    if (type === "FOLDER") {
        return FolderIcon;
    }
    if (type === "TEXT") {
        return TextIcon;
    }
    if (type === "AUDIO") {
        return AudioIcon;
    }
    if (type.includes("image")) {
        return ImageIcon;
    }
    if (type === "VIDEO") {
        return VideoIcon;
    }
    if (type === "UNKNOWN") {
        return UnkownIcon;
    }
    return FolderIcon;
};
