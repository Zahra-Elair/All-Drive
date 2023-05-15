import cn from "classnames";
import { useModalContext } from "../../context/modal-context";
import { useState } from "react";
import ImageInput from "../image-input";
const Modal = () => {
    const { openModal, setOpenModal } = useModalContext();
    const closeModal = () => {
        setOpenModal(false);
    };
    const [file, setFile] = useState<File | null>(null);
    return (
        <div
            className={cn(
                `grid text-white place-items-center  fixed inset-0  w-screen h-screen z-50 will-change-transform transition-all duration-500 ease-in-out ${
                    openModal ? "top-0" : "top-full"
                }`
            )}
        >
            <div className="relative w-full h-full flex items-center justify-center ">
                <div
                    className="w-full h-full z-0 bg-black/50 absolute"
                    onClick={closeModal}
                />
                <div className=" w-[90%] h-[90%] z-10 bg-white rounded-2xl overflow-hidden">
                    <ImageInput file={file} setFile={setFile} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
