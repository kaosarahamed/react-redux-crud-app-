import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../Assits/Style.css";
import { editUsers, getAllUsers } from "../fetaures/actions/UserAction";
function EditBooks() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { _id, username, email } = user;
  const navigate = useNavigate();
  useEffect(() => {
    setUser(location.state);
  }, [location]);
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUsers(_id, user));
    dispatch(getAllUsers());
    navigate("/");
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="editFormSection">
      <h2>Add to list your book Info</h2>
      <div className="editFormcontainer">
        <form onSubmit={handleEdit} className="Form">
          <div className="inputs">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                onValueChange(e);
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
              value={email}
              onChange={(e) => {
                onValueChange(e);
              }}
              name="email"
              id="email"
              placeholder="Enter you book email"
            />
          </div>
          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditBooks;
