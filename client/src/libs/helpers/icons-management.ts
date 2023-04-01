import { ITEM_TYPES } from '../../types/items';
import FolderIcon from '../../assets/icons/file type/folder.svg';
import AudioIcon from '../../assets/icons/file type/audio.svg';
import ImageIcon from '../../assets/icons/file type/image.svg';
import TextIcon from '../../assets/icons/file type/text.svg';
import VideoIcon from '../../assets/icons/file type/video.svg';
import UnkownIcon from '../../assets/icons/file type/unknown.svg';

export const getItemIcon = (type: ITEM_TYPES) => {
  switch (type) {
    case 'FOLDER':
      return FolderIcon;
    case 'TEXT':
      return TextIcon;
    case 'AUDIO':
      return AudioIcon;
    case 'IMAGE':
      return ImageIcon;
    case 'VIDEO':
      return VideoIcon;
    case 'UNKNOWN':
      return UnkownIcon;
    default:
      return FolderIcon;
  }
};
