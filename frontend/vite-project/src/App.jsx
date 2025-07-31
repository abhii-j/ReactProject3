import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return <div className="bg-gray-900 text-white h-screen px-10">
    <Navbar />
    <MainRoutes />
  </div>;
};

export default App;
