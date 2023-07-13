import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});

export default store;
