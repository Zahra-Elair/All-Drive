import ItemCard from "../components/shared/cards/item-card";
import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Search = () => {
    const [files, setFiles] = useState<any[]>([]);
    const { searchTerm } = useParams<{ searchTerm: string }>();
    useEffect(() => {
        const getFiles = async () => {
            try {
                const res = await api.post(
                    "/user-drive/search",
                    {
                        fileName: searchTerm || "",
                        token: localStorage.getItem("google-drive"),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setFiles(res.data.data);
            } catch (error) {
                toast.error("Something went wrong");
            }
        };
        getFiles();
    }, [searchTerm]);
    return (
        <div>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-4  ">
                    {files.length ? (
                        files.map((file) => (
                            <ItemCard
                                key={file.id}
                                name={file.name}
                                type={file.mimeType as any}
                                downloadUrl={file.webContentLink as string}
                            />
                        ))
                    ) : (
                        <div className="text-center text-2xl font-bold text-gray-500">
                            No files found
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Search;
