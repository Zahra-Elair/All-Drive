import { ITEM_TYPES } from '../../../types/items';

type RecycleItemsProps = {
  id: number;
  name: string;
  type: ITEM_TYPES;
}[];

const RecycleItems: RecycleItemsProps = [
  {
    id: 1,
    name: 'No Name',
    type: 'TEXT',
  },
  {
    id: 2,
    name: '2009',
    type: 'UNKNOWN',
  },
  {
    id: 3,

    name: '2018',
    type: 'TEXT',
  },
  {
    id: 4,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 5,
    name: '2020',
    type: 'FOLDER',
  },
  {
    id: 6,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 7,
    name: 'HACKS.exe',
    type: 'UNKNOWN',
  },
  {
    id: 8,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 9,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 10,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 11,
    name: 'Never Gonna Give You Upasdasdasd',
    type: 'AUDIO',
  },
];

export { RecycleItems };
