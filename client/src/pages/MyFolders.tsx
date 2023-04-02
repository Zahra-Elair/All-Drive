import SectionHeader from "../components/shared/SectionHeader";
import CategoryCard from "../components/shared/cards/category-card";
import ItemCard from "../components/shared/cards/item-card";
import Seperator from "../components/shared/seperator";
import { AllFolders, Categories, RecentFolder } from "../data/static/mock";

const MyFolders = () => {
  return (
    <section>
      <div>
        <div className=" mb-6">
          <SectionHeader title="Username" subTitle={[{ title: "Folders" }]} />
        </div>
        <div className="flex flex-row items-center justify-between gap-10 ">
          {Categories.map((cat) => (
            <CategoryCard key={cat.id} type={cat.type} name={cat.name} files={cat.files} />
          ))}
        </div>
      </div>
      <Seperator />
      <div>
        <div className=" mb-6">
          <SectionHeader title="Recent folders" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
          {RecentFolder.map((folder) => (
            <ItemCard key={folder.id} type={folder.type} name={folder.name} />
          ))}
        </div>
      </div>
      <Seperator />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
          {AllFolders.map((folder) => (
            <ItemCard key={folder.id} type={folder.type} name={folder.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyFolders;
