import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { use } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { aynccurrentuser } from "./store/actions/userAction.jsx";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aynccurrentuser());
  }, []);

  return <div className="bg-gray-900 text-white h-screen px-10">
    <Navbar />
    <MainRoutes />
  </div>;
};

export default App;
