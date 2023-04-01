import { ITEM_TYPES } from '../items';

type RecentFoldersProps = {
  id: number;
  name: string;
  type: ITEM_TYPES;
}[];

const RecentFolder: RecentFoldersProps = [
  {
    id: 1,
    name: 'Folder 1',
    type: 'FOLDER',
  },
  {
    id: 2,
    name: 'Folder 2',
    type: 'FOLDER',
  },
  {
    id: 3,

    name: 'Folder 3',
    type: 'FOLDER',
  },
  {
    id: 4,

    name: 'Folder 4',
    type: 'FOLDER',
  },
];
const AllFolders: RecentFoldersProps = [
  {
    id: 1,
    name: 'Folder 1',
    type: 'FOLDER',
  },
  {
    id: 2,
    name: 'Folder 2',
    type: 'FOLDER',
  },
  {
    id: 3,

    name: 'Folder 3',
    type: 'FILE',
  },
  {
    id: 4,
    name: 'Folder 4',
    type: 'MUSIC',
  },
  {
    id: 5,
    name: 'Folder 5',
    type: 'FOLDER',
  },
  {
    id: 6,
    name: 'Folder 6',
    type: 'MUSIC',
  },
  {
    id: 7,
    name: 'Folder 7',
    type: 'FOLDER',
  },
  {
    id: 8,
    name: 'Folder 8',
    type: 'FOLDER',
  },
  {
    id: 9,
    name: 'Folder 9',
    type: 'MUSIC',
  },
  {
    id: 10,
    name: 'Folder 10',
    type: 'FOLDER',
  },
];

export { RecentFolder, AllFolders };
