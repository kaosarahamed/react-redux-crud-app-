import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_USERS_REQUEST,
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

// Get User Intial States
const getUserintialState = {
  getUserisLoading: false,
  users: [],
  getUsererror: null,
};

// Delete User Intial States
const deleteUserintialState = {
  deleteUserisLoading: false,
  deleteMessage: "",
  deleteUserError: null,
};

// Edit User Intial States
const editUserintialState = {
  editUserisLoading: false,
  editMessage: "",
  editUserError: null,
};

// Add User Intial States
const addUserintialState = {
  addUserisLoading: false,
  users: [],
  addUsererror: null,
};

// Get User Reducer
const getAlluserReducer = (state = getUserintialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        getUserisLoading: true,
      };
    case GET_USERS_SUCESS:
      return {
        getUserisLoading: false,
        users: action.payload,
        getUsererror: null,
      };
    case GET_USERS_FAILD:
      return {
        getUserisLoading: true,
        users: [],
        getUsererror: action.payload,
      };
    default:
      return state;
  }
};

// Delete User Reducer
const deleteuserReducer = (state = deleteUserintialState, action) => {
  switch (action.type) {
    case DELETE_USERS_REQUEST:
      return {
        ...state,
        deleteUserisLoading: true,
      };
    case DELETE_USERS_SUCESS:
      return {
        deleteUserisLoading: false,
        deleteMessage: action.payload,
        deleteUserError: null,
      };
    case DELETE_USERS_FAILD:
      return {
        isLoading: true,
        deleteMessage: "",
        deleteUserError: action.payload,
      };
    default:
      return state;
  }
};

// Edit User Reducer
const edituserReducer = (state = editUserintialState, action) => {
  switch (action.type) {
    case EDIT_USERS_REQUEST:
      return {
        ...state,
        editUserisLoading: true,
      };
    case EDIT_USERS_SUCESS:
      return {
        editUserisLoading: false,
        editMessage: action.payload,
        editUserError: null,
      };
    case EDIT_USERS_FAILD:
      return {
        editUserisLoading: true,
        editMessage: "",
        editUserError: action.payload,
      };
    default:
      return state;
  }
};

// Add User Reducer
const adduserReducer = (state = addUserintialState, action) => {
  switch (action.type) {
    case ADD_USERS_REQUEST:
      return {
        ...state,
        addUserisLoading: true,
      };
    case EDIT_USERS_SUCESS:
      return {
        addUserisLoading: true,
        user: action.payload,
        addUsererror: null,
      };
    case EDIT_USERS_FAILD:
      return {
        addUserisLoading: false,
        user: "",
        addUsererror: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getAlluserReducer,
  deleteuserReducer,
  edituserReducer,
  adduserReducer,
});
export default rootReducer;
