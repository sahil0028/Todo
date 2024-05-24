import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./slice/todoSlice";

// export default configureStore to create the store in redux toolkit.
// reducer is used to add the slice of the store.

export default configureStore({
  reducer: {
    todo: todoReducers
  }
})




