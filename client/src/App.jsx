import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Completed from "./Tasks/Completed";
import Important from "./Tasks/Important";
import Incompleted from "./Tasks/Incompleted";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import All from "./Tasks/All";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      dispatch(authActions.login());
    } else if (!isLoggedIn) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <div className="py-2 px-4 bg-neutral-900 h-screen text-white">
      {/* Main Layout */}
      <div className="flex overflow-hidden space-x-6 mt-4 relative">
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<All />} />
            <Route path="completedTask" element={<Completed />} />
            <Route path="importantTask" element={<Important />} />
            <Route path="incompltedTask" element={<Incompleted />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
