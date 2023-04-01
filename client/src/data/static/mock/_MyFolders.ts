import { ITEM_TYPES } from '../../../types/items';

type RecentFoldersProps = {
  id: number;
  name: string;
  type: ITEM_TYPES;
}[];
type CategoriesCardsProps = {
  id: number;
  name: string;
  type: ITEM_TYPES;
  files: number;
}[];

const Categories: CategoriesCardsProps = [
  {
    id: 1,
    name: 'Text',
    type: 'TEXT',
    files: 220,
  },
  {
    id: 2,
    name: 'Audio',
    type: 'AUDIO',
    files: 270,
  },
  {
    id: 3,
    name: 'Video',
    type: 'VIDEO',
    files: 120,
  },
  {
    id: 4,
    name: 'Image',
    type: 'IMAGE',
    files: 460,
  },
  {
    id: 5,
    name: 'Others',
    type: 'UNKNOWN',
    files: 17,
  },
];

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
    type: 'TEXT',
  },
  {
    id: 2,
    name: 'Folder 2',
    type: 'UNKNOWN',
  },
  {
    id: 3,

    name: 'Folder 3',
    type: 'TEXT',
  },
  {
    id: 4,
    name: 'Folder 4',
    type: 'AUDIO',
  },
  {
    id: 5,
    name: 'Folder 5',
    type: 'VIDEO',
  },
  {
    id: 6,
    name: 'Folder 6',
    type: 'AUDIO',
  },
  {
    id: 7,
    name: 'Folder 7',
    type: 'UNKNOWN',
  },
  {
    id: 8,
    name: 'Folder 8',
    type: 'IMAGE',
  },
  {
    id: 9,
    name: 'Folder 9',
    type: 'UNKNOWN',
  },
  {
    id: 10,
    name: 'Folder 10',
    type: 'FOLDER',
  },
];

export { RecentFolder, AllFolders, Categories };
