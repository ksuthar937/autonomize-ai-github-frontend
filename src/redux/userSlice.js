import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  selectedFollower: "",
  followers_repos: [],
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.repos = action.payload.repos;
        state.followers = action.payload.followers;
        state.isUser = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        // handle error state if needed
      });
  },
});

export const { getRepo, showFollower, showrRpos } = userSlice.actions;

export default userSlice.reducer;
