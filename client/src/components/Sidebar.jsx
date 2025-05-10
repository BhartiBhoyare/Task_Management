import React from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";
import { FaHeart, FaTasks, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const data = [
    { title: "All Tasks", 
      icon: <FaTasks />, 
      link: "/" 
    },
    { title: "Important Tasks", 
      icon: <FaHeart />, 
      link: "/importantTask" 
    },
    {
      title: "Completed Tasks",
      icon: <MdOutlineTaskAlt />,
      link: "/completedTask",
    },
    { title: "Incompleted Tasks", 
      icon: <BiTaskX />, 
      link: "/incompltedTask" 
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-50 h-full w-60 md:w-96 bg-neutral-800 p-4 transition-transform duration-300 md:relative md:translate-x-0 md:block md:h-auto md:rounded-lg md:border md:border-neutral-700`}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <div className="text-white font-bold">Menu</div>
        <button onClick={() => setIsOpen(false)}>
          <FaTimes className="text-white text-2xl" />
        </button>
      </div>

      {/* User Info */}
      <div className="text-gray-500 mb-2">
        <div>Bharti Bhoyare</div>
        <div>bharti@gmail.com</div>
        <hr className="my-2 border-gray-600" />
      </div>
      <div className="flex flex-col h-[70vh] justify-between">
        {/* Sidebar Links */}
        <div className="mt-6 space-y-4">
          {data.map(({ title, icon, link }) => (
            <Link
              key={title}
              to={link}
              onClick={() => setIsOpen(false)} // Auto-close sidebar on mobile
              className="flex items-center gap-2 font-medium text-white hover:text-gray-400 hover:underline"
            >
              {icon} {title}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-6">
          <button className="bg-gray-600 cursor-pointer py-1 rounded-lg font-bold text-white hover:bg-gray-700 w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
