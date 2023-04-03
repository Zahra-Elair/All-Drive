import SectionHeader from '../components/shared/SectionHeader';
import ItemCard from '../components/shared/cards/item-card';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SharedItems } from '../data/static/mock/_SharedFiles';
import Seperator from '../components/shared/Seperator';
const SharedFiles = () => {
  const [items, setItems] = useState(SharedItems);

  return (
    <section>
      <SectionHeader title="Username" subTitle={[{ title: 'Shared files' }]} />
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

export default SharedFiles;
