import { FC } from 'react';
import { ITEM_TYPES } from '../../../types/items';
import { getItemIcon } from '../../../libs/helpers/icons-management';

type CategoryCardProps = {
  name: string;
  files: number;
  type: ITEM_TYPES;
};
const CategoryCard: FC<CategoryCardProps> = ({ name, type, files }) => {
  return (
    <div className="flex items-center  bg-white flex-row gap-5  w-full border border-[#DEDEDE] cursor-pointer  rounded-md p-4">
      <div className="h-10 w-10 p-2 bg-[#F8F8F8]">
        <img className="w-full h-full" src={getItemIcon(type)} alt={name} />
      </div>
      <div className="flex flex-col text-sm ">
        <span className="font-bold text-[#515151]">{name}</span>
        <span className="text-[#ADADAD]">{files} files</span>
      </div>
    </div>
  );
};

export default CategoryCard;
