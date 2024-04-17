import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
      state.isUser = true;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
