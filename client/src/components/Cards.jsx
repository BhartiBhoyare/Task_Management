import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const Cards = ({ home, setInputTaskCard, setEditTask, data: initialData }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const [tasks, setTasks] = useState(initialData || []);

  useEffect(() => {
    setTasks(initialData);
  }, [initialData]);
  
  const handleCompleteTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v2/update-comp-task/${id}`,
        {},
        { headers }
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, complete: !task.complete } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleImportant = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v2/update-imp-task/${id}`,
        {},
        { headers }
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, important: !task.important } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id, title, desc, createdOn, deadline) => {
    setInputTaskCard("fixed");
    setEditTask({
      id: id,
      title: title,
      desc: desc,
      createdOn: createdOn,
      deadline: deadline,
    });
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v2/delete-task/${id}`,
        { headers }
      );
      alert(response.data.message);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB").replaceAll("/", "-"); // 21-05-2025
  };

  return (
    <div className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-900 h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {tasks?.map(
          ({ _id, title, desc, complete, important, deadline, createdOn }) => (
            <div
              key={_id}
              className="bg-neutral-700 rounded-sm p-4  border-1 border-neutral-600"
            >
              <div
                className={`${
                  deadline ? "bg-red-500" : " bg-blue-500"
                } mb-4 flex gap-2 p-1 rounded-sm font-semibold`}
              >
                <span className="font-bold">
                  {deadline ? "Deadline: " : "Created On: "}
                </span>
                <span>{formatDate(deadline ? deadline : createdOn)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col h-[30vh] gap-1">
                  <h1 className="font-bold text-lg">Title: {title}</h1>
                  <div className="text-gray-300">
                    <span className="font-bold">Description:</span>
                    <p className="text-wrap h-[20vh] mt-2 overflow-y-auto scrollbar-none">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4 mt-4">
                  <button
                    className={`${
                      complete
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-orange-500 hover:bg-orange-600"
                    } w-28 cursor-pointer text-sm md:text-xs xl:text-base font-bold rounded-sm px-2 py-1.5`}
                    onClick={() => handleCompleteTask(_id)}
                  >
                    {complete ? "Complete" : "In Complete"}
                  </button>
                  <button onClick={() => handleImportant(_id)}>
                    {important ? (
                      <FaHeart className="size-6 cursor-pointer text-red-400" />
                    ) : (
                      <FaRegHeart className="size-6 cursor-pointer" />
                    )}
                  </button>
                  {home === true && (
                    <button
                      onClick={() =>
                        editTask(_id, title, desc, createdOn, deadline)
                      }
                    >
                      <FaRegEdit className="size-6 cursor-pointer" />
                    </button>
                  )}
                  <button onClick={() => deleteTask(_id)}>
                    <MdDelete className="size-6 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {/* {home === true && (
        <button
          onClick={() => setInputTaskCard("fixed")}
          className="bg-neutral-700 text-gray-300 h-[15.5rem] md:h-[17rem] flex gap-2 p-4 justify-center text-xl hover:transition hover:scale-105 items-center font-semibold rounded-sm cursor-pointer border-1 border-neutral-600"
        >
          <MdAssignmentAdd className="size-8" />
          Add Task
        </button>
      )} */}
    </div>
  );
};

export default Cards;
