import React from "react";
import AllFilm from "./components/AllFilm/AllFilm";
import MainApp from "./pages/MainApp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/فیلیموتور" element={<AllFilm />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/ورود" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
