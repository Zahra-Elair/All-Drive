import { FC } from 'react';
import { ITEM_TYPES, getItemIcon } from '../../data/static/items';
import { MdNavigateNext } from 'react-icons/md';
type SectionHeaderProps = {
  title: string;
  type?: ITEM_TYPES;
  subTitle?: {
    title: string;
  }[];
};
const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subTitle,
  type = 'FOLDER',
}) => {
  return (
    <div className="flex items-baseline justify-start  gap-4 mb-4">
      <img src={getItemIcon(type)} alt={title} />
      <h1 className="text-lg capitalize">{title}</h1>
      {subTitle &&
        subTitle.map((sub, index: number) => (
          <div
            key={index}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <MdNavigateNext />
            <span className="text-gray-500 group-hover:underline ">
              {sub.title}
            </span>
          </div>
        ))}
    </div>
  );
};

export default SectionHeader;
