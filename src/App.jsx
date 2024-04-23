import React from "react";
import Share from "./components/Share/Share";
import AllFilm from "./components/AllFilm/AllFilm";
import MainApp from "./pages/MainApp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/فیلیموتور" element={<AllFilm />} />
        <Route path="/ورود" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/اشتراک" element={<Share />} />
      </Routes>
    </>
  );
}
