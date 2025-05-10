import React from "react";
import { TiUser } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col text-center w-full md:w-80 lg:w-96 bg-neutral-700 p-6 rounded-sm">
        <div className="font-bold text-xl">Sign Up</div>
        <div className="mb-6 text-sm mt-1 text-neutral-400">
          Sign Up to continue
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <TiUser className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none px-1"
            type="text"
            placeholder="Username"
            name="Username"
          />
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <MdEmail className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none px-1"
            type="text"
            placeholder="Email Id"
            name="abc@gmail.com"
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
          Sign Up
        </button>
        <div className="mt-5 text-neutral-400">
          Already have an account
          <Link to="/signin" className="underline pl-2 cursor-pointer text-blue-300 hover:text-blue-400">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
