import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center text-2xl lg:text-3xl font-extrabold">
        <button
          className="md:hidden mr-4"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars className="text-white text-2xl" />
        </button>
        Task Management
      </div>
      <div className="flex gap-4 mt-4">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="bg-neutral-800 border-1 border-neutral-700 rounded-lg p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
