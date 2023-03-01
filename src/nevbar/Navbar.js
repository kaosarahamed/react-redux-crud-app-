import React from "react";
import { Link } from "react-router-dom";
import "../Assits/Style.css";

function Navbar() {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/add-books">Add New User</Link>
    </div>
  );
}

export default Navbar;
