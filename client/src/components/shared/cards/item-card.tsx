import { FC } from "react";
import { ITEM_TYPES } from "../../../types/items";
import { getItemIcon } from "../../../libs/helpers/icons-management";
import { Link } from "react-router-dom";
import { PATHS } from "../../../router";
type ItemCardProps = {
    type?: ITEM_TYPES;
    name: string;
    id?: string;
    downloadUrl?: string;
};

const ItemCard: FC<Partial<HTMLDivElement> & ItemCardProps> = ({
    type = "FOLDER",
    name,
    className,
    id,
    downloadUrl,
    ...rest
}) => {
    const downloadFile = () => {
        console.log(downloadUrl);
        downloadUrl && window.open(downloadUrl, "_blank");
    };

    console.log(type);

    if (type === "FOLDER")
        return (
            <Link
                to={PATHS.app.myFolders + "/" + id}
                className="flex bg-white flex-row gap-5 items-center w-full border border-[#DEDEDE] cursor-pointer py-3 px-5 rounded-md"
            >
                <img src={getItemIcon("FOLDER")} alt={name} />
                <span className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                    {name}
                </span>
            </Link>
        );
    else
        return (
            <div
                onClick={downloadFile}
                className="flex bg-white flex-row gap-5 items-center w-full border border-[#DEDEDE] cursor-pointer py-3 px-5 rounded-md"
            >
                <div className="h-7 w-7 p-[7px] bg-[#F8F8F8]">
                    <img
                        className="w-full h-full"
                        src={getItemIcon(type)}
                        alt={name}
                    />
                </div>

                <span className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                    {name}
                </span>
            </div>
        );
};

export default ItemCard;
