import React, { useState } from "react";
import { TiUser } from "react-icons/ti";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    navigate("/");
  }
  const [Data, setData] = useState({ username: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (Data.username === "" || Data.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://task-managementbackend.vercel.app/api/v1/sign-in",
          Data
        );
        setData({ username: "", password: "" });
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        dispatch(authActions.login());
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-[95vh] w-full">
      <div className="flex flex-col text-center w-full md:w-80 xl:w-1/3 bg-neutral-700 p-6 rounded-sm">
        <div className="font-bold text-xl mb-6">Sign In</div>
        <div className="flex items-center border-2 border-neutral-400 py-1 rounded-sm my-2">
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
          Sign In
        </button>
        <div className="mt-5 text-neutral-400">
          Don't have an account
          <Link
            to="/sign-up"
            className="underline pl-2 cursor-pointer text-blue-300 hover:text-blue-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
