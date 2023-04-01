import SectionHeader from '../components/shared/SectionHeader';
import ItemCard from '../components/shared/cards/item-card';
import Seperator from '../components/shared/seperator';
import { AllFolders, RecentFolder } from '../data/static/mock';

const MyFolders = () => {
  return (
    <section>
      <SectionHeader title="Recent folders" subTitle={[{ title: 'test' }]} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
        {RecentFolder.map((folder) => (
          <ItemCard key={folder.id} type={folder.type} name={folder.name} />
        ))}
      </div>
      <Seperator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
        {AllFolders.map((folder) => (
          <ItemCard key={folder.id} type={folder.type} name={folder.name} />
        ))}
      </div>
    </section>
  );
};

export default MyFolders;
