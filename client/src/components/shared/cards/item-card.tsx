import { FC } from 'react';
import { ITEM_TYPES } from '../../../types/items';
import { getItemIcon } from '../../../libs/helpers/icons-management';
type ItemCardProps = {
  type: ITEM_TYPES;
  name: string;
};

const ItemCard: FC<Partial<HTMLDivElement> & ItemCardProps> = (props) => {
  const { type, name, className, ...rest } = props;
  return (
    <div className="flex bg-white flex-row gap-5 items-center w-full border border-[#DEDEDE] cursor-pointer py-3 px-5 rounded-md">
      {type === 'FOLDER' ? (
        <img src={getItemIcon('FOLDER')} alt={name} />
      ) : (
        <div className="h-7 w-7 p-[7px] bg-[#F8F8F8]">
          <img className="w-full h-full" src={getItemIcon(type)} alt={name} />
        </div>
      )}
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ItemCard;
