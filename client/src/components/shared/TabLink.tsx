import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type TabLinkProps = {
  label: string;
  path: string;
  icon: ReactNode;
  active?: boolean;
};

const TabLink: FC<Partial<HTMLDivElement> & TabLinkProps> = ({
  label,
  path,
  icon,
  active = false,
  ...rest
}) => {
  const { className } = rest;
  return (
    <Link
      to={path}
      className={cn(
        'flex gap-6 items-center text-gray-500 hover:text-gray-800 whitespace-nowrap transition-colors duration-500 ',
        className,
        {
          '!text-blue-500 ': active,
        }
      )}
    >
      <span>{icon}</span>
      <span> {label}</span>
    </Link>
  );
};

export default TabLink;
