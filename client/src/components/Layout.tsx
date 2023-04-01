import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import SidebarLeft from "./shared/SidebarLeft";
import SidebarRight from "./shared/SidebarRight";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex">
        <SidebarLeft />
        <main className="flex-1">
          <div className="py-10 px-12">
            <Outlet />
          </div>
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
