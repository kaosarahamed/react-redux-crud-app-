import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Assits/Style.css";
import { deleteUsers, getAllUsers } from "../fetaures/actions/UserAction";

function Home() {
  const { getUserisLoading, users, getUsererror } = useSelector(
    (state) => state.getAlluserReducer
  );
  const { deleteMessage, deleteUserError } = useSelector(
    (state) => state.deleteuserReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
    dispatch(getAllUsers());
  };
  return (
    <div className="booksList">
      {getUsererror && (
        <h3
          style={{
            backgroundColor: "red",
          }}
        >
          {getUsererror}
        </h3>
      )}
      {deleteMessage && (
        <h3
          style={{
            backgroundColor: deleteMessage ? "#300048" : "red",
          }}
        >
          {deleteMessage ? deleteMessage : deleteUserError}
        </h3>
      )}
      {getUserisLoading && (
        <h3
          style={{
            backgroundColor: "#300048",
          }}
        >
          Loading...
        </h3>
      )}
      <h2>Redux User Crud App</h2>
      <div className="bookListContainer">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                const { _id, username, email } = user;
                return (
                  <tr key={_id}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>
                      <Link to="edit-book" state={{ _id, username, email }}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(_id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
