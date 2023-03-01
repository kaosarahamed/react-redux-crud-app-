import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../nevbar/Navbar";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Home from "../pages/Home";
function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-books" element={<AddUser />} />
        <Route path="/edit-book" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
