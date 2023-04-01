import FolderIcon from '../../assets/icons/folder.svg';
import MusicIcon from '../../assets/icons/music.svg';

type ITEM_TYPES = 'FOLDER' | 'FILE' | 'MUSIC' | 'LINK' | 'NOTE';

export const getItemIcon = (type: ITEM_TYPES) => {
  switch (type) {
    case 'FOLDER':
      return FolderIcon;
    case 'FILE':
      return FolderIcon;
    case 'MUSIC':
      return MusicIcon;
    default:
      return FolderIcon;
  }
};

export type { ITEM_TYPES };
