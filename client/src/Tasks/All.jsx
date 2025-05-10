import React, { useState } from "react";
import Cards from "../components/Cards";
import { MdAssignmentAdd } from "react-icons/md";
import AddTaskData from "../components/AddTaskData";

const All = () => {
  const [InputTaskCard, setInputTaskCard] = useState("hidden");
  return (
    <>
      <div>
        <button onClick={() => setInputTaskCard("fixed") } className="bg-neutral-700 text-gray-300 flex p-2 mb-6 place-self-end cursor-pointer w-32 gap-2 items-center justify-center font-semibold rounded-sm border-1 border-neutral-600 hover:transition hover:scale-105">
          <MdAssignmentAdd className="size-6" />
          Add Task
        </button>
        <Cards setInputTaskCard={setInputTaskCard} home={true} />
      </div>
      <AddTaskData InputTaskCard={InputTaskCard} setInputTaskCard = {setInputTaskCard} />
    </>
  );
};

export default All;
