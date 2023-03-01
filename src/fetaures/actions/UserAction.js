import axios from "axios";
import {
  ADD_USERS_FAILD,
  ADD_USERS_REQUEST,
  ADD_USERS_SUCESS,
  DELETE_USERS_FAILD,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCESS,
  EDIT_USERS_FAILD,
  EDIT_USERS_REQUEST,
  EDIT_USERS_SUCESS,
  GET_USERS_FAILD,
  GET_USERS_REQUEST,
  GET_USERS_SUCESS,
} from "../constants/UserConstants";

// Get All User Api Request
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const res = await axios.get("https://node-app-0cjt.onrender.com/user");
    dispatch({ type: GET_USERS_SUCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILD, payload: error.message });
  }
};

// Add User Api Request
export const addUsers = (user) => async (dispatch) => {
  dispatch({ type: ADD_USERS_REQUEST });
  try {
    const res = await axios.post(
      "https://node-app-0cjt.onrender.com/user",
      user
    );
    dispatch({ type: ADD_USERS_SUCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_USERS_FAILD, payload: error.message });
  }
};

// Delete User Api Request
export const deleteUsers = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USERS_REQUEST });
  try {
    const res = await axios.delete(
      `https://node-app-0cjt.onrender.com/user/${id}`
    );
    dispatch({ type: DELETE_USERS_SUCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: DELETE_USERS_FAILD, payload: error.res.data.message });
  }
};

// Edit User Api Request
export const editUsers = (id, user) => async (dispatch) => {
  dispatch({ type: EDIT_USERS_REQUEST });
  try {
    const res = await axios.patch(
      `https://node-app-0cjt.onrender.com/user/${id}`,
      user
    );
    dispatch({ type: EDIT_USERS_SUCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: EDIT_USERS_FAILD, payload: error.res.data.message });
  }
};
