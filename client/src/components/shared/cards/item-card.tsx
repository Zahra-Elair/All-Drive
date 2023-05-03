import { FC } from "react";
import { ITEM_TYPES } from "../../../types/items";
import { getItemIcon } from "../../../libs/helpers/icons-management";
import { Link } from "react-router-dom";
import { PATHS } from "../../../router";
type ItemCardProps = {
    type?: ITEM_TYPES;
    name: string;
    id?: string;
};

const ItemCard: FC<Partial<HTMLDivElement> & ItemCardProps> = ({
    type = "FOLDER",
    name,
    className,
    id,
    ...rest
}) => {
    console.log(type);
    return (
        <Link
            to={PATHS.app.myFolders + "/" + id}
            className="flex bg-white flex-row gap-5 items-center w-full border border-[#DEDEDE] cursor-pointer py-3 px-5 rounded-md"
        >
            {type === "FOLDER" ? (
                <img src={getItemIcon("FOLDER")} alt={name} />
            ) : (
                <div className="h-7 w-7 p-[7px] bg-[#F8F8F8]">
                    <img
                        className="w-full h-full"
                        src={getItemIcon(type)}
                        alt={name}
                    />
                </div>
            )}
            <span className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                {name}
            </span>
        </Link>
    );
};

export default ItemCard;
