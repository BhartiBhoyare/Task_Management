import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { MdAssignmentAdd } from "react-icons/md";
import AddTaskData from "../components/AddTaskData";
import axios from "axios";

const All = () => {
  const [InputTaskCard, setInputTaskCard] = useState("hidden");
  const [Data, setData] = useState();
  const [change , setchange] = useState(false);
  const [EditTask, setEditTask] = useState({
    id: "",
    title: "",
    desc: "",
    createdOn: "",
    deadline: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://task-managementbackend.vercel.app/api/v2/get-all-tasks",
        {
          headers,
        }
      );
      setData(response.data.data.tasks);
    };
    fetch();
  }, [change]);

  return (
    <>
      <div>
        <button
          onClick={() => setInputTaskCard("fixed")}
          className="bg-neutral-700 text-gray-300 flex p-2 mb-6 place-self-end cursor-pointer w-32 gap-2 items-center justify-center font-semibold rounded-sm border-1 border-neutral-600 hover:transition hover:scale-105"
        >
          <MdAssignmentAdd className="size-6" />
          Add Task
        </button>
        {Data && (
          <Cards
            setInputTaskCard={setInputTaskCard}
            home={true}
            data={Data}
            setdata={setData}
            setEditTask={setEditTask}
          />
        )}
      </div>
      <AddTaskData
        InputTaskCard={InputTaskCard}
        setInputTaskCard={setInputTaskCard}
        setchange={setchange}
        EditTask={EditTask}
        setEditTask={setEditTask}
      />
    </>
  );
};

export default All;
