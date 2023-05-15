import SectionHeader from '../components/shared/SectionHeader';
import Seperator from '../components/shared/Seperator';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { RecycleItems } from '../data/static/mock/_RecycleBin';
import ItemCard from '../components/shared/cards/item-card';
import { useState } from 'react';
import { toast } from 'react-toastify';
const RecycleBin = () => {
  const [items, setItems] = useState(RecycleItems);
  const handleEmptyRecycleBin = () => {
    if (items.length === 0) {
      toast.info('Recycle bin is already empty');
      return;
    }
    setItems([]);
    toast.success('Recycle bin is empty now');
  };
  return (
    <section>
      <div className="flex flex-row items-center justify-between">
        <SectionHeader title="Username" subTitle={[{ title: 'Recycle Bin' }]} />
        <button
          className="btn btn-sm btn-primary px-8"
          onClick={handleEmptyRecycleBin}
        >
          <RiDeleteBin2Line />
          Empty Recycle Bin
        </button>
      </div>
      <Seperator />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
          {items.map((item) => (
            <ItemCard key={item.id} type={item.type} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecycleBin;
