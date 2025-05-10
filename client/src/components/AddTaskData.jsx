import React from "react";

const AddTaskData = ({InputTaskCard, setInputTaskCard}) => {
  return (
    <>
      <div className={`${InputTaskCard} bg-neutral-600 top-0 left-0 opacity-40 h-screen w-full`}></div>
      <div className={`${InputTaskCard} top-0 left-0 flex justify-center items-center h-screen w-full`}>
        <div className="bg-neutral-800 rounded-lg space-y-2 w-auto h-auto p-4 lg:p-8">
          <div className="font-bold">
            Title
            <input
              className="border-2 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="font-bold">
            Created On
            <input
              className="border-2 text-neutral-400 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              type="date"
              // id="manual-date"
              // value={manualDate}
              // onChange={handleDateChange}
            />
          </div>
          <div className="font-bold">
            Deadline
            <input
              className="border-2 text-neutral-400 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              type="date"
              // id="manual-date"
              // value={manualDate}
              // onChange={handleDateChange}
            />
          </div>
          <div className="font-bold">
            Description
            <textarea
              className="border-2 border-neutral-600 rounded-lg font-medium mt-2 focus:outline-none w-full p-2"
              name="Description"
              placeholder="Write the Description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-700 p-2 cursor-pointer text-sm lg:text-lg hover:bg-blue-800 rounded-lg font-bold w-32">
              Add Task
            </button>
            <button onClick={() => setInputTaskCard("hidden")} className="bg-gray-500 text-sm lg:text-lg p-2 cursor-pointer hover:bg-gray-600 rounded-lg font-bold w-32">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskData;
