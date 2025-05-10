import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Completed from "./Tasks/Completed";
import Important from "./Tasks/Important";
import Incompleted from "./Tasks/Incompleted";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import All from "./Tasks/All";

const App = () => {
  return (
    <div className="py-2 px-4 bg-neutral-900 h-screen text-white">
      <BrowserRouter>
        {/* Main Layout */}
        <div className="flex overflow-hidden space-x-6 mt-4 relative">
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route index element={<All />} />
              <Route path="completedTask" element={<Completed />} />
              <Route path="importantTask" element={<Important />} />
              <Route path="incompltedTask" element={<Incompleted />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
