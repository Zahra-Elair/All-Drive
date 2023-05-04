import { FC, useState } from "react";
import { useDropzone } from "react-dropzone";
type ImageInputProps = {
    setFile: (image: File | null) => void;
    file: File | null;
};
import { api } from "../../api";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
const ImageInput: FC<ImageInputProps> = ({ setFile, file }) => {
    const { isAutheticated, token } = useAuth();
    const [loading, setLoading] = useState(false);
    const onDropAccepted = async (files: File[]) => {
        if (!isAutheticated) {
            toast.error("Please login");
            return;
        }
        if (!localStorage.getItem("google-drive")) {
            toast.error("Please login to google drive first");
            return;
        }
        setLoading(true);
        setFile(files[0]);

        const formData = new FormData();

        formData.append("file", files[0]);
        formData.append(
            "token",
            localStorage.getItem("google-drive") as string
        );

        try {
            const res = await api.post("/user-drive/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("File uploaded");
        } catch (error) {
            toast.error("Something went wrong");
        }
        setLoading(false);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted,
        maxFiles: 1,
    });

    return (
        <div className="  rounded-2xl  border-4 border-white  hover:border-blue-500  transition-colors duration-300 ease-in-out bg-offbase cursor-pointer group w-full h-full text-black ">
            <div {...getRootProps()} className="w-full h-full relative">
                {!file ? (
                    <>
                        <input {...getInputProps()} />
                        <div className="flex flex-col relative w-full h-full  sm:py-16 justify-center items-center min-h-[248px] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="fill-current w-20 group-hover:text-blue-500 transition-colors duration-300 ease-in-out"
                            >
                                <path d="M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"></path>
                            </svg>
                            <p className="font-bold text-xl group-hover:text-blue-500 mt-3 transition-colors duration-300 ease-in-out">
                                Upload File
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageInput;
