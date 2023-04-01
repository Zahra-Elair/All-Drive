import { FC } from 'react';
import { ITEM_TYPES, getItemIcon } from '../../../data/static/items';

type ItemCardProps = {
  type: ITEM_TYPES;
  name: string;
};

const ItemCard: FC<Partial<HTMLDivElement> & ItemCardProps> = (props) => {
  const { type, name, className, ...rest } = props;
  return (
    <div className="flex bg-white flex-row gap-5 items-center w-full border border-[#DEDEDE] cursor-pointer py-3 px-5 rounded-md">
      <img src={getItemIcon(type)} alt={name} />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ItemCard;
