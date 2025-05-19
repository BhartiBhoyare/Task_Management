import React, { useState } from "react";
import { TiUser } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    navigate("/");
  }
  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (Data.username === "" || Data.email === "" || Data.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:8000/api/v1/sign-up",
          Data
        );
        setData({ username: "", email: "", password: "" });
        alert(response.data.message);
        history("/sign-in");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-[95vh] w-full">
      <div className="flex flex-col text-center w-full md:w-80 lg:w-96 bg-neutral-700 p-6 rounded-sm">
        <div className="font-bold text-xl">Sign Up</div>
        <div className="mb-6 text-sm mt-1 text-neutral-400">
          Sign Up to continue
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <TiUser className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none w-full px-1"
            type="username"
            placeholder="Username"
            name="username"
            value={Data.username}
            onChange={change}
          />
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <MdEmail className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none w-full px-1"
            type="email"
            placeholder="Email Id"
            name="email"
            value={Data.email}
            required
            onChange={change}
          />
        </div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2 ">
          <IoIosLock className="text-neutral-400 size-6 pl-1" />
          <input
            className="focus:outline-none w-full px-1"
            type="password"
            placeholder="Password"
            name="password"
            value={Data.password}
            onChange={change}
          />
        </div>
        <button
          className="bg-blue-500 text-base font-bold cursor-pointer mt-4 p-1 hover:bg-blue-600 rounded-sm"
          onClick={submit}
        >
          Sign Up
        </button>
        <div className="mt-5 text-neutral-400">
          Already have an account
          <Link
            to="/sign-in"
            className="underline pl-2 cursor-pointer text-blue-300 hover:text-blue-400"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
