import { DriveTypes } from "../../../types/drives";

type Drive = {
    type: DriveTypes;
    files: number;
    usedStorage: number;
    maxStorage: number;
};

const drives: Drive[] = [
    {
        type: "google-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "one-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "mega-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "dropbox-files",
        files: 100,
        usedStorage: 100,

        maxStorage: 1000,
    },
    {
        type: "google-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "one-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "mega-drive",
        files: 100,
        usedStorage: 100,
        maxStorage: 1000,
    },
    {
        type: "dropbox-files",
        files: 100,
        usedStorage: 100,

        maxStorage: 1000,
    },
];

export { drives };
