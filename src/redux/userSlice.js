import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (username) => {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    const repos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const followers = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );
    return { user: user.data, repos: repos.data, followers: followers.data };
  }
);

const initialState = {
  isUser: false,
  user: [],
  repos: [],
  repoDetailId: "",
  status: "repoList",
  followers: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getRepo(state, action) {
      state.repoDetailId = action.payload;
      state.status = "repoDetail";
    },
    showrRpos(state) {
      state.status = "repoList";
    },
    showFollower(state) {
      state.status = "followers";
    },
    setLoader(state) {
      state.isLoading = true;
    },
    showSeach(state) {
      state.isUser = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        toast.success("Successfully fetched");
        state.user = action.payload.user;
        state.repos = action.payload.repos;
        state.followers = action.payload.followers;
        state.isUser = true;
        state.status = "repoList";
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        toast.error("Oops Something wrong! Try again");
      });
  },
});

export const { getRepo, showFollower, showrRpos, setLoader, showSeach } =
  userSlice.actions;

export default userSlice.reducer;
