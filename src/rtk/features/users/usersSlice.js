import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApiInstance from "../../../utils/axiosApiInstance";
const { apiInstance } = axiosApiInstance();

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return apiInstance.get("/users").then((res) => {
    return res.data;
  });
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
