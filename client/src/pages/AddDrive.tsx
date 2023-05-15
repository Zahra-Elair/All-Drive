import React, { useEffect, useState } from "react";
import DriveCard from "../components/shared/cards/drive-card";
import SectionHeader from "../components/shared/SectionHeader";
import { drives } from "../data/static/mock";
import AddDriveIcon from "../assets/icons/add-drive.svg";
import { replaceURL } from "../libs/helpers/replace-location";
import { api } from "../api";
import { convertBytesToGiga } from "../libs/helpers/convert";
const path = "http://localhost:3000/";
const AddDrive = () => {
    const [driverIds, setDriverIds] = useState<string[]>([]);
    const [myDrives, setMyDrives] = useState<string[]>([]);
    useEffect(() => {
        const getDrives = async () => {
            try {
                const res = await api.get("/user-drive", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const myDriveIDs = JSON.stringify(res.data.data);
                localStorage.setItem("my-drives-ids", myDriveIDs);
                setDriverIds(
                    res.data.data.map((drive: any) => drive.driveName)
                );
            } catch (error) {
                console.log(error);
            }
        };

        getDrives();
    }, []);

    useEffect(() => {
        const getDriveData = async (driveName: string, token: string) => {
            return api.post(
                "/user-drive/about",
                {
                    driveName,
                    token,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
        };

        if (driverIds.length) {
            const getDrives = async () => {
                try {
                    const drivesData = await Promise.all(
                        driverIds.map((driveName) =>
                            getDriveData(
                                driveName,
                                localStorage.getItem(driveName) || ""
                            )
                        )
                    );

                    setMyDrives(drivesData.map((drive) => drive.data.data));
                    console.log(drivesData.map((drive) => drive.data.data));
                } catch (error) {
                    console.log(error);
                }
            };
            getDrives();
        }
    }, [driverIds]);

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
                {myDrives.map((drive: any) => {
                    return (
                        <DriveCard
                            type={drive.driveName}
                            // files={drive.files}

                            maxStorage={Number(convertBytesToGiga(drive.limit))}
                            usedStorage={Number(
                                convertBytesToGiga(drive.usage)
                            )}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AddDrive;
