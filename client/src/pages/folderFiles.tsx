import SectionHeader from "../components/shared/SectionHeader";
import CategoryCard from "../components/shared/cards/category-card";
import ItemCard from "../components/shared/cards/item-card";
import { AllFolders, Categories, RecentFolder } from "../data/static/mock";
import Seperator from "../components/shared/Seperator";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Folder } from "../types/folder";
import { useParams } from "react-router-dom";

const FolderFiles = () => {
    const [files, setFiles] = useState<Folder[]>([]);
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useState(() =>
        localStorage.getItem("google-drive")
    );
    function getFiles() {
        api.post(
            "/user-drive/getFiles",
            { folderId: id, token },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then((res) => {
            console.log(res.data);
            setFiles(res.data.data);
        });
    }
    useEffect(() => {
        getFiles();
    }, []);
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
                        <div
                            key={cat.id}
                            className="min-w-max w-full max-w-[10rem]"
                        >
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
                    {files.map((file) => (
                        <ItemCard
                            key={file.id}
                            name={file.name}
                            type={file.mimeType as any}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FolderFiles;
