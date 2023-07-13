import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApiInstance from "../../../utils/axiosApiInstance";

const { apiInstance } = axiosApiInstance();

const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", (userId) => {
  return apiInstance.get(`/users/${userId}`).then((res) => {
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
