import axios from "axios";
import React, { useState, useEffect } from "react";

const AddTaskData = ({
  InputTaskCard,
  setInputTaskCard,
  EditTask,
  setEditTask,
  setchange,
}) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const UpdateTask = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("Title and Description are Required");
    } else {
      const response = await axios.put(
        `http://localhost:8000/api/v2/update-task/${EditTask.id}`,
        Data,
        {
          headers,
        }
      );

      setEditTask({
        id: "",
        title: "",
        desc: "",
        deadline: "",
      });

      setData({ title: "", desc: "", deadline: "" });
      alert(response.data.message);
      setInputTaskCard("hidden");
      setchange((change) => !change);
    }
  };

  const [Data, setData] = useState({
    title: "",
    desc: "",
    deadline: "",
  });

  useEffect(() => {
    if (EditTask) {
      const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };
      setData({
        title: EditTask.title || "",
        desc: EditTask.desc || "",
        deadline: formatDate(EditTask.deadline),
      });
    }
  }, [EditTask]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const addTask = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("Title and Description are Required");
    } else {
      const response = await axios.post(
        "http://localhost:8000/api/v2/create-task",
        Data,
        {
          headers,
        }
      );
      alert(response.data.message);
      setData({ title: "", desc: "", deadline: "" });
      setInputTaskCard("hidden");
      setchange((change) => !change);
    }
  };
  return (
    <>
      <div
        className={`${InputTaskCard} bg-neutral-700 z-50 top-0 left-0 opacity-70 h-screen w-full`}
      ></div>
      <div
        className={`${InputTaskCard} top-0 left-0 z-50 flex justify-center items-center h-screen w-full`}
      >
        <div className="bg-neutral-800 rounded-lg space-y-2 w-auto h-auto p-4 lg:p-8">
          <div className="font-bold">
            Title
            <input
              className="border-2 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              type="text"
              placeholder="Title"
              name="title"
              value={Data.title}
              onChange={change}
            />
          </div>
          <div className="font-bold">
            Deadline
            <input
              className="border-2 text-neutral-400 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              placeholder="dd-mm-yyyy"
              type="date"
              name="deadline"
              value={Data.deadline}
              onChange={change}
            />
          </div>
          <div className="font-bold">
            Description
            <textarea
              className="border-2 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-900 w-full p-2"
              placeholder="Write the Description"
              name="desc"
              value={Data.desc}
              onChange={change}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-between mt-6">
            {EditTask.id === "" ? (
              <button
                className="bg-blue-700 p-2 cursor-pointer text-sm lg:text-lg hover:bg-blue-800 rounded-lg font-bold w-32"
                onClick={addTask}
              >
                Add Task
              </button>
            ) : (
              <button
                className="bg-blue-700 p-2 cursor-pointer text-sm lg:text-lg hover:bg-blue-800 rounded-lg font-bold w-32"
                onClick={UpdateTask}
              >
                Update Task
              </button>
            )}
            <button
              onClick={() => {
                setInputTaskCard("hidden");
                setData({
                  title: "",
                  desc: "",
                  deadline: "",
                });
                setEditTask({
                  id: "",
                  title: "",
                  desc: "",
                  deadline: "",
                });
              }}
              className="bg-gray-500 text-sm lg:text-lg p-2 cursor-pointer hover:bg-gray-600 rounded-lg font-bold w-32"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskData;
