import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import SidebarLeft from "./shared/SidebarLeft";
import SidebarRight from "./shared/SidebarRight";
import { ModalContextProvider } from "../context/modal-context";
import { AnimatePresenceWrapper } from "./animate-presence-wrapper";
import Modal from "./modal";

const Layout = () => {
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = React.useState(false);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = React.useState(false);

    function toggleIsLeftSidebarActive() {
        setIsLeftSidebarOpen(!isLeftSidebarOpen);
    }
    function toggleIsRightSidebarActive() {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <ModalContextProvider>
                <Navbar
                    toggleIsLeftSidebarActive={toggleIsLeftSidebarActive}
                    toggleIsRightSidebarActive={toggleIsRightSidebarActive}
                />
                <div className="flex-1 flex">
                    <SidebarLeft isOpen={isLeftSidebarOpen} />
                    <main className="flex-1 ">
                        <div className="py-10 px-8">
                            <Outlet />
                        </div>
                    </main>
                    <SidebarRight isOpen={isRightSidebarOpen} />
                </div>
                <Footer />

                <AnimatePresenceWrapper>
                    <Modal />
                </AnimatePresenceWrapper>
            </ModalContextProvider>
        </div>
    );
};

export default Layout;
