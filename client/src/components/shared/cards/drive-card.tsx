import React, { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getDriveCaracteristics } from "../../../libs/helpers/drive-card-name-and-icon-color";
import PourcentageBar from "../../pourcentage-bar";
import { DriveTypes } from "../../../types/drives";

type DriveCardProps = {
    type: DriveTypes;
    // files: number;
    maxStorage: number;
    usedStorage: number;
};

const DriveCard: FC<DriveCardProps> = ({ type, maxStorage, usedStorage }) => {
    const driveCaracteristics = getDriveCaracteristics(type);
    const pourcentage = (usedStorage * 100) / maxStorage;
    return (
        <div className=" bg-white border border-r-gray-300 py-6 px-4 rounded">
            <div className=" flex items-center justify-between mb-6">
                <div className=" p-6 bg-[#F2F9F7] rounded">
                    <img src={driveCaracteristics.icon} alt="" />
                </div>
                <MoreVertIcon sx={{ color: "#D9D9D9" }} fontSize="large" />
            </div>
            <p className=" text-primary text-lg tracking-widest mb-1 font-medium">
                {driveCaracteristics.name}
            </p>
            {/* <p className=" text-sm text-gray-400 mb-12">{files} files</p> */}
            <div className=" text-center">
                <p className=" mb-2 tracking-wide text-gray-400 text-xs font-medium">{`${usedStorage} GB / ${maxStorage} GB`}</p>
                <PourcentageBar
                    pourcentage={pourcentage}
                    color={driveCaracteristics.color}
                />
            </div>
        </div>
    );
};

export default DriveCard;
