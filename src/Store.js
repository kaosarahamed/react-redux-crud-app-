import rootReducer from "./fetaures/reducers/UserReducrs";

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
