import { DriveTypes } from "../../../types/drives";

type Drive = {
  type: DriveTypes;
  files: number;
  usedStorage: number;
  maxStorage: number;
};

const drives: Drive[] = [
  {
    type: "Google Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "One Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "Mega Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "Dropbox Files",
    files: 100,
    usedStorage: 100,

    maxStorage: 1000,
  },
  {
    type: "Google Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "One Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "Mega Drive",
    files: 100,
    usedStorage: 100,
    maxStorage: 1000,
  },
  {
    type: "Dropbox Files",
    files: 100,
    usedStorage: 100,

    maxStorage: 1000,
  },
];

export { drives };
