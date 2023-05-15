import { createContext, useContext, useState } from "react";

type ModalContextValue = {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalContext = createContext<ModalContextValue>({
    openModal: false,
    setOpenModal: () => {},
});
export default ModalContext;

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [openModal, setOpenModal] = useState(false);

    const value = { openModal, setOpenModal };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};
const useModalContext = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalContextProvider");
    }
    return context;
};
export { ModalContextProvider, useModalContext };
