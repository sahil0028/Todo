import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./slice/todoSlice";

// export default configureStore to create the store in redux toolkit.
// reducer is used to add the slice of the store.

export default configureStore({
  reducer: {
    todo: todoReducers
  }
})

/**
 * Configures and returns the Redux store for the application.
 * The store is created using the `createStore` function from the Redux library,
 * and is configured with the root reducer and any middleware.
 * @returns {Object} The configured Redux store.
 */



