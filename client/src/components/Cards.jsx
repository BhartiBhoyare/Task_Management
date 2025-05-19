import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";

const Cards = ({ home, setInputTaskCard }) => {
  const data = [
    {
      id: 1,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur Blanditiis, ad.",
      Task: "In Complete",
      Date: "01-06-2025",
      status: "Deadline:",
    },
    {
      id: 2,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad.",
      Task: "Complete",
      Date: "01-05-2025",
      status: "Created On:",
    },
    {
      id: 3,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur",
      Task: "In Complete",
      Date: "01-05-2025",
      status: "Created On:",
    },
    {
      id: 4,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad.",
      Task: "Complete",
      Date: "10-05-2025",
      status: "Deadline:",
    },
    {
      id: 5,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad.",
      Task: "Complete",
      Date: "10-05-2025",
      status: "Deadline:",
    },
    {
      id: 6,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad.",
      Task: "Complete",
      Date: "10-05-2025",
      status: "Deadline:",
    },
    {
      id: 7,
      title: "Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad.",
      Task: "Complete",
      Date: "10-05-2025",
      status: "Deadline:",
    },
  ];
  const [importantButton, setimportantButton] = useState("Incompleted");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-900 h-[70vh]">
      {data.map(({ id, title, desc, status, Date, Task }) => (
        <div
          key={id}
          className="bg-neutral-700 rounded-sm p-4 border-1 border-neutral-600"
        >
          <div
            className={`${
              status === "Created On:" ? " bg-blue-500" : "bg-red-500"
            } mb-4 flex gap-2 p-1 rounded-sm font-semibold`}
          >
            <span className="font-bold">{status}</span>
            {Date}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-lg">Title: {title}</h1>
              <div className="text-gray-300 min-h-20 md:min-h-24">
                <span className="font-bold">Description:</span> {desc}
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4 mt-4">
              <button
                className={`${
                  Task === "In Complete"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-emerald-600 hover:bg-emerald-700"
                } w-28 cursor-pointer text-sm md:text-xs xl:text-base font-bold rounded-sm px-2 py-1.5`}
              >
                {Task}
              </button>
              <FiHeart className="size-6 cursor-pointer" />
              <FaRegEdit className="size-6 cursor-pointer" />
              <MdDelete className="size-6 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
      {home === true && (
        <button
          onClick={() => setInputTaskCard("fixed")}
          className="bg-neutral-700 text-gray-300 flex gap-2 p-4 justify-center text-xl hover:transition hover:scale-105 items-center font-semibold rounded-sm cursor-pointer border-1 border-neutral-600"
        >
          <MdAssignmentAdd className="size-8" />
          Add Task
        </button>
      )}
    </div>
  );
};

export default Cards;
