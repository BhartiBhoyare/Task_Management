import React from "react";
import { TiUser } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col text-center w-full md:w-80 xl:w-1/3 bg-neutral-700 p-6 rounded-sm">
        <div className="font-bold text-xl mb-6">Sign In</div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2">
          <TiUser className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none px-1"
            type="text"
            placeholder="Username"
            name="Username"
          />
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <IoIosLock className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none px-1"
            type="text"
            placeholder="Password"
            name="Password"
          />
        </div>
        <button className="bg-blue-500 text-base font-bold cursor-pointer mt-4 p-1 hover:bg-blue-600 rounded-sm">
          Sign In
        </button>
        <div className="mt-5 text-neutral-400">
          Don't have an account
          <Link to="/signup" className="underline pl-2 cursor-pointer text-blue-300 hover:text-blue-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
