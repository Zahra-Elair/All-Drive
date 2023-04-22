import React from "react";
import DriveCard from "../components/shared/cards/drive-card";
import SectionHeader from "../components/shared/SectionHeader";
import { drives } from "../data/static/mock";
import AddDriveIcon from "../assets/icons/add-drive.svg";
import { replaceURL } from "../libs/helpers/replace-location";

const path = "http://localhost:3000/drive";
const AddDrive = () => {
    return (
        <div>
            <div className=" flex items-center justify-between mb-8">
                <SectionHeader
                    title="Username"
                    subTitle={[{ title: "Data storage" }]}
                />
                <button
                    className=" btn btn-sm btn-primary px-8 flex items-center gap-3"
                    onClick={() => replaceURL(path)}
                >
                    <img src={AddDriveIcon} /> Add Drive
                </button>
            </div>
            <div className=" grid grid-cols-[repeat(4,1fr)] gap-4">
                {drives.map((drive) => (
                    <DriveCard
                        type={drive.type}
                        files={drive.files}
                        maxStorage={drive.maxStorage}
                        usedStorage={drive.usedStorage}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddDrive;
