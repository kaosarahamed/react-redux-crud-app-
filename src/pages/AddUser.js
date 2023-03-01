import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Assits/Style.css";
import { addUsers, getAllUsers } from "../fetaures/actions/UserAction";
function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUsers(user));
    dispatch(getAllUsers());
    navigate("/");
  };

  const onChangeHandeler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="addFormSection">
      <h2>Add to list your book Info</h2>
      <div className="addFormcontainer">
        <form onSubmit={handleSubmit} className="Form">
          <div className="inputs">
            <label htmlFor="">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => {
                onChangeHandeler(e);
              }}
              name="username"
              id="username"
              placeholder="Enter you book username"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Email</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => {
                onChangeHandeler(e);
              }}
              name="email"
              id="email"
              placeholder="Enter you book email"
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
