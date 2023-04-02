import { ITEM_TYPES } from '../../../types/items';

type SharedItemsProps = {
  id: number;
  name: string;
  type: ITEM_TYPES;
}[];

const SharedItems: SharedItemsProps = [
  {
    id: 1,
    name: 'document.pdf',
    type: 'TEXT',
  },
  {
    id: 2,
    name: 'presentation.pptx',
    type: 'UNKNOWN',
  },
  {
    id: 3,

    name: 'image.jpg',
    type: 'TEXT',
  },
  {
    id: 4,
    name: 'video.mp4',
    type: 'AUDIO',
  },
  {
    id: 5,
    name: 'audio.mp3',
    type: 'FOLDER',
  },
  {
    id: 6,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 7,
    name: 'spreadsheet.xlsx',
    type: 'UNKNOWN',
  },
  {
    id: 8,
    name: 'code.js',
    type: 'AUDIO',
  },
  {
    id: 9,
    name: 'Never Gonna Give You Up',
    type: 'AUDIO',
  },
  {
    id: 10,
    name: 'text.txt',
    type: 'AUDIO',
  },
  {
    id: 11,
    name: 'configuration.ini',
    type: 'AUDIO',
  },
];

export { SharedItems };
