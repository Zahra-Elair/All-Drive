import SectionHeader from "../components/shared/SectionHeader";
import CategoryCard from "../components/shared/cards/category-card";
import ItemCard from "../components/shared/cards/item-card";
import { AllFolders, Categories, RecentFolder } from "../data/static/mock";
import Seperator from "../components/shared/Seperator";

const MyFolders = () => {
  return (
    <div>
      <section>
        <SectionHeader
          title="Username"
          subTitle={[{ title: "Folders" }]}
          className="mb-4"
        />
        <div className="flex flex-wrap  items-center  gap-x-4 gap-y-4 justify-between  ">
          {Categories.map((cat) => (
            <div key={cat.id} className="min-w-max w-full max-w-[10rem]">
              <CategoryCard
                key={cat.id}
                type={cat.type}
                name={cat.name}
                files={cat.files}
              />
            </div>
          ))}
        </div>
      </section>
      <Seperator />
      <section>
        <SectionHeader title="Recent folders" className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
          {RecentFolder.map((folder) => (
            <ItemCard key={folder.id} type={folder.type} name={folder.name} />
          ))}
        </div>
      </section>
      <Seperator />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
          {AllFolders.map((folder) => (
            <ItemCard key={folder.id} type={folder.type} name={folder.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyFolders;
